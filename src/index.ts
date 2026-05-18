/// <reference types="@cloudflare/workers-types" />

interface Env {
  ASSETS: Fetcher;
  EMAIL: SendEmail;
}

const CORS_HEADERS: Record<string, string> = {
  'Access-Control-Allow-Origin': 'https://allinforsport.org',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

const SECURITY_HEADERS: Record<string, string> = {
  'X-Frame-Options': 'DENY',
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
};

const CSP = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://static.cloudflareinsights.com",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: https:",
  "font-src 'self'",
  "connect-src 'self' https://cloudflareinsights.com",
  "frame-src 'none'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
].join('; ');

function applyHeaders(response: Response): Response {
  const headers = new Headers(response.headers);
  for (const [k, v] of Object.entries(SECURITY_HEADERS)) {
    headers.set(k, v);
  }
  headers.set('Content-Security-Policy', CSP);
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

async function handleContact(request: Request, env: Env): Promise<Response> {
  if (request.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: CORS_HEADERS });
  }

  if (request.method !== 'POST') {
    return Response.json(
      { error: 'Method not allowed' },
      { status: 405, headers: CORS_HEADERS }
    );
  }

  try {
    const body = (await request.json()) as {
      name?: string;
      email?: string;
      message?: string;
    };
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return Response.json(
        { error: 'Name, email, and message are required' },
        { status: 400, headers: CORS_HEADERS }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return Response.json(
        { error: 'Invalid email address' },
        { status: 400, headers: CORS_HEADERS }
      );
    }

    const sanitize = (s: string) => s.replace(/<[^>]*>/g, '').trim();
    const safeName = sanitize(name).slice(0, 200);
    const safeEmail = sanitize(email).slice(0, 254);
    const safeMessage = sanitize(message).slice(0, 5000);

    await env.EMAIL.send({
      from: 'submissions@hosting.allinforsport.org',
      to: 'contact@allinforsport.org',
      replyTo: safeEmail,
      subject: `Contact form: ${safeName}`,
      html: `<h2>New contact form submission</h2>
<p><strong>Name:</strong> ${safeName}</p>
<p><strong>Email:</strong> ${safeEmail}</p>
<p><strong>Message:</strong></p>
<p>${safeMessage.replace(/\n/g, '<br>')}</p>`,
      text: `New contact form submission\n\nName: ${safeName}\nEmail: ${safeEmail}\n\nMessage:\n${safeMessage}`,
    });

    return Response.json(
      { success: true, message: 'Message sent! Our team will be in touch shortly.' },
      { headers: CORS_HEADERS }
    );
  } catch (e) {
    console.error('Contact form error:', e);
    return Response.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500, headers: CORS_HEADERS }
    );
  }
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === '/api/contact') {
      return handleContact(request, env);
    }

    const response = await env.ASSETS.fetch(request);
    return applyHeaders(response);
  },
} satisfies ExportedHandler<Env>;

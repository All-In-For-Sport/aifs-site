import { notFound } from "next/navigation";
import { useMDXComponent } from "next-contentlayer2/hooks";

import { allPosts, Post } from "@/.contentlayer/generated";
import { ExampleMDXComponent } from "../ExampleMDXComponent";

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const post = allPosts.find((post) => {
    return post.slug.includes(slug);
  });
  if (!post) return notFound();

  return <PostContent post={post} />;
}

function PostContent({ post }: { post: Post }) {
  const MDXContent = useMDXComponent(post.body.code);

  return (
    <div className="m-auto max-w-6xl px-6">
      <article>
        <section className="py-8">
          <h1 className="font-header text-5xl font-extrabold md:text-6xl lg:text-7xl">
            {post.title}
          </h1>
          <p>{post.date}</p>
        </section>
        <div className="prose prose-neutral prose-invert">
          <MDXContent components={{ ExampleMDXComponent }} />
        </div>
      </article>
    </div>
  );
}

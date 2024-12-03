export function getFeatures() {
  const BLOG = process.env.NEXT_PUBLIC_FEATURE_BLOG === "true";
  return { BLOG };
}

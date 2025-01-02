import { Post } from "@/.contentlayer/generated";
import Image from "next/image";

export async function FeaturedImage({ post }: { post: Post }) {
  const image = await import(`@/updates/images/${post.featuredImage}`);
  return (
    <Image
      className="w-full"
      src={image}
      alt={post.featuredImageAltText || "featured image for article"}
    />
  );
}

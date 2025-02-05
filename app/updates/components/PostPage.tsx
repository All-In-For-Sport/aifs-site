import Image from "next-export-optimize-images/image";
import { format } from "date-fns";

import { Post } from "@/.contentlayer/generated";
import { EnsAvatar } from "./EnsAvatar";
import Contact from "@/app/shared/Contact";
import { MDXContent } from "./MDXContent";
import { Tag } from "@/app/shared/Tag";
import { AuthorName } from "./AuthorName";
import { DateBadge } from "./DateBadge";

export async function PostPage({ post }: { post: Post }) {
  if (!post.author && !post.authorEns)
    throw new Error(
      `post with title "${post.title}" has no author name or ENS address`,
    );

  return (
    <>
      <div className="page-section-padding mx-auto max-w-4xl px-4 sm:px-6">
        <article className="grid gap-8">
          {post.featuredImageData && (
            <Image
              src={post.featuredImageData.path}
              width={post.featuredImageData.width}
              height={post.featuredImageData.height}
              alt={post.featuredImageAltText || "featured image for post"}
              className="w-full"
            />
          )}
          <section className="flex flex-col items-start gap-6 py-5">
            <h1 className="font-header text-4xl font-extrabold sm:text-5xl md:text-6xl lg:text-7xl">
              {post.title}
            </h1>
            <section className="flex flex-col gap-4">
              <div className="flex gap-4">
                {post.authorEns ? (
                  <EnsAvatar authorEns={post.authorEns} />
                ) : (
                  <AuthorName>{post.author}</AuthorName>
                )}
              </div>
              <DateBadge>{`${format(post.date, "LLLL")} ${format(post.date, "d")} ${format(post.date, "y")}`}</DateBadge>
            </section>
          </section>
          <div className="prose prose-xl prose-neutral prose-invert">
            <MDXContent mdx={post.body.code} />
          </div>
        </article>
      </div>
      <Contact />
    </>
  );
}

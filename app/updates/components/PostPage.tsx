import Image from "next-export-optimize-images/image";
import { useMDXComponent } from "next-contentlayer2/hooks";
import { format, previousDay } from "date-fns";

import { Post } from "@/.contentlayer/generated";
import { EnsAvatar } from "./EnsAvatar";
import Contact from "@/app/shared/Contact";
import { getEnsAvatar } from "@/app/services/Ens";
import { MDXContent } from "./MDXContent";

export async function PostPage({ post }: { post: Post }) {
  return (
    <>
      <div className="m-auto max-w-4xl px-4 py-4 sm:mx-4">
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
          <section className="grid gap-4 py-5">
            <p>{format(post.date, "PP")}</p>
            <h1 className="font-header text-5xl font-extrabold md:text-6xl lg:text-7xl">
              {post.title}
            </h1>
            <section className="flex gap-4">
              {post.authorEns ? (
                <EnsAvatar authorEns={post.authorEns} />
              ) : (
                <figure>{post.author}</figure>
              )}
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

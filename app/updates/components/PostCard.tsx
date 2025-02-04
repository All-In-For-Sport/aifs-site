import Image from "next-export-optimize-images/image";
import Link from "next/link";

import { CategoryBadge } from "./CategoryBadge";
import { EnsAvatar } from "./EnsAvatar";

import fallbackImage from "@/app/opengraph-image.jpg";
import { Post } from "@/.contentlayer/generated";
import { getEnsAvatar } from "@/app/services/Ens";
import { MDXContent } from "./MDXContent";

export async function PostCard({ post }: { post: Post }) {
  const avatar = post.authorEns ? await getEnsAvatar(post.authorEns) : null;

  return (
    <article className="group relative flex max-w-96 flex-col gap-6 rounded-3xl bg-[#141414] p-4 md:max-w-[45%]">
      <Link className="absolute left-0 top-0 z-10 size-full" href={post.path} />
      {post.featuredImageData ? (
        <Image
          src={post.featuredImageData.path}
          width={post.featuredImageData.width}
          height={post.featuredImageData.height}
          alt={post.featuredImageAltText || "featured image for post"}
          className="w-full"
        />
      ) : (
        <Image
          src={fallbackImage}
          alt="arial view of basketball court"
          className="w-full"
        />
      )}
      <div className="relative grid gap-4">
        <div>
          <CategoryBadge>{post.category}</CategoryBadge>
        </div>
        <div>
          <h2 className="font-header text-2xl font-bold group-hover:underline">
            {post.title}
          </h2>
        </div>
        <section className="flex gap-2">
          {post.authorEns ? (
            <>
              {avatar && (
                <figure className="relative size-6 overflow-clip rounded-full">
                  <EnsAvatar avatar={avatar} />
                </figure>
              )}
              <span>{post.authorEns}</span>
            </>
          ) : (
            <figure>{post.author}</figure>
          )}
        </section>
        <div className="max-h-36 overflow-clip leading-7 text-white/50">
          <MDXContent mdx={post.body.code} />
        </div>
        <div className="absolute bottom-0 h-24 w-full bg-gradient-to-b from-[#14141400] to-[#141414] to-90%" />
      </div>
    </article>
  );
}

import Image from "next-export-optimize-images/image";
import { useMDXComponent } from "next-contentlayer2/hooks";
import Link from "next/link";

import { PostTypeBadge } from "./PostTypeBadge";

import { Post } from "@/.contentlayer/generated";
import fallbackImage from "@/app/opengraph-image.jpg";
import { EnsAvatar } from "./EnsAvatar";

export function PostCard({ post }: { post: Post }) {
  const MDXContent = useMDXComponent(post.body.code);

  return (
    <Link className="group flex max-w-96 md:max-w-[45%]" href={post.slug}>
      <article className="flex flex-col gap-6 rounded-3xl bg-[#141414] p-4">
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
            <PostTypeBadge>{post.postType}</PostTypeBadge>
          </div>
          <div>
            <h2 className="font-header text-2xl font-bold group-hover:underline">
              {post.title}
            </h2>
          </div>
          <section className="flex gap-2">
            {post.authorEns ? (
              <>
                {post.authorEnsAvatar && (
                  <figure className="relative size-6 overflow-clip rounded-full">
                    <EnsAvatar ens={post.authorEns} />
                  </figure>
                )}
                <span>{post.authorEns}</span>
              </>
            ) : (
              <figure>{post.author}</figure>
            )}
          </section>
          <p className="max-h-36 overflow-hidden leading-7 text-white/50">
            <MDXContent />
          </p>
          <div className="absolute bottom-0 h-24 w-full bg-gradient-to-b from-[#14141400] to-[#141414] to-90%" />
          {/* <div className="mt-8">
          <ButtonLink href={post.slug} variant="secondary">
            Read more
          </ButtonLink>
        </div> */}
        </div>
      </article>
    </Link>
  );
}

"use client";
import Image from "next/image";

import { Post } from "@/.contentlayer/generated";
import { format } from "date-fns";
import { Avatar, getEnsAvatar } from "@/app/services/Ens";
import { useMDXComponent } from "next-contentlayer2/hooks";
import { useEffect, useState } from "react";

export function PostPage({ post }: { post: Post }) {
  const [avatar, setAvatar] = useState<Avatar | null>(null);

  useEffect(() => {
    if (!post.authorEns) return;
    getEnsAvatar(post.authorEns)
      .then((res) => {
        if (res) setAvatar(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [post]);

  const MDXContent = useMDXComponent(post.body.code);

  return (
    <div className="m-auto max-w-4xl px-6 py-4">
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
              <>
                <figure className="relative size-6 overflow-clip rounded-full">
                  {avatar ? (
                    <Image
                      className="size-full"
                      src={avatar.src}
                      fill
                      alt={`avatar for ${avatar.ens}`}
                      unoptimized
                    />
                  ) : (
                    <div className="size-full bg-neutral-400 opacity-50" />
                  )}
                </figure>
                <span>{post.authorEns}</span>
              </>
            ) : (
              <figure>{post.author}</figure>
            )}
          </section>
        </section>
        <div className="prose prose-xl prose-neutral prose-invert">
          <MDXContent />
        </div>
      </article>
    </div>
  );
}

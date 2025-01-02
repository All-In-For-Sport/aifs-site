import Image from "next/image";

import { ButtonLink } from "../../shared/Button";

import { Post } from "@/.contentlayer/generated";
import { FeaturedImage } from "./FeaturedImage";

import fallbackImage from "@/app/opengraph-image.jpg";

export function PostCard({ post }: { post: Post }) {
  return (
    <div className="flex w-full flex-col rounded-3xl border-2 border-gray-700 p-6 transition duration-300 ease-out hover:scale-[1.01]">
      <div className="relative overflow-hidden rounded-2xl sm:h-[300px]">
        {post.featuredImage ? (
          <FeaturedImage post={post} />
        ) : (
          <Image
            src={fallbackImage}
            alt="arial view of basketball court"
            className="w-full"
          />
        )}
      </div>
      <div className="flex flex-1 flex-col items-center justify-between pt-8 text-center md:px-8">
        <div>
          <h5 className="font-header text-2xl font-bold">{post.title}</h5>
          <p className="mt-3 text-sm text-white/50">some excerpt</p>
        </div>
        <div className="mt-8">
          <ButtonLink href={post.slug} variant="secondary">
            Read more
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}

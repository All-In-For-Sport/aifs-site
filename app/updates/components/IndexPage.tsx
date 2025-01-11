"use client";
import { getUnixTime } from "date-fns";

import { TagNavigation } from "./TagNavigation";
import { PostCard } from "./PostCard";

import { allPosts, Post } from "@/.contentlayer/generated";
import { useSearchParams } from "next/navigation";

export function IndexPage() {
  const params = useSearchParams();

  const postTypeParam = params.get("type");

  const { filteredPosts, tags } = allPosts.reduce<{
    filteredPosts: Array<Post>;
    tags: Array<string>;
  }>(
    (acc, post) => {
      if (post.isPublished && !postTypeParam) acc.filteredPosts.push(post);
      if (postTypeParam && post.postType === postTypeParam)
        acc.filteredPosts.push(post);
      if (post.postType && !acc.tags.includes(post.postType))
        acc.tags.push(post.postType);
      return acc;
    },
    { filteredPosts: [], tags: [] },
  );

  return (
    <section className="m-auto flex max-w-4xl flex-col items-center gap-12 px-6 py-12">
      <h1 className="font-header text-4xl font-bold md:text-5xl">Updates</h1>
      <TagNavigation tags={tags} />
      <div className="flex w-full max-w-4xl grid-cols-1 flex-wrap justify-center gap-8">
        {filteredPosts
          .sort((a, b) => getUnixTime(b.date) - getUnixTime(a.date))
          .map((post) => (
            <PostCard key={`post_${post.slug}`} post={post} />
          ))}
      </div>
    </section>
  );
}

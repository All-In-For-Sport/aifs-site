"use client";
import { getUnixTime } from "date-fns";

import { TagNavigation } from "./TagNavigation";
import { PostCard } from "./PostCard";

import { allPosts } from "@/.contentlayer/generated";
import { useSearchParams } from "next/navigation";

export function IndexPage() {
  const params = useSearchParams();

  const postTypeParam = params.get("type");

  const filteredPosts = allPosts.filter((post) => {
    if (post.isPublished && !postTypeParam) return true;
    if (postTypeParam && post.postType === postTypeParam) return true;
    return false;
  });

  return (
    <section className="m-auto flex max-w-4xl flex-col items-center gap-12 px-6 py-12">
      <h1 className="font-header text-4xl font-bold md:text-5xl">Updates</h1>
      <TagNavigation />
      <div className="flex w-full max-w-2xl flex-col items-start justify-start gap-8">
        {filteredPosts
          .sort((a, b) => getUnixTime(b.date) - getUnixTime(a.date))
          .map((post) => (
            <PostCard key={`post_${post.slug}`} post={post} />
          ))}
      </div>
    </section>
  );
}

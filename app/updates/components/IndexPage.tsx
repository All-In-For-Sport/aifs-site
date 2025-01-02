"use client";

import { allPosts } from "@/.contentlayer/generated";
import { TagNavigation } from "./TagNavigation";
import { getUnixTime } from "date-fns";
import { PostCard } from "./PostCard";
import { useParams } from "next/navigation";

export function IndexPage() {
  const params = useParams();

  const posts = allPosts.filter((post) => {
    if (post.isPublished && !params.postType) return true;
    if (params.postType && post.postType === params.postType) return true;
    return false;
  });

  return (
    <section className="m-auto flex max-w-4xl flex-col items-center gap-12 px-6 py-12">
      <h1 className="font-header text-4xl font-bold md:text-5xl">Updates</h1>
      <TagNavigation />
      <div className="flex w-full max-w-2xl flex-col items-start justify-start gap-8">
        {posts
          .sort((a, b) => getUnixTime(b.date) - getUnixTime(a.date))
          .map((post) => (
            <PostCard key={`post_${post.slug}`} post={post} />
          ))}
      </div>
    </section>
  );
}

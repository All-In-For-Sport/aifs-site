import { Metadata } from "next";
import { getUnixTime } from "date-fns";
import Link from "next/link";

import { allPosts, Post } from "@/.contentlayer/generated";
import { TagNavigation } from "./components/TagNavigation";

export const metadata: Metadata = {
  title: "Updates | All in for Sport",
  description: "A funding platform for community-led sports projects.",
};

export default async function UpdatesIndexPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string }>;
}) {
  const { type } = await searchParams;
  const posts = allPosts.filter((post) => {
    if (post.isPublished && !type) return true;
    if (type && post.postType === type) return true;
    return false;
  });

  return (
    <section className="m-auto flex max-w-4xl flex-col gap-12 px-6 py-12">
      <h1 className="font-header text-6xl font-bold lg:text-5xl">Updates</h1>
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

async function PostCard({ post }: { post: Post }) {
  return (
    <article className="flex flex-col items-start justify-start gap-4">
      <Link href={post.slug} className="prose prose-invert">
        <h2 className="text-4xl">{post.title}</h2>
      </Link>
      <section>{post.author}</section>
      <section>
        <span
          key={`post-tag-${post.postType}`}
          className="rounded-full border border-neutral-400 px-3 py-1 text-sm font-bold text-neutral-300"
        >
          {post.postType}
        </span>
      </section>
    </article>
  );
}

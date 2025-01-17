import { getUnixTime } from "date-fns";

import { FilterNavigation } from "./FilterNavigation";
import { PostCard } from "./PostCard";
import { Post } from "@/.contentlayer/generated";
import { getCategories } from "../util";

export function IndexPage({ posts }: { posts: Array<Post> }) {
  const categories = getCategories();

  return (
    <section className="m-auto flex max-w-4xl flex-col items-center gap-12 px-6 py-12">
      <h1 className="font-header text-4xl font-bold md:text-5xl">Updates</h1>
      <FilterNavigation categories={categories} />
      <div className="flex w-full max-w-4xl grid-cols-1 flex-wrap justify-center gap-8">
        {posts
          .sort((a, b) => getUnixTime(b.date) - getUnixTime(a.date))
          .map((post) => (
            <PostCard key={`post_${post.slug}`} post={post} />
          ))}
      </div>
    </section>
  );
}

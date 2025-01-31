import { getUnixTime } from "date-fns";

import { FilterNavigation } from "./FilterNavigation";
import { PostCard } from "./PostCard";
import { Post } from "@/.contentlayer/generated";
import { getCategories } from "../util";
import Contact from "@/app/shared/Contact";

export function IndexPage({ posts }: { posts: Array<Post> }) {
  const categories = getCategories();

  return (
    <>
      <section className="m-auto flex max-w-4xl flex-col items-center gap-12 px-4 py-12 sm:px-6">
        <h1 className="font-header text-5xl font-bold md:text-6xl">Updates</h1>
        <FilterNavigation categories={categories} />
        <div className="flex w-full max-w-4xl flex-wrap justify-center gap-8">
          {posts
            .sort((a, b) => getUnixTime(b.date) - getUnixTime(a.date))
            .map((post) => (
              <PostCard key={`post_${post.slug}`} post={post} />
            ))}
        </div>
      </section>
      <Contact />
    </>
  );
}

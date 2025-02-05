import { getUnixTime } from "date-fns";

import { FilterNavigation } from "./FilterNavigation";
import { PostCard } from "./PostCard";
import { Post } from "@/.contentlayer/generated";
import { getCategories } from "../util";
import Contact from "@/app/shared/Contact";
import { PostCardGrid } from "./PostCardGrid";

export function IndexPage({ posts }: { posts: Array<Post> }) {
  const categories = getCategories();

  return (
    <>
      <section className="page-section-padding m-auto flex flex-col items-center gap-12">
        <h1 className="font-header text-5xl font-bold md:text-6xl">Updates</h1>
        <FilterNavigation categories={categories} />
        <PostCardGrid>
          {posts
            .sort((a, b) => getUnixTime(b.date) - getUnixTime(a.date))
            .map((post) => (
              <PostCard key={`post_${post.slug}`} post={post} />
            ))}
        </PostCardGrid>
      </section>
      <Contact />
    </>
  );
}

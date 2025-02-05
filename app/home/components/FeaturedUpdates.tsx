import { allPosts } from "@/.contentlayer/generated";
import { PostCard } from "@/app/updates/components/PostCard";
import { PostCardGrid } from "@/app/updates/components/PostCardGrid";

export default function FeaturedUpdates() {
  return (
    <section className="flex flex-col items-center gap-12 py-24">
      <h2 className="font-header text-4xl font-bold md:text-5xl">Updates</h2>
      <PostCardGrid>
        {allPosts
          .filter((post) => post.isFeatured)
          .slice(0, 2)
          .map((post) => (
            <PostCard key={post.title} post={post} />
          ))}
      </PostCardGrid>
    </section>
  );
}

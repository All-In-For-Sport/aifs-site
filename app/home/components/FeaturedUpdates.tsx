import { allPosts } from "@/.contentlayer/generated";
import { PostCard } from "@/app/updates/components/PostCard";

export default function FeaturedUpdates() {
  return (
    <section className="flex flex-col items-center gap-12 py-24 text-center">
      <h2 className="font-header text-4xl font-bold md:text-5xl">Updates</h2>
      <div className="flex flex-col gap-8 lg:flex-row">
        {allPosts
          .filter((post) => post.isFeatured)
          .slice(0, 2)
          .map((post) => (
            <PostCard key={post.title} post={post} />
          ))}
      </div>
    </section>
  );
}

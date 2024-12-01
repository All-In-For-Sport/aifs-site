import { Metadata } from "next";
import { allPosts, Post } from "@/.contentlayer/generated";
import Link from "next/link";
import { TagNavigation } from "./components/TagNavigation";

export const metadata: Metadata = {
  title: "Updates | All in for Sport",
  description: "A funding platform for community-led sports projects.",
};

export default async function UpdatesIndexPage({
  searchParams,
}: {
  searchParams: Promise<{ tag?: string }>;
}) {
  const { tag } = await searchParams;
  const posts = allPosts.filter((post) => {
    if (post.isPublished && !tag) return true;
    if (tag && post.tags.includes(tag)) return true;
    return false;
  });

  return (
    <section className="flex flex-col items-center gap-12 py-12 text-center">
      <h2 className="font-header text-4xl font-bold md:text-5xl">Updates</h2>
      <TagNavigation />
      <div className="flex flex-col items-start gap-8">
        {posts.map((post, i) => (
          <div key={`post_${i}`}>
            <Link
              href={post.slug}
              className="prose prose-invert opacity-80 transition-opacity hover:opacity-100"
            >
              <h2 className="">{post.title}</h2>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

import { notFound } from "next/navigation";

import { getFeatures } from "@/app/features/getFeatures";
import { IndexPage } from "../components/IndexPage";
import { getCategories } from "../util";

import { allPosts } from "@/.contentlayer/generated";

export async function generateStaticParams() {
  const categories = getCategories().map((category) => ({
    category,
  }));

  return categories;
}

export default async function FilteredIndexPage({
  params: { category },
}: {
  params: { category: string };
}) {
  if (!getFeatures().BLOG) return notFound();

  return (
    <IndexPage
      posts={allPosts.filter(
        (post) => post.isPublished && post.categoryPlural === category,
      )}
    />
  );
}

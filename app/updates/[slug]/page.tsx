import { notFound } from "next/navigation";

import { Metadata, ResolvingMetadata } from "next";

import { allPosts, Post } from "@/.contentlayer/generated";
import { PostPage } from "../components/PostPage";

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post._raw.flattenedPath,
  }));
}

export async function generateMetadata(
  {
    params,
  }: {
    params: { slug: string };
  },
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const post = allPosts.find((post) => post.slug.includes(params.slug));
  const parentResolved = await parent;

  if (!post) return {};

  const previousImages = parentResolved.openGraph?.images || [];

  return {
    title: post.title,
    description: post.metaDescription || "All in for Sport",
    openGraph: {
      description: post.metaDescription,
      images: [
        post.featuredImage && post.featuredImageData.path,
        ...previousImages,
      ],
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const post = allPosts.find((post) => {
    return post.slug.includes(slug);
  });
  if (!post) return notFound();

  return <PostContent post={post} />;
}

function PostContent({ post }: { post: Post }) {
  return <PostPage post={post} />;
}

import { notFound } from "next/navigation";
import Image from "next/image";
import { useMDXComponent } from "next-contentlayer2/hooks";

import { allPosts, Post } from "@/.contentlayer/generated";
import { ExampleMDXComponent } from "../ExampleMDXComponent";
import { format } from "date-fns";
import { Avatar, getEnsAvatar } from "@/app/services/Ens";
import { EnsDisplay } from "../components/AuthorDisplay";

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const post = allPosts.find((post) => {
    return post.slug.includes(slug);
  });
  if (!post) return notFound();
  const avatar = post.authorEns
    ? await getEnsAvatar(post.authorEns)
    : undefined;

  return <PostContent post={post} avatar={avatar} />;
}

function PostContent({ post, avatar }: { post: Post; avatar?: Avatar }) {
  const MDXContent = useMDXComponent(post.body.code);

  return (
    <div className="m-auto max-w-4xl px-6 py-4">
      <article className="grid gap-8">
        {post.featuredImage && <FeaturedImage post={post} />}
        <section className="grid gap-4 py-5">
          <p>{format(post.date, "PP")}</p>
          <h1 className="font-header text-5xl font-extrabold md:text-6xl lg:text-7xl">
            {post.title}
          </h1>
          <section className="flex gap-4">
            {avatar ? (
              <EnsDisplay avatar={avatar} />
            ) : (
              <figure>{post.author}</figure>
            )}
          </section>
        </section>
        <div className="prose prose-xl prose-neutral prose-invert">
          <MDXContent components={{ ExampleMDXComponent }} />
        </div>
      </article>
    </div>
  );
}

async function FeaturedImage({ post }: { post: Post }) {
  const image = await import(`@/updates/images/${post.featuredImage}`);
  return (
    <Image
      className="w-full"
      src={image}
      alt={post.featuredImageAltText || "featured image for article"}
    />
  );
}

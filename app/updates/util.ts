import { allPosts } from "@/.contentlayer/generated";

export function getCategories() {
  return allPosts.reduce<Array<string>>((acc, post) => {
    if (post.isPublished && !acc.includes(post.categoryPlural))
      acc.push(post.categoryPlural);
    return acc;
  }, []);
}

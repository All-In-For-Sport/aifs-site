import { allPosts } from "@/.contentlayer/generated";

export function getCategories() {
  return allPosts.reduce<Array<string>>((acc, post) => {
    if (!acc.includes(post.categoryPlural)) acc.push(post.categoryPlural);
    return acc;
  }, []);
}

import { defineDocumentType, makeSource } from "contentlayer2/source-files";

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    author: { type: "string", required: true },
    isPublished: { type: "boolean", required: true },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (post) => `/blog/${post._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({ contentDirPath: "posts", documentTypes: [Post] });

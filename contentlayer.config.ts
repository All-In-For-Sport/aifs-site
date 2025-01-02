import { defineDocumentType, makeSource } from "contentlayer2/source-files";

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    metaDescription: { type: "string", required: false },
    date: { type: "date", required: true },
    author: { type: "string", required: true },
    authorEns: { type: "string", required: false },
    isPublished: { type: "boolean", required: true },
    isFeatured: { type: "boolean", required: false },
    group: { type: "string", required: false },
    postType: { type: "string", required: false },
    featuredImage: { type: "string", required: false },
    featuredImageAltText: { type: "string", required: false },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (post) => `/updates/${post._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({ contentDirPath: "updates", documentTypes: [Post] });

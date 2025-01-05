import {
  defineDocumentType,
  defineNestedType,
  makeSource,
} from "contentlayer2/source-files";
import sizeOf from "image-size";

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
    featuredImageData: {
      type: "nested",
      of: FeaturedImageData,
      required: false,
      resolve: (post) => {
        if (!post.featuredImage) return undefined;
        const path = `/updates/${post.featuredImage}`;
        const { width, height } = getImageSize("./public" + path);
        return { path, width, height };
      },
    },
  },
}));

const FeaturedImageData = defineNestedType(() => ({
  name: "featuredImageData",
  fields: {
    path: {
      type: "string",
      required: true,
    },
    width: {
      type: "string",
      required: true,
    },
    height: {
      type: "string",
      required: true,
    },
  },
}));

function getImageSize(path: string) {
  try {
    return sizeOf(path);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}

export default makeSource({ contentDirPath: "updates", documentTypes: [Post] });

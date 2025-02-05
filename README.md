# All in for Sport Website

This is a NextJS static export site. Images are optimised at build time with [next-export-optimise-images](https://www.npmjs.com/package/next-export-optimize-images) and blog posts are written in markdown and managed using [contentlayer](https://contentlayer.dev/).

## Frontmatter

| field                  | mandatory | type      | info                                                                                                          |
| ---------------------- | --------- | --------- | ------------------------------------------------------------------------------------------------------------- |
| `title`                | yes       | `string`  | Post title                                                                                                    |
| `date`                 | yes       | `date`    | Post published date in `YYYY-MM-DD` format                                                                    |
| `isPublished`          | yes       | `boolean` | Whether to include post when site is built                                                                    |
| `category`             | yes       | `string`  | Post category eg. `event`                                                                                     |
| `categoryPlural`       | yes       | `string`  | Plural version of the post category eg. `events`                                                              |
| `isFeatured`           | no        | `boolean` | Whether to include post under _updates_ section on homepage                                                   |
| `author`               | no        | `string`  | Post author's name                                                                                            |
| `authorEns`            | no        | `string`  | Post author's ens address                                                                                     |
| `featuredImage`        | no        | `string`  | Filename of the featured image for a post                                                                     |
| `featuredImageAltText` | no        | `string`  | [alt text](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/alt) for a post's featured image |
| `metaDescription`      | no        | `string`  | Meta description for a post displayed when sharing a post on social media                                     |

## Post Categories

The categories posts on the `/updates` page can be filtered by are derived from the category and categoryPlural fields attached to each post.

For each unique category found an individual index page is generated nested under `/updates` and the category is added to the filter navigation bar.

## Featured Posts

The site homepage will display the 2 most recently publised posts that have an `isFeatured` field set to `true` under the _updates_ heading.

## Featured Images

To add a featured image for a post add the image file to the `/public/updates/` folder and the filename to the post's frontmatter as `featuredImage`.

Featured images are not required to publish a post. If no featured image is attached to a post a fallback image will be used on the index pages and if the post is featured on the homepage.

## ENS Avatars

Both `author` and `authorEns` frontmatter fields are optional but site will fail to build if neither are present.

Priority is given to `authorEns` so if both are present the author's ENS address will be rendered rather than the author's name. If the ENS address has an avatar attached this will be displayed alongside the address.

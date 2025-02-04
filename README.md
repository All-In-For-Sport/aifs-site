# All in for Sport Website

This is a NextJS static export site. Images are optimised at build time with [next-export-optimise-images](https://www.npmjs.com/package/next-export-optimize-images) and blog posts are written in markdown and managed using [contentlayer](https://contentlayer.dev/).

## Frontmatter

| field                  | mandatory | type      | info                                                                                                          |
| ---------------------- | --------- | --------- | ------------------------------------------------------------------------------------------------------------- |
| `title`                | yes       | `string`  | Post title                                                                                                    |
| `date`                 | yes       | `date`    | Post published date in `2021-12-03` format                                                                    |
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

- derived from categories attached to posts
- seperate index pages for each category generated

## Featured Posts

The site homepage will display the 2 most recently publised posts that have an `isFeatured` field set to `true` under the _updates_ heading.

## Featured Images

- add image file to `/public/updates/`
- fallback image will be used on updates index page if there is no featured image attached to a post

## ENS Avatars

Both `author` and `authorEns` frontmatter fields are optional but site will fail to build if neither are present.

Priority is given to `authorEns` so if both are present the author's ENS address will be rendered rather than the author's name. If the ENS address has an avatar attached this will be displayed alongside the address.

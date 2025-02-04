# All in for Sport Website

Overview eg. NextJS static site, images optimised at build time with PLUGIN_LINK, contentlayer for managing posts

1. [Frontmatter](#frontmatter)
2. [Post Categories](#post-categories)
3. [Featured images](#featured-images)
4. [ENS Avatars](#ens-avatars)

## Frontmatter

| field             | mandatory | type    | info                                   |
| ----------------- | --------- | ------- | -------------------------------------- |
| `title`           | yes       | string  |                                        |
| `date`            | yes       | date    | in `2021-12-03` format                 |
| `author`          | no        | string  | author's name                          |
| `authorEns`       | no        | string  | author's ens address                   |
| `authorEnsAvatar` | no        | boolean | whether there is an avatar attached to |

## Post Categories

- derived from categories attached to posts
- seperate index pages for each category generated

## Featured Images

- add image file to `/public/updates/`
- fallback image will be used on updates index page if there is no featured image attached to a post

## ENS Avatars

Both `author` and `authorEns` frontmatter fields are optional but site will fail to build if neither are present.

`authorEns` takes priority so if both are present the author's ens name will be rendered rather than the author's name

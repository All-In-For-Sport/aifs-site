# All in for Sport Website

- homepage featured updates
- publishing a post
- frontmatter

## Publishing Posts

1. Create an `MDX` file in `/updates`

2. Add necessary [frontmatter](# Post Frontmatter)

post mdx documents are kept in `/updates`

filenames should be `snake-case` and will be used in a posts unique URL eg. a post with a filename of `example-post.mdx` and a catagory of `event` will have a url of `allinforsport.org/updates/events/example-post`

## Post Frontmatter

| field             | mandatory | type    | info                                   |
| ----------------- | --------- | ------- | -------------------------------------- |
| `title`           | yes       | string  |                                        |
| `date`            | yes       | date    | in `2021-12-03` format                 |
| `author`          | no        | string  | author's name                          |
| `authorEns`       | no        | string  | author's ens address                   |
| `authorEnsAvatar` | no        | boolean | whether there is an avatar attached to |

    metaDescription: { type: "string", required: false },

    date: { type: "date", required: true },
    author: { type: "string", required: true },
    authorEns: { type: "string", required: false },
    authorEnsAvatar: { type: "boolean", required: false },
    isPublished: { type: "boolean", required: true },
    isFeatured: { type: "boolean", required: false },
    group: { type: "string", required: false },
    category: { type: "string", required: true },
    categoryPlural: { type: "string", required: true },
    featuredImage: { type: "string", required: false },
    featuredImageAltText: { type: "string", required: false },

title: Building DAOs as Scalable Networks
author: Rowan Yeoman
authorEns: yeoro.eth
authorEnsAvatar: true
category: article
categoryPlural: articles
date: 2021-12-03
isPublished: true
isFeatured: true

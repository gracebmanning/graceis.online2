import { groq } from "next-sanity";

// get all blog posts
export const postsQuery = groq`*[_type == "blogPost"]{
    _id,
    _createdAt,
    title,
    slug,
    publishedAt,
    _updatedAt,
    tags[]->{
      title,
      slug
    },
    thumbnail {
        alt,
        asset->{
            url,
            metadata {
                dimensions {
                    width,
                    height
                }
            }
        }
    },
    body
}`;

// get a single post by its slug
export const postQuery = groq`*[_type == "blogPost" && slug.current == $slug][0]{
    _id,
    _createdAt,
    title,
    slug,
    publishedAt,
    _updatedAt,
    tags[]->{
      title,
      slug
    },
    thumbnail {
        alt,
        asset->{
            url,
            metadata {
                dimensions {
                    width,
                    height
                }
            }
        }
    },
    body[]{
        ...,
        _type == "image" => {
            ...,
            asset->{
                "_ref": _id,
                url,
                metadata {
                    dimensions {
                        width,
                        height
                    }
                }
            }
        }
    }
}`;

// get all tags
export const blogTagsQuery = groq`*[_type == "blogTag"]{
    _id,
    title,
    slug,
    description
}`;

export const postsQuery_sitemap = groq`*[_type == "blogPost"] {
  "slug": slug.current,
  "date": _updatedAt
}`;

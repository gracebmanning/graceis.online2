// get all blog posts
export const postsQuery = `*[_type == "blogPost"]{
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
    body
}`;

// get a single post by its slug
export const postQuery = `*[_type == "blogPost" && slug.current == $slug][0]{
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
    body
}`;

// get all tags
export const tagsQuery = `*[_type == "blogTag"]{
    _id,
    title,
    slug,
    description
}`;

import { groq } from "next-sanity";

export const projectsQuery = groq`*[_type == "project"]{
    _id,
    title,
    slug,
    description,
    date,
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
    tags[]->{
      title,
      slug
    },
    featured,
    ongoing,
}`;

// get a single project by its slug
export const projectQuery = groq`*[_type == "project" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    description,
    date,
    type,
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
    externalLink{
        linkURL,
        linkText
    },
    tags[]->{
      title,
      slug
    },
    featured,
    ongoing,
    body
}`;

// get all tags
export const projectTagsQuery = groq`*[_type == "projectTag"]{
    _id,
    title,
    slug,
    description
}`;

export const projectsQuery_sitemap = groq`*[_type == "project"]{
    "slug": slug.current,
    "date": _updatedAt
}`;

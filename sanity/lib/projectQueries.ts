// get all commercial projects
export const commercialProjectsQuery = `*[_type == "project" && type == "commercial"]{
    _id,
    title,
    slug,
    description,
    date,
    type,
    thumbnail {
        alt,
        asset->{
            url
        }
    },
    tags[]->{
      title,
      slug
    },
    featured,
    ongoing,
}`;

// get all personal projects
export const personalProjectsQuery = `*[_type == "project" && type == "personal"]{
    _id,
    title,
    slug,
    description,
    date,
    type,
    thumbnail {
        alt,
        asset->{
            url
        }
    },
    tags[]->{
      title,
      slug
    },
    featured,
    ongoing,
}`;

export const projectsQuery = `*[_type == "project"]{
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
export const projectQuery = `*[_type == "project" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    description,
    date,
    type,
    thumbnail {
        alt,
        asset->{
            url
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
export const tagsQuery = `*[_type == "projectTag"]{
    _id,
    title,
    slug,
    description
}`;

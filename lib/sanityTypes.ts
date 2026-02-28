// Portable Text (Block Content) Types
export interface Slug {
    current: string;
}

export interface Span {
    _type: string;
    text?: string;
}

export interface Block {
    _type: string;
    children?: Span[];
}

export interface Tag {
    _id: string;
    title: string;
    slug: Slug;
    description?: string;
}

export interface SanityImage {
    alt?: string;
    asset?: {
        url: string;
    };
}

export interface ExternalLink {
    linkURL?: string;
    linkText?: string;
}

export interface BlogPost {
    _id: string;
    _createdAt?: string;
    _updatedAt?: string;
    title: string;
    slug: Slug;
    publishedAt: string;
    tags?: Tag[];
    body?: Block[];
}

export interface Project {
    _id: string;
    title: string;
    slug: Slug;
    description?: string;
    date?: string;
    thumbnail?: SanityImage;
    externalLink?: ExternalLink;
    tags?: Tag[];
    featured?: boolean;
    ongoing?: boolean;
    body?: Block[];
}

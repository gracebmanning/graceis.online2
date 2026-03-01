import { PortableTextBlock } from "next-sanity";

export interface Slug {
    current: string;
}

export interface Span {
    _type: string;
    text?: string;
}

export type Block = PortableTextBlock;

export interface Tag {
    _id: string;
    title: string;
    slug: Slug;
    description?: string;
}

export interface SanityImage {
    alt?: string;
    asset?: {
        _ref: string;
        url: string;
        metadata: {
            dimensions: {
                width: number;
                height: number;
            };
        };
    };
}

export interface ImageBlock extends SanityImage {
    _type: "image";
    caption?: string;
}

export interface VideoBlock {
    _key: string;
    videoSource?: "url" | "cloudfront";
    videoURL?: string;
    videoFileName?: string;
    caption?: string;
}

export interface VideoRowBlock {
    _type: "videoRow";
    videos?: VideoBlock[];
}

export interface CodeBlock {
    _type: "code";
    code: string;
    language: string;
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

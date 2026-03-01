import type { MetadataRoute } from "next";
import { unstable_noStore } from "next/cache";
import { sanityFetch } from "@/sanity/lib/live";
import { SanityDocument } from "next-sanity";
import { projectsQuery_sitemap } from "@/sanity/lib/projectQueries";
import { postsQuery_sitemap } from "@/sanity/lib/blogQueries";
import { SITEMAP_ROUTES } from "@/lib/routes";

const baseUrl = "https://graceis.online";

async function getProjectUrls(): Promise<MetadataRoute.Sitemap> {
    const projectSlugs = await sanityFetch({
        query: projectsQuery_sitemap,
    });

    return projectSlugs.data.map((project: SanityDocument) => ({
        url: `${baseUrl}/projects/${project.slug}`,
        lastModified: new Date(project.date),
        priority: 0.8,
    }));
}

async function getBlogPostUrls(): Promise<MetadataRoute.Sitemap> {
    const postSlugs = await sanityFetch({
        query: postsQuery_sitemap,
    });

    return postSlugs.data.map((post: SanityDocument) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        priority: 0.8,
    }));
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    unstable_noStore();

    const projectUrls = await getProjectUrls();
    const blogPostUrls = await getBlogPostUrls();

    const staticUrls: MetadataRoute.Sitemap = SITEMAP_ROUTES.map((route) => ({
        url: `${baseUrl}/${route.href.slice(1)}`,
        priority: route.sitemapPriority,
        lastModified: new Date(),
    }));

    return [...staticUrls, ...projectUrls, ...blogPostUrls];
}

interface NavLink {
    name: string;
    href: string;
    target?: string;
    sitemapPriority?: number;
}

const PATHS = {
    home: { name: "home", href: "/", sitemapPriority: 1 },
    about: { name: "about", href: "/about", sitemapPriority: 0.7 },
    projects: { name: "projects", href: "/projects", sitemapPriority: 0.9 },
    blog: { name: "blog", href: "/blog", sitemapPriority: 0.9 },
    support: { name: "support my work", href: "/support", sitemapPriority: 0.5 },
    sources: { name: "image sources", href: "/sources", sitemapPriority: 0.5 },
    sitemap: { name: "sitemap", href: "/sitemap.xml", target: "_blank" },
    instagram: {
        name: "instagram",
        href: "https://www.instagram.com/graceis.online/",
        target: "_blank",
    },
    youtube: {
        name: "youtube",
        href: "https://www.youtube.com/@graceis.online",
        target: "_blank",
    },
};

export const MAIN_LINKS: NavLink[] = [{ ...PATHS.about }, { ...PATHS.projects }, { ...PATHS.blog }];

export const SOCIAL_LINKS: NavLink[] = [{ ...PATHS.instagram }, { ...PATHS.youtube }];

export const FOOTER_LINKS: NavLink[] = [
    { ...PATHS.support },
    { ...PATHS.sources },
    { ...PATHS.sitemap },
];

export const SITEMAP_ROUTES: NavLink[] = [
    { ...PATHS.home },
    { ...PATHS.about },
    { ...PATHS.projects },
    { ...PATHS.blog },
    { ...PATHS.support },
    { ...PATHS.sources },
];

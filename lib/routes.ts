interface NavLink {
    name: string;
    href: string;
    target?: string;
}

const PATHS = {
    home: { name: "home", href: "/" },
    about: { name: "about", href: "/about" },
    projects: { name: "projects", href: "/projects" },
    blog: { name: "blog", href: "/blog" },
    support: { name: "support", href: "/support" },
    sources: { name: "sources", href: "/sources" },
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

export const MAIN_LINKS: NavLink[] = [{ ...PATHS.projects }, { ...PATHS.about }, { ...PATHS.blog }];

export const SOCIAL_LINKS: NavLink[] = [{ ...PATHS.instagram }, { ...PATHS.youtube }];

export const FOOTER_LINKS: NavLink[] = [
    { ...PATHS.support },
    { ...PATHS.sources },
    { ...PATHS.sitemap },
];

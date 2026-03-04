import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "cdn.sanity.io",
                port: "",
                pathname: "/images/epu7bw5a/production/**",
            },
        ],
    },
    async redirects() {
        return [
            {
                source: "/ig",
                destination:
                    "https://graceis.online/?utm_source=instagram&utm_medium=social&utm_campaign=bio",
                permanent: false,
            },
            {
                source: "/igs",
                destination:
                    "https://graceis.online/?utm_source=instagram&utm_medium=social&utm_campaign=stories",
                permanent: false,
            },
            {
                source: "/yt",
                destination:
                    "https://graceis.online/?utm_source=youtube&utm_medium=video&utm_campaign=channel_bio",
                permanent: false,
            },
            {
                source: "/ytv",
                destination:
                    "https://graceis.online/?utm_source=youtube&utm_medium=video&utm_campaign=description",
                permanent: false,
            },
            {
                source: "/ytp",
                destination:
                    "https://graceis.online/?utm_source=youtube&utm_medium=video&utm_campaign=pinned_comment",
                permanent: false,
            },
            {
                source: "/li",
                destination:
                    "https://graceis.online/?utm_source=linkedin&utm_medium=social&utm_campaign=profile",
                permanent: false,
            },
            {
                source: "/in",
                destination:
                    "https://graceis.online/?utm_source=linkedin&utm_medium=social&utm_campaign=post",
                permanent: false,
            },
        ];
    },
};

export default nextConfig;

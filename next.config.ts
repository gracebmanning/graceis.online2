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
};

export default nextConfig;

"use client";
import { type JSX, type ReactNode, useState } from "react";
import { PortableText } from "next-sanity";
import CodeBlock from "./codeBlock";
import { CaptionedImage, VideoRow } from "./captionedAssets";
import { slugify } from "@/util/slugify";
import { FiLink, FiCheck } from "react-icons/fi";
import { type Block, type ImageBlock, type VideoRowBlock } from "@/lib/sanityTypes";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const extractTextFromChildren = (children: any): string => {
    if (typeof children === "string") return children;
    if (Array.isArray(children)) return children.map(extractTextFromChildren).join("");
    if (children && children.props && children.props.children) {
        return extractTextFromChildren(children.props.children);
    }
    return "";
};

export default function PortableTextComponent({ content }: { content: Block[] }) {
    const [copiedLink, setCopiedLink] = useState("");

    const handleCopyLink = (id: string) => {
        const url = `${window.location.origin}${window.location.pathname}#${id}`;
        navigator.clipboard
            .writeText(url)
            .then(() => {
                setCopiedLink(id);
                setTimeout(() => setCopiedLink(""), 2000);
            })
            .catch((err) => console.error("Failed to copy link: ", err));
    };

    const Heading = ({ level, children }: { level: number; children: React.ReactNode }) => {
        const text = extractTextFromChildren(children).trim();
        const id = slugify(text);
        const Tag = `h${level}` as keyof JSX.IntrinsicElements;

        return (
            <Tag id={id} className="group relative scroll-mt-32 flex items-center gap-2 mt-4 mb-1">
                <span className="font-body text-xl font-bold tech:text-tech-pink-300 whimsical:text-whim-green-700 classic:text-foreground">
                    {children}
                </span>
                <button
                    onClick={() => handleCopyLink(id)}
                    className="opacity-0 transition-opacity duration-300 group-hover:opacity-100 p-1 text-tech-gray-400 hover:text-foreground bg-transparent border-none cursor-pointer"
                    aria-label={`Copy link to ${text}`}
                >
                    {copiedLink === id ? <FiCheck /> : <FiLink />}
                </button>
            </Tag>
        );
    };

    const ptComponents = {
        types: {
            image: ({ value }: { value: ImageBlock }) => {
                if (!value?.asset?._ref) return null;
                return <CaptionedImage imageBlock={value} />;
            },
            videoRow: ({ value }: { value: VideoRowBlock }) => {
                const { videos } = value;
                if (!videos || videos.length === 0) return null;
                return <VideoRow videos={videos} />;
            },
            code: ({ value }: { value: { code: string; language: string } }) => {
                const { code, language } = value;
                return <CodeBlock code={code} language={language} />;
            },
        },
        block: {
            h1: ({ children }: { children?: ReactNode }) => <Heading level={1}>{children}</Heading>,
            h2: ({ children }: { children?: ReactNode }) => <Heading level={2}>{children}</Heading>,
            h3: ({ children }: { children?: ReactNode }) => <Heading level={3}>{children}</Heading>,
            h4: ({ children }: { children?: ReactNode }) => <Heading level={4}>{children}</Heading>,
            h5: ({ children }: { children?: ReactNode }) => <Heading level={5}>{children}</Heading>,
            h6: ({ children }: { children?: ReactNode }) => <Heading level={6}>{children}</Heading>,
            normal: ({ children }: { children?: ReactNode }) => (
                <p className="mb-4 classic:text-lg leading-relaxed">{children}</p>
            ),
        },
        list: {
            bullet: ({ children }: { children?: ReactNode }) => (
                <ul className="block list-disc my-1 pl-9">{children}</ul>
            ),
            number: ({ children }: { children?: ReactNode }) => (
                <ol className="block list-decimal my-1 pl-9">{children}</ol>
            ),
        },
        listItem: {
            bullet: ({ children }: { children?: ReactNode }) => (
                <li className="list-item">{children}</li>
            ),
            number: ({ children }: { children?: ReactNode }) => (
                <li className="list-item">{children}</li>
            ),
        },
        marks: {
            link: ({ children, value }: { children?: ReactNode; value?: { href: string } }) => {
                const rel = !value?.href.startsWith("/") ? "noreferrer noopener" : undefined;
                return (
                    <a
                        href={value?.href}
                        rel={rel}
                        target="_blank"
                        className="underline tech:text-tech-pink-700 whimsical:text-whim-green-800 classic:text-classic-blue hover:opacity-80"
                    >
                        {children}
                    </a>
                );
            },
            strong: ({ children }: { children?: ReactNode }) => (
                <strong className="font-bold">{children}</strong>
            ),
            em: ({ children }: { children?: ReactNode }) => <em className="italic">{children}</em>,
        },
    };

    return <PortableText value={content} components={ptComponents} />;
}

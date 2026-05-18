"use client";
import { type JSX, type ReactNode, useState } from "react";
import { PortableText } from "next-sanity";
import CodeBlock from "./codeBlock";
import { CaptionedImage, VideoRow } from "./captionedAssets";
import { slugify } from "@/util/slugify";
import { FiLink, FiCheck } from "react-icons/fi";
import { MdArrowOutward } from "react-icons/md";
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

const Heading = ({ level, children }: { level: number; children: React.ReactNode }) => {
    const [copiedLink, setCopiedLink] = useState("");
    const text = extractTextFromChildren(children).trim();
    const id = slugify(text);
    const Tag = `h${level}` as keyof JSX.IntrinsicElements;

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

    const levelStylesMap: Record<number, string> = {
        1: "text-3xl tech:text-tech-pink-300 whimsical:text-whim-green-800 classic:text-foreground",
        2: "text-2xl mt-4 tech:text-tech-pink-300 whimsical:text-whim-green-800 classic:text-foreground",
        3: "text-xl tech:text-tech-pink-300/85 whimsical:text-whim-green-700 classic:text-classic-gray-800",
        4: "text-lg tech:text-tech-pink-300 whimsical:text-whim-green-700 classic:text-classic-gray-800",
        5: "text-base tech:text-tech-pink-300 whimsical:text-whim-green-700 classic:text-classic-gray-800",
        6: "text-base tech:text-tech-pink-300 whimsical:text-whim-green-700 classic:text-classic-gray-800",
    };

    const borderBottomStyle =
        "w-full border-b tech:border-b-tech-pink-300 whimsical:border-b-whim-green-800 classic:border-b-foreground";

    return (
        <Tag
            id={id}
            className={`w-full group relative scroll-mt-32 flex items-center gap-2 mt-3 mb-1 ${level === 2 ? borderBottomStyle : ""}`}
        >
            <span className={`${levelStylesMap[level]} font-body font-bold`}>{children}</span>
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
            return (
                <div className="w-full max-w-3xl">
                    <CodeBlock code={code} language={language} />
                </div>
            );
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
            <p className="w-full mb-4 classic:text-lg leading-relaxed">{children}</p>
        ),
        blockquote: ({ children }: { children?: ReactNode }) => (
            <blockquote className="w-full block pl-4 py-3 border-l-4 border-l-tech-gray bg-tech-gray/5 whimsical:border-l-whim-green-600/90 whimsical:bg-whim-green-600/5 mb-2">
                {children}
            </blockquote>
        ),
    },
    list: {
        bullet: ({ children }: { children?: ReactNode }) => (
            <ul className="w-full block list-disc my-1 pl-9">{children}</ul>
        ),
        number: ({ children }: { children?: ReactNode }) => (
            <ol className="w-full block list-decimal my-1 pl-9">{children}</ol>
        ),
    },
    listItem: {
        bullet: ({ children }: { children?: ReactNode }) => (
            <li className="w-full list-item">{children}</li>
        ),
        number: ({ children }: { children?: ReactNode }) => (
            <li className="w-full list-item">{children}</li>
        ),
    },
    marks: {
        link: ({ children, value }: { children?: ReactNode; value?: { href: string } }) => {
            const external = !value?.href.startsWith("/");
            const rel = external ? "noreferrer noopener" : undefined;
            const target = external ? "_blank" : "_self";
            return (
                <a
                    href={value?.href}
                    rel={rel}
                    target={target}
                    className="w-fit bg-tech-gray/10 px-1 rounded underline inline-flex items-center gap-x-0.5 tech:text-tech-pink-700 whimsical:text-whim-green-800 classic:text-classic-blue hover:opacity-80"
                >
                    {children}
                    {external && <MdArrowOutward />}
                </a>
            );
        },
        strong: ({ children }: { children?: ReactNode }) => (
            <strong className="font-bold">{children}</strong>
        ),
        em: ({ children }: { children?: ReactNode }) => <em className="italic">{children}</em>,
        code: ({ children }: { children?: ReactNode }) => (
            <code className="w-fit bg-tech-gray/10 px-2 py-0.5 rounded text-base font-mono tech:text-blue-800 whimsical:text-whim-lavender-700 classic:text-classic-red">
                {children}
            </code>
        ),
    },
};

export default function PortableTextComponent({ content }: { content: Block[] }) {
    return <PortableText value={content} components={ptComponents} />;
}

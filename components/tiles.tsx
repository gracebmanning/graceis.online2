"use client";
import Link from "next/link";
import Image from "next/image";
import { formatISODate } from "@/util/formatISODate";
import { formatMoYrDate } from "@/util/formatMoYrDate";
import { Block, BlogPost, Project } from "@/lib/sanityTypes";
import Badge from "./badge";

const tileHoverColors =
    "tech:hover:bg-tech-pink-100/10 whimsical:hover:bg-whim-lavender-100/20 classic:hover:bg-classic-yellow/10";

function createPreview(body?: Block[], wordLimit = 50) {
    if (!body || !Array.isArray(body)) {
        return "This post has no content yet.";
    }

    // Extract all text from the blocks, ignoring images and other non-text types.
    const text = body
        // Find all blocks of type 'block' that have children
        .filter((block) => block._type === "block" && block.children)
        // For each block, join the text of its children (spans)
        .map((block) =>
            (block.children || [])
                .filter((child) => child._type === "span" && child.text)
                .map((span) => span.text)
                .join(""),
        )
        .join(" "); // Add a space between paragraphs

    // Split the combined text into words
    const words = text.split(/\s+/); // Split by any whitespace character

    // If the text is already shorter than the limit, return it as is
    if (words.length <= wordLimit) {
        return text;
    }

    // Otherwise, slice the array and add an ellipsis
    return words.slice(0, wordLimit).join(" ") + "...";
}

export function BlogTile({ post, onClick }: { post: BlogPost; onClick?: () => void }) {
    const href = `/blog/${post.slug.current}`;

    return (
        <Link
            href={href}
            onClick={onClick}
            className={`w-full flex flex-col gap-2 py-4 border-b border-b-foreground transition-colors ${tileHoverColors}`}
        >
            <div className="w-full flex flex-row justify-start items-center flex-wrap gap-2">
                {post.tags?.map((tag, index) => (
                    <Badge key={index} size={"small"} type={"blog"} text={tag.title} />
                ))}
            </div>

            <h2 className="font-bold tech:text-xl whimsical:lowercase whimsical:text-2xl classic:text-2xl">
                {post.title}
            </h2>
            <h3 className="whimsical:lowercase whimsical:text-lg">
                {formatISODate(post.publishedAt)}
            </h3>
            <p>{createPreview(post.body)}</p>
        </Link>
    );
}

export function ProjectTile({ project, onClick }: { project: Project; onClick?: () => void }) {
    const href = `/projects/${project.slug.current}`;

    return (
        <Link
            href={href}
            onClick={onClick}
            className={`w-full flex flex-row justify-start items-center gap-2 py-4 border-b border-b-foreground transition-colors ${tileHoverColors}`}
        >
            {project.thumbnail?.asset?.url && (
                <Image
                    src={project.thumbnail.asset.url}
                    alt={project.thumbnail.alt || project.title}
                    width={project.thumbnail.asset.metadata.dimensions.width}
                    height={project.thumbnail.asset.metadata.dimensions.height}
                    style={{ width: "350px", height: "auto" }}
                />
            )}
            <div className="flex flex-col justify-center items-start gap-1">
                <h3 className="font-bold tech:text-lg whimsical:lowercase whimsical:text-2xl classic:text-2xl">
                    {project.title}
                </h3>
                {project.date && <p>{formatMoYrDate(project.date)}</p>}
                <div className="w-full flex flex-row justify-start items-center flex-wrap gap-2">
                    {project.tags?.map((tag, index) => (
                        <Badge key={index} size={"small"} type={tag.title} text={tag.title} />
                    ))}
                    {project.featured && (
                        <Badge size={"small"} type={"featured"} text={"featured"} />
                    )}
                    {project.ongoing && <Badge size={"small"} type={"ongoing"} text={"ongoing"} />}
                </div>
                <p>{project.description}</p>
            </div>
        </Link>
    );
}

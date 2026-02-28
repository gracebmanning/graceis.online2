"use client";
import Link from "next/link";
import Image from "next/image";
import { formatISODate } from "@/util/formatISODate";
import { formatMoYrDate } from "@/util/formatMoYrDate";
import { Block, BlogPost, Project } from "@/lib/sanityTypes";
import Badge from "./badge";

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
        <div>
            <ul>
                {post.tags?.map((tag, index) => (
                    <li key={index}>{tag.title}</li>
                ))}
            </ul>

            <h2>{post.title}</h2>
            <h3>{formatISODate(post.publishedAt)}</h3>
            <p>{createPreview(post.body)}</p>

            <Link href={href} onClick={onClick}>
                read more
            </Link>
        </div>
    );
}

export function ProjectTile({ project, onClick }: { project: Project; onClick?: () => void }) {
    // Since "type" is removed, route directly to /projects/
    const href = `/projects/${project.slug.current}`;

    return (
        <Link href={href} onClick={onClick} style={{ display: "block" }}>
            {project.thumbnail?.asset?.url && (
                <Image
                    src={project.thumbnail.asset.url}
                    alt={project.thumbnail.alt || project.title}
                    width={project.thumbnail.asset.metadata.dimensions.width}
                    height={project.thumbnail.asset.metadata.dimensions.height}
                    style={{ width: "350px", height: "auto" }}
                />
            )}
            <div>
                <h3>{project.title.toLowerCase()}</h3>
                {project.date && <p>{formatMoYrDate(project.date)}</p>}
                <div>
                    {project.tags?.map((tag) => (
                        <Badge key={tag._id} size={"small"} type={tag.title} />
                    ))}
                    {project.featured && <Badge size={"small"} type={"featured"} />}
                    {project.ongoing && <Badge size={"small"} type={"ongoing"} />}
                </div>
                <p>{project.description}</p>
            </div>
        </Link>
    );
}

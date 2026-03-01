"use client";
import { type Project } from "@/lib/sanityTypes";
import { BackButton, BackToTopButton, ExternalLinkButton } from "./buttons";
import { formatMoYrDate } from "@/util/formatMoYrDate";
import Badge from "./badge";
import { useScrollRef } from "./scrollContext";
import PortableTextComponent from "./portableText";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import ScrollProgressBar from "./scrollProgressBar";

export function ProjectPage({ project }: { project: Project }) {
    const scrollRef = useScrollRef();

    const scrollToTop = () => {
        scrollRef.current?.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div className="relative">
            <div
                className={`sticky z-10 w-[calc(100%+2rem)] -mx-4 top-0 left-0 bg-background border-b flex flex-col justify-center items-start gap-1.5
                tech:border-b-tech-pink-200 whimsical:border-b-whim-green-500 classic:border-b-classic-red/70`}
            >
                <div className="flex flex-col justify-center items-start gap-1.5 px-4 pt-2">
                    <BackButton path="/projects" />
                    <h1 className="font-bold leading-6 tech:text-lg whimsical:text-2xl whimsical:lowercase classic:text-2xl">
                        {project.title}
                    </h1>
                    <div className="flex flex-col justify-center items-start md:flex-row md:justify-start md:items-center gap-x-2 md:gap-x-4">
                        {project.date && <p>{`published ${formatMoYrDate(project.date)}`}</p>}
                        {project.externalLink && (
                            <ExternalLinkButton externalLink={project.externalLink} />
                        )}
                    </div>
                    {project.tags && (
                        <ul className="flex flex-row flex-wrap justify-start items-center gap-2">
                            {project.tags.sort().map((tag, index) => (
                                <li key={index}>
                                    <Badge size={"small"} type={tag.title} text={tag.title} />
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                <ScrollProgressBar />
            </div>
            <div className="mt-6 text-foreground max-w-5xl">
                {project.thumbnail?.asset?.url && (
                    <Image
                        src={urlFor(project.thumbnail).url()}
                        alt={project.thumbnail.alt || project.title}
                        width={project.thumbnail.asset.metadata.dimensions.width}
                        height={project.thumbnail.asset.metadata.dimensions.height}
                        className="w-full h-auto mb-6"
                    />
                )}
                {project.body ? (
                    <PortableTextComponent content={project.body} />
                ) : (
                    "No content available."
                )}
            </div>
            <div className="fixed bottom-8 right-8">
                <BackToTopButton onClick={scrollToTop} />
            </div>
        </div>
    );
}

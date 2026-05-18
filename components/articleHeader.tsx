// "use client";
import { useState, useEffect } from "react";
import { formatISODate } from "@/util/formatISODate";
import { formatMoYrDate } from "@/util/formatMoYrDate";
import Badge from "./badge";
import ScrollProgressBar from "./scrollProgressBar";
import { BackButton, ExternalLinkButton } from "./buttons";
import { type BlogPost, type Project } from "@/lib/sanityTypes";

// article._type is either "project" or "blogPost"
export function ArticleHeader({ article }: { article: BlogPost | Project }) {
    const [isMobile, setIsMobile] = useState(false);
    const [isExpanded, setIsExpanded] = useState(true);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    return (
        <div
            className={`sticky z-10 w-[calc(100%+2rem)] -mx-4 top-0 left-0 bg-background border-b flex flex-col justify-center items-start gap-1.5
                tech:border-b-tech-pink-200 whimsical:border-b-whim-green-500 classic:border-b-classic-red/70`}
        >
            <div className="w-full flex flex-col items-center pt-2 px-4">
                <div className="w-full max-w-4xl flex flex-col justify-center items-start gap-1.5">
                    <BackButton path={`${article._type === "project" ? "/projects" : "/blog"}`} />
                    <div className="w-full flex flex-row justify-between items-start">
                        <h1 className="font-bold leading-6 tech:text-lg whimsical:text-2xl whimsical:lowercase classic:text-2xl">
                            {article.title}
                        </h1>
                        {isMobile && (
                            <button
                                onClick={() => setIsExpanded(!isExpanded)}
                                className="w-fit ml-2 text-sm hover:cursor-pointer whitespace-nowrap underline tech:text-tech-pink-700 whimsical:text-whim-green-800 classic:text-classic-blue hover:opacity-80"
                            >
                                {isExpanded ? "- Hide details" : "+ Show details"}
                            </button>
                        )}
                    </div>
                    {(!isMobile || isExpanded) && (
                        <>
                            {article._type === "blogPost" && (
                                <div className="flex flex-row justify-start items-center gap-x-2 md:gap-x-4 flex-wrap">
                                    <p>{`published ${formatISODate(article.publishedAt)}`}</p>
                                    {article._updatedAt && (
                                        <>
                                            <span>{"//"}</span>
                                            <p>{`last updated ${formatISODate(article._updatedAt)}`}</p>
                                        </>
                                    )}
                                </div>
                            )}
                            {article._type === "project" && (
                                <div className="flex flex-col justify-center items-start md:flex-row md:justify-start md:items-center gap-x-2 md:gap-x-4">
                                    {article.date && (
                                        <p>{`published ${formatMoYrDate(article.date)}`}</p>
                                    )}
                                    {article.externalLink && (
                                        <ExternalLinkButton externalLink={article.externalLink} />
                                    )}
                                </div>
                            )}
                            {article.tags && (
                                <ul className="flex flex-row flex-wrap justify-start items-center gap-2">
                                    {article.tags.sort().map((tag, index) => (
                                        <li key={index}>
                                            <Badge
                                                size={"small"}
                                                type={`${article._type === "project" ? tag.title : "blog"}`}
                                                text={tag.title}
                                            />
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </>
                    )}
                </div>
            </div>
            <ScrollProgressBar />
        </div>
    );
}

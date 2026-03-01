"use client";
import { useEffect, useState } from "react";
import { type BlogPost } from "@/lib/sanityTypes";
import { BackButton, BackToTopButton } from "./buttons";
import { formatISODate } from "@/util/formatISODate";
import Badge from "./badge";
import { useScrollRef } from "./scrollContext";
import PortableTextComponent from "./portableText";

export function PostPage({ post }: { post: BlogPost }) {
    const [progress, setProgress] = useState(0);
    const scrollRef = useScrollRef();

    const scrollToTop = () => {
        scrollRef.current?.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        const handleScroll = () => {
            if (!scrollRef.current) return;

            const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
            const totalHeight = scrollHeight - clientHeight;
            setProgress(totalHeight > 0 ? (scrollTop / totalHeight) * 100 : 0);
        };

        scrollRef.current?.addEventListener("scroll", handleScroll);
        handleScroll();

        // eslint-disable-next-line react-hooks/exhaustive-deps
        return () => scrollRef.current?.removeEventListener("scroll", handleScroll);
    }, [scrollRef]);

    return (
        <div className="relative">
            <div
                className={`sticky z-10 w-[calc(100%+2rem)] -mx-4 top-0 left-0 bg-background border-b flex flex-col justify-center items-start gap-1.5
                tech:border-b-tech-pink-200 whimsical:border-b-whim-green-500 classic:border-b-classic-red/70`}
            >
                <div className="flex flex-col justify-center items-start gap-1.5 px-4 pt-2">
                    <BackButton path="/blog" />
                    <h1 className="font-bold leading-6 tech:text-lg whimsical:text-2xl whimsical:lowercase classic:text-2xl">
                        {post.title}
                    </h1>
                    <div className="flex flex-row justify-start items-center gap-2 md:gap-4">
                        <p>{`published ${formatISODate(post.publishedAt)}`}</p>
                        {post._updatedAt && (
                            <>
                                <span>{"//"}</span>
                                <p>{`last updated ${formatISODate(post._updatedAt)}`}</p>
                            </>
                        )}
                    </div>
                    {post.tags && (
                        <ul className="flex flex-row flex-wrap justify-start items-center gap-2">
                            {post.tags.sort().map((tag, index) => (
                                <li key={index}>
                                    <Badge size={"small"} type={"blog"} text={tag.title} />
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                <div
                    className="mt-1 h-1.5 tech:bg-tech-pink-200 whimsical:bg-whim-green-500 classic:bg-classic-red/70"
                    style={{ width: `${progress}%` }}
                ></div>
            </div>
            <div className="mt-8 text-foreground max-w-5xl">
                {post.body ? (
                    <PortableTextComponent content={post.body} />
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

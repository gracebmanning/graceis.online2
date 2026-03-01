"use client";
import { useScrollRef } from "./scrollContext";
import { type BlogPost } from "@/lib/sanityTypes";
import { BackButton, BackToTopButton } from "./buttons";
import { formatISODate } from "@/util/formatISODate";
import Badge from "./badge";
import ScrollProgressBar from "./scrollProgressBar";
import PortableTextComponent from "./portableText";

export function PostPage({ post }: { post: BlogPost }) {
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
                    <BackButton path="/blog" />
                    <h1 className="font-bold leading-6 tech:text-lg whimsical:text-2xl whimsical:lowercase classic:text-2xl">
                        {post.title}
                    </h1>
                    <div className="flex flex-row justify-start items-center gap-x-2 md:gap-x-4 flex-wrap">
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
                <ScrollProgressBar />
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

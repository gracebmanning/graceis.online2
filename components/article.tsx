"use client";
import { useCallback } from "react";
import { useScrollRef } from "./scrollContext";
import { type BlogPost, type Project } from "@/lib/sanityTypes";
import { BackToTopButton } from "./buttons";
import PortableTextComponent from "./portableText";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { ArticleHeader } from "./articleHeader";

// article._type is either "project" or "blogPost"
export function Article({ article }: { article: BlogPost | Project }) {
    const scrollRef = useScrollRef();
    const scrollToTop = useCallback(() => {
        scrollRef.current?.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, [scrollRef]);

    return (
        <div className="relative">
            <ArticleHeader article={article} />
            <div className="w-full mt-8 text-foreground flex flex-col items-center">
                <div className="w-full max-w-4xl flex flex-col items-center">
                    {article._type === "project" && article.thumbnail?.asset?.url && (
                        <Image
                            src={urlFor(article.thumbnail).url()}
                            alt={article.thumbnail.alt || article.title}
                            width={article.thumbnail.asset.metadata.dimensions.width}
                            height={article.thumbnail.asset.metadata.dimensions.height}
                            className="w-full h-auto mb-6"
                            priority
                        />
                    )}
                    {article.body ? (
                        <PortableTextComponent content={article.body} />
                    ) : (
                        "No content available."
                    )}
                </div>
            </div>
            <div className="fixed bottom-8 right-8">
                <BackToTopButton onClick={scrollToTop} />
            </div>
        </div>
    );
}

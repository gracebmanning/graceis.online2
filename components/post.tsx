"use client";
import { useEffect, useState } from "react";
import { type BlogPost } from "@/lib/sanityTypes";
import { BackButton, BackToTopButton } from "./buttons";
import { formatISODate } from "@/util/formatISODate";
import Badge from "./badge";
import { useScrollRef } from "./scrollContext";

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
            <div className="mt-2">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam velit ex,
                    luctus scelerisque odio a, ultrices varius diam. Vivamus vel risus massa. Donec
                    vel elit mattis risus fermentum porttitor non vitae dui. Nullam et pharetra
                    purus. Aliquam vehicula nunc eu nisl iaculis, in commodo diam commodo. Donec
                    lorem est, tempus at ipsum sed, tempor rutrum est. Nullam congue risus nec
                    tincidunt fermentum. In mi diam, condimentum eu neque eget, porta faucibus
                    felis. Donec molestie ex dui, eu luctus urna blandit et. Quisque tincidunt metus
                    purus, consectetur convallis diam blandit nec.
                </p>
                <p>
                    Maecenas vestibulum orci sit amet ipsum laoreet, sed convallis velit posuere.
                    Nunc aliquam dolor pellentesque nisl vulputate sagittis. Pellentesque at
                    condimentum magna, vitae molestie nibh. Etiam ex orci, pellentesque sed neque
                    vitae, placerat tempor lorem. Nulla lacinia, elit eu feugiat mattis, quam magna
                    convallis quam, sit amet accumsan sem enim tincidunt justo. Sed metus diam,
                    cursus in ultrices at, vehicula porta dolor. Morbi at eleifend nisl. Proin justo
                    urna, mollis ac tellus eu, tincidunt rhoncus elit. Donec lobortis justo ut
                    viverra ornare. Nam rhoncus, ligula ac elementum lacinia, tortor elit placerat
                    lorem, sit amet accumsan sapien augue egestas ex. Nulla semper porttitor sem,
                    faucibus congue ipsum auctor at. Integer sed viverra massa. Donec nec nunc
                    rhoncus, viverra elit vitae, fringilla arcu. Nullam accumsan mi sit amet neque
                    pretium, vitae molestie nunc posuere. Vivamus id neque nulla.
                </p>
                <p>
                    Vivamus dictum auctor metus, eget lobortis libero tempus in. Praesent fringilla
                    congue nulla at blandit. Sed in lacus risus. Pellentesque varius velit sed sem
                    commodo venenatis. Proin dapibus malesuada lorem vitae iaculis. Sed lorem
                    lectus, pulvinar rutrum dui aliquam, ornare dapibus quam. Interdum et malesuada
                    fames ac ante ipsum primis in faucibus. Duis id viverra tortor, eu dictum neque.
                    Etiam consectetur velit sit amet mattis posuere. Nam convallis tellus dolor. Nam
                    laoreet metus vitae velit pharetra euismod. Morbi vitae ex sed nibh consectetur
                    pellentesque vel et dolor. Nam varius, leo in suscipit consectetur, turpis nisi
                    viverra felis, vel eleifend neque lacus et est. Cras ac dui non erat porta
                    egestas. Donec et pellentesque dolor, a fringilla diam. Proin tincidunt at ante
                    molestie molestie.
                </p>
                <p>
                    Nullam at dui orci. Nunc sagittis diam ut nunc mattis, sed accumsan turpis
                    porta. Nullam molestie, arcu a vehicula hendrerit, diam tortor malesuada erat,
                    in dignissim sapien mauris at lectus. Phasellus id erat tempor magna interdum
                    porta. Donec et augue in turpis convallis sagittis et vitae metus. Morbi varius
                    vel ante at dignissim. Vestibulum lectus velit, tempus sed nulla eget, vulputate
                    volutpat tortor. Mauris ac metus vulputate, egestas elit nec, luctus tortor.
                    Morbi ut tortor tincidunt, convallis ligula a, mollis leo. Proin sollicitudin,
                    mauris eget lobortis pellentesque, neque velit maximus ligula, nec ultricies
                    nulla justo ac nisi. Sed condimentum massa quis turpis faucibus placerat.
                </p>
                <p>
                    Suspendisse accumsan rhoncus lacus, id ultrices ligula. Quisque commodo est ac
                    elit elementum, quis maximus eros tempus. Duis dignissim eleifend mi, nec
                    pulvinar justo consequat sit amet. Fusce turpis enim, dictum nec tincidunt ac,
                    elementum sit amet neque. Nulla elementum venenatis pretium. Nullam vel euismod
                    ligula, eget lobortis lacus. Vestibulum elementum malesuada metus, at eleifend
                    urna gravida quis. Sed gravida neque non justo tempor, et faucibus nulla
                    sodales. Nam condimentum vulputate lectus, id tempor ante. Etiam nec accumsan
                    nulla.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam velit ex,
                    luctus scelerisque odio a, ultrices varius diam. Vivamus vel risus massa. Donec
                    vel elit mattis risus fermentum porttitor non vitae dui. Nullam et pharetra
                    purus. Aliquam vehicula nunc eu nisl iaculis, in commodo diam commodo. Donec
                    lorem est, tempus at ipsum sed, tempor rutrum est. Nullam congue risus nec
                    tincidunt fermentum. In mi diam, condimentum eu neque eget, porta faucibus
                    felis. Donec molestie ex dui, eu luctus urna blandit et. Quisque tincidunt metus
                    purus, consectetur convallis diam blandit nec.
                </p>
                <p>
                    Maecenas vestibulum orci sit amet ipsum laoreet, sed convallis velit posuere.
                    Nunc aliquam dolor pellentesque nisl vulputate sagittis. Pellentesque at
                    condimentum magna, vitae molestie nibh. Etiam ex orci, pellentesque sed neque
                    vitae, placerat tempor lorem. Nulla lacinia, elit eu feugiat mattis, quam magna
                    convallis quam, sit amet accumsan sem enim tincidunt justo. Sed metus diam,
                    cursus in ultrices at, vehicula porta dolor. Morbi at eleifend nisl. Proin justo
                    urna, mollis ac tellus eu, tincidunt rhoncus elit. Donec lobortis justo ut
                    viverra ornare. Nam rhoncus, ligula ac elementum lacinia, tortor elit placerat
                    lorem, sit amet accumsan sapien augue egestas ex. Nulla semper porttitor sem,
                    faucibus congue ipsum auctor at. Integer sed viverra massa. Donec nec nunc
                    rhoncus, viverra elit vitae, fringilla arcu. Nullam accumsan mi sit amet neque
                    pretium, vitae molestie nunc posuere. Vivamus id neque nulla.
                </p>
                <p>
                    Vivamus dictum auctor metus, eget lobortis libero tempus in. Praesent fringilla
                    congue nulla at blandit. Sed in lacus risus. Pellentesque varius velit sed sem
                    commodo venenatis. Proin dapibus malesuada lorem vitae iaculis. Sed lorem
                    lectus, pulvinar rutrum dui aliquam, ornare dapibus quam. Interdum et malesuada
                    fames ac ante ipsum primis in faucibus. Duis id viverra tortor, eu dictum neque.
                    Etiam consectetur velit sit amet mattis posuere. Nam convallis tellus dolor. Nam
                    laoreet metus vitae velit pharetra euismod. Morbi vitae ex sed nibh consectetur
                    pellentesque vel et dolor. Nam varius, leo in suscipit consectetur, turpis nisi
                    viverra felis, vel eleifend neque lacus et est. Cras ac dui non erat porta
                    egestas. Donec et pellentesque dolor, a fringilla diam. Proin tincidunt at ante
                    molestie molestie.
                </p>
                <p>
                    Nullam at dui orci. Nunc sagittis diam ut nunc mattis, sed accumsan turpis
                    porta. Nullam molestie, arcu a vehicula hendrerit, diam tortor malesuada erat,
                    in dignissim sapien mauris at lectus. Phasellus id erat tempor magna interdum
                    porta. Donec et augue in turpis convallis sagittis et vitae metus. Morbi varius
                    vel ante at dignissim. Vestibulum lectus velit, tempus sed nulla eget, vulputate
                    volutpat tortor. Mauris ac metus vulputate, egestas elit nec, luctus tortor.
                    Morbi ut tortor tincidunt, convallis ligula a, mollis leo. Proin sollicitudin,
                    mauris eget lobortis pellentesque, neque velit maximus ligula, nec ultricies
                    nulla justo ac nisi. Sed condimentum massa quis turpis faucibus placerat.
                </p>
                <p>
                    Suspendisse accumsan rhoncus lacus, id ultrices ligula. Quisque commodo est ac
                    elit elementum, quis maximus eros tempus. Duis dignissim eleifend mi, nec
                    pulvinar justo consequat sit amet. Fusce turpis enim, dictum nec tincidunt ac,
                    elementum sit amet neque. Nulla elementum venenatis pretium. Nullam vel euismod
                    ligula, eget lobortis lacus. Vestibulum elementum malesuada metus, at eleifend
                    urna gravida quis. Sed gravida neque non justo tempor, et faucibus nulla
                    sodales. Nam condimentum vulputate lectus, id tempor ante. Etiam nec accumsan
                    nulla.
                </p>
            </div>
            <div className="fixed bottom-8 right-8">
                <BackToTopButton onClick={scrollToTop} />
            </div>
        </div>
    );
}

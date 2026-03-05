"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import { whiteRabbit, dottedLine, handDrawnLine, computer, cd, email } from "@/lib/images";

export function HomePageBgAssets() {
    const { theme } = useTheme();

    return (
        <>
            {theme === "tech" && (
                <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden opacity-95">
                    <div className="absolute w-12 h-12 rounded-full blur-xs bg-tech-green bottom-50 md:bottom-50 left-5 scale-80 md:scale-100"></div>
                    <div className="absolute w-18 h-18 rounded-full blur-xs bg-tech-gray bottom-30 md:bottom-25 left-10 scale-80 md:scale-100"></div>
                    <div className="absolute w-75 h-75 rounded-full blur-xs bg-tech-gray bottom-50 md:bottom-60 -right-40 md:-right-45 scale-80 md:scale-100"></div>
                    <div className="absolute w-17.75 h-17.75 rounded-full blur-xs bg-tech-green bottom-60 right-30 md:right-35 scale-80 md:scale-100"></div>
                    <div className="absolute w-37.5 h-37.5 rounded-full blur-xs bg-tech-pink-200 bottom-25 md:bottom-20 right-5 scale-80 md:scale-100"></div>
                </div>
            )}
            {theme === "whimsical" && (
                <Image
                    src={whiteRabbit.src}
                    alt={whiteRabbit.alt}
                    width={800}
                    height={1200}
                    className="absolute bottom-0 right-0 z-0 w-[35%] md:w-[20%]"
                />
            )}
        </>
    );
}

export function EmailAssets() {
    const { theme } = useTheme();
    if (theme === "tech") {
        return <Image src={cd.src} alt={cd.alt} width={400} height={400} className="w-16 h-16" />;
    } else if (theme === "classic") {
        return (
            <Image src={email.src} alt={email.alt} width={217} height={217} className="w-16 h-16" />
        );
    } else {
        return null;
    }
}

export function HomePageDividerLine() {
    const { theme } = useTheme();
    return (
        <>
            {theme === "tech" && (
                <div className="w-full overflow-hidden">
                    <Image
                        className="mt-2 min-w-500 object-left"
                        src={dottedLine.src}
                        alt={dottedLine.alt}
                    />
                </div>
            )}
            {theme === "whimsical" && (
                <div className="w-full overflow-hidden">
                    <Image
                        className="mt-3 min-w-500 object-left"
                        src={handDrawnLine.src}
                        alt={handDrawnLine.alt}
                    />
                </div>
            )}
            {theme === "classic" && (
                <div className="w-full border-b-2 border-b-classic-gray drop-shadow-lg mt-2" />
            )}
        </>
    );
}

export function HomePageLowerImage() {
    const { theme } = useTheme();

    if (theme === "classic") {
        return <Image src={computer.src} alt={computer.alt} />;
    } else {
        return null;
    }
}

export function NavLowerImage() {
    const { theme } = useTheme();

    if (theme === "whimsical") {
        return (
            <Image
                src={whiteRabbit.src}
                alt={whiteRabbit.alt}
                width={800}
                height={1200}
                className="w-25 bg-background/10"
            />
        );
    } else if (theme === "classic") {
        return <Image src={computer.src} alt={computer.alt} />;
    } else {
        return null;
    }
}

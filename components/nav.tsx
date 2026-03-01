"use client";

import { useState } from "react";
import { MAIN_LINKS } from "@/lib/routes";
import { SOCIAL_LINKS } from "@/lib/routes";
import { FOOTER_LINKS } from "@/lib/routes";
import Link from "next/link";
import ThemeSwitcher from "./themeSwitcher";
import Image from "next/image";
import { ladybug, lunamoth, fish, bear, strawberry, instagram, youtube } from "@/lib/images";
import { FiX, FiMenu } from "react-icons/fi";

const whimsicalMainImages = [ladybug, lunamoth, fish];
const whimsicalSocialImages = [bear, strawberry];
const classicSocialImages = [instagram, youtube];

export const NavMenu = ({ isHome }: { isHome: boolean }) => {
    const [isOpen, setIsOpen] = useState(false);

    const navCircle = "w-8 h-8 rounded-full blur-xs";
    const techCircleColors = ["bg-tech-pink-200", "bg-tech-gray", "bg-tech-green"];

    const navListStyle = "flex flex-col justify-start items-start gap-4 classic:gap-2";
    const navLinkStyle =
        "flex flex-row justify-start items-center gap-4 classic:gap-2 text-xl whimsical:text-2xl whimsical:md:text-3xl classic:underline hover:font-semibold transition-all ease-in-out";

    const footerListStyle = "flex flex-col justify-start items-start gap-4 classic:gap-2";
    const footerLinkStyle =
        "text-base whimsical:text-lg classic:text-lg classic:text-classic-blue underline hover:font-semibold transition-all ease-in-out";

    return (
        <>
            {!isHome && (
                <div className="md:hidden fixed w-full top-0 left-0 h-16 z-50 flex flex-row justify-between items-center px-4 tech:bg-tech-gray-50 whimsical:bg-whim-green-200 classic:bg-classic-gray-50 classic:border-b classic:shadow-sm">
                    <Link href="/" className="font-header" onClick={() => setIsOpen(false)}>
                        <h1 className="leading-6 tech:text-xl whimsical:text-2xl classic:text-2xl">
                            grace manning
                        </h1>
                    </Link>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle Menu"
                        className="hover:cursor-pointer p-2 rounded-xl text-xl hover:bg-foreground/10 transition-colors"
                    >
                        {isOpen ? <FiX /> : <FiMenu />}
                    </button>
                </div>
            )}
            <nav
                className={`font-decorative flex flex-col justify-start items-start gap-10 pt-4 pb-10 
                    ${
                        isHome
                            ? "relative h-full px-8"
                            : `fixed top-16 md:top-0 left-0 w-full md:w-53.75 h-[calc(100vh-4rem)] md:h-screen px-3 tech:bg-tech-gray-50 whimsical:bg-whim-green-200 classic:bg-classic-gray-50 md:classic:border-r md:classic:border-r-classic-gray
                                ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`
                    }`}
            >
                {!isHome && (
                    <Link
                        href="/"
                        className="hidden md:flex flex-col gap-2"
                        onClick={() => setIsOpen(false)}
                    >
                        <h1 className="leading-6 tech:text-xl tech:md:text-2xl whimsical:text-2xl whimsical:md:text-3xl classic:text-2xl classic:md:text-3xl">
                            grace manning
                        </h1>
                        <h2 className="leading-4 tech:text-sm whimsical:text-base whimsical:md:text-lg classic:text-base classic:md:text-lg">
                            creative technologist
                        </h2>
                    </Link>
                )}
                <ul className={navListStyle}>
                    {MAIN_LINKS.map((link, index) => (
                        <li
                            key={link.href}
                            className="classic:text-classic-blue classic:list-disc classic:ml-4"
                        >
                            <Link
                                href={link.href}
                                className={navLinkStyle}
                                onClick={() => setIsOpen(false)}
                            >
                                <div
                                    className={`hidden tech:block ${navCircle} ${techCircleColors[index]}`}
                                ></div>
                                <Image
                                    src={whimsicalMainImages[index].src}
                                    alt={whimsicalMainImages[index].alt}
                                    width={130}
                                    height={130}
                                    className="hidden whimsical:block w-12 h-12"
                                />
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
                <ul className={navListStyle}>
                    {SOCIAL_LINKS.map((link, index) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                target={link.target}
                                rel="noreferrer"
                                className={navLinkStyle}
                            >
                                <div
                                    className={`hidden tech:block ${navCircle} bg-tech-blue`}
                                ></div>
                                <Image
                                    src={whimsicalSocialImages[index].src}
                                    alt={whimsicalSocialImages[index].alt}
                                    width={130}
                                    height={130}
                                    className="hidden whimsical:block w-12 h-12"
                                />
                                <Image
                                    src={classicSocialImages[index].src}
                                    alt={classicSocialImages[index].alt}
                                    width={300}
                                    height={300}
                                    className="hidden classic:block w-10 h-10"
                                />
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
                {!isHome && (
                    <div className="mt-auto flex flex-col gap-8">
                        <ThemeSwitcher />
                        <ul className={footerListStyle}>
                            {FOOTER_LINKS.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className={footerLinkStyle}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </nav>
        </>
    );
};

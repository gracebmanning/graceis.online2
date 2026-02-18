import { MAIN_LINKS } from "@/lib/routes";
import { SOCIAL_LINKS } from "@/lib/routes";
import { FOOTER_LINKS } from "@/lib/routes";
import Link from "next/link";
import ThemeSwitcher from "./themeSwitcher";
import Image from "next/image";
import { ladybug, lunamoth, fish, bear, strawberry, instagram, youtube } from "@/lib/images";

const whimsicalMainImages = [ladybug, lunamoth, fish];
const whimsicalSocialImages = [bear, strawberry];
const classicSocialImages = [instagram, youtube];

export const NavMenu = ({ isHome }: { isHome: boolean }) => {
    const navCircle = "w-8 h-8 rounded-full blur-xs";
    const techCircleColors = ["bg-tech-pink-200", "bg-tech-gray", "bg-tech-green"];

    const navListStyle = "flex flex-col justify-start items-start gap-4 classic:gap-2";
    const navLinkStyle =
        "flex flex-row justify-start items-center gap-4 classic:gap-2 text-xl whimsical:text-2xl whimsical:md:text-3xl classic:underline hover:font-semibold transition-all ease-in-out";

    const footerListStyle = "flex flex-col justify-start items-start gap-4 classic:gap-2";
    const footerLinkStyle =
        "text-base whimsical:text-lg classic:text-lg classic:text-classic-blue underline hover:font-semibold transition-all ease-in-out";

    return (
        <nav
            className={`h-full font-decorative flex flex-col justify-start items-start gap-10 px-3 pt-4 pb-6 ${isHome ? "" : "w-53.75 tech:bg-tech-gray/10 whimsical:bg-whim-green-200/40 classic:border-r classic:border-r-classic-gray"}`}
        >
            {!isHome && (
                <Link href="/" className="flex flex-col gap-2">
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
                        <Link href={link.href} className={navLinkStyle}>
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
                        <Link href={link.href} className={navLinkStyle}>
                            <div className={`hidden tech:block ${navCircle} bg-tech-blue`}></div>
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
                        </Link>
                    </li>
                ))}
            </ul>
            {!isHome && (
                <div className="mt-auto flex flex-col gap-8">
                    <ThemeSwitcher />
                    <ul className={footerListStyle}>
                        {FOOTER_LINKS.map((link) => (
                            <li key={link.href}>
                                <Link href={link.href} className={footerLinkStyle}>
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
};

export const Navbar = () => {
    return <nav></nav>;
};

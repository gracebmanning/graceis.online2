import { MAIN_LINKS } from "@/lib/routes";
import { SOCIAL_LINKS } from "@/lib/routes";
import { FOOTER_LINKS } from "@/lib/routes";
import Link from "next/link";
import ThemeSwitcher from "./themeSwitcher";

export const NavMenu = ({ isHome }: { isHome: boolean }) => {
    const navCircle = "w-8 h-8 rounded-full blur-xs";
    const circleColors = ["bg-tech-pink-200", "bg-tech-gray", "bg-tech-green"];
    const navListStyle = "flex flex-col justify-start items-start gap-4";
    const navLinkStyle =
        "flex flex-row justify-start items-center gap-4 text-xl hover:font-semibold";

    const footerListStyle = "flex flex-col justify-start items-start gap-2";
    const footerLinkStyle = "text-base underline hover:font-semibold";
    return (
        <nav className="flex flex-col justify-start items-start gap-10">
            <ul className={navListStyle}>
                {MAIN_LINKS.map((link, index) => (
                    <li key={link.href}>
                        <Link href={link.href} className={navLinkStyle}>
                            <div className={`${navCircle} ${circleColors[index]}`}></div>
                            {link.name}
                        </Link>
                    </li>
                ))}
            </ul>
            <ul className={navListStyle}>
                {SOCIAL_LINKS.map((link) => (
                    <li key={link.href}>
                        <Link href={link.href} className={navLinkStyle}>
                            <div className={`${navCircle} bg-tech-blue`}></div>
                            {link.name}
                        </Link>
                    </li>
                ))}
            </ul>
            {!isHome && <ThemeSwitcher />}
            {!isHome && (
                <ul className={footerListStyle}>
                    {FOOTER_LINKS.map((link) => (
                        <li key={link.href}>
                            <Link href={link.href} className={footerLinkStyle}>
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
};

export const Navbar = () => {
    return <nav></nav>;
};

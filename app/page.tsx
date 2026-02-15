import Image from "next/image";
import ThemeSwitcher from "@/components/themeSwitcher";
import { NavMenu } from "@/components/nav";
import star from "@/public/images/embroidered-star.png";
import dottedLine from "@/public/images/dotted-line-long.svg";
import handDrawnLine from "@/public/images/hand-drawn-line-long.svg";
import cd from "@/public/images/cd.png";
import email from "@/public/images/email.png";

const Email = () => {
    return (
        <div className="flex flex-row items-center">
            <Image
                src={cd}
                alt={"silver CD with prism reflection"}
                width={1000}
                height={1000}
                className="hidden tech:block w-16 h-16"
            />
            <Image
                src={email}
                alt={"envelope icon with blue arrows indicating send/receive actions"}
                width={217}
                height={217}
                className="hidden classic:block w-16 h-16"
            />
            <span className="tech:font-decorative-two">hello [@] graceis.online</span>
        </div>
    );
};

export default function Home() {
    return (
        <div className="p-8 lg:p-10">
            <div className="w-full flex flex-row gap-2 justify-start items-center">
                <Image src={star} alt="silver embroidered star patch." width={50} height={50} />
                <div className="w-full flex flex-col">
                    <h1 className="text-3xl md:text-4xl">grace manning</h1>
                    <div className="w-full flex flex-col gap-4 md:gap-0 md:flex-row md:justify-between md:items-end">
                        <h2 className="text-xl md:text-2xl">creative technologist</h2>
                        <ThemeSwitcher />
                    </div>
                </div>
            </div>
            <div className="hidden tech:block w-full overflow-hidden">
                <Image
                    className="mt-2 min-w-500 object-left"
                    src={dottedLine}
                    alt={"gray dotted line"}
                />
            </div>
            <div className="hidden whimsical:block w-full overflow-hidden">
                <Image
                    className="mt-3 min-w-500 object-left"
                    src={handDrawnLine}
                    alt={"green wiggly hand-drawn line"}
                />
            </div>
            <div className="hidden classic:block w-full h-px bg-classic-gray shadow-sm mt-2" />
            <div className="mt-10 flex flex-col justify-start items-start gap-10">
                <NavMenu isHome={true} />
                <Email />
            </div>
        </div>
    );
}

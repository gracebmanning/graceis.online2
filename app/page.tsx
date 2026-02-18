import Image from "next/image";
import ThemeSwitcher from "@/components/themeSwitcher";
import { NavMenu } from "@/components/nav";
import { cd, email, embroideredstar, dottedLine, handDrawnLine } from "@/lib/images";

const Email = () => {
    return (
        <div className="flex flex-row items-center">
            <Image
                src={cd.src}
                alt={cd.alt}
                width={1000}
                height={1000}
                className="hidden tech:block w-16 h-16"
            />
            <Image
                src={email.src}
                alt={email.alt}
                width={217}
                height={217}
                className="hidden classic:block w-16 h-16"
            />
            <div>
                <p className="hidden w-fit classic:block classic:bg-classic-yellow classic:text-lg classic:md:text-xl">
                    EMAIL ME!
                </p>
                <p className="tech:font-decorative-two tech:text-4xl tech:md:text-5xl whimsical:font-header whimsical:text-2xl whimsical:md:text-3xl classic:text-xl classic:md:text-2xl">
                    hello [@] graceis.online
                </p>
            </div>
        </div>
    );
};

export default function Home() {
    return (
        <div className="p-8 lg:p-10">
            <div className="w-full flex flex-row gap-2 justify-start items-center">
                <Image src={embroideredstar.src} alt={embroideredstar.alt} width={50} height={50} />
                <div className="w-full flex flex-col">
                    <h1 className="text-3xl md:text-5xl">grace manning</h1>
                    <div className="w-full flex flex-col gap-4 md:gap-0 md:flex-row md:justify-between md:items-end">
                        <h2 className="text-xl md:text-2xl">creative technologist</h2>
                        <ThemeSwitcher />
                    </div>
                </div>
            </div>
            <div className="hidden tech:block w-full overflow-hidden">
                <Image
                    className="mt-2 min-w-500 object-left"
                    src={dottedLine.src}
                    alt={dottedLine.alt}
                />
            </div>
            <div className="hidden whimsical:block w-full overflow-hidden">
                <Image
                    className="mt-3 min-w-500 object-left"
                    src={handDrawnLine.src}
                    alt={handDrawnLine.alt}
                />
            </div>
            <div className="hidden classic:block w-full border-b-2 border-b-classic-gray drop-shadow-lg mt-2" />
            <div className="mt-10 flex flex-col justify-start items-start gap-10">
                <NavMenu isHome={true} />
                <Email />
            </div>
        </div>
    );
}

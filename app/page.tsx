import Image from "next/image";
import ThemeSwitcher from "@/components/themeSwitcher";
import { NavMenu } from "@/components/nav";
import { embroideredstar } from "@/lib/images";
import {
    EmailAssets,
    HomePageBgAssets,
    HomePageDividerLine,
    HomePageLowerImage,
} from "@/components/themeAssets";

const Email = () => {
    return (
        <div className="flex flex-row items-center px-7">
            <EmailAssets />
            <div className="px-3">
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
        <main className="relative h-screen">
            <HomePageBgAssets />
            <div className="relative p-8 lg:p-10 z-10">
                <div
                    className="w-full flex flex-row gap-2 justify-start items-center"
                    role="banner"
                >
                    <Image
                        src={embroideredstar.src}
                        alt={embroideredstar.alt}
                        width={50}
                        height={50}
                        className="w-12.5 h-auto"
                    />
                    <div className="w-full flex flex-col">
                        <h1 className="text-4xl md:text-5xl">grace manning</h1>
                        <div className="w-full flex flex-col gap-4 md:gap-0 md:flex-row md:justify-between md:items-end">
                            <h2 className="text-xl md:text-2xl">creative technologist</h2>
                            <ThemeSwitcher />
                        </div>
                    </div>
                </div>
                <HomePageDividerLine />
                <div className="mt-10 flex flex-col justify-start items-start gap-10">
                    <NavMenu isHome={true} />
                    <Email />
                    <HomePageLowerImage />
                </div>
            </div>
        </main>
    );
}

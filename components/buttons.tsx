import Link from "next/link";
import { FiArrowLeft, FiArrowUp } from "react-icons/fi";

const basicButtonStyle = `w-fit border border-foreground px-2 py-1 rounded-sm flex flex-row justify-start items-center gap-1
    hover:cursor-pointer hover:text-background hover:bg-foreground transition-colors duration-200 ease-in-out`;

export function BackButton({ path }: { path: string }) {
    return (
        <Link className={basicButtonStyle} href={path}>
            <FiArrowLeft />
            back
        </Link>
    );
}

export function BackToTopButton() {
    return (
        <button className={basicButtonStyle}>
            <FiArrowUp />
            back to top
        </button>
    );
}

export function SearchButton({ handleSearch }: { handleSearch: () => void }) {
    return (
        <button
            onClick={handleSearch}
            className="px-1 py-0.5 rounded-sm border hover:cursor-pointer transition-all
                tech:border-none tech:bg-tech-pink-200/90 tech:hover:bg-tech-pink-300
                whimsical:border-none whimsical:bg-whim-green-400 whimsical:hover:bg-whim-green-500
                 classic:border-classic-gray/90 classic:bg-classic-gray/20 classic:hover:bg-classic-gray/50 classic:shadow-sm"
        >
            Search
        </button>
    );
}

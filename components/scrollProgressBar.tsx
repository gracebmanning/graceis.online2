import { useState, useEffect } from "react";
import { useScrollRef } from "./scrollContext";

export default function ScrollProgressBar() {
    const [progress, setProgress] = useState(0);
    const scrollRef = useScrollRef();

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
        <div
            className="mt-1 h-1.5 tech:bg-tech-pink-200 whimsical:bg-whim-green-500 classic:bg-classic-red/70"
            style={{ width: `${progress}%` }}
        ></div>
    );
}

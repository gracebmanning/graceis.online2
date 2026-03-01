"use client";

import { useRef } from "react";
import { ScrollContext } from "./scrollContext";

export default function ScrollContainer({
    children,
    hideBg,
}: {
    children: React.ReactNode;
    hideBg: boolean;
}) {
    const mainRef = useRef<HTMLElement | null>(null);

    return (
        <ScrollContext.Provider value={mainRef}>
            <main
                ref={mainRef}
                id="main"
                className={`h-full w-full md:ml-53.75 px-4 mt-12 md:mt-2 pb-28 md:pb-20 overflow-y-auto ${hideBg ? "bg-background" : ""}`}
            >
                {children}
            </main>
        </ScrollContext.Provider>
    );
}

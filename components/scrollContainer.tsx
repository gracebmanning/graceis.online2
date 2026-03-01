"use client";

import { useRef } from "react";
import { ScrollContext } from "./scrollContext";

export default function ScrollContainer({ children }: { children: React.ReactNode }) {
    const mainRef = useRef<HTMLElement | null>(null);

    return (
        <ScrollContext.Provider value={mainRef}>
            <main
                ref={mainRef}
                id="main"
                className="h-full w-full md:ml-53.75 px-4 mt-16 md:mt-2 pb-28 md:pb-20 overflow-y-auto"
            >
                {children}
            </main>
        </ScrollContext.Provider>
    );
}

"use client";
import { createContext, useContext, RefObject } from "react";

export const ScrollContext = createContext<RefObject<HTMLElement | null> | null>(null);

export function useScrollRef() {
    const context = useContext(ScrollContext);
    if (!context) {
        throw new Error("useScrollRef must be used within a ScrollProvider");
    }
    return context;
}

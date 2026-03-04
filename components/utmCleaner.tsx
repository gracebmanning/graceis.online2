"use client";
import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function UtmCleaner() {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        if (searchParams.has("utm_source")) {
            const newUrl = window.location.protocol + "//" + window.location.host + pathname;
            window.history.replaceState({ path: newUrl }, "", newUrl);
        }
    }, [pathname, searchParams]);

    return null;
}

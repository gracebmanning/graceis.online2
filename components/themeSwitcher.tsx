"use client";
import { useTheme } from "next-themes";
import { themes } from "@/lib/themes";

export default function ThemeSwitcher() {
    const { theme, setTheme } = useTheme();

    console.log(theme);

    return (
        <select
            value={theme || "tech"}
            onChange={(event) => setTheme(event.target.value)}
            className="w-fit h-6 bg-background/50 font-body border tech:rounded-sm whimsical:rounded-sm classic:border-classic-gray"
        >
            {themes.map((themeOption) => (
                <option key={themeOption} value={themeOption} className="bg-background">
                    Theme: {themeOption.charAt(0).toUpperCase() + themeOption.slice(1)}
                </option>
            ))}
        </select>
    );
}

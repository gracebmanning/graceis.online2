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
            className="border tech:rounded-sm whimsical:rounded-sm classic:border-classic-gray"
        >
            {themes.map((themeOption) => (
                <option key={themeOption} value={themeOption} className="bg-background">
                    {themeOption.charAt(0).toUpperCase() + themeOption.slice(1)}
                </option>
            ))}
        </select>
    );
}

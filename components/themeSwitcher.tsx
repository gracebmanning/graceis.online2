"use client";
import { useTheme } from "next-themes";
import { themes } from "@/lib/themes";

export default function ThemeSwitcher() {
    const { theme, setTheme } = useTheme();

    console.log(theme);

    return (
        <div>
            <select value={theme || "tech"} onChange={(event) => setTheme(event.target.value)}>
                {themes.map((themeOption) => (
                    <option key={themeOption} value={themeOption}>
                        {themeOption.charAt(0).toUpperCase() + themeOption.slice(1)}
                    </option>
                ))}
            </select>
        </div>
    );
}

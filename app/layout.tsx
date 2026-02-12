import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import localFont from "next/font/local";
import {
    Michroma,
    Fira_Mono,
    B612,
    Lacquer,
    Mountains_of_Christmas,
    Inter,
} from "next/font/google";
import "./globals.css";
import { themes } from "@/lib/themes";

// THEME 1 (Tech)
const michroma = Michroma({
    variable: "--font-michroma",
    subsets: ["latin"],
    weight: ["400"],
});

const firaMono = Fira_Mono({
    variable: "--font-fira-mono",
    subsets: ["latin"],
    weight: ["400", "500", "700"], // regular, medium, bold
});

const b612 = B612({
    variable: "--font-b612",
    subsets: ["latin"],
    weight: ["400", "700"],
    style: ["normal", "italic"],
});

// THEME 2 (Whimsical)
const lacquer = Lacquer({
    variable: "--font-lacquer",
    subsets: ["latin"],
    weight: ["400"],
});

const mountainsOfChristmas = Mountains_of_Christmas({
    variable: "--font-mountains-of-christmas",
    subsets: ["latin"],
    weight: ["400", "700"],
    display: "swap",
    adjustFontFallback: false,
});

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    style: ["normal", "italic"],
});

// THEME 3 (Classic)
const timesNewRoman = localFont({
    src: [
        {
            path: "../public/fonts/times.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../public/fonts/timesi.ttf",
            weight: "400",
            style: "italic",
        },
        {
            path: "../public/fonts/timesbd.ttf",
            weight: "700",
            style: "normal",
        },
        {
            path: "../public/fonts/timesbi.ttf",
            weight: "700",
            style: "italic",
        },
    ],
    variable: "--font-times-new-roman",
});

export const metadata: Metadata = {
    title: "graceis.online",
    description: "Grace Manning's online portfolio",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={`
                    ${michroma.variable} ${firaMono.variable} ${b612.variable} 
                    ${lacquer.variable} ${mountainsOfChristmas.variable} ${inter.variable}
                    ${timesNewRoman.variable}
                    antialiased`}
            suppressHydrationWarning
        >
            <body suppressHydrationWarning>
                <ThemeProvider attribute="data-theme" defaultTheme="tech" themes={themes}>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}

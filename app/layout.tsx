import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import localFont from "next/font/local";
import {
    Michroma,
    Fira_Mono,
    B612,
    Libre_Barcode_128_Text,
    Lacquer,
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

const barcode = Libre_Barcode_128_Text({
    variable: "--font-barcode",
    subsets: ["latin"],
    weight: ["400"],
    style: ["normal"],
});

// THEME 2 (Whimsical)
const lacquer = Lacquer({
    variable: "--font-lacquer",
    subsets: ["latin"],
    weight: ["400"],
});

const mountainsOfChristmas = localFont({
    variable: "--font-mountains-of-christmas",
    src: [
        {
            path: "../public/fonts/Mountains_of_Christmas/MountainsofChristmas-Regular.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../public/fonts/Mountains_of_Christmas/MountainsofChristmas-Bold.ttf",
            weight: "700",
            style: "normal",
        },
    ],
});

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    style: ["normal", "italic"],
});

// THEME 3 (Classic)
const timesNewRoman = localFont({
    variable: "--font-times-new-roman",
    src: [
        {
            path: "../public/fonts/Times_New_Roman/times.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../public/fonts/Times_New_Roman/timesi.ttf",
            weight: "400",
            style: "italic",
        },
        {
            path: "../public/fonts/Times_New_Roman/timesbd.ttf",
            weight: "700",
            style: "normal",
        },
        {
            path: "../public/fonts/Times_New_Roman/timesbi.ttf",
            weight: "700",
            style: "italic",
        },
    ],
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
                    ${michroma.variable} ${firaMono.variable} ${b612.variable} ${barcode.variable} 
                    ${lacquer.variable} ${mountainsOfChristmas.variable} ${inter.variable}
                    ${timesNewRoman.variable}
                    antialiased`}
            suppressHydrationWarning
        >
            <body className="w-dvw h-dvh" suppressHydrationWarning>
                <ThemeProvider attribute="data-theme" defaultTheme="tech" themes={themes}>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}

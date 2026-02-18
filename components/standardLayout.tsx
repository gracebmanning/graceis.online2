import { NavMenu } from "@/components/nav";

export default function StandardLayout({ content }: { content: React.ReactNode }) {
    return (
        <div className="w-full h-dvh flex flex-row justify-start items-start">
            <NavMenu isHome={false} />
            <main className="h-full">{content}</main>
        </div>
    );
}

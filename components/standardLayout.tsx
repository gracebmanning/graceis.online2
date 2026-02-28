import { NavMenu } from "@/components/nav";

export default function StandardLayout({ content }: { content: React.ReactNode }) {
    return (
        <div className="w-full h-screen flex flex-row justify-start items-start overflow-hidden">
            <NavMenu isHome={false} />
            <main className="h-full w-full ml-53.75 px-4 pt-6 pb-20 overflow-y-auto">
                {content}
            </main>
        </div>
    );
}

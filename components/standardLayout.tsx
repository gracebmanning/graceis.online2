import { NavMenu } from "@/components/nav";

export default function StandardLayout({ content }: { content: React.ReactNode }) {
    return (
        <div className="flex flex-row justify-start items-start">
            <NavMenu isHome={false} />
            <main>{content}</main>
        </div>
    );
}

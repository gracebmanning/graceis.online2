import { NavMenu } from "@/components/nav";
import ScrollContainer from "./scrollContainer";

export default function StandardLayout({
    content,
    hideBg = false,
}: {
    content: React.ReactNode;
    hideBg?: boolean;
}) {
    return (
        <div className="w-full h-screen flex flex-row justify-start items-start overflow-hidden">
            <NavMenu isHome={false} />
            <ScrollContainer hideBg={hideBg}>{content}</ScrollContainer>
        </div>
    );
}

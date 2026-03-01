import { NavMenu } from "@/components/nav";
import ScrollContainer from "./scrollContainer";

export default function StandardLayout({ content }: { content: React.ReactNode }) {
    return (
        <div className="w-full h-screen flex flex-row justify-start items-start overflow-hidden">
            <NavMenu isHome={false} />
            <ScrollContainer>{content}</ScrollContainer>
        </div>
    );
}

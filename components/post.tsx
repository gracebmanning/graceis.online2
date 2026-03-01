import { type BlogPost } from "@/lib/sanityTypes";
import { BackButton, BackToTopButton } from "./buttons";

export function PostPage({ post }: { post: BlogPost }) {
    return (
        <div>
            <BackButton path="/blog" />
            <h1>{post.title}</h1>
            <BackToTopButton />
        </div>
    );
}

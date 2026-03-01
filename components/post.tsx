import { type BlogPost } from "@/lib/sanityTypes";

export function PostPage({ post }: { post: BlogPost }) {
    return <p>{post.title}</p>;
}

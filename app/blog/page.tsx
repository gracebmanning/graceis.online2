import StandardLayout from "@/components/standardLayout";
import { postsQuery, blogTagsQuery } from "@/sanity/lib/blogQueries";
import { sanityFetch } from "@/sanity/lib/live";
import { List } from "@/components/list";

export default async function Blog() {
    const posts = await sanityFetch({ query: postsQuery });
    const tags = await sanityFetch({ query: blogTagsQuery });

    let content = null;
    if (posts && tags) {
        content = <List items={posts.data} tags={tags.data} type={"blog"} />;
    } else {
        content = "Loading...";
    }

    return <StandardLayout content={content} />;
}

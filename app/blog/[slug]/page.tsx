import StandardLayout from "@/components/standardLayout";
import { postQuery } from "@/sanity/lib/blogQueries";
import { sanityFetch } from "@/sanity/lib/live";
import { Article } from "@/components/article";

type Props = {
    params: { slug: string };
};

export default async function Page(props: Props) {
    const params = await props.params;
    const post = await sanityFetch({ query: postQuery, params });

    let content = null;
    if (post) {
        content = <Article article={post.data} />;
    } else {
        content = "Loading...";
    }

    return <StandardLayout content={content} hideBg={true} />;
}

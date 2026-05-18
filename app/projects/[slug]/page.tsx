import StandardLayout from "@/components/standardLayout";
import { projectQuery } from "@/sanity/lib/projectQueries";
import { sanityFetch } from "@/sanity/lib/live";
import { Article } from "@/components/article";

type Props = {
    params: { slug: string };
};

export default async function Page(props: Props) {
    const params = await props.params;
    const project = await sanityFetch({ query: projectQuery, params });

    let content = null;
    if (project) {
        content = <Article article={project.data} />;
    } else {
        content = "Loading...";
    }

    return <StandardLayout content={content} hideBg={true} />;
}

import StandardLayout from "@/components/standardLayout";
import { projectQuery } from "@/sanity/lib/projectQueries";
import { sanityFetch } from "@/sanity/lib/live";
import { ProjectPage } from "@/components/project";

type Props = {
    params: { slug: string };
};

export default async function Page(props: Props) {
    const params = await props.params;
    const project = await sanityFetch({ query: projectQuery, params });

    let content = null;
    if (project) {
        content = <ProjectPage project={project.data} />;
    } else {
        content = "Loading...";
    }

    return <StandardLayout content={content} />;
}

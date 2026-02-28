import StandardLayout from "@/components/standardLayout";
import { projectsQuery, tagsQuery } from "@/sanity/lib/projectQueries";
import { sanityFetch } from "@/sanity/lib/live";
import { List } from "@/components/list";

export default async function Projects() {
    const projects = await sanityFetch({ query: projectsQuery });
    const tags = await sanityFetch({ query: tagsQuery });

    let content = null;
    if (projects && tags) {
        content = <List items={projects.data} tags={tags.data} type={"projects"} />;
    } else {
        content = "Loading...";
    }

    return <StandardLayout content={content} />;
}

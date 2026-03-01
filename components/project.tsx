import { type Project } from "@/lib/sanityTypes";

export function ProjectPage({ project }: { project: Project }) {
    return <p>{project.title}</p>;
}

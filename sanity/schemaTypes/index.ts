import { type SchemaTypeDefinition } from "sanity";
import blockContent from "./blockContent";
import blogTag from "./blogTag";
import blogPost from "./blogPost";
import project from "./project";
import projectTag from "./projectTag";

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [blogPost, blogTag, blockContent, project, projectTag],
};

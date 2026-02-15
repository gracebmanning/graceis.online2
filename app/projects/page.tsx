import StandardLayout from "@/components/standardLayout";

export default function Projects() {
    const content = (
        <div>
            <h2>example projects</h2>
            <ul>
                <li>sample project 1</li>
                <li>sample project 2</li>
            </ul>
        </div>
    );

    return <StandardLayout content={content} />;
}

import StandardLayout from "@/components/standardLayout";

export default function Blog() {
    const content = (
        <div>
            <h2>example blog</h2>
            <ul>
                <li>sample blog post 1</li>
                <li>sample blog post 2</li>
            </ul>
        </div>
    );

    return <StandardLayout content={content} />;
}

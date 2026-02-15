import StandardLayout from "@/components/standardLayout";

export default function About() {
    const content = (
        <div>
            <h2>example about</h2>
            <p>here is some information about me!</p>
        </div>
    );

    return <StandardLayout content={content} />;
}

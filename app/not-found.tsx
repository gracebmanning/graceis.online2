import StandardLayout from "@/components/standardLayout";

export default function NotFound() {
    const content = (
        <div>
            <h2 className="text-2xl whimsical:text-4xl mb-4">404</h2>
            <p className="text-lg">Oops! This page does not exist.</p>
        </div>
    );

    return <StandardLayout content={content} />;
}

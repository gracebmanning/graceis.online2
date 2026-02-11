import ThemeSwitcher from "@/components/themeSwitcher";

export default function Home() {
    return (
        <div className="p-8">
            <h1 className="font-header text-4xl">This is a Header</h1>
            <p className="font-body text-lg">This is body text.</p>
            <span className="font-decorative italic">This is a decorative flourish.</span>
            <ThemeSwitcher />
        </div>
    );
}

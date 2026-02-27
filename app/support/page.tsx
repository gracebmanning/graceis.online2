import StandardLayout from "@/components/standardLayout";

export default function Support() {
    const content = (
        <div>
            <p>
                if you would like to support my work and future projects, feel free to send a tip!
            </p>
            <p>
                <b>all support is greatly appreciated :-)</b>
            </p>
            <p>・゜゜ . . * *✧･ﾟ:*・ ✧･ﾟ: ・゜゜・．</p>
            <iframe
                id="kofiframe"
                src="https://ko-fi.com/graceisonline/?hidefeed=true&widget=true&embed=true&preview=true"
                height="712"
                title="graceisonline"
                className="border-none w-fit"
            ></iframe>
        </div>
    );

    return <StandardLayout content={content} />;
}

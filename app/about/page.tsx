import StandardLayout from "@/components/standardLayout";
import { grace } from "@/lib/images";
import Image from "next/image";
import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";
import { MdArrowOutward } from "react-icons/md";

const roadmapItems: {
    title: string;
    description: string;
}[] = [
    {
        title: "2012",
        description:
            "Learned how to code via Alice (see alice.org), then fell in love with making websites. By the age of 12, I had created several websites and games using HTML, CSS, and JavaScript.",
    },
    {
        title: "2019-2023",
        description:
            "Attended UC Irvine (go anteaters!) and earned a B.S. in Computer Science. The industry went on a hiring freeze at the time I graduated, and I struggled to figure out what I wanted to do next.",
    },
    {
        title: "Currently...",
        description:
            "I work part-time and freelance, so I wear many hats: software engineer, web developer, visual designer, marketing coordinator, graphic designer...the list goes on, and I'm currently expanding my work to include interactive & audio-reactive content using TouchDesigner. I still don't have it all figured out, but I know I enjoy creating fun technology that impacts people positively.",
    },
];

function Roadmap({ items }: { items: { title: string; description: string }[] }) {
    return (
        <div className="flex flex-col gap-8 relative w-full">
            <div className="absolute left-5 top-0 bottom-0 w-1 bg-foreground rounded-lg" />
            {items.map((item, index) => (
                <div key={index} className="flex flex-row gap-6 relative max-w-5xl">
                    <div className="flex items-center justify-center absolute left-2.5 w-6 h-6 bg-background border-2 border-foreground rounded-full classic:rounded-none z-10 shrink-0" />
                    <div className="flex flex-col gap-2 ml-12 p-4 border border-foreground bg-background/60 rounded-lg classic:rounded-none">
                        <h3 className="text-2xl whimsical:text-3xl font-semibold">{item.title}</h3>
                        <p>{item.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default function About() {
    const contactButtonStyle =
        "w-fit text-lg px-2 py-1 border border-foreground rounded-lg flex flex-row items-center gap-1";
    const content = (
        <div className="flex flex-col gap-8">
            <div className="flex flex-col items-start md:flex-row md:items-center gap-4">
                <Image
                    src={grace.src}
                    alt={grace.alt}
                    width={1080}
                    height={1486}
                    className="w-auto h-75 md:h-87.5"
                />
                <div className="flex flex-col items-start justify-center gap-4 p-2 max-w-lg bg-background/60 border border-foreground shadow-[10px_10px_0px_0px_rgba(24,24,24,1)]">
                    <h2 className="tech:lowercase whimsical:lowercase text-2xl">
                        {"Hi, I'm Grace!"}
                    </h2>
                    <p className="text-xl">
                        I am a creative technologist, software engineer, and maker of things.
                    </p>
                    <p className={`${contactButtonStyle} bg-foreground text-background`}>
                        <FiMail />
                        hello [@] graceis.online
                    </p>
                    <div className="flex flex-row items-center gap-4">
                        <a
                            className={`${contactButtonStyle} hover:scale-102 transition-transform`}
                            href="https://github.com/gracebmanning"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FiGithub />
                            GitHub
                            <MdArrowOutward />
                        </a>
                        <a
                            className={`${contactButtonStyle} hover:scale-102 transition-transform`}
                            href="https://www.linkedin.com/in/grace-manning/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FiLinkedin />
                            LinkedIn
                            <MdArrowOutward />
                        </a>
                    </div>
                </div>
            </div>
            <Roadmap items={roadmapItems} />
        </div>
    );

    return <StandardLayout content={content} />;
}

import StandardLayout from "@/components/standardLayout";
import { grace } from "@/lib/images";
import Image from "next/image";
import { IconType } from "react-icons";
import {
    FiMail,
    FiGithub,
    FiLinkedin,
    FiMonitor,
    FiPenTool,
    FiGlobe,
    FiBriefcase,
} from "react-icons/fi";
import { MdArrowOutward } from "react-icons/md";

const services = [
    {
        icon: FiMonitor,
        text: "Custom websites designed in Figma and built in the platform that best suits your needs",
    },
    {
        icon: FiPenTool,
        text: "Brand asset kits: logos, color systems, reusable templates",
    },
    {
        icon: FiBriefcase,
        text: "Marketing materials for events, trade shows, and campaigns",
    },
    {
        icon: FiGlobe,
        text: "Social media content and graphics (Instagram, LinkedIn, etc.)",
    },
    {
        icon: FiMail,
        text: "Custom HTML email templates",
    },
];

function ServiceCard({ icon, text }: { icon: IconType; text: string }) {
    const Icon = icon;
    return (
        <div className="flex flex-row items-center gap-1 not-first:pt-3 not-last:pb-3">
            <span className="w-fit p-2 bg-foreground/10 rounded-md">
                <Icon />
            </span>
            <p>{text}</p>
        </div>
    );
}

export default function About() {
    const contactButtonStyle =
        "w-fit text-lg px-2 py-1 border border-foreground rounded-lg flex flex-row items-center gap-1";
    const content = (
        <div className="max-w-4xl flex flex-col gap-8">
            <div className="w-full flex flex-col items-start md:flex-row md:items-center gap-4">
                <Image
                    src={grace.src}
                    alt={grace.alt}
                    width={1080}
                    height={1486}
                    className="w-auto h-75 md:h-87.5"
                />
                <div className="flex flex-col items-start justify-center gap-4 p-2 max-w-lg border border-foreground shadow-[10px_10px_0px_0px_rgba(24,24,24,1)]">
                    <h2 className="tech:lowercase whimsical:lowercase text-2xl font-bold">
                        {"Hi, I'm Grace!"}
                    </h2>
                    <p className="text-xl">
                        {
                            "I'm a creative technologist who designs and builds websites, brand assets, and marketing materials for small businesses and creatives."
                        }
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
            <div className="w-full flex flex-col items-start justify-center gap-4 p-2 border border-foreground shadow-[10px_10px_0px_0px_rgba(24,24,24,1)]">
                <h2 className="tech:lowercase whimsical:lowercase text-xl font-bold">
                    {"More About Me"}
                </h2>
                <p className="text-lg">
                    {
                        "I've been building websites since I was 12, earned a B.S. in Computer Science from UC Irvine, and have spent several years as the in-house web, design, and marketing person for a small business, managing everything from the company website and trade show materials to LinkedIn content and internal software projects. I understand what it takes to keep a brand consistent and a project moving. Sound like what you need?"
                    }
                    &nbsp;
                    <a
                        href="mailto:hello@graceis.online"
                        className="underline tech:text-tech-pink-700 whimsical:text-whim-green-800 classic:text-classic-blue hover:opacity-80"
                    >
                        {"Let's talk!"}
                    </a>
                </p>
            </div>
            <div className="w-full flex flex-col items-start justify-center gap-4 p-2 border border-foreground shadow-[10px_10px_0px_0px_rgba(24,24,24,1)]">
                <h2 className="tech:lowercase whimsical:lowercase text-xl font-bold">
                    {"What I Help With"}
                </h2>
                <div className="flex flex-col justify-center divide-y divide-foreground/50">
                    {services.map((service, index) => (
                        <ServiceCard key={index} icon={service.icon} text={service.text} />
                    ))}
                </div>
            </div>
        </div>
    );

    return <StandardLayout content={content} />;
}

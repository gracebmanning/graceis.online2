import StandardLayout from "@/components/standardLayout";
import Image from "next/image";
import { ImageSources, ImageAsset } from "@/lib/images";
import { MdArrowOutward } from "react-icons/md";

export default function Sources() {
    const content = (
        <table className="border">
            <thead className="border">
                <tr>
                    <th scope="col" className="border">
                        Image
                    </th>
                    <th scope="col" className="border">
                        Source
                    </th>
                    <th scope="col" className="border">
                        Alt Text
                    </th>
                </tr>
            </thead>
            <tbody>
                {ImageSources.map((image: ImageAsset, index) => (
                    <tr key={index}>
                        <td className="border p-2 min-w-24">
                            <Image
                                src={image.src}
                                alt={image.alt}
                                className="object-contain w-20 h-20"
                            />
                        </td>
                        <td className="border p-2">
                            <p>
                                source:{" "}
                                {image.source.origin === "external" ? (
                                    <a
                                        href={image.source.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex flex-row gap-1 items-center classic:text-classic-blue underline"
                                    >
                                        external link
                                        <MdArrowOutward />
                                    </a>
                                ) : (
                                    <span>{image.source.note}</span>
                                )}
                            </p>
                        </td>
                        <td className="border p-2">
                            <p>{image.alt}</p>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );

    return <StandardLayout content={content} />;
}

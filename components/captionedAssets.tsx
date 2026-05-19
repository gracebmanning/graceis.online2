import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import Image from "next/image";
import { getCloudFrontVideo } from "@/util/cloudfront";
import MuxPlayer from "@mux/mux-player-react";
import { urlFor } from "@/sanity/lib/image";
import { type ImageBlock, type VideoBlock } from "@/lib/sanityTypes";

const captionStyle = "my-0.5 text-sm italic";

export function CaptionedImage({ imageBlock }: { imageBlock: ImageBlock }) {
    if (!imageBlock.asset?._ref) return;

    const source = urlFor(imageBlock).url();
    const width = imageBlock.asset.metadata?.dimensions?.width || 1000;
    const height = imageBlock.asset.metadata?.dimensions?.height || 1000;

    return (
        <figure className="my-2 max-w-3xl mx-auto">
            <PhotoProvider>
                <PhotoView src={source}>
                    <Image
                        src={source}
                        alt={imageBlock.alt || "Blog image"}
                        width={width}
                        height={height}
                        className="w-auto h-auto max-w-full max-h-[60vh] cursor-pointer"
                    />
                </PhotoView>
            </PhotoProvider>
            {imageBlock.caption && (
                <figcaption className={captionStyle}>{imageBlock.caption}</figcaption>
            )}
        </figure>
    );
}

export function CaptionedVideo({ video }: { video: VideoBlock }) {
    let finalSource = "";
    if (video.videoSource === "url" && video.videoURL) {
        finalSource = video.videoURL;
    } else if (video.videoSource === "cloudfront" && video.videoFileName) {
        finalSource = getCloudFrontVideo(video.videoFileName);
    }
    if (!finalSource) {
        return null;
    }

    const captionedVideoStyle = "my-2 flex flex-col justify-end w-full max-w-3xl mx-auto";

    // if youtube video, use regular iframe
    if (finalSource.includes("youtube.com") || finalSource.includes("youtu.be")) {
        const videoId = finalSource.split("v=")[1] || finalSource.split("/").pop();
        const embedURL = `https://www.youtube.com/embed/${videoId?.split("?")[0]}`;

        return (
            <div className={captionedVideoStyle}>
                <div className="relative pb-[56.25%] h-0 w-full overflow-hidden">
                    <iframe
                        src={embedURL}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        loading="lazy"
                        className="absolute top-0 left-0 w-full h-full"
                    ></iframe>
                </div>
                {video.caption && <p className={captionStyle}>{video.caption}</p>}
            </div>
        );
    }

    // otherwise, use Mux player
    return (
        <div className={captionedVideoStyle}>
            <div
                style={{
                    width: "100%",
                    maxWidth: "calc(70vh * 16/9)",
                    aspectRatio: "16 / 9",
                    margin: "0 auto",
                }}
            >
                <MuxPlayer
                    src={finalSource}
                    metadata={{
                        video_title: video.caption || "Blog Video",
                    }}
                    style={{
                        width: "100%",
                        height: "100%",
                    }}
                />
            </div>
            {video.caption && <p className={captionStyle}>{video.caption}</p>}
        </div>
    );
}

export function VideoRow({ videos }: { videos: VideoBlock[] }) {
    const gridClasses =
        videos.length === 1
            ? "grid-cols-1"
            : videos.length === 2
              ? "grid-cols-1 sm:grid-cols-2"
              : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";

    return (
        <div className={`grid w-full max-w-3xl items-end gap-5 ${gridClasses}`}>
            {videos.map((video, index) => {
                return <CaptionedVideo key={index} video={video} />;
            })}
        </div>
    );
}

import { StaticImageData } from "next/image";

// BACKGROUNDS
import daisiesImg from "@/public/images/daisiesFlipped_50opacity.jpg";
import whiteRabbitImg from "@/public/images/white-rabbit.png";

// LINES
import dottedLineImg from "@/public/images/dotted-line-long.svg";
import handDrawnLineImg from "@/public/images/hand-drawn-line-long.svg";

// ICONS
import embroideredstarImg from "@/public/images/embroidered-star.png";
import ladybugImg from "@/public/images/ladybug.png";
import lunamothImg from "@/public/images/lunamoth.png";
import fishImg from "@/public/images/fish.png";
import bearImg from "@/public/images/bear.png";
import strawberryImg from "@/public/images/strawberry.png";
import instagramImg from "@/public/images/instagram.png";
import youtubeImg from "@/public/images/youtube.png";
import cdImg from "@/public/images/cd.png";
import emailImg from "@/public/images/email.png";

type InternalSource = {
    origin: "internal";
    note: string;
};

type ExternalSource = {
    origin: "external";
    url: string;
};

type ImageSource = InternalSource | ExternalSource;

export interface ImageAsset {
    src: StaticImageData;
    alt: string;
    source: ImageSource;
}

// BACKGROUNDS
export const daisies: ImageAsset = {
    src: daisiesImg,
    alt: "two white daisies with smaller purple blooms and surrounding greenery",
    source: {
        origin: "internal",
        note: "my personal stationery collection; artist unknown",
    },
};

export const whiteRabbit: ImageAsset = {
    src: whiteRabbitImg,
    alt: "black-and-white illustration of the Alice in Wonderland white rabbit in a checkered coat holding an umbrella, appearing to walk hurriedly through tall grass while checking his watch.",
    source: {
        origin: "external",
        url: "https://commons.wikimedia.org/wiki/File:De_Alice%27s_Abenteuer_im_Wunderland_Carroll_pic_02.jpg",
    },
};

// LINES
export const dottedLine: ImageAsset = {
    src: dottedLineImg,
    alt: "gray dotted line",
    source: {
        origin: "internal",
        note: "created by me",
    },
};

export const handDrawnLine: ImageAsset = {
    src: handDrawnLineImg,
    alt: "green wiggly hand-drawn line",
    source: {
        origin: "internal",
        note: "drawn by me",
    },
};

// ICONS
export const embroideredstar: ImageAsset = {
    src: embroideredstarImg,
    alt: "Silver embroidered star patch.",
    source: {
        origin: "external",
        url: "https://www.walmart.com/ip/Wrights-Iron-On-Appliques-3-Pkg-Silver-Metallic-Stars-Pk-3-Wrights/43984845",
    },
};

export const ladybug: ImageAsset = {
    src: ladybugImg,
    alt: "A red ladybug with black spots.",
    source: {
        origin: "external",
        url: "https://spectrum.ieee.org/microled-displays-could-show-up-in-products-as-soon-as-2020",
    },
};

export const lunamoth: ImageAsset = {
    src: lunamothImg,
    alt: "A bright green Luna moth with distinctive circular eyespots, long wing tails, and reddish-purple wing borders.",
    source: { origin: "external", url: "https://www.pinterest.com/pin/5066618328582739/" },
};

export const fish: ImageAsset = {
    src: fishImg,
    alt: "A fish with a silvery-grey body, a blue stripe, and yellow fins.",
    source: { origin: "external", url: "https://za.pinterest.com/pin/595741856993273761/" },
};

export const bear: ImageAsset = {
    src: bearImg,
    alt: "A brown teddy bear sitting on a white background, looking soft and cuddly.",
    source: {
        origin: "external",
        url: "https://www.macys.com/shop/product/aurora-large-bonny-bear-snuggly-plush-toy-tan-16?ID=17147799",
    },
};

export const strawberry: ImageAsset = {
    src: strawberryImg,
    alt: "A bright red strawberry with a green stem.",
    source: {
        origin: "external",
        url: "https://www.gardeningknowhow.com/edible/fruits/strawberry/growing-jewel-strawberries.htm",
    },
};

export const instagram: ImageAsset = {
    src: instagramImg,
    alt: "original retro Instagram app icon featuring a brown and beige Polaroid-style camera with a rainbow stripe",
    source: {
        origin: "external",
        url: "https://www.businessinsider.com/old-instagram-icon-youve-never-seen-2013-9",
    },
};

export const youtube: ImageAsset = {
    src: youtubeImg,
    alt: "original YouTube app icon featuring a brown stero television",
    source: {
        origin: "external",
        url: "https://www.reddit.com/r/nostalgia/comments/p50aa5/youtubes_old_logo/",
    },
};

export const cd: ImageAsset = {
    src: cdImg,
    alt: "silver CD with prism reflection",
    source: {
        origin: "external",
        url: "",
    },
};

export const email: ImageAsset = {
    src: emailImg,
    alt: "envelope icon with blue arrows indicating send/receive actions",
    source: {
        origin: "external",
        url: "",
    },
};

export const ImageSources = [
    // LINES
    // dottedLine,
    // handDrawnLine,
    // ICONS
    embroideredstar,
    ladybug,
    lunamoth,
    fish,
    bear,
    strawberry,
    instagram,
    youtube,
    cd,
    email,
];

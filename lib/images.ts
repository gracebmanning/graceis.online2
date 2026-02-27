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

// OTHER
import graceImg from "@/public/images/grace3-tape.png";

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
    alt: "Two daisies with white leaves and gold yellow centers stand tall; below them are green stems with smaller purple buds and other surrounding greenery.",
    source: {
        origin: "internal",
        note: "my personal stationery collection; artist unknown",
    },
};

export const whiteRabbit: ImageAsset = {
    src: whiteRabbitImg,
    alt: "Black-and-white illustration of the Alice in Wonderland white rabbit in a checkered coat, holding an umbrella under one arm and his watch in the other hand, nervously checking the time.",
    source: {
        origin: "external",
        url: "https://commons.wikimedia.org/wiki/File:De_Alice%27s_Abenteuer_im_Wunderland_Carroll_pic_02.jpg",
    },
};

// LINES
export const dottedLine: ImageAsset = {
    src: dottedLineImg,
    alt: "Gray dotted line.",
    source: {
        origin: "internal",
        note: "created by me",
    },
};

export const handDrawnLine: ImageAsset = {
    src: handDrawnLineImg,
    alt: "Green wiggly hand-drawn line.",
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
    alt: "Red ladybug with black spots, photographed from above.",
    source: {
        origin: "external",
        url: "https://spectrum.ieee.org/microled-displays-could-show-up-in-products-as-soon-as-2020",
    },
};

export const lunamoth: ImageAsset = {
    src: lunamothImg,
    alt: "Bright green Luna moth with its wings outstretched, showing off its long wing tails and reddish-purple wing borders, photographed from above.",
    source: { origin: "external", url: "https://www.pinterest.com/pin/5066618328582739/" },
};

export const fish: ImageAsset = {
    src: fishImg,
    alt: "Side profile of a fish with a silvery-grey body that fades to dark blue towards the top, and silver-yellow fins.",
    source: { origin: "external", url: "https://za.pinterest.com/pin/595741856993273761/" },
};

export const bear: ImageAsset = {
    src: bearImg,
    alt: "Brown teddy bear facing forward in a seated position, looking soft and cuddly.",
    source: {
        origin: "external",
        url: "https://www.macys.com/shop/product/aurora-large-bonny-bear-snuggly-plush-toy-tan-16?ID=17147799",
    },
};

export const strawberry: ImageAsset = {
    src: strawberryImg,
    alt: "Bright red strawberry with a green stem.",
    source: {
        origin: "external",
        url: "https://www.gardeningknowhow.com/edible/fruits/strawberry/growing-jewel-strawberries.htm",
    },
};

export const instagram: ImageAsset = {
    src: instagramImg,
    alt: "Original retro Instagram app icon featuring a brown and beige Polaroid-style camera with a rainbow stripe.",
    source: {
        origin: "external",
        url: "https://www.businessinsider.com/old-instagram-icon-youve-never-seen-2013-9",
    },
};

export const youtube: ImageAsset = {
    src: youtubeImg,
    alt: "Original YouTube app icon featuring a brown stero television.",
    source: {
        origin: "external",
        url: "https://www.reddit.com/r/nostalgia/comments/p50aa5/youtubes_old_logo/",
    },
};

export const cd: ImageAsset = {
    src: cdImg,
    alt: "Silver CD with prism reflection.",
    source: {
        origin: "external",
        url: "https://pngimg.com/image/102154",
    },
};

export const email: ImageAsset = {
    src: emailImg,
    alt: "Envelope icon with blue arrows indicating send/receive actions.",
    source: {
        origin: "external",
        url: "https://en.wikipedia.org/wiki/Outlook_Express#/media/File:Outlook_Express_XP_Icon.png",
    },
};

// OTHER
export const grace: ImageAsset = {
    src: graceImg,
    alt: "Grace, a white woman with blond hair, crouches down and smiles for a photo. She is wearing a navy blue top with light wash denim shorts, plus red cowboy boots, a red purse, and red sunglasses. A smiley face is drawn in white ink in the top left corner of the photo.",
    source: {
        origin: "internal",
        note: "this is just a photo of me",
    },
};

export const ImageSources = [
    // BACKGROUNDS
    daisies,
    whiteRabbit,

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

    // OTHER
    grace,
];

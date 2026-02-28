function getColor(type: string) {
    if (type === "featured") {
        return "tech:bg-tech-green whimsical:bg-whim-green-200 classic:bg-classic-green/50";
    } else if (type === "ongoing") {
        return "tech:bg-tech-blue whimsical:bg-whim-green-500 classic:bg-classic-red/20";
    } else if (type === "blog") {
        return "tech:bg-tech-gray/20 whimsical:bg-whim-brown-100 classic:bg-classic-gray/20";
    } else {
        return "tech:bg-tech-pink-100 whimsical:bg-whim-lavender-200 classic:bg-classic-blue/20";
    }
}

export default function Badge({ size, type, text }: { size: string; type: string; text: string }) {
    return (
        <p
            className={`w-fit px-2 py-0.5 rounded-lg font-medium ${size === "small" ? "text-base" : "text-lg"} ${getColor(type)}`}
        >
            {text}
        </p>
    );
}

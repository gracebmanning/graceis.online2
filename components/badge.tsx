function getColor(type: string) {
    if (type === "featured") {
        return "tech:bg-tech-blue whimsical:bg-whim-green-200 classic:bg-classic-blue";
    } else if (type === "ongoing") {
        return "bg:bg-tech-green whimsical:bg-whim-green-500 classic:bg-classic-green";
    } else {
        return "tech:bg-tech-pink-100 whimsical:bg-whim-lavender-200 classic:bg-classic-red";
    }
}

export default function Badge({ size, type }: { size: string; type: string }) {
    return (
        <p
            className={`px-1 py-0.5 rounded-lg font-medium ${size === "small" ? "text-base" : "text-lg"} ${getColor(type)}`}
        >
            {type}
        </p>
    );
}

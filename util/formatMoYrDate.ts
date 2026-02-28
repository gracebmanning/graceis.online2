export const formatMoYrDate = (d: string | Date) => {
    const date = new Date(d);
    return date.toLocaleDateString("en-US", { month: "long", year: "numeric", timeZone: "UTC" });
};

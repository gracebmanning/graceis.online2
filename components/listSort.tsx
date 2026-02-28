export function ListSort({
    sortOrder,
    setSortOrder,
}: {
    sortOrder: string;
    setSortOrder: (value: string) => void;
}) {
    return (
        <select
            onChange={(e) => setSortOrder(e.target.value)}
            value={sortOrder}
            className="w-fit h-[29.33px] px-1 py-0.5 bg-background/50 font-body border rounded-sm classic:border-classic-gray hover:cursor-pointer"
        >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
        </select>
    );
}

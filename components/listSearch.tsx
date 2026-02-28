export function ListSearch({
    searchInput,
    setSearchInput,
    handleKeyPress,
    handleSearch,
}: {
    searchInput: string;
    setSearchInput: (value: string) => void;
    handleKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    handleSearch: () => void;
}) {
    return (
        <div className="w-fit flex flex-row justify-start items-center gap-2">
            <input
                type="text"
                placeholder="Search titles..."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                onKeyDown={handleKeyPress}
                className="px-1 py-0.5 rounded-sm border border-foreground"
            />
            <button
                onClick={handleSearch}
                className="px-1 py-0.5 rounded-sm border hover:cursor-pointer transition-all
                tech:border-none tech:bg-tech-pink-200/90 tech:hover:bg-tech-pink-300
                whimsical:border-none whimsical:bg-whim-green-400 whimsical:hover:bg-whim-green-500
                 classic:border-classic-gray/90 classic:bg-classic-gray/20 classic:hover:bg-classic-gray/50 classic:shadow-sm"
            >
                Search
            </button>
        </div>
    );
}

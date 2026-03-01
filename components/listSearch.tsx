import { SearchButton } from "./buttons";

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
            <SearchButton handleSearch={handleSearch} />
        </div>
    );
}

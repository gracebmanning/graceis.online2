export function ListFilter({
    filters,
    activeFilter,
    onFilterChange,
}: {
    filters: string[];
    activeFilter: string | null;
    onFilterChange: (filter: string) => void;
}) {
    return (
        <div className="w-full flex flex-row justify-start items-baseline gap-2">
            <p>filter:</p>
            <ul className="flex flex-row justify-start items-center flex-wrap gap-2">
                {filters.map((filter, index) => {
                    return (
                        <li
                            key={index}
                            onClick={() => onFilterChange(filter)}
                            className={`px-1 py-0.5 border rounded-sm classic:shadow-sm border-foreground hover:bg-foreground hover:text-background hover:cursor-pointer transition-colors duration-300 ${activeFilter === filter ? "bg-foreground text-background" : "bg-background text-foreground"}`}
                        >
                            {filter}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

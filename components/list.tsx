"use client";

import { useState, useMemo } from "react";
import { BlogPost, Project, Tag } from "@/lib/sanityTypes";
import { BlogTile, ProjectTile } from "./tiles";
import { ListFilter } from "./listFilter";
import { ListSearch } from "./listSearch";
import { ListSort } from "./listSort";

export function List({
    items,
    tags,
    type,
}: {
    items: BlogPost | Project;
    tags: Tag[];
    type: "blog" | "projects";
}) {
    const [sortOrder, setSortOrder] = useState("newest");
    const [searchInput, setSearchInput] = useState("");
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedTag, setSelectedTag] = useState<string | null>(null);

    // get array out of JSON Object structure
    const itemsArray = Object.values(items);
    const tagsArray = Object.values(tags).map((tag) => tag.title);

    // Sort items based on featured status then selected order
    const sortedItems = useMemo(() => {
        const sortableItems = [...itemsArray];
        return sortableItems.sort((a, b) => {
            // If a is featured, a.featured - b.featured will be 1 - 0 = 1 (a comes after b) or 1 - 1 = 0
            const featuredComparison = (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
            if (featuredComparison !== 0) {
                return featuredComparison;
            }
            // If featured status is the same, then sort by date
            let dateA: number;
            let dateB: number;
            if (type === "blog") {
                dateA = new Date(a.publishedAt).getTime();
                dateB = new Date(b.publishedAt).getTime();
            } else {
                dateA = new Date(a.date).getTime();
                dateB = new Date(b.date).getTime();
            }
            return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
        });
    }, [itemsArray, sortOrder, type]);

    const handleSearchInputChange = (value: string) => {
        setSearchInput(value);
        // Immediately reset search filter when input is empty
        if (value === "") {
            setSearchQuery("");
        }
    };

    // Function to handle search
    const handleSearch = () => {
        setSearchQuery(searchInput);
    };

    // Function to handle key press
    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    };

    // Function to handle tag click
    const handleTagClick = (tag: string) => {
        setSelectedTag((prevTag) => (prevTag === tag ? null : tag)); // Deselect if same tag clicked, otherwise select new tag
    };

    const filteredItems = useMemo(() => {
        return sortedItems.filter((item) => {
            const matchesSearch =
                item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                (type === "projects" &&
                    item.description?.toLowerCase().includes(searchQuery.toLowerCase()));

            let matchesTag = null;
            matchesTag = selectedTag
                ? item.tags && item.tags.some((postTagRef: Tag) => postTagRef.title === selectedTag)
                : true; // If no tag selected, all items match

            return matchesSearch && matchesTag;
        });
    }, [sortedItems, searchQuery, selectedTag, type]);

    return (
        <div className="w-full flex flex-col justify-center items-start">
            <div className="w-full flex flex-col justify-center items-start gap-2 pb-2 border-b border-b-foreground">
                <div className="flex flex-row justify-start items-center gap-4">
                    <ListSearch
                        searchInput={searchInput}
                        setSearchInput={handleSearchInputChange}
                        handleKeyPress={handleKeyPress}
                        handleSearch={handleSearch}
                    />
                    <ListSort sortOrder={sortOrder} setSortOrder={setSortOrder} />
                </div>
                <ListFilter
                    filters={tagsArray}
                    activeFilter={selectedTag}
                    onFilterChange={handleTagClick}
                />
            </div>
            <div className="w-full flex flex-col">
                {filteredItems.length > 0 ? (
                    filteredItems.map((item, index) => {
                        if (type === "blog") {
                            return <BlogTile key={index} post={item} />;
                        } else {
                            return <ProjectTile key={index} project={item} />;
                        }
                    })
                ) : (
                    <p>No items found.</p>
                )}
            </div>
        </div>
    );
}

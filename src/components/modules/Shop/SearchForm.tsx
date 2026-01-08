"use client"
import { useRouter } from 'next/navigation';
import React, { useRef } from 'react';

const SearchForm = () => {
    const router = useRouter();
    const inputRef = useRef<HTMLInputElement>(null);

    const handleSearchSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const query = inputRef.current?.value?.trim();
        if (!query) return;

        router.push(`/shop?search=${encodeURIComponent(query)}`);
    };
    return (
        <form className="flex" onSubmit={handleSearchSubmit}>
            <input ref={inputRef} type="search" placeholder="Search product..."
                className="bg-white px-6 py-3 text-base border-none outline-none focus:ring-0 placeholder:text-black/50 rounded-l-md" />
            <button type="submit"
                className="bg-secondary text-white px-6 h-full text-base rounded-r-md font-semibold">Search</button>
        </form>
    );
};

export default SearchForm;
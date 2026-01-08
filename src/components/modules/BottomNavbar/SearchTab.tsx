"use client";
import { Search, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useRef } from "react";
interface IProps {
    tab: string | null;
    setTab: React.Dispatch<React.SetStateAction<string | null>>;
}
const SearchTab: React.FC<IProps> = ({ tab, setTab }) => {
    const isSearchTabOpen = tab === "Search";
    const router = useRouter();
    const inputRef = useRef<HTMLInputElement>(null);

    const handleSearchSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const query = inputRef.current?.value?.trim();
        if (!query) return;

        router.push(`/shop?search=${encodeURIComponent(query)}`);
        setTab(null);
    };
    return (
        <section className={`lg:hidden fixed left-0 ${isSearchTabOpen ? "top-0" : "-top-full"} w-full h-screen duration-500 bg-white z-40`}>
            <div className="w-5/6 py-5 mx-auto">

                <div className="flex justify-between items-center mb-5">
                    <span className="text-black/70 text-xs">WHAT YOU ARE LOOKING FOR?</span>
                    <X className='text-black absolute right-5 cursor-pointer' onClick={() => setTab(null)} />
                </div>

                <form
                    className="flex justify-between border-b border-gray-500 pb-1"
                    onSubmit={handleSearchSubmit}
                >
                    <input
                        ref={inputRef}
                        type="search"
                        className="border-none placeholder:text-black/70 w-5/6 focus:outline-0"
                        placeholder="Search products..."
                    />
                    <button type="submit">
                        <Search />
                    </button>
                </form>




            </div>

        </section>
    );
};

export default SearchTab;
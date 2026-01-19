import { X } from "lucide-react";
import { SearchByCategory } from "./SearchByCategory";
import { useState } from "react";

type FilterProps = {
    minPrice: number;
    maxPrice: number;
    setMinPrice: (v: number) => void;
    setMaxPrice: (v: number) => void;
    setIsFilterOpen: (v: boolean) => void;
};

const Filter = ({
    minPrice,
    maxPrice,
    setMinPrice,
    setMaxPrice,
    setIsFilterOpen
}: FilterProps) => {

    const categories = ["shoe", "headphone", "watch", "laptop", "phone"];
    const [draftMin, setDraftMin] = useState(minPrice);
    const [draftMax, setDraftMax] = useState(maxPrice);
    return (
        <div className="flex flex-col space-y-5 relative">

            {/* CATEGORY */}
            <div className="flex flex-col space-y-3 border-b border-gray-300 pb-5">
                <p className="text-lg uppercase font-semibold">Categories</p>

                {categories.map((category, i) => (
                    <SearchByCategory key={i} category={category}>
                        <p className="capitalize cursor-pointer text-[17px]">
                            {category}
                        </p>
                    </SearchByCategory>
                ))}
            </div>

            {/* PRICE FILTER */}
            <div className="flex flex-col space-y-3 border-b border-gray-300 pb-5">
                <p className="text-lg uppercase font-semibold">Price</p>

                <div className="flex items-center space-x-3">
                    <input
                        type="number"
                        value={draftMin}
                        onChange={(e) => setDraftMin(Number(e.target.value))}
                        onBlur={() => setMinPrice(draftMin)}
                        placeholder="Min"
                        className="w-full border border-gray-300 px-2 py-1 rounded focus:outline-0"
                    />

                    <span>-</span>

                    <input
                        type="number"
                        value={draftMax}
                        onChange={(e) => setDraftMax(Number(e.target.value))}
                        onBlur={() => setMaxPrice(draftMax)}
                        placeholder="Max"
                        className="w-full border border-gray-300 px-2 py-1 rounded focus:outline-0"
                    />
                </div>
            </div>

            {/* CLOSE FILTER BUTTON */}
            <button className="absolute top-1 right-0 cursor-pointer" onClick={() => setIsFilterOpen(false)}>
                <X />
            </button>

        </div>
    );
};

export default Filter;

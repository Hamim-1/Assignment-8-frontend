"use client";

import { useRouter } from "next/navigation";
import { JSX } from "react";

interface ClientCategoryProps {
    children: JSX.Element;
    category: string;
    setTab?: React.Dispatch<React.SetStateAction<string | null>>;
}

export const SearchByCategory = ({ children, category, setTab }: ClientCategoryProps) => {
    const router = useRouter();
    const handleClick = () => {
        if (setTab) {
            setTab(null)
        }
        router.push(`shop?category=${category}`);
    }
    return (
        <div onClick={handleClick}>
            {children}
        </div>
    );
};

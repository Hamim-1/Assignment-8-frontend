"use client";

import { useRouter } from "next/navigation";
import { JSX } from "react";

interface ClientCategoryProps {
    children: JSX.Element;
    id: string;
}

export const ProductDetailsAction = ({ children, id }: ClientCategoryProps) => {
    const router = useRouter();
    const handleClick = () => {

        router.push(`products/${id}`);
    }
    return (
        <div onClick={handleClick}>
            {children}
        </div>
    );
};

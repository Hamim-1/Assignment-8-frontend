"use client"
import { useCart } from "@/context/CartContext";
import { getCookie } from "@/services/auth/tokenHandlers";
import React, { ReactNode } from "react";
import { toast } from "react-hot-toast";

interface RemoveFromWishlistProps {
    children: ReactNode;
    productId: string;
}

const RemoveFromCartWrapper: React.FC<RemoveFromWishlistProps> = ({
    children,
    productId,
}) => {
    const { decWishlist } = useCart();
    const handleRemoveFromCart = async () => {

        try {
            const token = await getCookie("accessToken");

            const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/carts/${productId}`, {
                method: "DETELE",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });

            if (!res.ok) {
                throw new Error("Failed to remove from cart");
            }
            decWishlist();
            toast.success("Removed From cart");
        } catch (error: any) {
            console.log(error);

            const message = error?.message || "Failed to remove from cart"

            toast.error(message);
        }
    };

    return (
        <span onClick={handleRemoveFromCart} >
            {children}
        </span>
    );
};

export default RemoveFromCartWrapper;

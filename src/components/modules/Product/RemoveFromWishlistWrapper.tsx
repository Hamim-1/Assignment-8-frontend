"use client"
import { useAuth } from "@/context/AuthContext";
import { useCart } from "@/context/CartContext";
import { getCookie } from "@/services/auth/tokenHandlers";
import React, { ReactNode } from "react";
import { toast } from "react-hot-toast";

interface RemoveFromWishlistProps {
    children: ReactNode;
    productId: string;
}

const RemoveFromWishlistWrapper: React.FC<RemoveFromWishlistProps> = ({
    children,
    productId,
}) => {
    const { decWishlist } = useCart();
    const handleRemoveFromWishlist = async () => {

        try {
            const token = await getCookie("accessToken");

            const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/users/wishlist/${productId}`, {
                method: "DETELE",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });

            if (!res.ok) {
                throw new Error("Failed to remove rom wishlist");
            }
            decWishlist();
            toast.success("Removed From wishlist");
        } catch (error: any) {
            const message = error?.message || "Failed to remove from wishlist"

            toast.error(message);
        }
    };

    return (
        <span onClick={handleRemoveFromWishlist} >
            {children}
        </span>
    );
};

export default RemoveFromWishlistWrapper;

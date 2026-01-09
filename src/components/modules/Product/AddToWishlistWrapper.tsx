"use client"
import { useAuth } from "@/context/AuthContext";
import { useCart } from "@/context/CartContext";
import { getCookie } from "@/services/auth/tokenHandlers";
import React, { ReactNode } from "react";
import { toast } from "react-hot-toast";

interface AddToWishlistWrapperProps {
    children: ReactNode;
    productId: string;
}

const AddToWishlistWrapper: React.FC<AddToWishlistWrapperProps> = ({
    children,
    productId,
}) => {
    const { user } = useAuth();
    const { incWishlist } = useCart();
    const handleAddToWishlist = async () => {
        if (!user) {
            toast.error("Please login to add items to wishlist");
            return;
        }

        try {
            const token = await getCookie("accessToken");

            const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/users/wishlist/${productId}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });
            const result = await res.json();

            if (!res.ok) {
                console.log(result.message);

                if (result.message === "This product is already in your Wishlist") {
                    throw new Error("This product is already in your Wishlist");
                }
                throw new Error("Add to wishlist failed");
            }
            incWishlist();
            toast.success("Added to wishlist");
        } catch (error: any) {
            const message = error?.message || "Failed to add to wishlist"

            toast.error(message);
        }
    };

    return (
        <span onClick={handleAddToWishlist} >
            {children}
        </span>
    );
};

export default AddToWishlistWrapper;

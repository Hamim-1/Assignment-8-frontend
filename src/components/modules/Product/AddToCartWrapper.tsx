"use client"
import { useAuth } from "@/context/AuthContext";
import { useCart } from "@/context/CartContext";
import { getCookie } from "@/services/auth/tokenHandlers";
import React, { ReactNode } from "react";
import { toast } from "react-hot-toast";
import { log } from "util";

interface AddToCartWrapperProps {
    children: ReactNode;
    productId: string;
}

const AddToCartWrapper: React.FC<AddToCartWrapperProps> = ({
    children,
    productId,
}) => {
    const { user } = useAuth();
    const { incCart } = useCart();
    const handleAddToCart = async () => {
        if (!user) {
            toast.error("Please login to add items to cart");
            return;
        }

        try {
            const token = await getCookie("accessToken");

            const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/carts/${productId}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });
            const result = await res.json();

            if (!res.ok) {

                if (result.message === "This product is already in cart") {
                    throw new Error("This product is already in your cart");
                }
                throw new Error("Add to cart failed");
            }
            incCart();
            toast.success("Added to cart");
        } catch (error: any) {
            const message = error?.message || "Failed to add to cart"

            toast.error(message);
        }
    };

    return (
        <span onClick={handleAddToCart} >
            {children}
        </span>
    );
};

export default AddToCartWrapper;

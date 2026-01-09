"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { useAuth } from "@/context/AuthContext";
import { getCookie } from "@/services/auth/tokenHandlers";

interface CartContextType {
    cartCount: number;
    wishlistCount: number;
    initCounts: () => Promise<void>;
    incCart: () => void;
    decCart: () => void;
    incWishlist: () => void;
    decWishlist: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
    const { user, isLoading } = useAuth();

    const [cartCount, setCartCount] = useState(0);
    const [wishlistCount, setWishlistCount] = useState(0);
    const [initialized, setInitialized] = useState(false);

    const initCounts = async () => {
        if (!user || initialized) return;

        try {
            const token = await getCookie("accessToken");
            if (!token) return;

            const [cartRes, wishlistRes] = await Promise.all([
                fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/carts`, {
                    headers: { Authorization: `Bearer ${token}` },
                    cache: "no-store",
                }),
                fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/users/wishlist`, {
                    headers: { Authorization: `Bearer ${token}` },
                    cache: "no-store",
                }),
            ]);

            if (cartRes.ok) {
                const cartData = await cartRes.json();
                setCartCount(cartData?.data?.items?.length ?? 0);
            }

            if (wishlistRes.ok) {
                const wishlistData = await wishlistRes.json();
                setWishlistCount(wishlistData?.data?.wishlist?.length ?? 0);
            }

            setInitialized(true);
        } catch (error) {
            console.error("Failed to init cart/wishlist counts", error);
        }
    };

    useEffect(() => {
        if (!isLoading) {
            if (!user) {
                // logout / unauthenticated
                setCartCount(0);
                setWishlistCount(0);
                setInitialized(false);
            } else {
                initCounts(); // 👈 ONE time only
            }
        }
    }, [user, isLoading]);

    return (
        <CartContext.Provider
            value={{
                cartCount,
                wishlistCount,
                initCounts,
                incCart: () => setCartCount(c => c + 1),
                decCart: () => setCartCount(c => Math.max(0, c - 1)),
                incWishlist: () => setWishlistCount(c => c + 1),
                decWishlist: () => setWishlistCount(c => Math.max(0, c - 1)),
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within CartProvider");
    }
    return context;
}

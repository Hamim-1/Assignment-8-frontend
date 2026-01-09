"use client";
import WishlistCard from "@/components/shared/WishlistCard";
import { Heart } from "lucide-react";
import Link from "next/link";
import { IProduct, User } from "@/types/admin";
import { requireAuth } from "@/lib/auth";
import { useEffect, useState } from "react";
import LoadingOverlay from "@/components/shared/Loading";
import { StringifyOptions } from "node:querystring";
import { useAuth } from "@/context/AuthContext";



const Wishlist = () => {
    let { user } = useAuth();


    if (user?.wishlist.length === 0) {
        return (
            <div className="max-h-[800px] flex items-center justify-center py-20">
                <div className="text-center">
                    <Heart size={64} className="mx-auto mb-4 text-gray-300" />
                    <h3 className="text-2xl font-semibold text-gray-800 mb-2">Your wishlist is empty</h3>
                    <p className="text-gray-600 mb-6">Start adding products you love to your wishlist!</p>
                    <Link
                        href="/shop"
                        className="bg-primary text-white px-8 py-3 rounded-md hover:bg-secondary transition inline-block font-semibold"
                    >
                        Continue Shopping
                    </Link>
                </div>
            </div>
        );
    }


    return (
        <div className="max-h-screen overflow-auto flex flex-col gap-y-5">
            {user?.wishlist.map((item: string, i: number) => (
                <WishlistCard key={i} id={item} />
            ))}
        </div>
    );
};

export default Wishlist;
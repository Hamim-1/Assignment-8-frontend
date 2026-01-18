"use client"
import toast from 'react-hot-toast';
import CartItems from './CartItems';
import { getCookie } from '@/services/auth/tokenHandlers';
import { useCart } from '@/context/CartContext';
import { useEffect, useState } from 'react';
import { IProduct } from '@/types/admin';
import ProcessToCheckout from './ProcessToChecout';
import CartProductCardSkeleton from '../Product/CartProductSkeleton';
import OrderSummarySkeleton from './OrderSummarySkeleton';

export type ICartProduct = Omit<IProduct, "description" | "categroy">;
export interface ICartItem {
    quantity: number;
    product: ICartProduct;
};
const Cart = () => {
    const [cartItems, setCartItems] = useState<ICartItem[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);
    const { cartCount } = useCart();
    useEffect(() => {
        const fetchCart = async () => {
            setLoading(true);
            setError(false);

            try {
                const token = await getCookie("accessToken");
                const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/carts`, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (!res.ok) throw new Error("Failed to fetch cart items");

                const result = await res.json();
                setCartItems(result.data.items || []);
            } catch (err) {
                setError(true);
                toast.error("Failed to load cart items");
            } finally {
                setLoading(false);
            }
        };

        fetchCart();
    }, [cartCount]);

    if (loading) {
        return (
            <div className="w-full flex flex-col lg:flex-row lg:gap-x-5 gap-y-5 lg:gap-y-0">

                <div className="w-[97%] xs:w-80 md:w-full lg:w-[72%] mx-auto flex flex-col space-y-5">
                    {[1, 2, 3].map((i) => (
                        <CartProductCardSkeleton key={i} />
                    ))}
                </div>


                <OrderSummarySkeleton />
            </div>
        );
    }

    if (error || cartItems.length === 0) {
        return (
            <p className="text-center text-gray-500 text-xl my-20">
                {error
                    ? "Failed to load cart items. Please try again."
                    : "Your cart is empty."}
            </p>
        );
    }
    return (
        <div className="flex flex-col lg:flex-row lg:gap-x-5 gap-y-5 lg:gap-y-0">
            <CartItems cartItems={cartItems} />
            <ProcessToCheckout cartItems={cartItems} />
        </div>
    );
};

export default Cart;
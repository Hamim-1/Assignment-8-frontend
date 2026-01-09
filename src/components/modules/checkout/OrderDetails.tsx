"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ICartItem } from "../cart/Cart";
import { getCookie } from "@/services/auth/tokenHandlers";
import toast from "react-hot-toast";

const OrderDetails = () => {
    const router = useRouter();

    const [cartItems, setCartItems] = useState<ICartItem[]>([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [products, setProducts] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const storedCart = localStorage.getItem("cartItems");

        if (!storedCart) {
            router.back();
            return;
        }

        const parsedCart = JSON.parse(storedCart);

        if (!parsedCart.length) {
            router.back();
            return;
        }

        setCartItems(parsedCart);
    }, [router]);

    useEffect(() => {
        if (!cartItems.length) return;

        const productIds: string[] = [];

        const total = cartItems.reduce((acc, item) => {
            const discountPrice =
                item.product.price -
                (item.product.price * item.product.discount) / 100;

            productIds.push(item.product._id);
            return acc + item.quantity * discountPrice;
        }, 0);

        setProducts(productIds);
        setTotalPrice(total);
    }, [cartItems]);


    const handlePayNow = async () => {
        try {
            setLoading(true);
            const token = await getCookie("accessToken");
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/order`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                    products
                }),
            });

            const data = await res.json();

            if (!res.ok || !data.success) {
                throw new Error(data.message || "Order failed");
            }

            localStorage.removeItem("cartItems");
            window.location.href = data.data.payment;
        } catch (error: any) {
            toast(error.message || "Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full lg:w-2/5 xl:w-1/3 flex flex-col space-y-5 mx-auto rounded-lg">
            <div className="w-full bg-black/20 px-5 py-3 rounded">
                <p className="font-semibold">Your Order</p>
            </div>

            <div className="flex flex-col space-y-4 border border-gray-300 p-5 rounded">
                <h2 className="text-lg font-medium border-b border-gray-300 pb-3">
                    OUR STORE
                </h2>

                <div className="flex flex-col space-y-5 border-b border-gray-300 pb-3">
                    {cartItems.map((item) => {
                        const discountPrice =
                            item.product.price -
                            (item.product.price * item.product.discount) / 100;

                        return (
                            <div key={item.product._id} className="flex justify-between">
                                <div className="flex space-x-5">
                                    <p className="text-base font-medium">
                                        {item.product.title}
                                    </p>
                                    <p className="font-medium text-base">
                                        x{item.quantity}
                                    </p>
                                </div>
                                <p className="font-medium">${discountPrice.toFixed(2)}</p>
                            </div>
                        );
                    })}

                    <div className="flex justify-between font-medium">
                        <p>SUBTOTAL</p>
                        <p>${totalPrice.toFixed(2)}</p>
                    </div>
                </div>

                <div className="flex justify-between border-b border-gray-300 pb-3 font-medium">
                    <p>SHIPPING</p>
                    <p>FREE</p>
                </div>

                <div className="flex justify-between border-b border-gray-300 pb-3 text-lg font-medium">
                    <p>TOTAL</p>
                    <p>${totalPrice.toFixed(2)}</p>
                </div>

                <div className="flex space-x-3 items-center">
                    <input type="checkbox" id="agr" />
                    <label htmlFor="agr">
                        Agree to our{" "}
                        <span className="text-primary cursor-pointer">
                            terms & conditions
                        </span>
                    </label>
                </div>

                <button
                    onClick={handlePayNow}
                    disabled={loading}
                    className="bg-primary px-4 py-2 border border-primary hover:bg-transparent text-white hover:text-primary rounded-md duration-300 font-semibold w-full disabled:opacity-50 cursor-pointer"
                >
                    {loading ? "Processing..." : "Pay Now"}
                </button>
            </div>
        </div>
    );
};

export default OrderDetails;

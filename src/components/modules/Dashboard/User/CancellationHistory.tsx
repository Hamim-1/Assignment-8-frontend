"use client";

import OrderCard from "@/components/shared/OrderCard";
import { useAuth } from "@/context/AuthContext";
import { useEffect, useState } from "react";
import ProductCardSkeleton from "../../Product/ProductCardSkeleton";


const OrderHistory = () => {
    const { user } = useAuth();

    const [orders, setOrders] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!user?._id) return;

        const fetchData = async () => {
            try {
                setLoading(true);
                setError(null);

                const res = await fetch(
                    `${process.env.NEXT_PUBLIC_API_BASE_URL}/orders/cancelled/${user._id}`
                );

                if (!res.ok) {
                    throw new Error("Failed to fetch cancelled orders");
                }

                const result = await res.json();
                setOrders(result.data);
            } catch (err: any) {
                setError(err.message || "Something went wrong");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [user?._id]);
    console.log(orders);

    return (
        <div
            className="w-full flex flex-col mx-auto space-y-5"
            id="my-order-section"
        >

            {loading && <ProductCardSkeleton />}


            {!loading && error && (
                <p className="text-center text-red-500 pt-10">
                    {error}
                </p>
            )}


            {!loading && !error && orders.length === 0 && (
                <p className="text-center text-gray-500 pt-10">
                    You have no cancelled orders yet.
                </p>
            )}


            {!loading && !error && orders.length > 0 && (
                orders.map((order) => (
                    <OrderCard key={order._id} order={order} />
                ))
            )}
        </div>
    );
};

export default OrderHistory;

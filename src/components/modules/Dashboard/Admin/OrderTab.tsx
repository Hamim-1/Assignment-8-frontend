'use client';

import React, { useEffect, useState } from 'react';
import { IOrder, OrderStatus } from '@/types/admin';
import { getCookie } from '@/services/auth/tokenHandlers';
import toast from 'react-hot-toast';

const orderStatuses: OrderStatus[] = [
    'Pending',
    'Processing',
    'Shipped',
    'Delivered',
    'Cancelled',
];

const OrdersTab: React.FC = () => {
    const [orders, setOrders] = useState<IOrder[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchOrders = async () => {
            const token = await getCookie('accessToken');

            if (!token) {
                toast.error('No Token Received');
                setLoading(false);
                return;
            }

            try {
                const res = await fetch(
                    `${process.env.NEXT_PUBLIC_API_BASE_URL}/orders`,
                    {
                        method: 'GET',
                        headers: {
                            Authorization: `Bearer ${token}`,
                            'Content-Type': 'application/json',
                        },
                    }
                );

                const result = await res.json();

                if (!res.ok) {
                    throw new Error(result.message || 'Failed to fetch orders');
                }

                setOrders(result.data);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchOrders();
    }, []);



    if (loading) return <p>Loading orders...</p>;
    if (error) return <p className="text-red-500">{error}</p>;
    const truncateText = (text: string, maxLength = 15) => {
        if (!text) return '';
        return text.length > maxLength
            ? text.slice(0, maxLength) + '...'
            : text;
    };


    return (
        <div>
            <h2 className="text-2xl font-bold mb-6">Orders</h2>

            <div className="bg-white rounded-lg shadow overflow-auto">
                <table className="w-full">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Order ID</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Customer</th>

                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200">
                        {orders.map(order => (
                            <tr key={order._id} className="hover:bg-gray-50">
                                <td className="px-6 py-4 font-medium">#{order._id}</td>
                                <td
                                    className="px-6 py-4 max-w-[180px] truncate cursor-pointer"
                                    title={order.user}
                                >
                                    {truncateText(order.user, 8)}
                                </td>


                                <td className="px-6 py-4 text-sm text-gray-500">{order.createdAt.split('T')[0]}</td>
                                <td className="px-6 py-4">
                                    <select
                                        value={order.status}
                                        className="px-3 py-1 rounded-full text-xs font-semibold border-0 cursor-pointer "
                                    >
                                        {orderStatuses.map(status => (
                                            <option key={status} value={status}>
                                                {status}
                                            </option>
                                        ))}
                                    </select>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OrdersTab;

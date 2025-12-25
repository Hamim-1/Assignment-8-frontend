// components/admin/OrdersTab.tsx

'use client';

import React, { useState } from 'react';
import { Order, OrderStatus } from '@/types/admin';

const OrdersTab: React.FC = () => {
    const orders = [
        {
            id: 101,
            customer: 'John Doe',
            product: 'Wireless Headphones',
            total: 89.99,
            status: 'Pending',
            date: '2024-12-10'
        },
        {
            id: 102,
            customer: 'Jane Smith',
            product: 'Smart Watch',
            total: 199.99,
            status: 'Processing',
            date: '2024-12-11'
        },
        {
            id: 103,
            customer: 'Bob Johnson',
            product: 'Leather Backpack',
            total: 79.99,
            status: 'Shipped',
            date: '2024-12-12'
        },
        {
            id: 104,
            customer: 'Alice Brown',
            product: 'Running Shoes',
            total: 129.99,
            status: 'Delivered',
            date: '2024-12-09'
        },
    ];
    const orderStatuses = [
        'Pending',
        'Processing',
        'Shipped',
        'Delivered',
        'Cancelled'
    ];



    const getStatusColor = (status: OrderStatus): string => {
        const colors: Record<OrderStatus, string> = {
            Pending: 'bg-yellow-100 text-yellow-800',
            Processing: 'bg-blue-100 text-blue-800',
            Shipped: 'bg-purple-100 text-purple-800',
            Delivered: 'bg-green-100 text-green-800',
            Cancelled: 'bg-red-100 text-red-800',
        };
        return colors[status] || 'bg-gray-100 text-gray-800';
    };

    return (
        <div>
            <h2 className="text-2xl font-bold mb-6">Orders</h2>
            <div className="bg-white rounded-lg shadow overflow-auto">
                <table className="w-full overflow-x-auto">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Order ID</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Customer</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Product</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Total</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {orders.map(order => (
                            <tr key={order.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap font-medium">#{order.id}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{order.customer}</td>
                                <td className="px-6 py-4">{order.product}</td>
                                <td className="px-6 py-4 whitespace-nowrap font-semibold">${order.total}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.date}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <select
                                        value={order.status}
                                        className={`px-3 py-1 rounded-full text-xs font-semibold border-0 cursor-pointer`}
                                    >
                                        {orderStatuses.map(status => (
                                            <option key={status} value={status}>{status}</option>
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
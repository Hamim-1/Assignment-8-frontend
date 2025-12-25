// types/admin.ts

export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: File | string;
    quantity: number;
}

export interface Order {
    id: number;
    customer: string;
    product: string;
    total: number;
    status: 'Pending' | 'Processing' | 'Shipped' | 'Delivered' | 'Cancelled';
    date: string;
}

export interface User {
    id: number;
    name: string;
    email: string;
    status: 'Active' | 'Blocked';
    joined: string;
}

export type OrderStatus = 'Pending' | 'Processing' | 'Shipped' | 'Delivered' | 'Cancelled';
export type UserStatus = 'Active' | 'Blocked';

export interface MenuItem {
    id: string;
    label: string;
    icon: React.ComponentType<{ size?: number }>;
}
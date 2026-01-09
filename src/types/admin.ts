export type Role = "ADMIN" | "USER";


export interface IProduct {
    _id: string;
    title: string;
    price: number;
    description: string;
    category: string;
    image: File | string;
    quantity: number;
    discount: number;
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
    _id: string;
    name: string;
    email: string;
    status: 'ACTIVE' | 'BLOCKED';
    role: Role;
    joined: string;
    wishlist: string[]
}

export type OrderStatus = 'Pending' | 'Processing' | 'Shipped' | 'Delivered' | 'Cancelled';
export type UserStatus = 'Active' | 'Blocked';

export interface MenuItem {
    id: string;
    label: string;
    icon: React.ComponentType<{ size?: number }>;
}
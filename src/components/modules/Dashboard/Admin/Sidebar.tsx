// components/admin/Sidebar.tsx

'use client';

import React from 'react';
import { ChevronRight, Home, Package, ShoppingCart, Users } from 'lucide-react';
import { MenuItem } from '@/types/admin';
import Link from 'next/link';
import Image from 'next/image';

interface SidebarProps {
    activeTab: string;
    setActiveTab: (tab: string) => void;
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab, isOpen, setIsOpen }) => {
    const menuItems: MenuItem[] = [
        { id: 'products', label: 'Products', icon: Package },
        { id: 'orders', label: 'Orders', icon: ShoppingCart },
        { id: 'users', label: 'Users', icon: Users },
    ];

    return (
        <>
            {/* Overlay - only mobile */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 md:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}

            <div
                className={`
          fixed md:static top-0 left-0 h-screen w-64 bg-primary text-white p-6 z-50 
          transform transition-transform duration-300 
          ${isOpen ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0
        `}
            >
                <Link href="/">
                    <p className="text-3xl font-semibold text-white py-4">
                        RAF<span className="text-secondary">CART</span>
                    </p>
                </Link>

                <nav>
                    {[
                        { id: "products", label: "Products", icon: require("lucide-react").Package },
                        { id: "orders", label: "Orders", icon: require("lucide-react").ShoppingCart },
                        { id: "users", label: "Users", icon: require("lucide-react").Users },
                    ].map((item) => {
                        const Icon = item.icon;
                        return (
                            <button
                                key={item.id}
                                onClick={() => {
                                    setActiveTab(item.id);
                                    setIsOpen(false); // close sidebar on mobile after click
                                }}
                                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-colors ${activeTab === item.id
                                    ? "bg-white text-primary"
                                    : "hover:bg-white/10"
                                    }`}
                            >
                                <Icon size={20} />
                                <span>{item.label}</span>
                            </button>
                        );
                    })}
                </nav>
            </div>
        </>
    );
};

export default Sidebar;
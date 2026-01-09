'use client';
import React from 'react';
import { LogOut, Package, ShoppingCart, Users } from 'lucide-react';
import Link from 'next/link';

interface SidebarProps {
    activeTab: string;
    handleTabChange: (tab: string) => void;
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, handleTabChange, isOpen, setIsOpen }) => {
    const menuItems = [
        { id: 'products', label: 'Products', icon: <Package /> },
        { id: 'orders', label: 'Orders', icon: <ShoppingCart /> },
        { id: 'users', label: 'Users', icon: <Users role='ADMIN' /> },
        { id: 'logout', label: 'Logout', icon: <LogOut /> },
    ];

    return (
        <>

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
                    {menuItems.map((item) => {
                        return (
                            <button
                                key={item.id}
                                onClick={() => {
                                    handleTabChange(item.id);
                                    setIsOpen(false);
                                }}
                                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-colors ${activeTab === item.id
                                    ? "bg-white text-primary"
                                    : "hover:bg-white/10"
                                    }`}
                            >
                                {item.icon}
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
'use client';

import OrdersTab from '@/components/modules/Dashboard/Admin/OrderTab';
import ProductsTab from '@/components/modules/Dashboard/Admin/ProductsTab';
import Sidebar from '@/components/modules/Dashboard/Admin/Sidebar';
import UsersTab from '@/components/modules/Dashboard/Admin/UsersTab';
import { ChevronRight, Home, PanelRightClose } from 'lucide-react';

import { useState } from 'react';


export default function AdminDashboard() {
    const [activeTab, setActiveTab] = useState<string>('products');
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="flex bg-gray-100 min-h-screen  max-h-screen">
            <div className="md:hidden p-4 bg-primary text-white flex items-center gap-3">
                <PanelRightClose size={28} onClick={() => setIsOpen(true)} className='cursor-pointer' />
            </div>
            <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} isOpen={isOpen} setIsOpen={setIsOpen} />

            <div className="flex-1 p-8 custom-container overflow-auto">
                <div className='flex items-center pb-5 text-primary'>
                    <Home className="cursor-pointer text-sm" />
                    <ChevronRight className="cursor-pointer text-xs mt-1" />
                    <p className="cursor-pointer " >Admin Dashboard</p>
                </div>
                {activeTab === 'products' && <ProductsTab />}
                {activeTab === 'orders' && <OrdersTab />}
                {activeTab === 'users' && <UsersTab />}
            </div>
        </div>
    )
};
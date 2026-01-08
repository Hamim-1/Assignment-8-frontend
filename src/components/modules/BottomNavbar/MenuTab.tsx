import React from 'react';
import { X } from 'lucide-react';

interface IProps {
    tab: string | null;
    setTab: React.Dispatch<React.SetStateAction<string | null>>;
}


const MenuTab: React.FC<IProps> = ({ tab, setTab }) => {
    const isMenuTabOpen = tab === "Menu";
    return (
        <section className={`lg:hidden fixed top-0 ${isMenuTabOpen ? "left-0" : "-left-full"} xs:w-[320px] w-full duration-700 z-40`}>
            <div className="w-full bg-white h-screen max-h-screen overflow-auto border-r border-gray-400">
                <div className="bg-primary w-full p-3 h-14 relative flex items-center">
                    <span className="absolute left-1/2 -translate-x-1/2 text-white font-medium text-lg">Menu</span>
                    <X className='text-white absolute right-5 cursor-pointer' onClick={() => setTab(null)} />
                </div>

                <div className="flex items-center py-3 px-4 border-b border-gray-300 cursor-pointer hover:bg-black/20 duration-200"
                >
                    <h2>Home</h2>
                </div>

                <div className="flex items-center py-3 px-4 border-b border-gray-300 cursor-pointer hover:bg-black/20 duration-200"
                >
                    <h2>Shop</h2>
                </div>

                <div className="flex justify-between space-x-5 items-center py-3 px-4 pr-7 border-b border-gray-300 cursor-pointer hover:bg-black/20 duration-200"
                >
                    <h2>My Account</h2>
                    <i className="fa fa-angle-down ml-2 text-black/50 duration-200" id="extended-arr-1"></i>
                </div>

                <div className="flex flex-col justify-center h-0 overflow-hidden opacity-0 duration-300"
                    id="my-account-extended-btn-section">
                    <div className="flex items-center border-b border-gray-300 py-3 px-4 cursor-pointer hover:bg-black/20 duration-200"
                    >
                        <h2 className="px-10">My Account</h2>
                    </div>

                    <div
                        className="flex items-center border-b border-gray-300 py-3 px-4 cursor-pointer hover:bg-black/20 duration-200">
                        <h2 className="px-10">Login</h2>
                    </div>

                    <div
                        className="flex items-center border-b border-gray-300 py-3 px-4 cursor-pointer hover:bg-black/20 duration-200">
                        <h2 className="px-10" >Register</h2>
                    </div>

                    <div
                        className="flex items-center border-b border-gray-300 py-3 px-4 cursor-pointer hover:bg-black/20 duration-200">
                        <h2 className="px-10">Fotget Password</h2>
                    </div>

                </div>

                <div className="flex justify-between space-x-5 items-center py-3 px-4 pr-7 border-b border-gray-300 cursor-pointer hover:bg-black/20 duration-200"
                >
                    <h2>Other Pages</h2>
                    <i className="fa fa-angle-down ml-2 text-black/50 duration-200" id="extended-arr-2"></i>
                </div>

                <div className="flex flex-col justify-center h-0 overflow-hidden opacity-0 duration-300"
                    id="other-pages-extended-btn-section">
                    <div className="flex items-center border-b border-gray-300 py-3 px-4 cursor-pointer hover:bg-black/20 duration-200"
                    >
                        <h2 className="px-10">About Us</h2>
                    </div>

                    <div className="flex items-center border-b border-gray-300 py-3 px-4 cursor-pointer hover:bg-black/20 duration-200"
                    >
                        <h2 className="px-10">Contact Us</h2>
                    </div>

                    <div className="flex items-center border-b border-gray-300 py-3 px-4 cursor-pointer hover:bg-black/20 duration-200"
                    >
                        <h2 className="px-10">Track Order</h2>
                    </div>

                    <div className="flex items-center border-b border-gray-300 py-3 px-4 cursor-pointer hover:bg-black/20 duration-200"
                    >
                        <h2 className="px-10">FAQ</h2>
                    </div>

                    <div className="flex items-center border-b border-gray-300 py-3 px-4 cursor-pointer hover:bg-black/20 duration-200"
                    >
                        <h2 className="px-10">404</h2>
                    </div>

                    <div className="flex items-center border-b border-gray-300 py-3 px-4 cursor-pointer hover:bg-black/20 duration-200"
                    >
                        <h2 className="px-10">Checkout</h2>
                    </div>

                    <div className="flex items-center border-b border-gray-300 py-3 px-4 cursor-pointer hover:bg-black/20 duration-200"
                    >
                        <h2 className="px-10">Payment</h2>
                    </div>

                    <div className="flex items-center border-b border-gray-300 py-3 px-4 cursor-pointer hover:bg-black/20 duration-200"
                    >
                        <h2 className="px-10">Order Complete</h2>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default MenuTab;
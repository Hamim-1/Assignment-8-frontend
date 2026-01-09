import React from 'react';
import { X } from 'lucide-react';
import Link from 'next/link';

interface IProps {
    tab: string | null;
    setTab: React.Dispatch<React.SetStateAction<string | null>>;
}


const MenuTab: React.FC<IProps> = ({ tab, setTab }) => {
    const isMenuTabOpen = tab === "Menu";
    const navItems = [
        {
            href: "/",
            label: "Home"
        },
        {
            href: "/shop",
            label: "Shop"
        },
        {
            href: "/contact",
            label: "Contact"
        },
        {
            href: "/about",
            label: "About Us"
        },
    ]
    return (
        <section className={`lg:hidden fixed top-0 ${isMenuTabOpen ? "left-0" : "-left-full"} xs:w-[320px] w-full duration-700 z-40`}>
            <div className="w-full bg-white h-screen max-h-screen overflow-auto border-r border-gray-400">
                <div className="bg-primary w-full p-3 h-14 relative flex items-center">
                    <span className="absolute left-1/2 -translate-x-1/2 text-white font-medium text-lg">Menu</span>
                    <X className='text-white absolute right-5 cursor-pointer' onClick={() => setTab(null)} />
                </div>

                {
                    navItems.map(item => (
                        <Link href={item.href} key={item.label} className="flex items-center py-3 px-4 border-b border-gray-300 cursor-pointer hover:bg-black/20 duration-200"
                        >
                            <h2>{item.label}</h2>
                        </Link>
                    ))
                }


            </div>
        </section>
    );
};

export default MenuTab;
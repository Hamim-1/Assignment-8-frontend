"use client"
import { useState } from "react";
import { List, Menu, Search, ShoppingCart } from "lucide-react";
import MenuTab from "../modules/BottomNavbar/MenuTab";
import CartTab from "../modules/BottomNavbar/CartTab";
import CategoryTab from "../modules/BottomNavbar/CategoryTab";
import SearchTab from "../modules/BottomNavbar/SearchTab";

const BottomNavBar = () => {
    const [openTab, setOpenTab] = useState<null | string>(null);
    const navItems = [
        { label: "Menu", icon: <Menu size={20} /> },
        { label: "Categorise", icon: <List size={20} /> },
        { label: "Search", icon: <Search size={20} /> },
        { label: "Cart", icon: <ShoppingCart size={20} /> },
    ]
    return (
        <>
            <section className="z-20 lg:hidden bg-red-400">
                <div
                    className="w-full bg-white fixed bottom-0 flex justify-between items-center py-2 border-t border-gray-300 z-30 md:px-28 px-3 xs:px-10 sm:px-20">
                    {
                        navItems.map(item => (
                            <div key={item.label} className="flex flex-col items-center cursor-pointer" onClick={() => setOpenTab(item.label)}>
                                {item.icon}
                                <button>{item.label}</button>
                            </div>
                        ))
                    }
                </div>
            </section>

            <MenuTab tab={openTab} setTab={setOpenTab} />
            <CategoryTab tab={openTab} setTab={setOpenTab} />
            <SearchTab tab={openTab} setTab={setOpenTab} />
            <CartTab tab={openTab} setTab={setOpenTab} />

            {
                openTab &&
                <div className="fixed top-0 left-0 w-full h-screen bg-black/50 z-30" onClick={() => setOpenTab(null)}>

                </div>
            }
        </>
    );
};

export default BottomNavBar;
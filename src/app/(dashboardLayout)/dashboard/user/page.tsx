"use client";

import CancellationHistory from "@/components/modules/Dashboard/User/CancellationHistory";
import ChangePassword from "@/components/modules/Dashboard/User/ChangePassword";
import Dashboardnavigation from "@/components/modules/Dashboard/User/Dashboardnavigation";
import Logout from "@/components/modules/Dashboard/User/Logout";
import ManageAccount from "@/components/modules/Dashboard/User/ManageAccount";
import ManageAddress from "@/components/modules/Dashboard/User/ManageAddress";
import OrderHistory from "@/components/modules/Dashboard/User/OrderHistory";
import PorfileInfo from "@/components/modules/Dashboard/User/PorfileInfo";
import Wishlist from "@/components/modules/Dashboard/User/Wishlist";
import { ChevronRight, Home, Menu, ShieldUser } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";


export default function Dashboard() {
    const searchParams = useSearchParams();
    const tab = searchParams.get("tab") || "account";
    const [showMobileNav, setShowMobileNav] = useState(false);
    const formatBreadcrumb = tab
        .split("-")
        .map(word => word[0].toUpperCase() + word.slice(1))
        .join(" ");


    const renderTab = () => {
        switch (tab) {
            case "manage-account":
                return <ManageAccount />;
            case "profile-info":
                return <PorfileInfo />;
            case "manage-address":
                return <ManageAddress />;
            case "change-password":
                return <ChangePassword />;
            case "order-history":
                return <OrderHistory />;
            case "cancellations-history":
                return <CancellationHistory />;
            case "wishlist":
                return <Wishlist />;
            case "logout":
                return <Logout />;
            default:
                return <ManageAccount />;
        }
    };
    useEffect(() => {
        setShowMobileNav(false);
    }, [tab])
    return (
        <div className="custom-container mt-10 overflow-hidden min-h-[70vh] lg:min-h-auto">
            {/* breadcumb */}
            <div className="flex text-primary items-center space-x-2 mb-5 font-medium">
                <Home className="cursor-pointer text-sm" />
                <ChevronRight className="cursor-pointer text-xs mt-1" />
                <p className="cursor-pointer text-black" id="my-account-page-routing-page-name">My Account</p>
                <div className={`space-x-2 items-center ${tab ? "flex" : "hidden"}`} id="account-page-routing-page-name">
                    <ChevronRight className="cursor-pointer text-xs mt-1" />
                    <p className="cursor-pointer text-black">{formatBreadcrumb}</p>
                </div>
            </div>

            <div className="flex flex-col space-y-5 lg:space-y-0 lg:flex-row lg:gap-x-5 relative">

                {/* MOBILE NAV */}
                <div
                    className={`
          absolute left-0 z-20 lg:hidden flex flex-col space-y-5 bg-white shadow-md 
          w-[300px] p-5 duration-500
          ${showMobileNav ? "top-24 opacity-100" : "-top-[1000px] opacity-0 pointer-events-none"}
        `}
                >
                    <Dashboardnavigation />
                </div>

                {/* LEFT SIDE */}
                <div className="w-full lg:w-[27%] xl:w-1/4 flex flex-col space-y-5 m-0">

                    {/* Profile section */}
                    <div className="w-full flex justify-between items-center bg-white shadow-md p-5">

                        <div className="flex space-x-5 items-center">
                            <div className="bg-primary rounded-full p-1.5 text-white">
                                <ShieldUser size={30} className="rounded-full" />
                            </div>
                            <div className="flex flex-col">
                                <p>Hello,</p>
                                <p className="text-base sm:text-lg font-semibold">Rahim Ahmed</p>
                            </div>
                        </div>

                        {/* Menu button */}
                        <div
                            className="lg:hidden px-2 py-1 border border-primary rounded cursor-pointer"
                            onClick={() => setShowMobileNav(!showMobileNav)}
                        >
                            <Menu className="hover:text-primary text-lg duration-300 text-gray-500" />
                        </div>
                    </div>

                    {/* Desktop navigation */}
                    <div className="hidden lg:flex flex-col space-y-5 bg-white shadow-md h-fit p-5">
                        <Dashboardnavigation />
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="w-full lg:w-[73%] xl:w-3/4">
                    {renderTab()}
                </div>
            </div>
        </div>
    );
}

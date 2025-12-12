"use client";
import { Gift, Heart, IdCard, LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation';



const Dashboardnavigation = () => {

    const router = useRouter();
    const accountMenu = [
        [
            { label: "Manage-account", href: "manage-account", icon: <IdCard /> },
            { label: "Profile Information", href: "profile-info", icon: "" },
            { label: "Manage Address", href: "manage-address", icon: "" },
            { label: "Change Password", href: "change-password", icon: "" },
        ],

        [
            { label: "My Order History", href: "order-history", icon: <Gift /> },
            { label: "My Cancellations", href: "cancellations-history", icon: "" },
        ],

        [
            { label: "My Wishlist", href: "wishlist", icon: <Heart /> },
        ],

        [
            { label: "Log Out", href: "logout", icon: <LogOut /> },
        ],
    ];


    const changeTab = (value: string) => {
        router.push(`/dashboard/user?tab=${value}`);
    };
    return (
        <div>
            {accountMenu.map((section, sectionIndex) => {

                return (
                    <div
                        key={sectionIndex}
                        className="flex border-b items-start border-gray-300 pb-5"
                    >
                        <div className="flex flex-col space-y-2">
                            {section.map((item, i) => {
                                return (
                                    <div
                                        onClick={() => changeTab(item.href)}
                                        key={i}
                                        className={`flex space-x-3 cursor-pointer hover:text-primary duration-200 items-center ${i === 0 && "pt-3"}`}

                                    >
                                        {item.icon ? item.icon : <p className="w-6"></p>}
                                        <p>{item.label}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Dashboardnavigation;
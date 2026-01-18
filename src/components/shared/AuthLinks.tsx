"use client"
import { useAuth } from "@/context/AuthContext";
import { LayoutDashboard, UserRound } from "lucide-react";
import Link from "next/link";

const AuthLinks = () => {
    const { user, isLoading } = useAuth();
    if (isLoading) {
        return <div className="size-5 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
    }
    return (
        <>
            {
                user ?
                    <button className="bg-white lg:bg-primary text-primary lg:text-white rounded-lg px-5 py-2.5 font-semibold tracking-wider">
                        <Link className="flex space-x-2 h-fit items-center" href={`dashboard/${(user.role).toLocaleLowerCase()}`} >
                            <LayoutDashboard />
                            <span>Dashboard</span>
                        </Link>
                    </button>
                    :
                    <button className="bg-white lg:bg-primary text-primary lg:text-white rounded-lg px-5 py-2.5 font-semibold tracking-wider">
                        <Link className="flex space-x-2 items-center" href="/login" >
                            <UserRound />
                            <span>
                                Login
                            </span>
                        </Link>
                    </button>
            }
        </>
    );
};

export default AuthLinks;
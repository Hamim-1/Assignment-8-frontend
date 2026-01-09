"use client"
import { useAuth } from "@/context/AuthContext";
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
                        <Link className="p-5" href={`dashboard/${(user.role).toLocaleLowerCase()}`} >Dashboard</Link>
                    </button>
                    :
                    <button className="bg-white lg:bg-primary text-primary lg:text-white rounded-lg px-5 py-2.5 font-semibold tracking-wider">
                        <Link className="p-5" href="/login" >Login</Link>
                    </button>
            }
        </>
    );
};

export default AuthLinks;
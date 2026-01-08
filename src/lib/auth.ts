import { getCookie } from "@/services/auth/tokenHandlers";
import { Role } from "@/types/admin";
import { redirect } from "next/navigation";

export async function requireAuth(requiredRole?: Role) {
    const token = await getCookie("accessToken");

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/me`, {
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json",
        },
        cache: "no-store",
    });


    if (!res.ok) {
        redirect("/login");
    }

    const result = await res.json();
    const user = result.data;
    if (requiredRole && user.role !== requiredRole) {
        redirect("/");
    }

    return user;
}

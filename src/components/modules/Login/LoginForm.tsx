"use client";

import { useAuth } from "@/context/AuthContext";
import { loginUser } from "@/services/auth/login";
import { useRouter, useSearchParams } from "next/navigation";
import { useActionState, useEffect } from "react";
import toast from "react-hot-toast";
const LoginForm = () => {
    const { setUser } = useAuth();
    const [state, formAction, isPending] = useActionState(loginUser, null);
    const router = useRouter();
    const searchParams = useSearchParams()
    const redirectTo = searchParams.get('redirect') || `/dashboard/${state?.data?.user?.role}`;
    const getFieldError = (fieldName: string) => {

        if (state && state.errors) {
            const error = state.errors.find((err: any) => err.field === fieldName);
            return error?.message;

        } else {
            return null;
        }
    }


    useEffect(() => {
        if (state?.success) {
            setUser(state.data.user)
            router.push(redirectTo.toLocaleLowerCase())
            toast.success(state?.message);
        }

        if (state?.message && !state.success) {
            toast.error(state.message);
        }
    }, [state]);

    return (
        <form action={formAction} className="flex flex-col space-y-6">
            <div className="flex flex-col space-y-2">
                <label className="font-medium text-gray-700">Email</label>
                <input
                    type="text"
                    id="email"
                    name="email"
                    className="border border-gray-300 focus:border-primary focus:ring-primary focus:ring-1 rounded-lg px-4 py-2 outline-none bg-white transition-all"

                />
                {
                    getFieldError("email") && <p className="text-red-500 text-sm">{getFieldError("email")}</p>
                }
            </div>

            <div className="flex flex-col space-y-2">
                <label className="font-medium text-gray-700">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    className="border border-gray-300 focus:border-primary focus:ring-primary focus:ring-1 rounded-lg px-4 py-2 outline-none bg-white transition-all"

                />
                {
                    getFieldError("password") && <p className="text-red-500 text-sm">{getFieldError("password")}</p>
                }
            </div>

            {
                isPending ?
                    <button className="w-full bg-primary/50 text-white rounded-lg py-3 font-semibold text-lg transition-all cursor-pointer">
                        Logging in...
                    </button>
                    :
                    <button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white rounded-lg py-3 font-semibold text-lg transition-all cursor-pointer">
                        LOGIN
                    </button>
            }
        </form>

    );
};

export default LoginForm;
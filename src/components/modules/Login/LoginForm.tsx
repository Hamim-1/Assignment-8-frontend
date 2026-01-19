"use client";

import { useAuth } from "@/context/AuthContext";
import { loginUser } from "@/services/auth/login";
import { useRouter, useSearchParams } from "next/navigation";
import { useActionState, useEffect, useState } from "react";
import toast from "react-hot-toast";

const LoginForm = () => {
    const { setUser } = useAuth();
    const [state, formAction, isPending] = useActionState(loginUser, null);
    const router = useRouter();
    const searchParams = useSearchParams();
    const redirectTo = searchParams.get('redirect') || `/dashboard/${state?.data?.user?.role}`;

    // Local state to store form values
    const [formValues, setFormValues] = useState({ email: "", password: "" });

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
            setUser(state.data.user);
            router.push(redirectTo.toLocaleLowerCase());
            toast.success(state?.message);
        }

        if (state?.message && !state.success) {
            toast.error(state.message);
        }
    }, [state]);

    // Function to fill demo credentials
    const fillDemoCredentials = (type: "user" | "admin") => {
        if (type === "user") {
            setFormValues({ email: "user@gmail.com", password: "Pass123!" });
        } else {
            setFormValues({ email: "admin@gmail.com", password: "Pass123!" });
        }
    };

    return (
        <>
            <form action={formAction} className="flex flex-col space-y-6">
                <div className="flex flex-col space-y-2">
                    <label className="font-medium text-gray-700">Email</label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        value={formValues.email}
                        onChange={(e) => setFormValues({ ...formValues, email: e.target.value })}
                        className="border border-gray-300 focus:border-primary focus:ring-primary focus:ring-1 rounded-lg px-4 py-2 outline-none bg-white transition-all"
                    />
                    {getFieldError("email") && <p className="text-red-500 text-sm">{getFieldError("email")}</p>}
                </div>

                <div className="flex flex-col space-y-2">
                    <label className="font-medium text-gray-700">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formValues.password}
                        onChange={(e) => setFormValues({ ...formValues, password: e.target.value })}
                        className="border border-gray-300 focus:border-primary focus:ring-primary focus:ring-1 rounded-lg px-4 py-2 outline-none bg-white transition-all"
                    />
                    {getFieldError("password") && <p className="text-red-500 text-sm">{getFieldError("password")}</p>}
                </div>

                {isPending ? (
                    <button className="w-full bg-primary/50 text-white rounded-lg py-3 font-semibold text-lg transition-all cursor-pointer">
                        Logging in...
                    </button>
                ) : (
                    <button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white rounded-lg py-3 font-semibold text-lg transition-all cursor-pointer">
                        LOGIN
                    </button>
                )}
            </form>

            {/* Demo Login Buttons */}
            <div className="flex space-x-4 mt-4">
                <button
                    type="button"
                    onClick={() => fillDemoCredentials("user")}
                    className="flex-1 bg-blue-500 hover:bg-blue-600 text-white rounded-lg py-2 font-semibold transition-all"
                >
                    Login as User
                </button>
                <button
                    type="button"
                    onClick={() => fillDemoCredentials("admin")}
                    className="flex-1 bg-red-500 hover:bg-red-600 text-white rounded-lg py-2 font-semibold transition-all"
                >
                    Login as Admin
                </button>
            </div>
        </>
    );
};

export default LoginForm;

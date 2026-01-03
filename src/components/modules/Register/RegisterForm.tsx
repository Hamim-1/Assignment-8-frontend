"use client"
import { registerUser } from "@/services/auth/register";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useActionState, useEffect } from "react";
import toast from "react-hot-toast";

const RegisterForm = () => {
    const [state, formAction, isPending] = useActionState(registerUser, null);
    const router = useRouter();
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
            router.push("/login")
            toast.success(state?.message);
        }
        if (state?.message && !state.success) {
            toast.error(state.message);
        }
    }, [state]);
    return (
        <form className="flex flex-col space-y-6" action={formAction}>
            <div className="flex flex-col space-y-2">
                <label className="font-medium text-gray-700">Name</label>
                <input
                    type="text"
                    name="name"
                    className="border border-gray-300 focus:border-primary focus:ring-primary focus:ring-1 rounded-lg px-4 py-2 outline-none bg-white transition-all"

                />
                {
                    getFieldError("name") && <p className="text-red-500 text-sm">{getFieldError("name")}</p>
                }
            </div>

            <div className="flex flex-col space-y-2">
                <label className="font-medium text-gray-700">Email</label>
                <input
                    type="text"
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
                    name="password"
                    className="border border-gray-300 focus:border-primary focus:ring-primary focus:ring-1 rounded-lg px-4 py-2 outline-none bg-white transition-all"

                />
                {
                    getFieldError("password") && <p className="text-red-500 text-sm">{getFieldError("password")}</p>
                }
            </div>

            <div className="flex flex-col space-y-2">
                <label className="font-medium text-gray-700">Confirm Password</label>
                <input
                    type="password"
                    name="confirmPassword"
                    className="border border-gray-300 focus:border-primary focus:ring-primary focus:ring-1 rounded-lg px-4 py-2 outline-none bg-white transition-all"

                />
                {
                    getFieldError("confirmPassword") && <p className="text-red-500 text-sm">{getFieldError("confirmPassword")}</p>
                }
            </div>

            <div className="flex items-center space-x-2">
                <input
                    name="agree"
                    type="checkbox"
                    className="cursor-pointer focus:ring-0 text-primary border-primary"
                />
                <label htmlFor="agree" className="text-gray-700 text-sm">
                    I agree to the{" "}
                </label>
                <Link href="terms-and-conditions"
                    className="text-primary hover:underline cursor-pointer"
                >
                    terms & conditions
                </Link>
            </div>

            {
                isPending ?
                    <button className="w-full bg-primary/50 text-white rounded-lg py-3 font-semibold text-lg transition-all cursor-pointer">
                        Creating account…
                    </button>
                    :
                    <button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white rounded-lg py-3 font-semibold text-lg transition-all cursor-pointer">
                        Create Account
                    </button>
            }
        </form>

    );
};

export default RegisterForm;
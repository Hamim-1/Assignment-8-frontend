"use client"
import { updatePassoword } from "@/services/auth/changePassword";
import { useActionState, useEffect } from "react";
import toast from "react-hot-toast";

const ChangePassword = () => {
    const [state, formAction, isPending] = useActionState(updatePassoword, null);
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
            toast.success(state?.message);
        }

        if (state?.message && !state.success) {
            toast.error(state.message);
        }
    }, [state]);
    return (
        <form className="p-5 shadow-md h-fit" action={formAction}>
            <p className="text-lg font-semibold pb-5">Change Password</p>
            <div className="w-full md:w-1/2 grid grid-cols-1 gap-5">

                <div className="flex flex-col space-y-1">
                    <label className="cursor-pointer">Current Password</label>
                    <input type="text"
                        name="password"
                        className="border border-gray-300 focus:border-gray-400 focus:outline-none focus:ring-gray-400 rounded px-5 py-2 cursor-pointer" />
                    {getFieldError("password") && <p className="text-red-500 text-sm">{getFieldError("password")}</p>}
                </div>

                <div className="flex flex-col space-y-1">
                    <label className="cursor-pointer">New Password</label>
                    <input type="text"
                        name="newPassword"
                        className="border border-gray-300 focus:border-gray-400 focus:outline-none focus:ring-gray-400 rounded px-5 py-2 cursor-pointer" />
                    {getFieldError("newPassword") && <p className="text-red-500 text-sm">{getFieldError("newPassword")}</p>}
                </div>

                <div className="flex flex-col space-y-1">
                    <label className="cursor-pointer">Confirm Password</label>
                    <input type="text"
                        name="confirmPassword"
                        className="border border-gray-300 focus:border-gray-400 focus:outline-none focus:ring-gray-400 rounded px-5 py-2 cursor-pointer" />
                    {getFieldError("confirmPassword") && <p className="text-red-500 text-sm">{getFieldError("confirmPassword")}</p>}
                </div>

            </div>

            <div className="pt-8">
                {
                    isPending ?
                        <button
                            className="w-fit uppercase bg-primary/50 text-white duration-300 px-5 py-2 border border-primary rounded font-semibold cursor-not-allowed">updating password...</button>
                        :
                        <button type="submit"
                            className="w-fit uppercase bg-primary hover:bg-transparent text-white hover:text-primary duration-300 px-5 py-2 border border-primary rounded font-semibold cursor-pointer">save
                            changes</button>
                }
            </div>
        </form>
    );
};

export default ChangePassword;
"use server"
import { cookies } from "next/headers";
import z from "zod"
import { getCookie } from "./tokenHandlers";

const updatePasswordZodSchema = z.object({
    password: z.string()
        .trim()
        .min(1, { message: "Password is required" }),
    newPassword: z.string()
        .trim()
        .min(1, { message: "Password is required" })
        .min(6, {
            error: "Password must be at least 6 characters long",
        })
        .regex(/^(?=.*[A-Z])/, {
            message: "Password must contain at least 1 uppercase letter.",
        })
        .max(100, {
            error: "Password must be at most 100 characters long",
        }),
    confirmPassword: z.string()
        .trim()
        .min(1, { message: "Confirm password is required" })
})
    .refine((data) => data.newPassword === data.confirmPassword, {
        message: "Password do not match",
        path: ["confirmPassword"]

    });
export const updatePassoword = async (_currentState: any, formData: any): Promise<any> => {

    try {

        const updatePasswordData = {
            password: formData.get("password"),
            newPassword: formData.get("newPassword"),
            confirmPassword: formData.get("confirmPassword"),
        }
        const validatedFields = updatePasswordZodSchema.safeParse(updatePasswordData);


        if (!validatedFields.success) {
            return {
                success: false,
                errors: validatedFields.error.issues.map(issue => {
                    return {
                        field: issue.path[0],
                        message: issue.message,
                    }
                })
            }
        }
        const token = await getCookie('accessToken');
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/change-password`, {
            method: "POST",
            body: JSON.stringify(updatePasswordData),
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        });
        const result = await res.json();

        return result;

    } catch (error) {
        return { error: "Failed to update Password" }
    }
}
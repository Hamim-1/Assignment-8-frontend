"use server"
import { cookies } from "next/headers";
import z from "zod"

const loginValidationZodSchema = z.object({
    email: z
        .string()
        .trim()
        .min(1, { message: "Email is required" })
        .email({
            message: "Email is not valid",
        }),
    password: z.string()
        .trim()
        .min(1, { message: "Password is required" })
        .min(6, {
            error: "Password must be at least 6 characters long",
        })
        .max(100, {
            error: "Password must be at most 100 characters long",
        }),
});
export const loginUser = async (_currentState: any, formData: any): Promise<any> => {

    try {
        const loginData = {
            email: formData.get("email"),
            password: formData.get("password"),
        }
        const validatedFields = loginValidationZodSchema.safeParse(loginData);

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
        const res = await fetch("https://assignment-8-backend-omega.vercel.app/api/v1/auth/login", {
            method: "POST",
            body: JSON.stringify(loginData),
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include"
        });
        const result = await res.json();

        if (result.success) {
            const cookieStore = await cookies();
            cookieStore.set({
                name: "accessToken",
                value: result.accessToken,
                httpOnly: true,
                sameSite: "strict",
                path: "/",
            });
            cookieStore.set({
                name: "refreshToken",
                value: result.refreshToken,
                httpOnly: true,
                sameSite: "strict",
                path: "/",
            });
        }

        return result;

    } catch (error) {
        return { error: "Login failed" }
    }
}
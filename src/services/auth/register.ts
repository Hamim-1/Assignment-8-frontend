"use server"
import z from "zod";
import { da } from "zod/locales";

const registerUserZodSchema = z.object({
    name: z.string()
        .trim()
        .min(1, { message: "Name is required" })
        .min(3, {
            error: "Name must be at least 3 characters long",
        })
        .max(100, {
            error: "Name must be at most 100 characters long",
        }),
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
        .regex(/^(?=.*[A-Z])/, {
            message: "Password must contain at least 1 uppercase letter.",
        })
        .max(100, {
            error: "Password must be at most 100 characters long",
        }),
    confirmPassword: z.string()
        .trim()
        .min(1, { message: "confirm password is required" })
})
    .refine((data) => data.password === data.confirmPassword, {
        message: "Password do not match",
        path: ["confirmPassword"]
    })

export const registerUser = async (_currentState: any, formData: any): Promise<any> => {
    try {
        const registerData = {
            name: formData.get("name"),
            email: formData.get("email"),
            password: formData.get("password"),
            confirmPassword: formData.get("confirmPassword"),
        }
        const validatedFields = registerUserZodSchema.safeParse(registerData);

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
        const res = await fetch("https://assignment-8-backend-omega.vercel.app/api/v1/users/register", {
            method: "POST",
            body: JSON.stringify(registerData),
            headers: {
                "Content-Type": "application/json"
            }
        });
        const result = await res.json();


        return result;

    } catch (error) {
        return { error: "Login failed" }
    }




}
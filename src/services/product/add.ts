'use server';

import { cookies } from 'next/headers';
import { z } from 'zod';

const addProductValidationZodSchema = z.object({
    title: z.string().trim().min(1, { message: "Title is required" }),
    description: z.string().trim().min(1, { message: "Description is required" }).min(10, { message: "Description must be al least 10 character" }),
    price: z.number().positive({ message: "Price must be positive" }),
    discount: z.number().min(0).optional(),
    quantity: z.number().int().min(0, { message: "Quantity cannot be negative" }),
    category: z.string().trim().min(1, { message: "Category is required" }),
});

export const addProduct = async (_currentState: any, formData: FormData) => {
    try {
        const cookieStore = await cookies();
        const cookieHeader = cookieStore.get("accessToken")?.value
            ? `accessToken=${cookieStore.get("accessToken")!.value}`
            : "";
        const file = formData.get("file") as File | null;

        const payload = {
            title: formData.get("title"),
            description: formData.get("description"),
            price: Number(formData.get("price")),
            discount: Number(formData.get("discount")),
            quantity: Number(formData.get("quantity")),
            category: formData.get("category")
        }


        const validatedPayload = addProductValidationZodSchema.safeParse(payload);

        if (!validatedPayload.success) {
            return {
                success: false,
                errors: validatedPayload.error.issues.map((issue) => ({
                    field: issue.path[0],
                    message: issue.message,
                })),
            };
        }


        if (file?.size === 0 || !(file instanceof File)) {
            return { success: false, errors: [{ field: "file", message: "Image is required" }] };
        }


        const newFormData = new FormData();
        newFormData.append("data", JSON.stringify(validatedPayload.data));
        newFormData.append("file", file);

        const res = await fetch("https://assignment-8-backend-omega.vercel.app/api/v1/products", {
            method: "POST",
            body: newFormData,
            headers: {
                "Cookie": cookieHeader,
            },
        });

        const result = await res.json();
        return result;
    } catch (error) {
        console.error(error);
        return { success: false, error: "Failed to add product" };
    }
};

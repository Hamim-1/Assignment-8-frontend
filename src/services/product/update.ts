'use server';

import { IProduct } from '@/types/admin';
import { cookies } from 'next/headers';
import { boolean, z } from 'zod';


const updateProductValidationSchema = z.object({
    title: z.string().trim().min(1, { message: "Title cannot be empty" }).optional(),
    description: z.string().trim().min(10, { message: "Description must be at least 10 characters" }).optional(),
    price: z.number().positive({ message: "Price must be positive" }).optional(),
    discount: z.number().min(0).optional(),
    quantity: z.number().int().min(0, { message: "Quantity cannot be negative" }).optional(),
    category: z.string().trim().min(1, { message: "Category cannot be empty" }).optional(),
});

export const updateProduct = async (_currentState: any, formData: FormData) => {
    try {
        const productJson = formData.get("product") as string;
        const product = JSON.parse(productJson) as IProduct;

        const cookieStore = await cookies();
        const cookieHeader = cookieStore.get("accessToken")?.value
            ? `accessToken=${cookieStore.get("accessToken")!.value}`
            : "";

        const keys: (keyof IProduct)[] = [
            "title",
            "description",
            "price",
            "discount",
            "quantity",
            "category",
        ];

        const payload: Partial<IProduct> = {};

        for (const key of keys) {
            const value = formData.get(key);
            const oldValue = product[key];
            const convertedValue = typeof oldValue === "number" ? oldValue.toString() : oldValue;
            if (value !== null && value !== convertedValue) {

                if (key === "price" || key === "discount" || key === "quantity") {
                    payload[key] = Number(value);
                } else {
                    payload[key] = String(value);
                }
            }
        }

        if (JSON.stringify(payload) === "{}") {
            return {
                success: false,
                message: "There is nothing to update"
            }
        }


        const validatedPayload = updateProductValidationSchema.safeParse(payload);
        if (!validatedPayload.success) {
            return {
                success: false,
                errors: validatedPayload.error.issues.map((issue) => ({
                    field: issue.path[0],
                    message: issue.message,
                })),
            };
        }

        const res = await fetch(`https://assignment-8-backend-omega.vercel.app/api/v1/products/${product._id}`, {
            method: "PATCH",
            body: JSON.stringify(validatedPayload.data),
            headers: {
                "Content-Type": "application/json",
                "Cookie": cookieHeader,
            },
        });

        const result = await res.json();
        return result;
    } catch (error) {
        console.error(error);
        return { success: false, error: "Failed to update product" };
    }
};

export async function getProducts(params: Record<string, string | number> = {}) {

    try {
        const query = new URLSearchParams();

        for (const key in params) {
            query.append(key, params[key].toString());
        }

        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/products?${query.toString()}`);

        const result = await res.json();
        if (!res.ok) return { error: result.message || "Failed to fetch products" };
        return result.data;

    } catch (error: any) {
        return {
            error: error?.message || "Something went wrong"
        }
    }
};


export async function getSingleProduct(id: string) {
    try {

        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/products/${id}`);

        const result = await res.json();
        if (!res.ok) return { error: result.message || "Failed to fetch products" };
        return result.data;

    } catch (error: any) {
        return {
            error: error?.message || "Something went wrong"
        }
    }
}

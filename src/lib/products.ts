export async function getProducts(params: Record<string, string | number> = {}) {

    try {
        const query = new URLSearchParams();

        for (const key in params) {
            query.append(key, params[key].toString());
        }

        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/products?${query.toString()}`);

        if (!res.ok) return { error: "Failed to fetch products" };
        const result = await res.json();
        return result.data;

    } catch (error: any) {
        return {
            error: error?.message || "Something went wrong"
        }
    }
}

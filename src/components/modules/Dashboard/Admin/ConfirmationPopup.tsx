
import { getCookie } from "@/services/auth/tokenHandlers";
import toast from "react-hot-toast";

type IProps = {
    setIsOpen: (value: boolean) => void;
    productId: string | null;
};

const ConfirmationPopup = ({
    setIsOpen,
    productId,
}: IProps) => {
    const handleConfirm = async () => {
        if (!productId) return;
        const token = await getCookie("accessToken");

        if (!token) {
            toast.error("No Token Receive");
            return;
        }
        try {
            const res = await fetch(
                `https://assignment-8-backend-omega.vercel.app/api/v1/products/${productId}`,
                {
                    method: "DELETE",
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                }
            );
            const data = await res.json();
            console.log(data);

            if (!res.ok) {
                toast.error("Failed to delete product");
                return;
            }

            toast.success("Product deleted successfully!");
        } catch (error: any) {
            toast.error(error.message || "Something went wrong");
        } finally {
            setIsOpen(false);
        }
    };

    const handleCancel = () => setIsOpen(false);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="bg-white rounded-lg shadow-lg p-6 w-96 max-w-full">
                <h2 className="text-lg font-semibold mb-4">Confirm Delete</h2>
                <p className="mb-6">Are you sure you want to delete this product?</p>
                <div className="flex justify-end gap-3">
                    <button
                        onClick={handleCancel}
                        className="px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-100 transition cursor-pointer"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleConfirm}
                        className="px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700 transition cursor-pointer"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationPopup;

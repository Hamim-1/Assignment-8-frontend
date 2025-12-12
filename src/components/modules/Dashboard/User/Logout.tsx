"use client";
import { useRouter } from "next/navigation";


const Logout = () => {
    const router = useRouter();
    return (
        <div className="relative">
            <div className="fixed inset-0 flex items-center justify-center bg-black/50 bg-opacity-50 z-50">
                <div className="bg-white rounded-lg shadow-lg p-6 w-80">
                    <h2 className="text-xl font-semibold mb-4">Confirm Logout</h2>
                    <p className="mb-6">Are you sure you want to logout?</p>
                    <div className="flex justify-end gap-3">
                        <button
                            onClick={() => router.push("user?tab=manage-account")}
                            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition cursor-pointer"
                        >
                            Cancel
                        </button>
                        <button
                            // onClick={handleLogout}
                            className="px-4 py-2 bg-primary text-white rounded hover:bg-primary/70 transition cursor-pointer"
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Logout;

import LoadingOverlay from "@/components/shared/Loading";
import { getCookie } from "@/services/auth/tokenHandlers";
import { User } from "@/types/admin";
import { useEffect, useId, useState } from "react";
import toast from "react-hot-toast";

const UsersTab = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isUserUpdating, setIsUserUpdating] = useState(false);
    const [updatingUser, setUpdatingUser] = useState<null | string>(null);

    useEffect(() => {
        const fetchUsers = async () => {
            const token = await getCookie("accessToken");
            if (token && !loading) {
                toast.error("No Token Receive");
                return;
            }
            try {
                const res = await fetch(
                    `${process.env.NEXT_PUBLIC_API_BASE_URL}/users`,
                    {
                        method: "GET",
                        headers: {
                            "Authorization": `Bearer ${token}`,
                            "Content-Type": "application/json",
                        },
                    }
                );

                const result = await res.json();

                if (!res.ok) {
                    throw new Error(result.message || "Failed to fetch users");
                }

                setUsers(result.data);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    const updateUserStatus = async (userId: string, currentStatus: string) => {
        setIsUserUpdating(true);
        setUpdatingUser(userId);

        try {
            const token = await getCookie("accessToken");

            if (!token) {
                toast.error("No Token Receive");
                return;
            }
            const status = currentStatus === "ACTIVE" ? "BLOCKED" : "ACTIVE";

            const res = await fetch(
                `${process.env.NEXT_PUBLIC_API_BASE_URL}/users/${userId}/status`,
                {
                    method: "PATCH",
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ status }),
                }
            );


            const result = await res.json();
            if (!res.ok) {
                toast.error(result.message || "Failed to update user");
                return;
            }

            toast.success("User status updated successfully");

        } catch (err: any) {
            toast.error(err.message);
        } finally {
            setIsUserUpdating(false);
            setUpdatingUser(null);
        }
    };


    if (error) return <p>Error: {error}</p>;
    return (
        <div>
            <h2 className="text-2xl font-bold mb-6">Users</h2>
            {

                loading ?

                    <div className='w-full flex justify-center items-center h-[50vh]'>
                        <LoadingOverlay />
                    </div>

                    :
                    <div className="bg-white rounded-lg shadow overflow-auto">
                        <table className="w-full overflow-x-auto">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ID</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {users.map((user: User, i: number) => {
                                    const isActive = user.status === "ACTIVE";
                                    return <tr key={i} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 whitespace-nowrap font-medium">{user._id}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{user.email}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span
                                                className={`px-3 py-1 rounded-full text-xs font-semibold ${isActive
                                                    ? 'bg-green-100 text-green-800'
                                                    : 'bg-red-100 text-red-800'
                                                    }`}
                                            >
                                                {user.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <button
                                                disabled={isUserUpdating}
                                                onClick={() => updateUserStatus(user._id, user.status)}
                                                className={`px-4 py-2 rounded-lg text-sm font-medium cursor-pointer ${isActive
                                                    ? 'bg-red-500 text-white hover:bg-red-600'
                                                    : 'bg-green-500 text-white hover:bg-green-600'
                                                    }`}
                                            >
                                                {
                                                    isUserUpdating && updatingUser === user._id
                                                        ?
                                                        <div className="flex items-center justify-center px-4 py-2">
                                                            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                                                        </div>

                                                        :
                                                        <>
                                                            {isActive ? 'Block' : 'Activate'}
                                                        </>
                                                }
                                            </button>
                                        </td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    </div>
            }
        </div>
    );
};

export default UsersTab;

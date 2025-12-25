const UsersTab = () => {
    const users = [
        {
            id: 1,
            name: 'John Doe',
            email: 'john@example.com',
            status: 'Active',
            joined: '2024-01-15'
        },
        {
            id: 2,
            name: 'Jane Smith',
            email: 'jane@example.com',
            status: 'Active',
            joined: '2024-02-20'
        },
        {
            id: 3,
            name: 'Bob Johnson',
            email: 'bob@example.com',
            status: 'Blocked',
            joined: '2024-03-10'
        },
        {
            id: 4,
            name: 'Alice Brown',
            email: 'alice@example.com',
            status: 'Active',
            joined: '2024-04-05'
        },
    ];

    return (
        <div>
            <h2 className="text-2xl font-bold mb-6">Users</h2>
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
                        {users.map((user: any) => (
                            <tr key={user.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap font-medium">{user._id}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{user.email}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span
                                        className={`px-3 py-1 rounded-full text-xs font-semibold ${user.status === 'Active'
                                            ? 'bg-green-100 text-green-800'
                                            : 'bg-red-100 text-red-800'
                                            }`}
                                    >
                                        {user.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <button
                                        className={`px-4 py-2 rounded-lg text-sm font-medium ${user.status === 'Active'
                                            ? 'bg-red-500 text-white hover:bg-red-600'
                                            : 'bg-green-500 text-white hover:bg-green-600'
                                            }`}
                                    >
                                        {user.status === 'Active' ? 'Block' : 'Activate'}
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UsersTab;

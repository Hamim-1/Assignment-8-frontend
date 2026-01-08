import Dashboard from '@/components/modules/Dashboard/Admin/Dashboard';
import { requireAuth } from '@/lib/auth';

const AdminDashboard = async () => {
    await requireAuth("ADMIN");
    return (
        <>
            <Dashboard />
        </>
    );
};

export default AdminDashboard;
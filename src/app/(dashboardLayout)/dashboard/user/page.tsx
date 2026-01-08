import Dashboard from '@/components/modules/Dashboard/User/Dashboard';
import { requireAuth } from '@/lib/auth';

const UserDashboard = async () => {
    await requireAuth("USER");

    return (
        <>
            <Dashboard />
        </>
    );
};

export default UserDashboard;
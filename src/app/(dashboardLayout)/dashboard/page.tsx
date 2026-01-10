import { useAuth } from "@/context/AuthContext";

export const dynamic = 'force-dynamic';

const page = () => {
    const { user } = useAuth();
    return (
        <div>

        </div>
    );
};

export default page;
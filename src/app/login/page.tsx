import LoginForm from '@/components/modules/Login/LoginForm';
import Breadcrumb from '@/components/shared/Breadcrumb';
import Link from 'next/link';



const LoginPage = () => {
    return (
        <>
            <div className="custom-container min-h-screen flex items-center justify-center bg-gray-50 py-20">

                <div className="w-full max-w-md bg-white/90 backdrop-blur-md shadow-xl shadow-black/20 rounded-2xl p-10 space-y-6 border border-gray-100">

                    <Breadcrumb page='Login' />

                    <h2 className="text-3xl font-bold text-center text-primary tracking-wide">
                        Welcome Back
                    </h2>
                    <p className="text-center text-gray-500 text-sm">
                        Please login to your account
                    </p>

                    <LoginForm />

                    <div className="text-center text-gray-400 text-sm">OR</div>

                    <p className="text-center text-sm text-gray-700">
                        Don’t have an account?
                        <Link href="/register" className="text-primary font-semibold hover:underline cursor-pointer ml-1">
                            Register Now
                        </Link>
                    </p>
                </div>
            </div>

        </>
    );
};

export default LoginPage;
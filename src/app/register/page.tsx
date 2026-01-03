import RegisterForm from '@/components/modules/Register/RegisterForm';
import { ChevronRight, Home } from 'lucide-react';
import Link from 'next/link';
const RegisterPage = () => {
    return (
        <>
            <div className="custom-container min-h-screen flex items-center justify-center bg-gray-50 py-20">

                <div className="w-full max-w-md bg-white/90 backdrop-blur-md shadow-xl shadow-black/20 rounded-2xl p-10 space-y-6 border border-gray-100">

                    <div className="flex text-primary items-center space-x-2 mb-5 text-lg">
                        <Link href="/">
                            <Home className="cursor-pointer text-primary" />
                        </Link>
                        <ChevronRight size={20} />
                        <p>Register</p>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold text-center text-primary tracking-wide">
                            Create an Account
                        </h2>
                        <p className="text-center text-gray-500 text-sm py-1.5">
                            Fill your details to register
                        </p>
                    </div>

                    <RegisterForm />

                    <p className="text-center text-sm text-gray-700">
                        Already have an account?{" "}
                        <Link href="/login"
                            className="text-primary hover:underline cursor-pointer"
                        >
                            Login Now
                        </Link>
                    </p>

                </div>
            </div>

        </>
    );
};

export default RegisterPage;
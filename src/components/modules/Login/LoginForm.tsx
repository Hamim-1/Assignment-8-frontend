import { Home, MoveRight } from "lucide-react";
import Link from "next/link";


const LoginForm = () => {
    return (
        <div className="custom-container min-h-screen flex items-center justify-center bg-gray-50 py-20">

            <div className="w-full max-w-md bg-white/90 backdrop-blur-md shadow-xl shadow-black/20 rounded-2xl p-10 space-y-6 border border-gray-100">

                <div className="flex text-primary items-center space-x-2 mb-5 text-lg">
                    <Link href="/">
                        <Home className="cursor-pointer text-primary" />
                    </Link>
                    <MoveRight size={20} />
                    <p>Login</p>
                </div>

                <h2 className="text-3xl font-bold text-center text-primary tracking-wide">
                    Welcome Back
                </h2>
                <p className="text-center text-gray-500 text-sm">
                    Please login to your account
                </p>

                <div className="flex flex-col space-y-1">
                    <label className="font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        id="email"
                        className="border border-gray-300 focus:border-primary focus:ring-primary focus:ring-1 rounded-lg px-4 py-2 outline-none bg-white transition-all"

                    />
                </div>

                <div className="flex flex-col space-y-1">
                    <label className="font-medium text-gray-700">Password</label>
                    <input
                        type="password"
                        id="password"
                        className="border border-gray-300 focus:border-primary focus:ring-primary focus:ring-1 rounded-lg px-4 py-2 outline-none bg-white transition-all"

                    />
                </div>

                <button className="w-full bg-primary hover:bg-primary/90 text-white rounded-lg py-3 font-semibold text-lg transition-all">
                    LOGIN
                </button>

                <div className="text-center text-gray-400 text-sm">OR</div>

                <p className="text-center text-sm text-gray-700">
                    Don’t have an account?
                    <Link href="/register" className="text-primary font-semibold hover:underline cursor-pointer ml-1">
                        Register Now
                    </Link>
                </p>
            </div>
        </div>

    );
};

export default LoginForm;
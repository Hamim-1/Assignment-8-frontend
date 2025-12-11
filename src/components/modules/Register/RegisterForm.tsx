import { Home, MoveRight } from "lucide-react";
import Link from "next/link";

const RegisterForm = () => {
    return (
        <div className="custom-container min-h-screen flex items-center justify-center bg-gray-50 py-20">

            <div className="w-full max-w-md bg-white/90 backdrop-blur-md shadow-xl shadow-black/20 rounded-2xl p-10 space-y-6 border border-gray-100">

                <div className="flex text-primary items-center space-x-2 mb-b">
                    <Link href="/">
                        <Home className="cursor-pointer text-primary" />
                    </Link>
                    <MoveRight size={20} />
                    <p className="text-black/80">Register</p>
                </div>

                <div>
                    <h2 className="text-3xl font-bold text-center text-primary tracking-wide">
                        Create an Account
                    </h2>
                    <p className="text-center text-gray-500 text-sm py-1.5">
                        Fill your details to register
                    </p>
                </div>

                <div className="flex flex-col space-y-1">
                    <label className="font-medium text-gray-700">Full Name</label>
                    <input
                        type="text"
                        id="fullName"
                        className="border border-gray-300 focus:border-primary focus:ring-primary focus:ring-1 rounded-lg px-4 py-2 outline-none bg-white transition-all"

                    />
                </div>

                <div className="flex flex-col space-y-1">
                    <label className="font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        id="email2"
                        className="border border-gray-300 focus:border-primary focus:ring-primary focus:ring-1 rounded-lg px-4 py-2 outline-none bg-white transition-all"

                    />
                </div>

                <div className="flex flex-col space-y-1">
                    <label className="font-medium text-gray-700">Password</label>
                    <input
                        type="password"
                        id="password2"
                        className="border border-gray-300 focus:border-primary focus:ring-primary focus:ring-1 rounded-lg px-4 py-2 outline-none bg-white transition-all"

                    />
                </div>

                <div className="flex flex-col space-y-1">
                    <label className="font-medium text-gray-700">Confirm Password</label>
                    <input
                        type="password"
                        id="confirmPass"
                        className="border border-gray-300 focus:border-primary focus:ring-primary focus:ring-1 rounded-lg px-4 py-2 outline-none bg-white transition-all"

                    />
                </div>

                <div className="flex items-center space-x-2">
                    <input
                        id="agree"
                        type="checkbox"
                        className="cursor-pointer focus:ring-0 text-primary border-primary"
                    />
                    <label htmlFor="agree" className="text-gray-700 text-sm">
                        I agree to the{" "}
                    </label>
                    <Link href="terms-and-conditions"
                        className="text-primary hover:underline cursor-pointer"
                    >
                        terms & conditions
                    </Link>
                </div>

                <button className="w-full bg-primary hover:bg-primary/90 text-white rounded-lg py-3 font-semibold text-lg transition-all">
                    Create Account
                </button>

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

    );
};

export default RegisterForm;
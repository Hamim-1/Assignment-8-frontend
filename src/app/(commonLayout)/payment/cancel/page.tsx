import { ChevronRight, House, AlertCircle } from 'lucide-react';
import Link from 'next/link';

const page = () => {
    return (
        <div className="w-full lg:px-7 px-3 xs:px-10 sm:px-16 xl:px-20 mt-5 h-[60vh] flex flex-col justify-center items-center">

            <div className="flex text-primary items-center space-x-2 mb-5">
                <Link href="/">
                    <House />
                </Link>
                <ChevronRight />
                <p className="text-black">Payment cancelled</p>
            </div>

            <div className="mx-auto text-center flex flex-col space-y-5 items-center">
                <AlertCircle className="text-yellow-500 w-14 h-14" />

                <p className="text-xl sm:text-2xl font-semibold text-yellow-600">
                    PAYMENT CANCELLED
                </p>

                <p className="px-10 md:px-16 lg:px-28">
                    Your payment was cancelled. No charges were made.
                    You can continue shopping or return to checkout whenever you’re ready.
                </p>

                <div className="flex gap-4">
                    <Link href="/cart">
                        <button className="bg-primary px-4 py-2 border border-primary hover:bg-transparent text-white hover:text-primary rounded-md duration-300 font-semibold uppercase cursor-pointer">
                            Return to checkout
                        </button>
                    </Link>

                    <Link href="/shop">
                        <button className="border border-primary px-4 py-2 text-primary hover:bg-primary hover:text-white rounded-md duration-300 font-semibold uppercase cursor-pointer">
                            Continue shopping
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default page;

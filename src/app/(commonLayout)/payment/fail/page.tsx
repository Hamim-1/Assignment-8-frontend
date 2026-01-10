import Breadcrumb from '@/components/shared/Breadcrumb';
import { requireAuth } from '@/lib/auth';
import { XCircle } from 'lucide-react';
import Link from 'next/link';

const page = async () => {
    await requireAuth();
    return (
        <div className="w-full lg:px-7 px-3 xs:px-10 sm:px-16 xl:px-20 mt-5 h-[60vh] flex flex-col justify-center items-center">

            <Breadcrumb page='Payment failed' />

            <div className="mx-auto text-center flex flex-col space-y-5 items-center">
                <XCircle className="text-red-500 w-14 h-14" />

                <p className="text-xl sm:text-2xl font-semibold text-red-600">
                    PAYMENT FAILED
                </p>

                <p className="px-10 md:px-16 lg:px-28">
                    Unfortunately, your payment could not be processed. Please try again or
                    use a different payment method.
                </p>

                <div className="flex gap-4">
                    <Link href="/cart">
                        <button className="bg-primary px-4 py-2 border border-primary hover:bg-transparent text-white hover:text-primary rounded-md duration-300 font-semibold uppercase cursor-pointer">
                            Try again
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

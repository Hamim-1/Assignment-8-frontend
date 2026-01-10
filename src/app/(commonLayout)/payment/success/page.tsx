import Breadcrumb from '@/components/shared/Breadcrumb';
import { requireAuth } from '@/lib/auth';
import Link from 'next/link';

const page = async () => {
    await requireAuth()
    return (
        <div className="w-full lg:px-7 px-3 xs:px-10 sm:px-16 xl:px-20 mt-5 h-[60vh] flex flex-col justify-center items-center">

            <Breadcrumb page='Payment Successful' />

            <div className="mx-auto text-center flex flex-col space-y-5 items-center">
                <p className="text-xl sm:text-2xl font-semibold">YOUR ORDER IS COMPLETED!</p>
                <p className="px-10 md:px-16 lg:px-28">Thank you for your order! Your order is being processed and will be
                    completed within 3-6 hours. You will receive an email confirmation when your order is completed.</p>
                <Link href="/shop">
                    <button
                        className="bg-primary px-4 py-2 border border-primary hover:bg-transparent text-white hover:text-primary rounded-md duration-300 font-semibold uppercase cursor-pointer">Continue
                        shopping</button>
                </Link>
            </div>
        </div>
    );
};

export default page;
import { Home } from 'lucide-react';
import notFoundImage from '@/assets/images/404.svg';
import Image from 'next/image';
import Link from 'next/link';

const notFound = () => {
    return (
        <div className="custom-container flex min-h-screen justify-center items-center">

            <div className="mx-auto text-center flex flex-col space-y-5 items-center">
                <Image src={notFoundImage} alt='not-found' />
                <p className="text-xl sm:text-2xl font-semibold">THE PAGE YOU'VE REQUESTED IS NOT AVAILABLE</p>
                <button
                    className="bg-primary px-4 py-2 border border-primary hover:bg-transparent text-white hover:text-primary rounded-md duration-300 font-semibold">
                    <Link href="/">Back to Home</Link>
                </button>
            </div>
        </div>
    );
};

export default notFound;
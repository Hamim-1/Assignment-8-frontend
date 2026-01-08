import iphone12 from "@/assets/images/iphone-12.png";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
    return (
        <div
            className="w-full h-[550px] bg-[#b3bbbb]">

            <div className="flex justify-between items-center custom-container h-full">
                <div className="w-full sm:w-3/5 text-center sm:text-left">
                    <p className="text-lg">Get up to 50% off Today only</p>
                    <p className="text-4xl sm:text-3xl md:text-4xl font-medium">iPhone 12 pro max</p>
                    <p className="my-5"><span className="text-primary font-semibold">$450.00</span> <del
                        className="font-medium text-black/60">$500.00</del></p>
                    <button
                        className="bg-primary px-4 py-2 border border-primary hover:bg-transparent text-white hover:text-primary rounded-md duration-300 font-semibold cursor-pointer">
                        <Link href="/shop">
                            Shop
                            Now
                        </Link>
                    </button>
                </div>

                <div className="w-2/5 hidden sm:block relative">
                    <Image src={iphone12} alt="iphone12" className="w-64 absolute top-1/2 -translate-y-1/2 right-0" />

                </div>
            </div>

        </div>
    );
};

export default Hero;
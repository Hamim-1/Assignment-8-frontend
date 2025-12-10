import Image from 'next/image';
import mobileAppImage from "@/assets/images/mobile-app.png";
import googleplayImage from "@/assets/images/googleplay.png";
import applestoreImage from "@/assets/images/applestore.png";

const MobileApp = () => {
    return (
        <section className="custom-container my-16 md:h-auto">

            <div className="flex lg:items-center flex-col lg:flex-row bg-[#e5e5e58c] p-8 rounded-md">
                <div className="lg:w-1/2">
                    <Image src={mobileAppImage} alt="mobile app" className="max-h-[450px] w-72 lg:w-auto mx-auto" />
                </div>
                <div className="flex space-y-3 flex-col lg:w-2/5">
                    <p className="text-lg sm:text-2xl font-medium">
                        Download RAFCART App Now!
                    </p>
                    <p className="text-base sm:text-lg font-normal py-3">
                        Shopping fastly and easily more with our app. Get a link to
                        download the app on your phone
                    </p>

                    <div className="flex w-full sm:w-3/4 md:w-3/5 lg:w-full">
                        <input type="text" placeholder="Email Address"
                            className="border-2 border-primary py-2 px-3 focus:outline-0 focus:border-primary rounded-l-md w-3/4" />
                        <button
                            className="bg-primary text-white hover:text-primary border-2 border-primary py-2 px-5 hover:bg-transparent border-l-0 transition font-semibold rounded-r-md w-fit xs:w-fit">
                            Subscribe
                        </button>
                    </div>

                    <div className="flex items-center w-4/5 xs:w-3/5 md:w-1/3  lg:w-3/5 space-x-7 pt-5">
                        <Image src={googleplayImage} alt="" className="w-1/2 rounded-md cursor-pointer" />
                        <Image src={applestoreImage} alt="" className="w-1/2 rounded-md cursor-pointer" />
                    </div>
                </div>
            </div>

        </section>
    );
};

export default MobileApp;
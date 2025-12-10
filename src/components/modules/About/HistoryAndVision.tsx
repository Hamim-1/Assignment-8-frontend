import Image from "next/image";
import historyImage from "@/assets/images/history.jpg";
import visionImage from "@/assets/images/vision.jpg";

const HistoryAndVision = () => {
    return (
        <>
            <div className="flex flex-col space-y-5 lg:space-y-0 lg:flex-row lg:gap-x-8">

                <div className="w-full sm:w-[540px] md:w-[700px] lg:w-1/2 xl:w-3/5 mx-auto flex space-y-4 flex-col">
                    <p className="font-semibold text-primary">OUR HISTORY</p>
                    <p className="text-xl sm:text-2xl font-semibold">CREATIVE AND NEW FASHION TRENDS COLLECTION</p>
                    <p>Fashion is a potent visual marker of our times,” says Caroline Stevenson,
                        head
                        of
                        cultural and
                        ... “Trend analysis of any given era will reveal society's values and aspirations.” ... The urge
                        to creative expression runs deep</p>
                    <div className="flex space-x-3 sm:space-x-5">

                        <div className="flex flex-col space-y-3">
                            <p className="font-semibold text-primary text-3xl">12</p>
                            <p className="text-lg">Years Exprience</p>
                        </div>

                        <div className="flex flex-col space-y-3">
                            <p className="font-semibold text-primary text-3xl">20k</p>
                            <p className="text-lg">
                                Happy Customer
                            </p>
                        </div>

                        <div className="flex flex-col space-y-3">
                            <p className="font-semibold text-primary text-3xl">100%</p>
                            <p className="text-lg">Clients Satisfaction</p>
                        </div>

                    </div>
                </div>

                <div className="w-full sm:w-[540px] md:w-[700px] lg:w-1/2 xl:w-2/5 mx-auto">
                    <Image src={historyImage} alt="" />
                </div>
            </div>

            <div className="flex flex-col space-y-5 lg:space-y-0 lg:flex-row lg:gap-x-8">


                <div className="hidden lg:block w-full sm:w-[540px] md:w-[700px] lg:w-1/2 xl:w-2/5 mx-auto">
                    <Image src={visionImage} alt="" />
                </div>

                <div className="w-full sm:w-[540px] md:w-[700px] lg:w-1/2 xl:w-3/5 mx-auto flex space-y-4 flex-col">
                    <p className="font-semibold text-primary">OUR VISION</p>
                    <p className="text-xl sm:text-2xl font-semibold">OUR VISION IS SIMPLE - WE EXIST TO ACCELERATE OUR
                        CUSTOMERS’
                        PROGRESS</p>
                    <p>we design and deliver our customers’ digital transformation by bringing
                        together
                        their vision
                        with our industry knowledge and deep technological expertise. we design and deliver our
                        customers’ digital transformation</p>

                    <div className="flex flex-col space-y-3">

                        <div className="flex space-x-3 sm:items-center">
                            <i className="fa-regular fa-thumbs-up text-primary mt-1 sm:mt-0"></i>
                            <p className="text-lg">We build strong relationships</p>
                        </div>

                        <div className="flex space-x-3 sm:items-center">
                            <i className="fa-regular fa-thumbs-up text-primary mt-1 sm:mt-0"></i>
                            <p className="text-lg">We encourage initiative and provide opportunity</p>
                        </div>

                        <div className="flex space-x-3 sm:items-center">
                            <i className="fa-regular fa-thumbs-up text-primary mt-1 sm:mt-0"></i>
                            <p className="text-lg">We embrace change and creativity</p>
                        </div>

                        <div className="flex space-x-3 sm:items-center">
                            <i className="fa-regular fa-thumbs-up text-primary mt-1 sm:mt-0"></i>
                            <p className="text-lg">We champion an environment of honesty</p>
                        </div>

                    </div>
                </div>

                <div className="lg:hidden w-full sm:w-[540px] md:w-[700px] lg:w-1/2 xl:w-2/5 mx-auto">
                    <Image src={visionImage} alt="vision" />
                </div>
            </div>
        </>
    );
};

export default HistoryAndVision;
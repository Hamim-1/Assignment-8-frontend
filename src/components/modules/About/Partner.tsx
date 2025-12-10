import partner1Image from "@/assets/images/brand-1.png";
import partner2Image from "@/assets/images/brand-2.png";
import partner3Image from "@/assets/images/brand-3.png";
import partner4Image from "@/assets/images/brand-4.png";
import Image from "next/image";

const Partner = () => {
    const partners = [
        partner1Image,
        partner2Image,
        partner3Image,
        partner4Image,
        partner1Image,
        partner2Image
    ]
    return (
        <div className="flex flex-col">

            <p className="text-xl sm:text-2xl font-semibold mx-auto">OUR PARTNERS</p>

            <div className="w-full sm:w-[540px] md:w-[700px] lg:w-full mx-auto flex space-x-5 overflow-x-scroll lg:overflow-hidden scroll-smooth custom-scrollbar py-2 rounded-md">


                {
                    partners.map((partner, i) => (
                        <div className="flex-none w-1/2 sm:w-1/3 lg:w-[15%]">
                            <Image src={partner} alt="" />
                        </div>
                    ))
                }



            </div>
        </div>
    );
};

export default Partner;
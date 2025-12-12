import { Trash2 } from 'lucide-react';
import iphone12 from '@/assets/images/iphone-12.png';
import Image from 'next/image';
const WishlistCard = () => {
    const price = 40;
    const name = "CASUAL USB CHARGING LAPTOP BACKPACKS";
    return (
        <div className="flex md:items-center md:space-x-5 flex-col md:flex-row items-start space-x-0 space-y-5 md:space-y-0 px-5 py-8 border border-gray-300 rounded">
            <div className="w-20">
                <Image src={iphone12} alt='product Image' className="w-full" />
            </div>

            <div className="w-full md:w-2/3 flex flex-col md:flex-row justify-between md:items-center md:space-x-5 space-x-0 space-y-2 md:space-y-0">
                <div className="flex flex-col space-y-1">
                    <p className="text-base md:text-lg font-medium">{name}</p>
                    <h2 className="text-base">Availability: <a className="text-primary">In Stock</a></h2>
                </div>

                <div>
                    <span className="text-primary font-bold text-lg">
                        <span>${price}</span>
                    </span>
                </div>
            </div>
            <div className="w-full md:w-fit">
                <div className="w-full md:w-fit flex justify-between md:space-x-5 items-center">

                    <button className=" text-white hover:text-primary w-32 font-semibold text-sm md:text-base rounded-md bg-primary border border-primary hover:bg-transparent text-center p-1.5 duration-300 cursor-pointer">Add To Cart</button>
                    <Trash2 className="hover:text-primary text-base cursor-pointer delete" />
                </div>
            </div>
        </div>
    );
};

export default WishlistCard;
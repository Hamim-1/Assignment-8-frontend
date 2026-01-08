import { IProduct } from "@/types/admin";
import { Star } from "lucide-react";
import Image from "next/image";

const TopRankingCard = ({ product }: { product: IProduct }) => {
    const discount = product.discount > 0;
    const discountPrice = product.price - (product.price * product.discount / 100);
    return (
        <div className="flex flex-col sm:flex-row sm:space-x-3 sm:items-center space-y-5 sm:space-y-0">
            <div className="w-full md:w-2/5 bg-[#f2f0f0] px-3 py-5 rounded-md relative sm:w-2/3">
                <div className="relative h-20 w-auto mx-auto">
                    <Image
                        src={product.image as string}
                        alt={product.title || "product image"}
                        fill
                        className="object-contain"
                    />
                </div>
            </div>
            <div className=" flex flex-col">
                <p className="text-base font-medium hover:text-primary cursor-pointer"> {product.title}</p>
                <div className="flex space-x-5 items-center">
                    <p className="text-primary text-base font-medium ">${discount ? discountPrice.toFixed(2) : product.price}</p>
                    {
                        discount && <p className="line-through text-sm text-gray-500 font-semibold">${product.price}</p>
                    }
                </div>
                <div className="flex items-center space-x-1 text-yellow-500">
                    <Star size={16} />
                    <Star size={16} />
                    <Star size={16} />
                    <Star size={16} />
                    <Star size={16} />
                    <p className="text-black">({product.discount})</p>
                </div>
            </div>
        </div>
    );
};

export default TopRankingCard;



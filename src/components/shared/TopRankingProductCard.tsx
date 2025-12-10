import { Star } from "lucide-react";

const TopRankingCard = ({ product }) => {
    return (
        <div className="flex flex-col sm:flex-row sm:space-x-3 sm:items-center space-y-5 sm:space-y-0">
            <div className="w-full md:w-2/5 bg-[#f2f0f0] px-3 py-5 rounded-md relative sm:w-2/3">
                <img className="w-auto h-20 mx-auto" src="${product.img}" />
                <p
                    className="absolute top-0 right-0 bg-primary px-2 font-semibold rounded-tr-md text-white rounded-bl-md text-xs">
                    1
                </p>
            </div>
            <div className=" flex flex-col">
                <p className="text-base font-medium hover:text-primary cursor-pointer"> {product.name}</p>
                <div className="flex space-x-5 items-center">
                    <p className="text-primary text-base font-medium ">${product.Dprice}</p>
                    <p className="line-through text-sm text-gray-500 font-semibold">${product.price}</p>
                </div>
                <div className="flex items-center space-x-1 text-yellow-500">
                    <Star size={16} />
                    <Star size={16} />
                    <Star size={16} />
                    <Star size={16} />
                    <Star size={16} />
                    <p className="text-black">({product.review})</p>
                </div>
            </div>
        </div>
    );
};

export default TopRankingCard;
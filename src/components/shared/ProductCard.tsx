import { IProduct } from '@/types/admin';
import { Heart, Search, Star } from 'lucide-react';
import Image from 'next/image';

const ProductCard = ({ product }: { product: IProduct }) => {
    const discount = product.discount > 0;
    const discountPrice = product.price - (product.price * product.discount / 100);
    return (
        <div className="flex flex-col border border-gray-300 pb-5 rounded-md group h-80 space-y-5">
            <div className="w-full h-3/5 p-5 relative bg-[#e5e5e58c]">
                <div className="relative h-32 w-auto mx-auto">
                    <Image
                        src={product.image as string}
                        alt="productImage"
                        fill
                        className="object-contain"
                    />
                </div>


                <div className="absolute top-0 left-0 p-5 w-full h-full flex space-x-5 bg-black/30 justify-center items-center opacity-0 group-hover:opacity-100 transition duration-500">
                    <Search size={35} className="bg-primary p-2 rounded-full hover:bg-secondary text-white transition cursor-pointer" />
                    <Heart size={35} className="bg-primary p-2 rounded-full hover:bg-secondary text-white transition cursor-pointer" />
                </div>
            </div>

            <div className="relative h-2/5 w-full flex flex-col px-5 overflow-hidden name-and-price">
                <p className="text-lg font-medium hover:text-primary hover:underline w-fit lg:text-base cursor-pointer">{product.title}</p>
                <div className="flex items-center space-x-3 group-hover:hidden py-1">
                    <span className="text-primary font-semibold text-md"><span>${discount ? discountPrice.toFixed(2) : product.price}</span></span>
                    {discount && <del className="text-sm text-gray-500">$ {product.price}</del>}
                </div>

                <div className="flex items-center space-x-1 text-yellow-500 group-hover:hidden">
                    <Star size={20} />
                    <Star size={20} />
                    <Star size={20} />
                    <Star size={20} />
                    <Star size={20} />
                    <p className="pl-3 text-black">({product.discount})</p>
                </div>
                <div>
                    <button
                        className="bg-primary text-white hover:bg-transparent hover:text-primary duration-300 rounded-md px-5 py-2 font-semibold absolute -bottom-20 left-3 opacity-0 group-hover:opacity-100 group-hover:bottom-5 border border-primary">Add
                        To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
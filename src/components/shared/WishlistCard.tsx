import { Trash2 } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getSingleProduct } from "@/lib/products";
import { IProduct } from "@/types/admin";
import { WishlistCardSkeleton } from "../modules/Product/WishlistCardSkeleton";
import AddToCartWrapper from "../modules/Product/AddToCartWrapper";
import RemoveFromWishlistWrapper from "../modules/Product/RemoveFromWishlistWrapper";



const WishlistCard = ({ id }: { id: string }) => {
    const [product, setProduct] = useState<IProduct | null>(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchProduct = async () => {
            setProduct(null);
            setError(false);

            const result = await getSingleProduct(id);

            if (result && !result.error) {
                setProduct(result);
            } else {
                setError(true);
            }
        };

        fetchProduct();
    }, [id]);

    if (!product && error) {
        return (
            <div className="border border-gray-300 rounded p-5">
                <p className="text-red-500 text-lg">
                    Oops! We couldn’t load this product. Please try again.
                </p>
            </div>
        );
    }

    if (!product) {
        return <WishlistCardSkeleton />;
    }

    const discountPrice =
        product.price - (product.price * product.discount) / 100;
    const inStock = product.quantity > 0;

    return (
        <div className="flex md:items-center md:space-x-5 flex-col md:flex-row items-start space-y-5 md:space-y-0 px-5 py-8 border border-gray-300 rounded">

            <div className="w-20 h-20 relative">
                <Image
                    src={product.image as string}
                    alt={product.title}
                    fill
                    sizes="80px"
                    quality={100}
                    className="object-contain"
                    priority
                />
            </div>


            <div className="w-full md:w-2/3 flex flex-col md:flex-row justify-between md:items-center md:space-x-5 space-y-2 md:space-y-0">
                <div className="flex flex-col space-y-1">
                    <p className="text-base md:text-lg font-medium">
                        {product.title}
                    </p>

                    <p className="text-base">
                        Availability:{" "}
                        {inStock ? (
                            <span className="text-primary font-medium">In Stock</span>
                        ) : (
                            <span className="text-red-500 font-medium">
                                Out Of Stock
                            </span>
                        )}
                    </p>
                </div>

                <div className="text-primary font-bold text-lg">
                    ${discountPrice.toFixed(2)}
                </div>
            </div>


            <div className="w-full md:w-fit flex justify-between md:space-x-5 items-center">
                <AddToCartWrapper productId={product._id}>
                    <button className={`w-32 font-semibold text-sm md:text-base rounded-md bg-primary border border-primary text-white hover:bg-transparent hover:text-primary p-1.5 duration-300 ${product.quantity > 0 ? "cursor-pointer" : "cursor-not-allowed"}`}>
                        Add To Cart
                    </button>
                </AddToCartWrapper>

                <RemoveFromWishlistWrapper productId={product._id}>
                    <Trash2 className="cursor-pointer hover:text-primary" />
                </RemoveFromWishlistWrapper>
            </div>
        </div>
    );
};

export default WishlistCard;

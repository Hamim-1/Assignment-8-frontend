"use client"
import { useEffect, useState } from 'react';
import { Heart, Star, Share2, ArrowLeft } from 'lucide-react';
import { getSingleProduct } from '@/lib/products';
import { IProduct } from '@/types/admin';
import { useParams } from 'next/navigation';
import LoadingOverlay from '@/components/shared/Loading';


const ProductDetailsPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState<null | IProduct>(null);
    const [error, setError] = useState(false);
    useEffect(() => {
        const fetchProduct = async () => {
            setProduct(null);
            const result = await getSingleProduct(id as string);
            console.log(result);
            if (!result?.error && result) {
                setProduct(result);
            } else if (result?.error) {
                setError(true);
            }
        }
        fetchProduct();
    }, []);
    if (!product && error) {
        return <div className='w-full h-[40vh] flex justify-center items-center'>
            <p className='text-red-500 text-xl'>Something went wrong try again!</p>
        </div>;;
    }
    if (!product) {
        return <div className='w-full h-[60vh] flex justify-center items-center'>
            <LoadingOverlay />
        </div>;
    }
    const hasDiscount = product.discount > 0;
    const discountPrice = product.price - (product.price * product.discount) / 100;



    return (
        <div className="container mx-auto px-4 py-8 max-w-7xl">

            <button
                onClick={() => window.history.back()}
                className="flex items-center space-x-2 text-gray-600 hover:text-red-600 transition mb-6 group"
            >
                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition" />
                <span>Go Back</span>
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

                <div className="w-full">
                    <div className="relative w-full aspect-square bg-gray-100 rounded-md p-8 border border-gray-300">
                        <div className="relative w-full h-full flex items-center justify-center">
                            <img
                                src={product.image}
                                alt={product.title}
                                className="max-w-full max-h-full object-contain"
                            />
                        </div>


                        {hasDiscount && (
                            <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-md font-semibold">
                                -{product.discount}%
                            </div>
                        )}
                    </div>
                </div>


                <div className="flex flex-col space-y-6">

                    <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                        {product.title}
                    </h1>


                    <div className="flex items-center space-x-2">
                        <div className="flex items-center space-x-1 text-yellow-500">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={20} fill="currentColor" />
                            ))}
                        </div>
                        <span className="text-gray-600">({product.discount} reviews)</span>
                    </div>


                    <div className="flex items-center space-x-4">
                        <span className="text-primary font-bold text-3xl">
                            ${hasDiscount ? discountPrice.toFixed(2) : product.price.toFixed(2)}
                        </span>
                        {hasDiscount && (
                            <del className="text-gray-500 text-xl">${product.price.toFixed(2)}</del>
                        )}
                    </div>


                    <div className="border-t border-b border-gray-300 py-6">
                        <p className="text-gray-700 leading-relaxed text-base">
                            {product.description}
                        </p>
                    </div>


                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <button className="flex-1 bg-primary text-white hover:bg-[#e41c36] px-8 py-4 rounded-md font-semibold transition duration-300 text-lg cursor-pointer">
                            Add to Cart
                        </button>
                        <button
                            className={`px-6 py-4 rounded-md font-semibold transition duration-300 border-2 flex items-center justify-center space-x-2 border-primary text-primary hover:bg-primary hover:text-white  cursor-pointer`}
                        >
                            <Heart size={20} />
                            <span className="hidden sm:inline">Wishlist</span>
                        </button>
                        <button className="px-6 py-4 rounded-md font-semibold transition duration-300 border-2 border-gray-300 text-gray-700 hover:border-red-600 hover:text-red-600 flex items-center justify-center cursor-pointer">
                            <Share2 size={20} />
                        </button>
                    </div>


                    <div className="bg-gray-50 rounded-md p-6 space-y-3 border border-gray-200">
                        <div className="flex justify-between items-center">
                            <span className="text-gray-600">Category:</span>
                            <span className="font-medium text-gray-900">{product.category}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-600">Availability:</span>
                            <span className="font-medium text-green-600">In Stock</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsPage;
"use client";
import Filter from "@/components/modules/Shop/Filter";
import ProductCard from "@/components/shared/ProductCard";
import { ChevronDown, ChevronRight, Home, MoveRight, X } from "lucide-react";
import { useState } from "react";
import iphone12 from '@/assets/images/iphone-12.png';

const page = () => {
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [isSortOpen, setIsSortOpen] = useState(false);
    const products = [
        {
            name: 'HP Pavilion 15',
            price: '$1200.00',
            Dprice: '770.00',
            review: 70,
            img: iphone12
        },
        {
            name: 'SAMSUNG 27 Curved',
            price: '$550.00',
            Dprice: '470.00',
            review: 50,
            img: iphone12
        },
        {
            name: 'Beats Headphones',
            price: '$120.00',
            Dprice: '70.00',
            review: 90,
            img: iphone12
        },
        {
            name: 'Beats Headphones',
            price: '$120.00',
            Dprice: '70.00',
            review: 90,
            img: iphone12
        }
    ]
    return (
        <div className="custom-container mt-10 my-16">

            <div className="flex text-primary items-center space-x-2 mb-5">
                <Home className="cursor-pointer text-sm" />
                <ChevronRight className="cursor-pointer text-xs mt-1" />
                <p className="cursor-pointer text-black" id="my-account-page-routing-page-name">Shop</p>
            </div>

            <div className="w-full">

                <div className="flex justify-between relative">
                    <div className="flex space-x-5">

                        <div className="text-center px-8 py-2 bg-primary text-white text-base font-semibold rounded-md cursor-pointer" onClick={() => {
                            setIsSortOpen(false)
                            setIsFilterOpen(!isFilterOpen);
                        }}>
                            FILTER

                        </div>

                        <div className="flex items-center space-x-2 justify-between border border-gray-400 pl-2 rounded-sm relative cursor-pointer" onClick={() => {
                            setIsFilterOpen(false);
                            setIsSortOpen(!isSortOpen)
                        }}>

                            <p>Default Sorting</p>
                            <ChevronDown className="fa-solid fa-angle-down duration-200" />

                            <div className={`absolute top-11 left-0 w-full bg-white flex flex-col border border-gray-300 z-20  duration-300 rounded-md ${isSortOpen ? "scale-100" : "scale-0"}`}>


                                <div className="hover:bg-slate-200 duration-150 py-3 cursor-pointer">
                                    <p className="font-semibold mx-2" id="sorting1">
                                        Default Sorting</p>
                                </div>
                                <div className="hover:bg-slate-200 duration-150 py-3 cursor-pointer">
                                    <p className=" mx-2" id="sorting2">Price
                                        High-Low
                                    </p>
                                </div>
                                <div className="hover:bg-slate-200 duration-150 py-3 cursor-pointer">
                                    <p className=" mx-2" id="sorting3">Price
                                        Low-High
                                    </p>
                                </div>


                            </div>
                        </div>
                    </div>


                    {
                        isFilterOpen &&
                        <div
                            className="absolute bg-gray-100 top-12 left-0 flex-col w-[350px] shadow-md rounded-md h-fit z-10 text-black p-3">

                            <X className="cursor-pointer absolute top-0 right-0 p-5" />


                            <Filter />

                        </div>
                    }

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 pt-5">
                    {
                        products.map((product, i) => (

                            <ProductCard product={product} key={i} />
                        ))
                    }

                </div>


                {/* pagination */}
                <div className="mx-auto w-fit flex space-x-3 mt-5" id="grid-product-pages-number">

                    <div className="w-8 h-8 border border-gray-400 flex items-center justify-center cursor-pointer bg-primary text-white" id="grid-page-num-one">
                        1
                    </div>

                    <div className="w-8 h-8 border border-gray-400 flex items-center justify-center cursor-pointer" id="grid-page-num-two">
                        2
                    </div>

                    <div className="w-8 h-8 border border-gray-400 flex items-center justify-center cursor-pointer"
                        id="grid-page-num-three">
                        3
                    </div>

                    <div className="w-8 h-8 border border-gray-400 flex items-center justify-center cursor-pointer">
                        4
                    </div>

                    <div className="w-8 h-8 border border-gray-400 flex items-center justify-center cursor-pointer">
                        <MoveRight size={18} />
                    </div>

                </div>
                {/*pagination*/}


            </div>
        </div>
    );
};

export default page;
"use client";
import Filter from "@/components/modules/Shop/Filter";
import ProductCard from "@/components/shared/ProductCard";
import { ChevronDown, ChevronRight, Home, MoveLeft, MoveRight, X } from "lucide-react";
import { useEffect, useState } from "react";
import { getProducts } from "@/lib/products";
import { IProduct } from "@/types/admin";
import LoadingOverlay from "@/components/shared/Loading";
import { useSearchParams } from "next/navigation";
export interface IMeta {
    page: number;
    limit: number;
    total: number;
    totalPage: number;
}
const page = () => {
    const searchParams = useSearchParams();
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [isSortOpen, setIsSortOpen] = useState(false);
    const [sort, setSort] = useState("");
    const [error, setError] = useState(false);
    const [products, setProducts] = useState<IProduct[] | null>(null);
    const [page, setPage] = useState(Number(searchParams.get("page")) || 1);
    const search = searchParams.get("search") || "";
    const [meta, setMeta] = useState<IMeta | null>(null);
    const sortOptions = [
        { label: "Default Sorting", value: "" },
        { label: "Price Low-High", value: "price" },
        { label: "Price High-Low", value: "-price" },
    ]
    useEffect(() => {
        const fetchProduct = async () => {
            setProducts(null);
            const result = await getProducts({ page, search, sort });
            if (!result?.error && result?.data) {
                setProducts(result.data);
                setMeta(result.meta);
            } else if (result?.error) {
                setError(true);
            }
        }
        fetchProduct();
    }, [page, sort]);


    const handlePageChange = (forward: string) => {

        if (forward === "forward" && meta?.totalPage as number > page) {
            setPage(page + 1);
        } else if (1 < page) {
            setPage(page - 1)
        }
        console.log(page);

    }

    if (error) {
        return <div className='custom-container py-10'>
            <p className='text-red-500'>Something Went wrong</p>
        </div>
    }

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

                            <p>
                                {
                                    sortOptions.map((option) => {
                                        return option.value === sort && option.label
                                    })
                                }
                            </p>
                            <ChevronDown className="fa-solid fa-angle-down duration-200" />

                            <div className={`absolute top-11 left-0 w-full bg-white flex flex-col border border-gray-300 z-20  duration-300 rounded-md ${isSortOpen ? "scale-100" : "scale-0"}`}>
                                {
                                    sortOptions.map((option, i) => (
                                        <div key={i} className="hover:bg-slate-200 duration-150 py-3 cursor-pointer" onClick={() => setSort(option.value)}>
                                            <p className={`${sort === option.value ? "font-semibold" : "font-normal"} mx-2`} >
                                                {option.label}</p>
                                        </div>
                                    ))
                                }
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

                {
                    products ?
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 pt-5">
                            {
                                products.map((product: IProduct, i: number) => (

                                    <ProductCard product={product} key={i} />
                                ))
                            }

                        </div>
                        :
                        <div className="h-[50vh] flex justify-center items-center">
                            <LoadingOverlay />
                        </div>
                }

                {/* pagination */}
                {
                    meta &&
                    <div className="mx-auto w-fit flex space-x-3 mt-5" >

                        {
                            page > 1 &&
                            <div className="w-8 h-8 border border-gray-400 flex items-center justify-center cursor-pointer" onClick={() => handlePageChange("backward")}>
                                <MoveLeft size={18} />
                            </div>
                        }

                        {Array.from({ length: meta.totalPage }).map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setPage(i + 1)}
                                className={`w-8 h-8 border ${page === i + 1 ? "bg-primary text-white" : ""
                                    }`}
                            >
                                {i + 1}
                            </button>
                        ))}


                        <div className="w-8 h-8 border border-gray-400 flex items-center justify-center cursor-pointer" onClick={() => handlePageChange("forward")}>
                            <MoveRight size={18} />
                        </div>

                    </div>
                }
                {/*pagination*/}

            </div>
        </div>
    );
};

export default page;
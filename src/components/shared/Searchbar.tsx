import { Footprints, Headphones, Laptop, Menu, Smartphone, Watch } from "lucide-react";
import SearchForm from "../modules/Shop/SearchForm";
import { SearchByCategory } from "../modules/Shop/SearchByCategory";
import CartWishlistButton from "./CartWishlistButton";
const Searchbar = () => {


    const categories = [
        {
            label: "shoe",
            icon: <Footprints />
        },
        {
            label: "headphone",
            icon: <Headphones />
        },
        {
            label: "watch",
            icon: <Watch />
        },
        {
            label: "laptop",
            icon: <Laptop />
        },
        {
            label: "phone",
            icon: <Smartphone />
        }]
    return (
        <div className="bg-primary w-full hidden lg:block z-10 py-3">

            <div className="flex justify-between items-center custom-container">
                <div className="h-full w-1/6 xl:w-1/6 flex items-center bg-transparent">

                    <div
                        className="flex bg-secondary text-white px-2 xl:px-6 py-3 items-center text-base space-x-2 rounded-md w-full cursor-pointer relative group">
                        <Menu />
                        <p>All categories</p>


                        <div className="w-full absolute top-12 left-0 shadow-md bg-white rounded z-30 hidden group-hover:block">

                            <div className="w-full">
                                {
                                    categories.map((category, i) => (
                                        <SearchByCategory key={i} category={category.label}>
                                            <div className="cursor-pointer flex space-x-5 border-b border-primary py-3 px-3 hover:bg-primary/30 transition duration-300 text-primary">
                                                {category.icon}
                                                <span className="capitalize">{category.label}</span>
                                            </div>
                                        </SearchByCategory>
                                    ))
                                }
                            </div>
                        </div>

                    </div>


                </div>

                <div className="flex w-fit mx-auto">
                    <SearchForm />
                </div>

                <div className="flex text-white space-x-4 h-full items-center">
                    <CartWishlistButton />

                </div>
            </div>

        </div >
    );
};

export default Searchbar;
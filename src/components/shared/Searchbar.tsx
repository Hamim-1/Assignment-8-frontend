import { Footprints, Headphones, Heart, Laptop, Menu, Phone, ShoppingCart, Smartphone, UserRound, Watch } from "lucide-react";
import SearchForm from "../modules/Shop/SearchForm";
import { SearchByCategory } from "../modules/Shop/SearchByCategory";
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

                    <div className="flex flex-col items-center cursor-pointer h-full w-fit justify-center relative group px-1">
                        <div>
                            <Heart className="relative text-2xl" />
                            <div className="flex justify-center items-center absolute -top-2 right-0 bg-secondary rounded-full text-sm size-6">
                                6
                            </div>
                        </div>
                        <p className="text-xs">Wish List</p>
                    </div>

                    <div className="flex flex-col items-center cursor-pointer h-full w-fit justify-center relative group px-1">
                        <div>
                            <ShoppingCart className="relative text-2xl" />
                            <div className="flex justify-center items-center absolute -top-2 -right-3 bg-secondary rounded-full text-sm size-6">
                                6
                            </div>
                        </div>
                        <p className="text-xs">Cart</p>
                    </div>

                    <div className="flex flex-col items-center cursor-pointer h-full justify-center relative group">
                        <UserRound />
                        <p className="text-xs">Account</p>

                    </div>
                </div>
            </div>

        </div >
    );
};

export default Searchbar;
import { Footprints, Headphones, Heart, Laptop, Menu, Phone, ShoppingCart, Smartphone, UserRound, Watch } from "lucide-react";
const Searchbar = () => {
    const categories = [
        {
            label: "shoes",
            icon: <Footprints />
        },
        {
            label: "headpones",
            icon: <Headphones />
        },
        {
            label: "watches",
            icon: <Watch />
        },
        {
            label: "laptops",
            icon: <Laptop />
        },
        {
            label: "mobile",
            icon: <Smartphone />
        }]
    return (
        <div className="bg-primary w-full hidden lg:block z-10 py-3">

            <div className="flex justify-between items-center custom-container">
                <div className="h-full w-1/6 xl:w-1/6 flex items-center bg-transparent relative group">

                    <div
                        className="flex bg-secondary text-white px-3 xl:px-6 py-3 items-center text-base space-x-3 rounded-md w-full cursor-pointer">
                        <Menu />
                        <p>All categories</p>
                    </div>

                    <div className="w-full absolute top-[65px] shadow-md bg-white rounded z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">

                        <div className="w-full">
                            {
                                categories.map((categorie, i) => (
                                    <div className="cursor-pointer flex space-x-5 border-b border-primary py-3 px-3 hover:bg-primary/30 transition duration-300 text-primary" key={i}>
                                        {categorie.icon}
                                        <span className="capitalize">{categorie.label}</span>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                </div>

                <div className="flex w-fit mx-auto">
                    <form className="flex search-input-form">
                        <input id="search-input-one" type="search" placeholder="Search product..."
                            className="bg-white px-6 py-3 text-base border-none outline-none focus:ring-0 placeholder:text-black/50 rounded-l-md" />
                        <button type="submit"
                            className="bg-secondary text-white px-6 h-full text-base rounded-r-md font-semibold">Search</button>
                    </form>
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
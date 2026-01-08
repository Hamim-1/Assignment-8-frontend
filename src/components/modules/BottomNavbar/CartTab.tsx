import { X } from 'lucide-react';
import React from 'react';
interface IProps {
    tab: string | null;
    setTab: React.Dispatch<React.SetStateAction<string | null>>;
}
const CartTab: React.FC<IProps> = ({ tab, setTab }) => {
    const isCartTabOpen = tab === "Cart";
    return (
        <section className={`lg:hidden fixed top-0 ${isCartTabOpen ? "left-0" : "-left-full"} xs:w-[320px] w-full duration-700 z-40`}>
            <div className="bg-white h-screen border-r border-gray-400 relative">
                <div className="bg-primary w-full p-3 h-14 relative flex items-center">
                    <span className="absolute left-1/2 -translate-x-1/2 text-white font-medium text-lg">Cart</span>
                    <X className='text-white absolute right-5 cursor-pointer' onClick={() => setTab(null)} />
                </div>

                <div className="flex flex-col p-4">
                    <p className="font-medium border-b border-gray-300 w-full pb-2">Total 2 Items</p>

                    <div className="flex justify-between items-center my-5">

                        <div className="flex items-center space-x-5">
                            <img src="img/shoes/shoes-5.png" className="w-16" />
                            <div className="flex flex-col space-y-1">
                                <p className="font-medium">Men casual shoes</p>
                                <div className="flex space-x-2">
                                    <p>x3</p>
                                    <p>$450</p>
                                </div>
                            </div>
                        </div>
                        <i className="fa-solid fa-xmark cursor-pointer pr-3 text-lg"></i>
                    </div>

                    <div className="flex justify-between items-center my-5">

                        <div className="flex items-center space-x-5">
                            <img src="img/headphone/headphone-2.png" className="w-16" />
                            <div className="flex flex-col space-y-1">
                                <p className="font-medium">Bose Headphone</p>
                                <div className="flex space-x-2">
                                    <p>x3</p>
                                    <p>$450</p>
                                </div>
                            </div>
                        </div>
                        <i className="fa-solid fa-xmark cursor-pointer pr-3 text-lg"></i>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 p-4 w-full flex flex-col space-y-3">

                    <p className="w-full border-b border-gray-300"></p>

                    <div className="flex justify-between">
                        <p className="font-medium">SUB TOTAL:</p>
                        <p className="font-medium">$980.00</p>
                    </div>

                    <div className="flex w-full space-x-5">
                        <button
                            className="bg-primary text-white hover:bg-transparent hover:text-primary px-5 font-medium duration-500 rounded py-2 border border-primary w-1/2">VIEW CART</button>

                        <button
                            className="bg-white text-primary hover:bg-primary hover:text-white px-5 font-medium duration-500 rounded py-2 border border-primary w-1/2">CHECKOUT</button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CartTab;
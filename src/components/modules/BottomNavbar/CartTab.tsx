import { X } from 'lucide-react';
import Link from 'next/link';
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


                <div className="absolute bottom-0 left-0 p-4 w-full flex flex-col space-y-3">

                    <p className="w-full border-b border-gray-300"></p>



                    <div className="flex w-full space-x-5">
                        <Link href="/cart"
                            className="bg-primary text-white hover:bg-transparent hover:text-primary px-5 font-medium duration-500 rounded py-2 border border-primary w-1/2">VIEW CART</Link>

                        <Link href="/cart"
                            className="bg-white text-primary hover:bg-primary hover:text-white px-5 font-medium duration-500 rounded py-2 border border-primary w-1/2">CHECKOUT</Link>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CartTab;
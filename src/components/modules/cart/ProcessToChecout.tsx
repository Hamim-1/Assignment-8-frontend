"use client"
import { useEffect, useState } from "react";
import { ICartItem } from "./Cart";
import { useRouter } from "next/navigation";

const ProcessToCheckout = ({ cartItems }: { cartItems: ICartItem[] }) => {
    const [totalPrice, setTotalPrice] = useState(0);
    const router = useRouter();
    useEffect(() => {
        const total = cartItems.reduce((acc, item) => {
            const discountPrice = item.product.price - (item.product.price * item.product.discount / 100);
            return acc + (item.quantity * discountPrice);
        }, 0);

        setTotalPrice(total);
    }, [cartItems]);
    const handleProcessToCheckout = () => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
        router.push("/checkout");
    }
    return (
        <div
            className="h-fit w-[97%] xs:w-80 md:w-full lg:w-[28%] mx-auto flex flex-col space-y-3 border border-gray-300 p-5 xs:p-10 lg:p-6 rounded-md">
            <p className="font-semibold text-lg">ORDER SUMMARY</p>

            <div className="flex justify-between font-medium">
                <p>Subtotal</p>
                <p>${totalPrice.toFixed(2)}</p>
            </div>

            <div className="flex justify-between font-medium text-gray-600">
                <p>Delivery</p>
                <p>Free</p>
            </div>

            <div className="flex justify-between font-medium border-b border-gray-300 pb-5 text-gray-600">
                <p>Tax</p>
                <p>Free</p>
            </div>

            <div className="flex justify-between font-semibold text-lg">
                <p>Total</p>
                <p>${totalPrice.toFixed(2)}</p>
            </div>

            <div className="flex pb-3">
                <input type="text" placeholder="Enter Coupon"
                    className="w-3/4 lg:w-2/3 border-2  border-primary focus:border-primary focus:ring-0 rounded-sm rounded-r-none px-2 border-r-0 focus:outline-0" />
                <button
                    className="bg-primary px-2 py-1 hover:bg-transparent hover:text-primary border border-primary rounded-sm w-fit xs:w-1/4 lg:w-1/3 rounded-l-none text-white duration-200 font-semibold">APPLY</button>
            </div>

            <button onClick={handleProcessToCheckout}
                className="bg-primary p-2 hover:bg-transparent hover:text-primary border border-primary rounded-sm mx-auto w-full text-white duration-200 font-semibold text-sm cursor-pointer">
                PROCCEES TO CHECKOUT
            </button>
        </div>
    );
};

export default ProcessToCheckout;
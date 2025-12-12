import Image from "next/image";
import iphone12 from "@/assets/images/iphone-12.png"
const OrderCard = () => {
    const orderProduct =
    {
        orderNumber: "ORD12345",
        date: "2025-12-11",
        quantity: 2,
        totalPrice: "50",
        color: "text-green-500",
        status: "Delivered",
    };
    return (
        <div className="p-5 border border-gray-300 rounded-sm relative flex flex-col space-y-5">
            <div>
                <Image src={iphone12} alt="product-img" className="h-16 w-auto" />
            </div>

            <div className="absolute bottom-0 right-0 md:top-5 md:bottom-auto px-5 py-5 md:py-0">
                <button
                    className="py-2 px-4 text-primary rounded font-semibold duration-500 hover:bg-primary hover:text-white border border-primary">View
                    Order</button>
            </div>

            <div className="flex flex-col space-y-2">

                <div className="flex justify-between">
                    <p className="font-semibold w-1/2 sm:h-1/3 md:w-1/5">Order Number</p>
                    <p className="font-semibold w-1/2 sm:h-1/3 md:w-1/5">Purchased</p>
                    <p className="hidden sm:block font-semibold w-1/3 md:w-1/5">Quantity</p>
                    <p className="hidden md:block font-semibold md:w-1/5">Total</p>
                    <p className="hidden md:block font-semibold md:w-1/5">Status</p>
                </div>

                <div className="flex justify-between">
                    <p className="w-1/2 sm:h-1/3 md:w-1/5">{orderProduct.orderNumber}</p>
                    <p className="w-1/2 sm:h-1/3 md:w-1/5">{orderProduct.date}</p>
                    <p className="hidden sm:block w-1/3 md:w-1/5">x{orderProduct.quantity}</p>
                    <p className="hidden md:block md:w-1/5">{orderProduct.totalPrice}</p>
                    <p className="hidden md:block md:w-1/5 {orderProduct.color} font-medium">{orderProduct.status}</p>
                </div>

            </div>


            <div className="md:hidden flex flex-col space-y-1">
                <div className="flex space-x-2 sm:space-x-0">
                    <p className="sm:hidden">x{orderProduct.quantity}</p>
                    <p className="font-semibold">{orderProduct.totalPrice}</p>
                </div>
                <p className="text-primary font-medium">{orderProduct.status}</p>
            </div>
        </div>
    );
};

export default OrderCard;
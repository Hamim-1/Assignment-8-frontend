import Image from "next/image";
const OrderCard = ({ order }: { order: any }) => {
    return (
        <div className="p-5 border border-gray-300 rounded-sm relative flex flex-col space-y-5">
            <div className="flex space-x-5">
                {
                    order.products.map((product: any, i: number) => (

                        <Image
                            src={product.image}
                            alt="product-img"
                            className="h-16 w-auto"
                            width={64}
                            height={64}
                        />

                    ))
                }
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
                    <p className="w-1/2 sm:h-1/3 md:w-1/5">
                        {order._id.slice(0, 7)}...
                    </p>

                    <p className="w-1/2 sm:h-1/3 md:w-1/5">
                        {new Date(order.createdAt).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                        })}
                    </p>

                    <p className="hidden sm:block w-1/3 md:w-1/5">x{order.products.length}</p>
                    <p className="hidden md:block md:w-1/5">{order.payment.amount.toFixed(2)}</p>
                    <p className="hidden md:block md:w-1/5 {orderProduct.color} font-medium capitalize">{order.status}</p>
                </div>

            </div>


            <div className="md:hidden flex flex-col space-y-1">
                <div className="flex space-x-2 sm:space-x-0">
                    <p className="sm:hidden">x{order.products.length}</p>
                    <p className="font-semibold">{order.payment.amount.toFixed(2)}</p>
                </div>
                <p className="text-primary font-medium capitalize">{order.status}</p>
            </div>
        </div>
    );
};

export default OrderCard;
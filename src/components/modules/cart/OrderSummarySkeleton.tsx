const OrderSummarySkeleton = () => {
    return (
        <div className="h-fit w-[97%] xs:w-80 md:w-full lg:w-[28%] mx-auto flex flex-col space-y-4 border border-gray-300 p-5 xs:p-10 lg:p-6 rounded-md animate-pulse">

            {/* Title */}
            <div className="h-5 w-40 bg-gray-300 rounded" />

            {/* Subtotal */}
            <div className="flex justify-between">
                <div className="h-4 w-20 bg-gray-300 rounded" />
                <div className="h-4 w-16 bg-gray-300 rounded" />
            </div>

            {/* Delivery */}
            <div className="flex justify-between">
                <div className="h-4 w-20 bg-gray-200 rounded" />
                <div className="h-4 w-12 bg-gray-200 rounded" />
            </div>

            {/* Tax */}
            <div className="flex justify-between border-b border-gray-300 pb-5">
                <div className="h-4 w-16 bg-gray-200 rounded" />
                <div className="h-4 w-12 bg-gray-200 rounded" />
            </div>

            {/* Total */}
            <div className="flex justify-between">
                <div className="h-5 w-20 bg-gray-300 rounded" />
                <div className="h-5 w-16 bg-gray-300 rounded" />
            </div>

            {/* Coupon input */}
            <div className="flex gap-2">
                <div className="h-10 w-3/4 lg:w-2/3 bg-gray-200 rounded-sm" />
                <div className="h-10 w-1/4 lg:w-1/3 bg-gray-300 rounded-sm" />
            </div>

            {/* Checkout button */}
            <div className="h-10 w-full bg-gray-300 rounded-sm" />
        </div>
    );
};

export default OrderSummarySkeleton;

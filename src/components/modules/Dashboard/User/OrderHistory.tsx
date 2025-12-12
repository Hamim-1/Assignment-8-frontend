import OrderCard from "@/components/shared/OrderCard";


const OrderHistory = () => {
    const orderProducts = [
        {
            orderNumber: "ORD12345",
            date: "2025-12-11",
            quantity: 2,
            totalPrice: "$50",
            color: "text-green-500",
            status: "Delivered",
        },
        {
            orderNumber: "ORD12346",
            date: "2025-12-10",
            quantity: 1,
            totalPrice: "$25",
            color: "text-yellow-500",
            status: "Pending",
        },
        {
            orderNumber: "ORD12347",
            date: "2025-12-09",
            quantity: 3,
            totalPrice: "$75",
            color: "text-red-500",
            status: "Cancelled",
        },
    ];
    return (
        <div className="w-full flex flex-col mx-auto space-y-5" id="my-order-section">
            <OrderCard />
        </div>
    );
};

export default OrderHistory;
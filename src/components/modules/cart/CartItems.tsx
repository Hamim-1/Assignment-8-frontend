import CartProduct from "@/components/shared/CartProduct";


const CartItems = () => {
    return (
        <div className="w-[97%] xs:w-80 md:w-full lg:w-[72%] mx-auto flex flex-col space-y-5">

            <div className="hidden md:flex bg-black/20 px-10 lg:px-6 py-2 font-semibold rounded-sm">
                <p className="w-3/5">Product</p>
                <div className="w-2/5 flex justify-between items-center">
                    <p className="w-1/2">Quantity</p>
                    <p className="w-1/2">Total Price</p>
                </div>
            </div>
            <div className="max-h-[400px] overflow-auto flex flex-col space-y-5">
                <CartProduct />
            </div>
        </div>
    );
};

export default CartItems;
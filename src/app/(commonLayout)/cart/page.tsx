import CartItems from '@/components/modules/cart/CartItems';
import ProcessToChecout from '@/components/modules/cart/ProcessToChecout';
import { ChevronRight, Home } from 'lucide-react';

const CartPage = () => {
    return (
        <div className="custom-container mt-10 my-16">
            <div className="flex text-primary items-center gap-x-2 mb-5">
                <Home className="cursor-pointer text-sm" />
                <ChevronRight className="cursor-pointer text-xs mt-1" />
                <p className="cursor-pointer text-black">Cart</p>
            </div>
            <div className="flex flex-col lg:flex-row lg:gap-x-5 gap-y-5 lg:gap-y-0">
                <CartItems />
                <ProcessToChecout />
            </div></div>
    );
};

export default CartPage;
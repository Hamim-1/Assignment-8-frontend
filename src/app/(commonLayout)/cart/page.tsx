import Cart from '@/components/modules/cart/Cart';

import { requireAuth } from '@/lib/auth';
import { ChevronRight, Home } from 'lucide-react';

const CartPage = async () => {
    await requireAuth();
    return (
        <div className="custom-container mt-10 my-16">
            <div className="flex text-primary items-center gap-x-2 mb-5">
                <Home className="cursor-pointer text-sm" />
                <ChevronRight className="cursor-pointer text-xs mt-1" />
                <p className="cursor-pointer text-black">Cart</p>
            </div>
            <Cart />
        </div>
    );
};

export default CartPage;
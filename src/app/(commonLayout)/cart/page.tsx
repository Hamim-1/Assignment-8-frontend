import Cart from '@/components/modules/cart/Cart';
import Breadcrumb from '@/components/shared/Breadcrumb';

import { requireAuth } from '@/lib/auth';

const CartPage = async () => {
    await requireAuth();
    return (
        <div className="custom-container mt-10 my-16">
            <Breadcrumb page='Cart' />
            <Cart />
        </div>
    );
};

export default CartPage;
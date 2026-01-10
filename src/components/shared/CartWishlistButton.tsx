"use client"
import { useAuth } from '@/context/AuthContext';
import { useCart } from '@/context/CartContext';
import { Heart, ShoppingCart } from 'lucide-react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';


const CartWishlistButton = () => {
    const { cartCount, wishlistCount } = useCart();
    const { user } = useAuth();
    const router = useRouter();
    const handleClick = (button: string) => {
        if (!user) {
            toast.error("Please login to continue")
        } else {
            if (button === "cart") {
                router.push("/cart")
            } else {
                router.push("/dashboard/user?tab=wishlist")
            }
        }
    }
    return (
        <>
            <div className="flex flex-col items-center cursor-pointer h-full w-fit justify-center relative group px-1" onClick={() => handleClick("wishlist")}>
                <div>
                    <Heart className="relative text-2xl" />
                    <div className="flex justify-center items-center absolute -top-2 right-0 bg-secondary rounded-full text-sm size-6">
                        {wishlistCount}
                    </div>
                </div>
                <p className="text-xs">Wish List</p>
            </div>

            <div className="flex flex-col items-center cursor-pointer h-full w-fit justify-center relative group px-1" onClick={() => handleClick("cart")}>
                <div>
                    <ShoppingCart className="relative text-2xl" />
                    <div className="flex justify-center items-center absolute -top-2 -right-3 bg-secondary rounded-full text-sm size-6">
                        {cartCount}
                    </div>
                </div>
                <p className="text-xs">Cart</p>
            </div>
        </>
    );
};

export default CartWishlistButton;
import { IProduct } from '@/types/admin';
import { Trash2 } from 'lucide-react';
import Image from 'next/image';
import RemoveFromCartWrapper from '../modules/Product/RemoveFromCartWrapper';
import { ICartProduct } from '../modules/cart/Cart';

const CartProduct = ({ product, quantity }: { product: ICartProduct; quantity: number }) => {
    const discountPrice = product.price - (product.price * product.discount / 100);
    const totalPrice = quantity * discountPrice;

    return (
        <div
            className="border border-gray-300 flex flex-col md:flex-row p-10 lg:p-6 md:items-center rounded-md h-auto md:h-36 space-y-5 md:space-y-0">
            <div className="w-full md:w-1/5">
                <Image
                    src={product.image as string}
                    alt="product Image"
                    width={80}
                    height={80}
                    className="mx-auto md:mx-0 object-contain"
                />
            </div>

            <div className="w-full md:w-2/5 flex flex-col font-semibold md:ml-5 lg:ml-0 name-price-size">
                <p className="text-lg name">{product.title}</p>
                <p className="text-primary mt-3 price">${discountPrice}</p>
            </div>

            <div className="w-full md:w-2/5 flex justify-between items-center">

                <div className="w-1/2 font-semibold flex justify-between items-center total-price">
                    <p className=" text-primary text-lg">${totalPrice}</p>
                    <RemoveFromCartWrapper productId={product._id}>
                        <Trash2 className="cursor-pointer hover:text-primary" />
                    </RemoveFromCartWrapper>
                </div>
            </div>
        </div>
    );
};

export default CartProduct;
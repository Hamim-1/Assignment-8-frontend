import Image from 'next/image';

const CartProduct = () => {
    return (
        <div
            className="border border-gray-300 flex flex-col md:flex-row p-10 lg:p-6 md:items-center rounded-md h-auto md:h-36 space-y-5 md:space-y-0">
            <div className="w-full md:w-1/5">
                <img src="img/monitor/hd-monitor.png" alt="product Image" className="w-auto mx-auto md:mx-0 h-20" />
            </div>

            <div className="w-full md:w-2/5 flex flex-col font-semibold md:ml-5 lg:ml-0 name-price-size">
                <p className="text-lg name">SAMSUNG 27 Curved</p>
                <p className="text-primary mt-3 price">$470.00</p>
                <p>Size:M</p>
            </div>

            <div className="w-full md:w-2/5 flex justify-between items-center price-delete">
                <div className="w-1/2 flex text-lg font-semibold">
                    <button
                        className="border border-gray-400 py-1 px-2 h-fit hover:bg-black/20 duration-200 decrease">-</button>
                    <p className="border border-gray-400 border-x-0 py-1 px-2 h-fit">4</p>
                    <button
                        className="border border-gray-400 py-1 px-2 h-fit hover:bg-black/20 duration-200 increase">+</button>
                </div>

                <div className="w-1/2 font-semibold flex justify-between items-center total-price">
                    <p className=" text-primary text-lg">$<span>1880.00</span></p>
                    <i className="fa-solid fa-trash hover:text-primary text-base cursor-pointer"></i>
                </div>
            </div>
        </div>
    );
};

export default CartProduct;
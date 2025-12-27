import React from 'react';

const OrderDetails = () => {
    return (
        <div className="w-full lg:w-2/5 xl:w-1/3 flex flex-col space-y-5 mx-auto rounded-lg">

            <div className="w-full bg-black/20 px-5 py-3 rounded">
                <p className="font-semibold">Your Order</p>
            </div>

            <div className="flex flex-col space-y-4 border border-gray-300 p-5 rounded">

                <h2 className="text-lg font-medium border-b border-gray-300 pb-3">OUR STORE</h2>

                <div className="flex flex-col space-y-5 border-b border-gray-300 pb-3">

                    <div className="flex justify-between">
                        <div className="flex space-x-5">
                            <div className="flex flex-col space-y-1">
                                <p className="text-base font-medium">Beigh Knitted Shoes</p>
                                <p className="text-sm">Size: M</p>
                            </div>
                            <p className="font-medium text-base">x1</p>
                        </div>
                        <p className="font-medium">$84.00</p>
                    </div>


                    <div className="flex justify-between">
                        <div className="flex space-x-5">
                            <div className="flex flex-col space-y-1">
                                <p className="text-base font-medium">Beigh Knitted Shoes</p>
                                <p className="text-sm">Size: M</p>
                            </div>
                            <p className="font-medium text-base">x1</p>
                        </div>
                        <p className="font-medium">$84.00</p>
                    </div>

                    <div className="flex justify-between">
                        <div className="flex space-x-5">
                            <div className="flex flex-col space-y-1">
                                <p className="text-base font-medium">Beigh Knitted Shoes</p>
                                <p className="text-sm">Size: M</p>
                            </div>
                            <p className="font-medium text-base">x1</p>
                        </div>
                        <p className="font-medium">$84.00</p>
                    </div>

                    <div className="flex justify-between font-medium">
                        <p>SUBTOTAL</p>
                        <p>$84.00</p>
                    </div>


                </div>

                <div className="flex justify-between border-b border-gray-300 pb-3 font-medium">

                    <p>SHIPPING</p>
                    <p>FREE</p>
                </div>

                <div className="flex justify-between border-b border-gray-300 pb-3  text-lg font-medium">

                    <p>TOTAL</p>
                    <p>$140.00</p>
                </div>

                <div className="flex space-x-3 items-center">
                    <input type="checkbox" id="agr"
                        className="text-primary border-2 rounded border-primary focus:border-primary focus:ring-0 mt-1" />
                    <label htmlFor="agr">Agree to our <span className="text-primary cursor-pointer">terms &
                        conditions</span></label>
                </div>

                <button
                    className="bg-primary px-4 py-2 border border-primary hover:bg-transparent text-white hover:text-primary rounded-md duration-300 font-semibold w-full">Pay Now</button>

            </div>
        </div>
    );
};

export default OrderDetails;
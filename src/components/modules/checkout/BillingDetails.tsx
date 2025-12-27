import React from 'react';

const BillingDetails = () => {
    return (
        <div className="w-full lg:w-3/5 xl:w-2/3 flex flex-col space-y-3 mx-auto rounded-lg">

            <div className="w-full bg-black/20 px-5 py-3 rounded">
                <p className="font-semibold">Billing Details</p>
            </div>

            <div className="flex flex-col space-y-1">


                <label htmlFor="Name" className="cursor-pointer">Name</label>
                <input type="text" id="Company Name"
                    className="border border-gray-300 focus:border-gray-400 focus:outline-none focus:ring-gray-400 rounded px-3 py-1 cursor-pointer h-12" />
            </div>



            <div className="flex flex-col space-y-1">


                <label htmlFor="Street Address" className="cursor-pointer">Street Address</label>
                <input type="text" id="Street Address"
                    className="border border-gray-300 focus:border-gray-400 focus:outline-none focus:ring-gray-400 rounded px-3 py-1 cursor-pointer h-12" />
            </div>

            <div className="flex flex-col space-y-1">


                <label htmlFor="Town/City" className="cursor-pointer">Town/City</label>
                <input type="text" id="Town/City"
                    className="border border-gray-300 focus:border-gray-400 focus:outline-none focus:ring-gray-400 rounded px-3 py-1 cursor-pointer h-12" />
            </div>

            <div className="flex flex-col space-y-1">


                <label htmlFor="Zip Code" className="cursor-pointer">Zip Code</label>
                <input type="text" id="Zip Code"
                    className="border border-gray-300 focus:border-gray-400 focus:outline-none focus:ring-gray-400 rounded px-3 py-1 cursor-pointer h-12" />
            </div>

            <div className="flex flex-col space-y-1">


                <label htmlFor="Phone Number" className="cursor-pointer">Phone Number</label>
                <input type="text" id="Phone Number"
                    className="border border-gray-300 focus:border-gray-400 focus:outline-none focus:ring-gray-400 rounded px-3 py-1 cursor-pointer h-12" />
            </div>

            <div className="flex flex-col space-y-1">


                <label htmlFor="EmailAddress" className="cursor-pointer">Email Address</label>
                <input type="text" id="EmailAddress2"
                    className="border border-gray-300 focus:border-gray-400 focus:outline-none focus:ring-gray-400 rounded px-3 py-1 cursor-pointer h-12" />
            </div>

        </div>
    );
};

export default BillingDetails;
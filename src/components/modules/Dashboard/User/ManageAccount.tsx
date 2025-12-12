import React from 'react';

const ManageAccount = () => {
    return (
        <div className="w-full flex flex-col mx-auto">

            <div className="flex flex-col space-y-5 lg:flex-row lg:space-y-0 lg:space-x-5">

                <div className="w-full lg:w-1/3 flex flex-col space-y-2 p-5 pb-10 shadow-md">
                    <div className="flex justify-between pb-5">
                        <p className="text-lg font-semibold">Personal Profile</p>
                        <p className="text-primary cursor-pointer font-semibold hover:underline">Edit</p>
                    </div>
                    <p className="font-semibold">Rahim Ahmed</p>
                    <p>example@mail.com</p>
                    <p>(123) 456-789</p>
                </div>

                <div className="w-full lg:w-1/3 flex flex-col space-y-2 p-5 pb-10 shadow-md">
                    <div className="flex justify-between pb-5">
                        <p className="text-lg font-semibold">Personal Profile</p>
                        <p className="text-primary cursor-pointer font-semibold hover:underline">Edit</p>
                    </div>
                    <p className="font-semibold">Rahim Ahmed</p>
                    <p>example@mail.com</p>
                    <p>(123) 456-789</p>
                </div>

                <div className="w-full lg:w-1/3 flex flex-col space-y-2 p-5 pb-10 shadow-md">
                    <div className="flex justify-between pb-5">
                        <p className="text-lg font-semibold">Personal Profile</p>
                        <p className="text-primary cursor-pointer font-semibold hover:underline">Edit</p>
                    </div>
                    <p className="font-semibold">Rahim Ahmed</p>
                    <p>example@mail.com</p>
                    <p>(123) 456-789</p>
                </div>

            </div>

            <div className="p-5 shadow-md flex flex-col space-y-5" id="recent-order-section">

                <p className="text-lg font-semibold">Recent Orders</p>

            </div>
        </div>
    );
};

export default ManageAccount;
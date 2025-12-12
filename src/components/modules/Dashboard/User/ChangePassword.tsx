import React from 'react';

const ChangePassword = () => {
    return (
        <section className="p-5 shadow-md h-fit">
            <p className="text-lg font-semibold pb-5">Change Password</p>
            <div className="w-full md:w-1/2 grid grid-cols-1 gap-5">

                <div className="flex flex-col space-y-1">
                    <label className="cursor-pointer">Current Password</label>
                    <input type="text"
                        className="border border-gray-300 focus:border-gray-400 focus:outline-none focus:ring-gray-400 rounded px-5 py-2 cursor-pointer" />
                </div>

                <div className="flex flex-col space-y-1">
                    <label className="cursor-pointer">New Password</label>
                    <input type="text"
                        className="border border-gray-300 focus:border-gray-400 focus:outline-none focus:ring-gray-400 rounded px-5 py-2 cursor-pointer" />
                </div>

                <div className="flex flex-col space-y-1">
                    <label className="cursor-pointer">Retype Password</label>
                    <input type="text"
                        className="border border-gray-300 focus:border-gray-400 focus:outline-none focus:ring-gray-400 rounded px-5 py-2 cursor-pointer" />
                </div>

            </div>

            <div className="pt-8">
                <button
                    className="w-fit uppercase bg-primary hover:bg-transparent text-white hover:text-primary duration-300 px-5 py-2 border border-primary rounded font-semibold">save
                    changes</button>
            </div>
        </section>
    );
};

export default ChangePassword;
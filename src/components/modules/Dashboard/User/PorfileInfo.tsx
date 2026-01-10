"use client"

import toast from "react-hot-toast";

const PorfileInfo = () => {
    const handleClick = () => {
        toast.error("This feature is coming soon.");
    }
    return (
        <section className="w-full p-8 shadow-md h-fit ">
            <p className="text-lg font-semibold pb-5">Profile Information</p>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5">

                <div className="flex flex-col space-y-1">
                    <label className="cursor-pointer">First Name</label>
                    <input type="text"
                        className="border border-gray-300 focus:border-gray-400 focus:outline-none focus:ring-gray-400 rounded px-5 py-2 cursor-pointer"
                        value="John" />
                </div>

                <div className="flex flex-col space-y-1">
                    <label className="cursor-pointer">Last Name</label>
                    <input type="text"
                        className="border border-gray-300 focus:border-gray-400 focus:outline-none focus:ring-gray-400 rounded px-5 py-2 cursor-pointer"
                        value="Doe" />
                </div>


                <div className="flex flex-col space-y-1">
                    <label className="cursor-pointer">Last Name</label>
                    <input id="date" type="date"
                        className="border border-gray-300 focus:border-gray-400 focus:outline-none focus:ring-gray-400 rounded px-5 py-2 cursor-pointer" />
                </div>

                <div className="flex flex-col space-y-1">
                    <label className="cursor-pointer">Gender</label>
                    <input type="text"
                        className="border border-gray-300 focus:border-gray-400 focus:outline-none focus:ring-gray-400 rounded px-5 py-2 cursor-pointer"
                        value="Male" />
                </div>

                <div className="flex flex-col space-y-1">
                    <label className="cursor-pointer">Email Address</label>
                    <input type="text"
                        className="border border-gray-300 focus:border-gray-400 focus:outline-none focus:ring-gray-400 rounded px-5 py-2 cursor-pointer"
                        value="example@mail.com" />
                </div>

                <div className="flex flex-col space-y-1">
                    <label className="cursor-pointer">Phone Number</label>
                    <input type="text"
                        className="border border-gray-300 focus:border-gray-400 focus:outline-none focus:ring-gray-400 rounded px-5 py-2 cursor-pointer"
                        value="123 456-789" />
                </div>

                <button
                    className="w-fit uppercase bg-primary hover:bg-transparent text-white hover:text-primary duration-300 px-5 py-2 border border-primary rounded font-semibold" onClick={handleClick}>save
                    changes</button>

            </div>
        </section>
    );
};

export default PorfileInfo;
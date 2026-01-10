"use client"

import toast from "react-hot-toast";

const ManageAddress = () => {
    const handleClick = () => {
        toast.error("This feature is coming soon.");
    }
    return (
        <section className="p-5 shadow-md h-fit">
            <p className="text-lg font-semibold pb-5">Manage Address</p>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5">

                <div className="flex flex-col space-y-1">
                    <label className="cursor-pointer">Full Name</label>
                    <input type="text"
                        className="border border-gray-300 focus:border-gray-400 focus:outline-none focus:ring-gray-400 rounded px-5 py-2 cursor-pointer"
                        value="John Doe" />
                </div>

                <div className="flex flex-col space-y-1">
                    <label className="cursor-pointer">Phone Number</label>
                    <input type="text"
                        className="border border-gray-300 focus:border-gray-400 focus:outline-none focus:ring-gray-400 rounded px-5 py-2 cursor-pointer"
                        value="123 456-789" />
                </div>

                <div className="flex flex-col space-y-1">
                    <p>Country</p>
                    <select className="w-full border py-3 px-4 border-gray-300 focus:ring-0 focus:border-gray-300 rounded">
                        <option>Bangladesh</option>
                        <option>UAE</option>
                        <option>USA</option>
                    </select>
                </div>

                <div className="flex flex-col space-y-1">
                    <p>Region</p>
                    <select className="w-full border py-3 px-4 border-gray-300 focus:ring-0 focus:border-gray-300 rounded">
                        <option>Chattogram</option>
                        <option>Dhaka</option>
                        <option>Comilla</option>
                    </select>
                </div>

                <div className="flex flex-col space-y-1">
                    <p>City</p>
                    <select className="w-full border py-3 px-4 border-gray-300 focus:ring-0 focus:border-gray-300 rounded">
                        <option>Dhake-North</option>
                        <option>Dhaka-South</option>
                    </select>
                </div>

                <div className="flex flex-col space-y-1">
                    <p>Area</p>
                    <select className="w-full border py-3 px-4 border-gray-300 focus:ring-0 focus:border-gray-300 rounded">
                        <option>Karnaphuli</option>
                        <option>Mirpur</option>
                        <option>Gulshan</option>
                    </select>
                </div>

            </div>

            <div className="flex flex-col space-y-1 pt-5">
                <label className="cursor-pointer">Address</label>
                <input type="text"
                    className="border border-gray-300 focus:border-gray-400 focus:outline-none focus:ring-gray-400 rounded px-5 py-2 cursor-pointer"
                    value="Solmaid Eidgha Mosque" />
            </div>

            <div className="pt-8">
                <button
                    className="w-fit uppercase bg-primary hover:bg-transparent text-white hover:text-primary duration-300 px-5 py-2 border border-primary rounded font-semibold" onClick={handleClick}>save
                    changes</button>
            </div>
        </section>

    );
};

export default ManageAddress;
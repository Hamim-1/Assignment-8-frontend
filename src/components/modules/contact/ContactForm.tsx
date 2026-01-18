import { Locate, Mail, MapPinIcon, Phone } from "lucide-react";

const ContactForm = () => {
    const days = [
        {
            day: "Saturday",
            time: '12:00 PM',
        },
        {
            day: "Sunday",
            time: '12:00 PM',
        },
        {
            day: "Monday",
            time: '12:00 PM',
        },
        {
            day: "Tuesday",
            time: '12:00 PM',
        },
        {
            day: "Wednesday",
            time: '12:00 PM',
        },
        {
            day: "Thursday",
            time: '12:00 PM',
        },
        {
            day: "Friday",
            time: '12:00 PM',
        }
    ]
    return (
        <div
            className="custom-container mt-10 flex flex-col space-y-10 lg:space-y-0 lg:flex-row gap-x-8 pb-20">

            <div className="w-full lg:w-3/5 xl:w-2/3 shadow-lg flex flex-col space-y-3 p-5 mx-auto rounded-lg">
                <p className="text-2xl font-semibold">LEAVE US A MESSAGE</p>
                <p className="text-base">Use the form below to get in touch with the sales team</p>

                <div className="flex flex-col lg:flex-row space-y-3 lg:space-y-0 lg:space-x-5">

                    <div className="w-full lg:w-1/2 flex flex-col space-y-1">


                        <label className="cursor-pointer">First Name</label>
                        <input type="text"
                            className="border border-gray-300 focus:border-gray-400 focus:outline-none focus:ring-gray-400 rounded px-3 py-1 cursor-pointer h-12" />
                    </div>

                    <div className="w-full lg:w-1/2 flex flex-col space-y-1">


                        <label className="cursor-pointer">Last Name</label>
                        <input type="text"
                            className="border border-gray-300 focus:border-gray-400 focus:outline-none focus:ring-gray-400 rounded px-3 py-1 cursor-pointer h-12" />
                    </div>

                </div>

                <div className="flex flex-col space-y-1">


                    <label className="cursor-pointer">Email Address</label>
                    <input type="text"
                        className="border border-gray-300 focus:border-gray-400 focus:outline-none focus:ring-gray-400 rounded px-3 py-1 cursor-pointer h-12" />
                </div>


                <div className="flex flex-col space-y-1">


                    <label className="cursor-pointer">Subject</label>
                    <input type="text"
                        className="border border-gray-300 focus:border-gray-400 focus:outline-none focus:ring-gray-400 rounded px-3 py-1 cursor-pointer h-12" />
                </div>


                <div className="flex flex-col space-y-1">


                    <label className="cursor-pointer">Your Message</label>
                    <input type="text"
                        className="border border-gray-300 focus:border-gray-400 focus:outline-none focus:ring-gray-400 rounded px-3 py-1 cursor-pointer h-24" />
                </div>

                <div className="pt-5">

                    <button
                        className="w-fit bg-primary hover:bg-transparent text-white hover:text-primary border border-primary rounded-md cursor-pointer duration-200 text-base py-2 px-5 font-semibold uppercase">send
                        Message</button>
                </div>
            </div>

            <div className="w-full lg:w-2/5 xl:w-1/3 flex flex-col space-y-5 shadow-lg mx-auto rounded-lg">

                <div className="flex flex-col space-y-4 p-5">

                    <div className="flex flex-col space-y-3">
                        <h2 className="text-lg font-medium">OUR STORE</h2>

                        <div className="flex space-x-5 items-center">
                            <MapPinIcon className="text-black/70" size={28} />
                            <p>7895 Dr New Albuquerue, NM 19800,
                                United States Of America </p>
                        </div>

                        <div className="flex space-x-5 items-center">
                            <Phone className="text-black/70" size={18} />
                            <p>+566 477 256, +566 254 575</p>
                        </div>

                        <div className="flex space-x-5 items-center">
                            <Mail className="text-black/70" size={18} />
                            <p>info@domain.com</p>
                        </div>

                    </div>

                    <div className="flex flex-col space-y-3">
                        <h2 className="text-lg font-medium">Hours of operation</h2>
                        {
                            days.map((day, i) => (
                                <div className="flex items-center justify-between" key={i}>
                                    <p>{day.day}</p>
                                    <p>{day.time}</p>
                                </div>
                            ))
                        }

                    </div>

                    <div className="flex flex-col">
                        <h2 className="text-lg font-medium">CAREERS</h2>
                        <p>If you are interesting in emplyment opportunities at RAFCARTs. Please email us:</p>
                        <p className="cursor-pointer text-primary font-medium">contact@familiar.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
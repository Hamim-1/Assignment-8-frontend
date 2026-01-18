import { Facebook, Instagram, Mail, MapPin, Phone, Twitch, Twitter } from "lucide-react";
import Link from "next/link";


const Footer = () => {
    const pages = [
        {
            label: "About Us",
            href: "/about"
        },
        {
            label: "Return Policy",
            href: "/return-policy"
        },
        {
            label: "Terms & Conditions",
            href: "/terms-and-conditions"
        },
        {
            label: "Privacy Policy",
            href: "/privacy-policy"
        },
        {
            label: "FAQ",
            href: "/faq"
        },
    ];

    return (
        <footer className="bg-slate-200 pb-10 lg:pb-0">
            <div
                className="custom-container grid grid-cols-1  lg:grid-cols-3 py-14 mt-16 gap-12 lg:gap-7 xl:gap-12">
                <div className="flex flex-col space-y-3 pr-5">
                    <p className="text-3xl font-semibold"><span className="text-primary">RAF</span>CART</p>

                    <p className="max-w-[300px]">Lorem ipsum, or lipsum as it is sometimes kno wn, is dummy text used in laying out print, gra phic or
                        web designs the passage.</p>

                    <p className="text-xl font-semibold">NEWSLETTER</p>
                    <div className="flex w-4/5 sm:w-3/5 lg:w-full">
                        <input type="text" placeholder="Email Address"
                            className="border-2 border-primary p-2 focus:border-primary focus:outline-0 rounded-l-md w-44 xs:w-2/3" />
                        <button
                            className="w-fit bg-primary text-white hover:text-primary border-2 border-primary p-2 hover:bg-transparent border-l-0 duration-300 font-semibold rounded-r-md">
                            Subscribe
                        </button>
                    </div>

                </div>

                <div className="flex lg:justify-center">
                    <div className="flex flex-col space-y-3">
                        <h2 className="text-lg font-medium">INFORMATION</h2>
                        {
                            pages.map((page, i) => (
                                <Link href={page.href} className="cursor-pointer duration-200 hover:text-primary" key={i}>
                                    {page.label}</Link>
                            ))
                        }
                    </div>
                </div>


                <div className="flex flex-col space-y-3">
                    <h2 className="text-lg font-medium">CONTACT</h2>

                    <div className="flex space-x-5 items-center">
                        <MapPin />
                        <p>7895 Dr New Albuquerue, NM 19800,
                            United States Of America </p>
                    </div>

                    <div className="flex space-x-5 items-center">
                        <Phone />
                        <p>+566 477 256, +566 254 575</p>
                    </div>

                    <div className="flex space-x-5 items-center">
                        <Mail />
                        <p>info@domain.com</p>
                    </div>

                    <div className="flex space-x-5 items-center">
                        <Facebook
                            className="fa-brands fa-facebook-f bg-[#3b5998] cursor-pointer rounded-full p-2 w-8 h-8 text-center text-white" />
                        <Twitter
                            className="fa-brands fa-twitter bg-[#00acee] cursor-pointer rounded-full p-2 w-8 h-8 text-center text-white" />
                        <Instagram
                            className="fa-brands fa-instagram bg-[#d53983] cursor-pointer rounded-full p-2 w-8 h-8 text-center text-white" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
import Link from "next/link";
import AuthLinks from "./AuthLinks";

const Navbar = () => {
    const navItems = [
        {
            href: "/",
            label: "Home"
        },
        {
            href: "/shop",
            label: "Shop"
        },
        {
            href: "/contact",
            label: "Contact"
        },
        {
            href: "/about",
            label: "About Us"
        },
    ]
    return (
        <div className="custom-container h-20 flex justify-between  items-center text-base bg-primary lg:bg-white w-full">

            <Link href="/">
                <p className="text-3xl font-semibold text-white lg:text-black">RAF<span className="text-secondary lg:text-primary">CART</span></p>
            </Link>

            <div className="hidden lg:flex space-x-6">
                {
                    navItems.map((item, i) => (
                        <Link href={item.href} key={i} className="cursor-pointer inline-block hover:text-primary transition">{item.label}</Link>

                    ))
                }
            </div>

            <AuthLinks />

        </div>
    );
};

export default Navbar;
import Link from "next/link";

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
    ]
    return (
        <div className="custom-container h-20 flex justify-between  items-center text-base bg-primary lg:bg-white ">

            <div>
                <p className="text-3xl font-semibold text-white lg:text-black">RAF<span className="text-secondary lg:text-primary">CART</span></p>
            </div>

            <div className="hidden lg:flex space-x-6">
                {
                    navItems.map((item, i) => (
                        <Link href={item.href} key={i} className="cursor-pointer inline-block hover:text-primary transition">{item.label}</Link>

                    ))
                }
            </div>
            <button>
                <Link href="/login" className="bg-white lg:bg-primary text-primary lg:text-white rounded-lg px-5 py-2.5 font-semibold tracking-wider">Login</Link>
            </button>

        </div>
    );
};

export default Navbar;
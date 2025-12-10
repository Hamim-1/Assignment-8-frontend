import { Home, MoveRight } from "lucide-react";
import Link from "next/link";
import contactHeroImage from "@/assets/images/contact-hero.jpg"
const ContactHero = () => {
    return (
        <div className="w-full h-[420px] bg-no-repeat bg-cover bg-center flex justify-center items-center flex-col space-y-2"
            style={{
                backgroundImage: `url(${contactHeroImage.src})`,
            }}>
            <p className="text-3xl font-semibold text-white uppercase">Contact Us</p>
            <div className="flex text-white items-center space-x-2 mb-5">
                <Link href="/">
                    <Home className="cursor-pointer fa-solid fa-house text-sm" />
                </Link>
                <MoveRight size={23} />
                <p className="cursor-pointer text-lg">Contact Us</p>
            </div>
        </div>
    );
};

export default ContactHero;
import Image from "next/image";
import offer from "@/assets/images/offer.jpg"

const Offer = () => {
    return (
        <section className="custom-container">
            <Image src={offer} alt="offer"
                className="w-full h-36 sm:h-56 md:h-auto" />
        </section>
    );
};

export default Offer;
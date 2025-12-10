import { Clock, HandCoins, Truck } from "lucide-react";


const Feature = () => {
    const features = [
        {
            icon: <Truck />,
            label: "Free shipping",
            des: "Orders over $200"
        },
        {
            icon: <HandCoins />,
            label: "Monery return",
            des: "30 Days monery retrun"
        },
        {
            icon: <Clock />,
            label: "24/7 Support",
            des: "Customer support"
        },
    ]
    return (
        <div
            className="grid grid-cols-1 md:grid-cols-3 gap-7 md:gap-5 lg:gap-7 mt-14 sm:w-2/3 md:w-full mx-auto w-full custom-container">

            {
                features.map((feature, i) => (
                    <div
                        className="flex items-center border border-primary p-5 md:px-3 lg:px-5 justify-center space-x-5 rounded-md" key={i}>
                        <div className="text-primary">
                            {feature.icon}
                        </div>
                        <div className="flex flex-col">
                            <p className="font-medium text-sm  lg:text-lg">{feature.label}</p>
                            <p className="text-xs text-gray-600"> {feature.des}</p>
                        </div>

                    </div>
                ))
            }


        </div>

    );
};

export default Feature;
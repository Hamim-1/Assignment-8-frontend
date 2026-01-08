import { Footprints, Headphones, Laptop, Smartphone, Watch, X } from 'lucide-react';
import React from 'react';
import { SearchByCategory } from '../Shop/SearchByCategory';
interface IProps {
    tab: string | null;
    setTab: React.Dispatch<React.SetStateAction<string | null>>;
}
const CategoryTab: React.FC<IProps> = ({ tab, setTab }) => {
    const isCategoryTabOpen = tab === "Categorise";
    const categories = [
        {
            label: "shoe",
            icon: <Footprints />
        },
        {
            label: "headphone",
            icon: <Headphones />
        },
        {
            label: "watch",
            icon: <Watch />
        },
        {
            label: "laptop",
            icon: <Laptop />
        },
        {
            label: "phone",
            icon: <Smartphone />
        }]


    return (
        <section className={`lg:hidden fixed top-0 ${isCategoryTabOpen ? "left-0" : "-left-full"} xs:w-[320px] w-full duration-700 z-40`}>
            <div className="bg-white h-screen border-r border-gray-400">
                <div className="bg-primary w-full p-3 h-14 relative flex items-center">
                    <span className="absolute left-1/2 -translate-x-1/2 text-white font-medium text-lg">All
                        Categorise</span>
                    <X className='text-white absolute right-5 cursor-pointer' onClick={() => setTab(null)} />
                </div>


                {
                    categories.map(category => (
                        <SearchByCategory key={category.label} category={category.label} setTab={setTab}>
                            <div className="flex items-center py-3 px-4 border-b border-gray-300 hover:bg-black/20 duration-200 cursor-pointer">
                                <div className="text-center w-12">
                                    {category.icon}
                                </div>
                                <h2 className='capitalize'>{category.label}</h2>
                            </div>
                        </SearchByCategory>
                    ))
                }

            </div>
        </section>
    );
};

export default CategoryTab;
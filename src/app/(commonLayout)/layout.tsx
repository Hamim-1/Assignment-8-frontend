import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import Searchbar from "@/components/shared/Searchbar";


const CommonLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="fixed top-0 w-full z-10">
                <Navbar />
                <Searchbar />
            </div>
            <div className="flex-1 pt-20 lg:pt-[150px]">
                {children}
            </div>
            <Footer />
        </div>
    );
};

export default CommonLayout;
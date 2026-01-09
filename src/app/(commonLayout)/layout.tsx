import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import Searchbar from "@/components/shared/Searchbar";


const CommonLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <Searchbar />
            <div className="flex-1">
                {children}
            </div>
            <Footer />
        </div>
    );
};

export default CommonLayout;
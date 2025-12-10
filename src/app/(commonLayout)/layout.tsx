import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import Searchbar from "@/components/shared/Searchbar";


const CommonLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Navbar />
            <Searchbar />
            {children}
            <Footer />
        </>
    );
};

export default CommonLayout;
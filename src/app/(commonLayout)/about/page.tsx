import Hero from "@/components/modules/About/Hero";
import HistoryAndVision from "@/components/modules/About/HistoryAndVision";
import Partner from "@/components/modules/About/Partner";
import Team from "@/components/modules/About/Team";


const AboutUsPage = () => {
    return (
        <>
            <Hero />
            <div className="custom-container mt-10 my-16 flex flex-col space-y-12">
                <HistoryAndVision />
                <Team />
                <Partner />
            </div>
        </>
    );
};

export default AboutUsPage;
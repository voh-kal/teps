import Navbar from "../../components/Nav";
import Statistics from "../../components/Statistics";
import Hero from "./Hero";
import CaseStudiesSection from "./CaseStudiesSection";
import FeaturesSection from "./FeaturesSection";
import Footer from "../../components/Footer";

function Index() {
    return (
        <>
            <Navbar />
            <Hero />
            <Statistics color="bg-[#19213D]" statHeader="Wondering if you can use TEPS for your events?" statSubHeader="See how TEPS transforms event management across various scenarios. Explore practical examples of how our platform streamlines planning, enhances engagement, and delivers successful outcomes for every type of event." statSubHeaderClass="text-md text-blue-100 max-w-4xl mx-auto" statHeaderClass="text-1xl md:text-2xl font-bold text-white mb-4"/>
            <CaseStudiesSection />
            <FeaturesSection />
            <Footer/>
        </>
    );
}

export default Index;
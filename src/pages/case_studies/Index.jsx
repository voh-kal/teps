import { useState } from "react";
import Navbar from "../../components/Navbar";
import Statistics from "../../components/Statistics";
import ScheduleDemo from "../../components/ScheduleDemo";
import Hero from "./Hero";
import CaseStudiesSection from "./CaseStudiesSection";
import TestimonialSection from "./TestimonialSection";
import Footer from "../../components/Footer";
import HighLightSection from "./HighLightSection";
import CreateEventSection from "./CreateEventSection";
import CaseStudySection from "./CaseStudySection";

function Index() {
    const [isScheduleDemoOpen, setIsScheduleDemoOpen] = useState(false);

    return (
        <>
            <Navbar />
            <Hero onScheduleDemo={() => setIsScheduleDemoOpen(true)} />
            <HighLightSection />
            <CaseStudiesSection />
            {/* <Statistics color="bg-[#19213D]" statHeader="Wondering if you can use TEPS for your events?" statSubHeader="See how TEPS transforms event management across various scenarios. Explore practical examples of how our platform streamlines planning, enhances engagement, and delivers successful outcomes for every type of event." statSubHeaderClass="text-md text-blue-100 max-w-4xl mx-auto" statHeaderClass="text-1xl md:text-2xl font-bold text-white mb-4"/> */}
            <CaseStudySection />
            <TestimonialSection />
            <CreateEventSection onScheduleDemo={() => setIsScheduleDemoOpen(true)} />
            <Footer/>
            <ScheduleDemo
                isOpen={isScheduleDemoOpen}
                onClose={() => setIsScheduleDemoOpen(false)}
            />
        </>
    );
}

export default Index;
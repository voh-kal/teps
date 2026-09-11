import { useState } from 'react';
import ActionSection from "../../components/ActionSection";
import Navbar from "../../components/Navbar";
import Hero from "./Hero";
import WhySection from "./WhySection";
import MissionSection from "./MissionSection";
import OfferValuesSection from "./OfferValuesSection";
import EventTypesSection from "./EventTypesSection";
import Footer from "../../components/Footer";
import ScheduleDemo from "../../components/ScheduleDemo";

function About() {
  const [isScheduleDemoOpen, setIsScheduleDemoOpen] = useState(false);

  return (
    <div className="bg-[#f2f2f2]">
       <Navbar />
       <Hero/>
       <WhySection onScheduleDemo={() => setIsScheduleDemoOpen(true)} />
       <MissionSection/>
       <OfferValuesSection/>
       <Footer/>
       <ScheduleDemo 
         isOpen={isScheduleDemoOpen} 
         onClose={() => setIsScheduleDemoOpen(false)} 
       />
    </div>
  );
}

export default About;
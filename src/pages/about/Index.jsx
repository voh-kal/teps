import { useState } from 'react';
import ActionSection from "../../components/ActionSection";
import Navbar from "../../components/Navbar";
import Seo from "../../components/Seo";
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
       <Seo
         title="About Us"
         description="TEPS is Nigeria's leading event management platform, built to simplify planning, registration, access control and engagement for organisations across Africa. Learn about our mission and the team behind TEPS."
         path="/about"
       />
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
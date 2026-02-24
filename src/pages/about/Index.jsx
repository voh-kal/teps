import { useState } from 'react';
import ActionSection from "../../components/ActionSection";
import Nav from "../../components/Nav";
import Hero from "./Hero";
import ContentSection from "./ContentSection";
import EventTypesSection from "./EventTypesSection";
import Footer from "../../components/Footer";
import ScheduleDemo from "../../components/ScheduleDemo";

function About() {
  const [isScheduleDemoOpen, setIsScheduleDemoOpen] = useState(false);

  return (
    <div className="bg-[#f2f2f2]">
       <Nav></Nav>
       <Hero/>
       <ContentSection/>
       <EventTypesSection/>
       <ActionSection 
         header="Ready to Create Something Amazing?" 
         subheader="Let's discuss your vision and bring your dream event to life. Contact us today for a personalized consultation."
         onScheduleDemo={() => setIsScheduleDemoOpen(true)}
       />
       <Footer/>
       <ScheduleDemo 
         isOpen={isScheduleDemoOpen} 
         onClose={() => setIsScheduleDemoOpen(false)} 
       />
    </div>
  );
}

export default About;
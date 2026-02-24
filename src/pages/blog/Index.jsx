import { useState } from 'react';
import Navbar from "../../components/Nav";
import Hero from "./Hero";
import Support from "./Support";
import BlogSection from "./BlogSection";
import Footer from "../../components/Footer";
import ScheduleDemo from "../../components/ScheduleDemo";

function Index() {
    const [isScheduleDemoOpen, setIsScheduleDemoOpen] = useState(false);

    return (
        <div className="bg-[rgba(0,0,0,0.05)]">
            <Navbar />
            <Hero header="THE EXPERIENCE PLUG SYSTEM  BLOG" subHeader="Your source for the latest news, insights, and updates from The Experience Plug System." />
            <BlogSection />
            <Support onScheduleDemo={() => setIsScheduleDemoOpen(true)} />
            <Footer />
            <ScheduleDemo 
                isOpen={isScheduleDemoOpen} 
                onClose={() => setIsScheduleDemoOpen(false)} 
            />
        </div>
    );
}

export default Index;
import { useState } from 'react';
import Navbar from "../../components/Navbar";
import Seo from "../../components/Seo";
import Hero from "./Hero";
import Support from "./Support";
import BlogSection from "./BlogSection";
import Footer from "../../components/Footer";
import ScheduleDemo from "../../components/ScheduleDemo";

function Index() {
    const [isScheduleDemoOpen, setIsScheduleDemoOpen] = useState(false);
    const [year, setYear] = useState('All');

    return (
        <div className="bg-[rgba(0,0,0,0.05)] dark:bg-[#202020]">
            <Seo
                title="Blog"
                description="Your source for the latest news, insights, and updates from The Experience Plug Systems on event planning, ticketing, registration and access control."
                path="/blog"
            />
            <Navbar />
            <Hero header="THE EXPERIENCE PLUG SYSTEMS  BLOG" subHeader="Your source for the latest news, insights, and updates from The Experience Plug System." year={year} onYearChange={setYear} />
            <BlogSection year={year} />
            <Footer />
            <ScheduleDemo 
                isOpen={isScheduleDemoOpen} 
                onClose={() => setIsScheduleDemoOpen(false)} 
            />
        </div>
    );
}

export default Index;
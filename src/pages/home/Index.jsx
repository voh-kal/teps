import { useState } from 'react';
import Nav from '../../components/Nav';
import Hero from './Hero';
import AboutSection from './AboutSection';
import Sponsors from './Sponsors';
import Footer from '../../components/Footer';
import ScheduleDemo from '../../components/ScheduleDemo';

function Home() {
  const [isScheduleDemoOpen, setIsScheduleDemoOpen] = useState(false);

  return (
    <>
      <Nav />
      <Hero onScheduleDemo={() => setIsScheduleDemoOpen(true)} />
      <Sponsors />
      <AboutSection />
      <Footer />
      <ScheduleDemo 
        isOpen={isScheduleDemoOpen} 
        onClose={() => setIsScheduleDemoOpen(false)} 
      />
    </>
  );
}

export default Home;  
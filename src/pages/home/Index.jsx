import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Hero from './Hero';
import AboutSection from './AboutSection';
import Sponsors from './Sponsors';
import Footer from '../../components/Footer';
import ScheduleDemo from '../../components/ScheduleDemo';
import ShowcaseSection from './ShowcaseSection.jsx'
import PhasesSection from './PhasesSection.jsx'
import QuoteSplitSection from './QuoteSplitSection.jsx'
import TracksGridSection from './TracksGridSection.jsx'
import VideoSection from './VideoSection.jsx'
import AllInSection from './AllInSection.jsx'
import StatsSection from './StatsSection.jsx'
import UseCasesSection from './UseCasesSection.jsx'
import FaqSection from './FaqSection.jsx'
import CtaBannerSection from './CtaBannerSection.jsx'
import UpcomingEventsSection from './UpcomingEventsSection.jsx'

function Home() {
  const [isScheduleDemoOpen, setIsScheduleDemoOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const targetId = location.hash.replace('#', '');
    if (!targetId) return;

    let attempts = 0;
    const tryScroll = () => {
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else if (attempts < 20) {
        attempts += 1;
        setTimeout(tryScroll, 50);
      }
    };
    tryScroll();
  }, [location.hash]);

  return (
    <>
      <Navbar />
      <Hero onScheduleDemo={() => setIsScheduleDemoOpen(true)} />
      <ShowcaseSection />
      <PhasesSection />
      <QuoteSplitSection onScheduleDemo={() => setIsScheduleDemoOpen(true)} />
      <TracksGridSection />
      <VideoSection />
      <AllInSection />
      <StatsSection />
      <UseCasesSection />
      <FaqSection />
      <CtaBannerSection onScheduleDemo={() => setIsScheduleDemoOpen(true)} />
      <UpcomingEventsSection />
      {/* <Sponsors />
      <AboutSection /> */}
      <Footer />
      <ScheduleDemo
        isOpen={isScheduleDemoOpen}
        onClose={() => setIsScheduleDemoOpen(false)}
      />
    </>
  );
}

export default Home;  
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './pages/home/Index';
import About from './pages/about/Index';
import Blog from './pages/blog/Index';
import CaseStudies from './pages/case_studies/Index';
import BlogPost from './pages/blog/BlogPost';
import Preloader from './components/Preloader';
import Privacy from './pages/rules/Privacy';
import NotFound from './pages/NotFound';
import ReactGA from 'react-ga4';
import SsoCallback from './pages/SsoCallback';
import CreateEvent from './pages/CreateEvent';

const initGA = () => {
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
  if (measurementId) {
    // Load gtag script dynamically
    if (!document.getElementById('gtag-script')) {
      const script = document.createElement('script');
      script.id = 'gtag-script';
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
      document.head.appendChild(script);
      
      // Initialize gtag
      window.dataLayer = window.dataLayer || [];
      function gtag(){window.dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', measurementId);
      
      // Make gtag available globally
      window.gtag = gtag;
    }
    
    // Initialize ReactGA
    ReactGA.initialize(measurementId);
  }
};

export const trackPageView = (path) => {
  ReactGA.send({ hitType: "pageview", page: path });
};

// Component to handle page tracking
function PageTracker() {
  const location = useLocation();

  useEffect(() => {
    // Track page view on route change
    if (import.meta.env.VITE_GA_MEASUREMENT_ID) {
      trackPageView(location.pathname + location.search);
    }
  }, [location]);

  return null; // This component doesn't render anything
}

function App() {
  // Initialize Google Analytics on app start
  useEffect(() => {
    initGA();
  }, []);

  return (
    <BrowserRouter>
      <PageTracker />
      <Preloader />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/privacy-policy" element={<Privacy />} />
            <Route path="/sso/callback" element={<SsoCallback />} />
            <Route path="/create-event" element={<CreateEvent />} />
            {/* Catch-all route for 404 errors */}
            <Route path="*" element={<NotFound />} />
          </Routes>
    </BrowserRouter>
  );
}

export default App;
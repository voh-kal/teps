import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Performance monitoring functions
const performanceMonitor = {
  trackPageLoad() {
    if ('performance' in window && import.meta.env.DEV) {
      window.addEventListener('load', () => {
        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
        console.log(`Page loaded in: ${loadTime}ms`);
      });
    }
  },

  trackBundleSize() {
    if ('performance' in window && import.meta.env.DEV) {
      const navigation = performance.getEntriesByType('navigation')[0];
      if (navigation) {
        console.log(`Total download size: ${navigation.transferSize} bytes`);
      }
    }
  }
};

// Initialize performance monitoring
if (import.meta.env.DEV) {
  performanceMonitor.trackPageLoad();
  performanceMonitor.trackBundleSize();
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// Performance monitoring script
// Add this to your main.jsx or a separate performance monitoring file

export const performanceMonitor = {
  // Track initial page load time
  trackPageLoad() {
    if ('performance' in window) {
      window.addEventListener('load', () => {
        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
        console.log(`Page loaded in: ${loadTime}ms`);
        
        // Track largest contentful paint
        if ('LargestContentfulPaint' in window) {
          new PerformanceObserver((entryList) => {
            const entries = entryList.getEntries();
            const lastEntry = entries[entries.length - 1];
            console.log(`LCP: ${lastEntry.startTime}ms`);
          }).observe({ entryTypes: ['largest-contentful-paint'] });
        }
        
        // Track first input delay
        if ('PerformanceEventTiming' in window) {
          new PerformanceObserver((entryList) => {
            const entries = entryList.getEntries();
            entries.forEach((entry) => {
              if (entry.name === 'first-input') {
                const inputDelay = entry.processingStart - entry.startTime;
                console.log(`FID: ${inputDelay}ms`);
              }
            });
          }).observe({ entryTypes: ['event'] });
        }
        
        // Track cumulative layout shift
        if ('LayoutShift' in window) {
          let clsScore = 0;
          new PerformanceObserver((entryList) => {
            entryList.getEntries().forEach((entry) => {
              if (!entry.hadRecentInput) {
                clsScore += entry.value;
                console.log(`CLS Score: ${clsScore}`);
              }
            });
          }).observe({ entryTypes: ['layout-shift'] });
        }
      });
    }
  },

  // Track bundle sizes
  trackBundleSize() {
    if ('performance' in window) {
      const navigation = performance.getEntriesByType('navigation')[0];
      if (navigation) {
        console.log(`Total download size: ${navigation.transferSize} bytes`);
      }
    }
  },

  // Track resource loading
  trackResources() {
    if ('performance' in window) {
      window.addEventListener('load', () => {
        const resources = performance.getEntriesByType('resource');
        const slowResources = resources.filter(resource => resource.duration > 1000);
        
        if (slowResources.length > 0) {
          console.warn('Slow loading resources:', slowResources);
        }
        
        console.log(`Total resources loaded: ${resources.length}`);
      });
    }
  }
};

// Usage: Call this in your main.jsx
export const initPerformanceMonitoring = () => {
  if (import.meta.env.DEV) {
    performanceMonitor.trackPageLoad();
    performanceMonitor.trackBundleSize();
    performanceMonitor.trackResources();
  }
};
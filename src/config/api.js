// API Configuration
const config = {
  API_BASE_URL: import.meta.env.VITE_BASE_URL || 'https://app.eventeps.com',
  STORAGE_BASE_URL: import.meta.env.VITE_STORAGE_BASE_URL || 'https://app.eventeps.com/storage/assets/images',
  
  // API Endpoints
  endpoints: {
    ALL_RESOURCES: '/api/v1/landing-page/all-resources',
    RESOURCE_BY_ID: '/api/v1/landing-page/resource', // Will be used as /resource/{id}
    LOG_IN: '/',
    SIGN_UP: '/pages/signup',
  },
  
  // Helper function to get full API URL
  getApiUrl: (endpoint) => `${config.API_BASE_URL}${endpoint}`,
  
  // Helper function to get full storage URL
  getStorageUrl: (path) => {
    // Remove leading slash from path if it exists to avoid double slashes
    const cleanPath = path?.startsWith('/') ? path.slice(1) : path;
    return `${config.STORAGE_BASE_URL}/${cleanPath}`;
  },
};

export default config;
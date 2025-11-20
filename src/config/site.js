// Site Configuration
// This file contains global configuration values used throughout the application
// Update these values to match your deployment settings

export const SITE_CONFIG = {
  // Main site URL (without trailing slash)
  SITE_URL: "https://pedrorojas.lat",
  
  // Contact email
  CONTACT_EMAIL: "contact@pedrorojas.lat",
  
  // Social media links
  SOCIAL: {
    GITHUB: "https://github.com/Sirpyerre",
    LINKEDIN: "https://www.linkedin.com/in/sirpyerre/"
  }
};

// Helper function to get full URL for a path
export const getFullUrl = (path = "") => {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_CONFIG.SITE_URL}${cleanPath}`;
};

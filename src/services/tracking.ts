// Tracking Pixel Configuration
// Replace these with your actual pixel IDs
const TRACKING_CONFIG = {
  // Meta (Facebook) Pixel ID - Replace 'YOUR_META_PIXEL_ID' with your actual pixel ID
  META_PIXEL_ID: 'YOUR_META_PIXEL_ID',
  
  // TikTok Pixel ID - Replace 'YOUR_TIKTOK_PIXEL_ID' with your actual pixel ID
  TIKTOK_PIXEL_ID: 'YOUR_TIKTOK_PIXEL_ID',
  
  // Google Analytics Measurement ID - Replace 'YOUR_GA_MEASUREMENT_ID' with your actual GA4 ID (e.g., G-XXXXXXXXXX)
  GOOGLE_GA_ID: 'YOUR_GA_MEASUREMENT_ID'
};

// Meta Pixel Events
export const trackMetaEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', eventName, parameters);
  }
};

// TikTok Pixel Events
export const trackTikTokEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && (window as any).ttq) {
    (window as any).ttq.track(eventName, parameters);
  }
};

// Google Analytics Events
export const trackGoogleEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, parameters);
  }
};

// Combined tracking function for all platforms
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  trackMetaEvent(eventName, parameters);
  trackTikTokEvent(eventName, parameters);
  trackGoogleEvent(eventName, parameters);
};

// Specific tracking functions for common events
export const trackSearch = (searchTerm: string, countryCode: string) => {
  const parameters = {
    search_term: searchTerm,
    country: countryCode,
    content_category: 'ad_search'
  };

  trackEvent('Search', parameters);
};

export const trackAdView = (adId: string, pageName?: string) => {
  const parameters = {
    content_id: adId,
    content_type: 'ad',
    page_name: pageName
  };

  trackEvent('ViewContent', parameters);
};

export const trackAdClick = (adId: string, pageName?: string) => {
  const parameters = {
    content_id: adId,
    content_type: 'ad',
    page_name: pageName
  };

  trackEvent('ClickAd', parameters);
};

// Export config for use in HTML
export { TRACKING_CONFIG };
import { trackEvent } from "./googleAnalytics";

/**
 * Local + GA4 hybrid download tracking
 */
export const trackDownload = (resourceName: string) => {
    // 1. LOCAL STORAGE (your dashboard UI)
    const downloads = JSON.parse(
        localStorage.getItem("downloadAnalytics") || "{}",
    );

    downloads[resourceName] = (downloads[resourceName] || 0) + 1;
    localStorage.setItem("downloadAnalytics", JSON.stringify(downloads));

    const totalDownloads = Number(localStorage.getItem("totalDownloads")) || 0;

    localStorage.setItem("totalDownloads", String(totalDownloads + 1));

    // 2. GA4 EVENT (REAL ANALYTICS)
    trackEvent("download", "click", resourceName);
};

/**
 * Track dashboard views (GA4 + local storage)
 */
export const trackDashboardView = (dashboardName: string) => {
    const analytics = JSON.parse(
        localStorage.getItem("dashboardAnalytics") || "{}",
    );

    analytics[dashboardName] = (analytics[dashboardName] || 0) + 1;

    localStorage.setItem("dashboardAnalytics", JSON.stringify(analytics));

    const totalViews = Number(localStorage.getItem("totalDashboardViews")) || 0;

    localStorage.setItem("totalDashboardViews", String(totalViews + 1));

    // GA4 event
    trackEvent("dashboard", "view", dashboardName);
};

/**
 * Track generic CTA clicks (optional but powerful)
 */
export const trackCTA = (ctaName: string) => {
    trackEvent("cta", "click", ctaName);
};

/**
 * Contact tracking
 */
export const trackContactClick = (contactType: string, location: string) => {
    trackEvent("contact", contactType, location);
};

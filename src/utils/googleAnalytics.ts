import ReactGA from "react-ga4";

const GA_MEASUREMENT_ID = process.env.REACT_APP_GA_MEASUREMENT_ID || "";

export const initGA = () => {
    if (!GA_MEASUREMENT_ID) {
        console.warn("GA Measurement ID missing");
        return;
    }

    ReactGA.initialize(GA_MEASUREMENT_ID);
};

export const trackPageView = (path: string) => {
    ReactGA.send({
        hitType: "pageview",
        page: path,
        title: document.title,
    });
};

export const trackEvent = (
    category: string,
    action: string,
    label?: string,
) => {
    ReactGA.event({
        category,
        action,
        label,
    });
};

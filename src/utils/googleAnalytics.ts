import ReactGA from "react-ga4";

const GA_MEASUREMENT_ID = "G-CT7WMBKEN0";

export const initGA = () => {
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

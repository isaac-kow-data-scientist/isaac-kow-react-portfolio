import { useEffect, useState } from "react";
import { trackEvent } from "./utils/googleAnalytics";

import {
    Certifications,
    Contact,
    DashboardAnalytics,
    DashboardGallery,
    Expertise,
    Footer,
    Main,
    Navigation,
    PortfolioResources,
    Project,
    RecruiterCTA,
    Timeline,
} from "./components";

import BackToTop from "./components/BackToTop";
import FadeIn from "./components/FadeIn";
import "./index.scss";

function App() {
    const [mode, setMode] = useState<string>("light");
    // const [mode, setMode] = useState<string>("dark");

    const handleModeChange = () => {
        if (mode === "dark") {
            setMode("light");
        } else {
            setMode("dark");
        }
    };

    useEffect(() => {
        const sections = [
            "expertise",
            "history",
            "projects",
            "dashboard-gallery",
            "dashboard-analytics",
            "certifications",
            "portfolio-resources",
            "contact",
        ];

        const observers: IntersectionObserver[] = [];

        sections.forEach((id) => {
            const element = document.getElementById(id);

            if (!element) return;

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        trackEvent("section_view", "scroll", id);
                    }
                },
                { threshold: 0.5 },
            );

            observer.observe(element);
            observers.push(observer);
        });

        return () => observers.forEach((obs) => obs.disconnect());
    }, []);

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);

    return (
        <div
            className={`main-container ${mode === "dark" ? "dark-mode" : "light-mode"}`}>
            <Navigation
                parentToChild={{ mode }}
                modeChange={handleModeChange}
            />
            <FadeIn transitionDuration={700}>
                <Main />
                <Expertise />
                <Timeline />
                <Project />
                <DashboardGallery />
                <DashboardAnalytics />
                <Certifications />
                <PortfolioResources />
                <RecruiterCTA />
                <Contact />
            </FadeIn>
            <BackToTop />
            <Footer />
        </div>
    );
}

export default App;

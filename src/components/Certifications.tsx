import CloseIcon from "@mui/icons-material/Close";
import { useEffect, useState } from "react";
import CountUp from "react-countup";
import courseraLogo from "../assets/images/certifications/coursera.png";
import datacampLogo from "../assets/images/certifications/datacamp.png";
import microsoftLogo from "../assets/images/certifications/microsoft.png";
import udemyLogo from "../assets/images/certifications/udemy.png";

import cert1 from "../assets/images/certifications/cert1.jpg";
import cert2 from "../assets/images/certifications/cert2.jpg";
import cert3 from "../assets/images/certifications/cert3.jpg";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../assets/styles/Certifications.scss";

type Certificate = {
    image: string;
    title: string;
    link: string;
    featured: boolean;
    ribbon?: string;
    platform: string;
};

function Certifications() {
    const [selectedCertificate, setSelectedCertificate] =
        useState<Certificate | null>(null);
    const certificates: Certificate[] = [
        {
            image: cert1,
            title: "Work Smarter with Microsoft Excel",
            link: "https://www.coursera.org/account/accomplishments/certificate/WNIFQ8NUNYDD",
            featured: true,
            ribbon: "Microsoft Certified",
            platform: "Microsoft",
        },
        {
            image: cert2,
            title: "Introduction to Python",
            link: "https://www.datacamp.com/completed/statement-of-accomplishment/course/cbb4c0ec0a80a2f00daf38b75d5b2a268116a309",
            featured: true,
            ribbon: "DataCamp Certified",
            platform: "DataCamp",
        },
        {
            image: cert3,
            title: "Intermediate Python",
            link: "https://www.datacamp.com/completed/statement-of-accomplishment/course/612e7bf9c1b8399de2116fea95f4798f47a368be",
            featured: true,
            ribbon: "DataCamp Certified",
            platform: "DataCamp",
        },
    ];

    useEffect(() => {
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setSelectedCertificate(null);
            }
        };

        window.addEventListener("keydown", handleEscape);

        return () => {
            window.removeEventListener("keydown", handleEscape);
        };
    }, []);

    return (
        <section id="certifications" className="certifications-section">
            <div className="section-divider"></div>
            <h1>
                Certifications
                <span className="cert-badge">{certificates.length}+</span>
            </h1>

            <p className="certifications-subtitle">
                Continuous learning through industry-recognized training and
                certifications.
            </p>
            <div className="cert-stats">
                <div className="stat-card">
                    <h2>
                        <CountUp end={certificates.length} duration={2} />
                    </h2>
                    <p>Certificates Earned</p>
                </div>

                <div className="stat-card">
                    <h2>
                        <CountUp end={3} duration={2} />
                    </h2>
                    <p>Learning Platforms</p>
                </div>

                <div className="stat-card">
                    <h2>
                        <CountUp end={certificates.length * 35} duration={2} />+
                    </h2>
                    <p>Hours of Training</p>
                </div>
            </div>
            <div className="company-logos">
                <img src={courseraLogo} alt="Coursera" />
                <img src={microsoftLogo} alt="Microsoft" />
                <img src={datacampLogo} alt="DataCamp" />
                <img src={udemyLogo} alt="Udemy" />
            </div>

            <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    768: {
                        slidesPerView: 2,
                    },
                    1200: {
                        slidesPerView: 3,
                    },
                }}>
                {certificates.map((certificate, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className={`certificate-card ${
                                certificate.featured ? "featured-card" : ""
                            }`}
                            onClick={() => setSelectedCertificate(certificate)}>
                            {certificate.featured && (
                                <div className="certificate-ribbon">
                                    ★ {certificate.ribbon}
                                </div>
                            )}
                            <img
                                src={certificate.image}
                                alt={certificate.title}
                            />
                            <div className="certificate-content">
                                <span className="platform-badge">
                                    {certificate.platform}
                                </span>
                                <h3>{certificate.title}</h3>
                                <a
                                    href={certificate.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="credential-btn"
                                    onClick={(e) => e.stopPropagation()}>
                                    View Credential
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            {selectedCertificate && (
                <div
                    className="certificate-modal-overlay"
                    onClick={() => setSelectedCertificate(null)}>
                    <div
                        className="certificate-modal"
                        onClick={(e) => e.stopPropagation()}>
                        <button
                            className="close-modal"
                            onClick={() => setSelectedCertificate(null)}>
                            <CloseIcon />
                        </button>

                        <img
                            src={selectedCertificate.image}
                            alt={selectedCertificate.title}
                        />
                        {selectedCertificate.featured && (
                            <div className="modal-ribbon">
                                ★ {selectedCertificate.ribbon}
                            </div>
                        )}
                        <h2>{selectedCertificate.title}</h2>

                        <a
                            href={selectedCertificate.link}
                            target="_blank"
                            rel="noreferrer"
                            className="credential-btn">
                            Open Credential
                        </a>
                    </div>
                </div>
            )}
        </section>
    );
}

export default Certifications;

import { useEffect, useState } from "react";
import { trackDashboardView } from "../utils/analytics";

// import { FaDatabase, FaFileExcel, FaPython } from "react-icons/fa";
import dashboard1 from "../assets/images/dashboards/dashboard1.png";
import dashboard2 from "../assets/images/dashboards/dashboard2.png";
import dashboard3 from "../assets/images/dashboards/dashboard3.png";
import dashboard4 from "../assets/images/dashboards/dashboard4.png";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../assets/styles/DashboardGallery.scss";

function DashboardGallery() {
    const [selectedImage, setSelectedImage] = useState<any>(null);
    useEffect(() => {
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setSelectedImage(null);
            }
        };

        window.addEventListener("keydown", handleEscape);

        return () => {
            window.removeEventListener("keydown", handleEscape);
        };
    }, []);

    const [searchTerm, setSearchTerm] = useState("");
    const [filter, setFilter] = useState("All");
    const categories = [
        "All",
        "Healthcare",
        "Survey Analytics",
        "Business Intelligence",
    ];
    type Dashboard = {
        image: string;
        title: string;
        description: string;
        tool: string;
        // toolIcon: ReactNode;
        category: string;
    };

    const dashboards: Dashboard[] = [
        {
            image: dashboard1,
            title: "Hospital Utilization Dashboard",
            description:
                "Interactive dashboard built to monitor hospital attendance and service utilization trends.",
            tool: "Excel + Tableau",
            // toolIcon: <FaDatabase />,
            category: "Healthcare",
        },
        {
            image: dashboard2,
            title: "Outpatient Performance Dashboard",
            description:
                "Interactive dashboard built to monitor hospital attendance and service utilization trends.",
            tool: "Excel + Power Query",
            // toolIcon: <FaFileExcel />,
            category: "Healthcare",
        },
        {
            image: dashboard3,
            title: "Household Survey Analysis",
            description:
                "Interactive dashboard built to monitor hospital attendance and service utilization trends.",
            tool: "Python + Pandas",
            // toolIcon: <FaPython />,
            category: "Survey Analytics",
        },
        {
            image: dashboard4,
            title: "Sales Analytics Dashboard",
            description:
                "Interactive dashboard built to monitor hospital attendance and service utilization trends.",
            tool: "SQL + Tableau",
            // toolIcon: <FaDatabase />,
            category: "Business Intelligence",
        },
    ];

    return (
        <section id="dashboard-gallery" className="dashboard-gallery-section">
            <h1>Featured Dashboards</h1>
            <p className="dashboard-subtitle">
                Interactive dashboards and analytical reports built using Excel,
                SQL, Python, Tableau, and Power BI to support data-driven
                decision making.
            </p>
            <div className="dashboard-stats">
                <div>
                    <h2>5+</h2>
                    <p>Dashboards Built</p>
                </div>
                <div>
                    <h2>4+</h2>
                    <p>Tools Used</p>
                </div>
                <div>
                    <h2>100%</h2>
                    <p>Interactive</p>
                </div>
            </div>
            <input
                type="text"
                placeholder="Search dashboards..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="dashboard-search"
            />
            <div className="dashboard-filters">
                {categories.map((category) => (
                    <button
                        key={category}
                        className={filter === category ? "active-filter" : ""}
                        onClick={() => setFilter(category)}>
                        {category}
                    </button>
                ))}
            </div>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                spaceBetween={30}
                breakpoints={{
                    768: {
                        slidesPerView: 2,
                    },
                    1200: {
                        slidesPerView: 3,
                    },
                }}>
                {dashboards
                    .filter((dashboard) => {
                        const query = searchTerm.toLowerCase().trim();

                        const matchesFilter =
                            filter === "All" || dashboard.category === filter;

                        const matchesSearch =
                            query === "" ||
                            dashboard.title.toLowerCase().includes(query) ||
                            dashboard.category.toLowerCase().includes(query) ||
                            dashboard.tool.toLowerCase().includes(query) ||
                            query
                                .split(" ")
                                .some(
                                    (word) =>
                                        dashboard.title
                                            .toLowerCase()
                                            .includes(word) ||
                                        dashboard.category
                                            .toLowerCase()
                                            .includes(word) ||
                                        dashboard.tool
                                            .toLowerCase()
                                            .includes(word),
                                );

                        return matchesFilter && matchesSearch;
                    })
                    .map((dashboard, index) => {
                        const highlightText = (text: string) => {
                            const query = searchTerm.trim();
                            if (!query) return text;

                            const regex = new RegExp(`(${query})`, "gi");

                            return text.split(regex).map((part, i) =>
                                part.toLowerCase() === query.toLowerCase() ? (
                                    <span key={i} className="highlight">
                                        {part}
                                    </span>
                                ) : (
                                    part
                                ),
                            );
                        };
                        return (
                            <SwiperSlide key={index}>
                                <div
                                    className="dashboard-card"
                                    onClick={() => {
                                        trackDashboardView(dashboard.title);
                                        setSelectedImage(dashboard);
                                    }}>
                                    <img
                                        src={dashboard.image}
                                        alt={dashboard.title}
                                    />
                                    <div className="dashboard-content">
                                        <span className="dashboard-category">
                                            {dashboard.category}
                                        </span>
                                        <h3>
                                            {highlightText(dashboard.title)}
                                        </h3>
                                        <p>{dashboard.description}</p>
                                        <span>{dashboard.tool}</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                        );
                    })}
            </Swiper>

            {selectedImage && (
                <div
                    className="dashboard-modal-overlay"
                    onClick={() => setSelectedImage(null)}>
                    <div
                        className="dashboard-modal"
                        onClick={(e) => e.stopPropagation()}>
                        <button
                            className="close-dashboard-modal"
                            onClick={() => setSelectedImage(null)}>
                            ×
                        </button>
                        <img
                            src={selectedImage.image}
                            alt={selectedImage.title}
                        />
                        <h2>{selectedImage.title}</h2>
                        <div className="dashboard-tool-badge">
                            {selectedImage.tool}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}

export default DashboardGallery;

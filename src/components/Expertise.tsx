import {
    faDocker,
    faPython,
    faReact,
} from "@fortawesome/free-brands-svg-icons";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Chip from "@mui/material/Chip";
import { useInView } from "react-intersection-observer";
import "../assets/styles/Expertise.scss";

const labelsFirst = [
    "Excel",
    "Pivot Tables",
    "Power Query",
    "Data Cleaning",
    "Data Visualization",
    "Dashboard Design",
    "Reporting",
    "Business Analysis",
];

const labelsSecond = [
    "SQL",
    "PostgreSQL",
    "Database Design",
    "Joins",
    "Views",
    "Stored Queries",
    "Data Extraction",
    "Data Modeling",
];

const labelsThird = [
    "Python",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Streamlit",
    "Statistics",
    "Automation",
    "Data Processing",
];

function Expertise() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });
    return (
        <div className="container" id="expertise">
            <div className="skills-container">
                <h1>Technical Skills</h1>
                <p className="expertise-intro">
                    My core analytical and technical skills used for data
                    analysis, reporting, visualization, and decision support.
                </p>

                <div className="skills-grid" ref={ref}>
                    <div className="skill">
                        <FontAwesomeIcon icon={faReact} size="3x" />
                        <h3>Data Analysis & Visualization</h3>
                        <p>
                            I analyze, clean, and transform raw data into
                            meaningful insights using Excel, dashboards, and
                            visualization techniques. My goal is to support
                            evidence-based decision making through clear and
                            actionable reports.
                        </p>

                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsFirst.map((label, index) => (
                                <Chip
                                    key={index}
                                    className="chip"
                                    label={label}
                                />
                            ))}
                        </div>
                        <div className="skill-progress">
                            <div className="progress-header">
                                <span>Proficiency</span>
                                <span>90%</span>
                            </div>

                            <div className="progress-bar">
                                <div
                                    className="progress-fill"
                                    style={{
                                        width: inView ? "90%" : "0%",
                                    }}></div>
                            </div>
                        </div>
                    </div>
                    <div className="skill">
                        <FontAwesomeIcon icon={faDocker} size="3x" />
                        <h3>Database & SQL Analytics</h3>
                        <p>
                            I use SQL and PostgreSQL to store, query, and
                            analyze data. I am experienced in joins, filtering,
                            aggregation, and database management for extracting
                            business insights.
                        </p>

                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsSecond.map((label, index) => (
                                <Chip
                                    key={index}
                                    className="chip"
                                    label={label}
                                />
                            ))}
                        </div>
                        <div className="skill-progress">
                            <div className="progress-header">
                                <span>Proficiency</span>
                                <span>85%</span>
                            </div>

                            <div className="progress-bar">
                                <div
                                    className="progress-fill"
                                    style={{
                                        width: inView ? "85%" : "0%",
                                    }}></div>
                            </div>
                        </div>
                    </div>
                    <div className="skill">
                        <FontAwesomeIcon icon={faPython} size="3x" />
                        <h3>Python & Statistical Analysis</h3>
                        <p>
                            I use Python for data cleaning, exploratory
                            analysis, automation, and statistical computations.
                            I build data-driven applications and dashboards
                            using libraries such as Pandas, NumPy, Matplotlib,
                            and Streamlit.
                        </p>

                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsThird.map((label, index) => (
                                <Chip
                                    key={index}
                                    className="chip"
                                    label={label}
                                />
                            ))}
                        </div>
                        <div className="skill-progress">
                            <div className="progress-header">
                                <span>Proficiency</span>
                                <span>80%</span>
                            </div>

                            <div className="progress-bar">
                                <div
                                    className="progress-fill"
                                    style={{
                                        width: inView ? "80%" : "0%",
                                    }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Expertise;

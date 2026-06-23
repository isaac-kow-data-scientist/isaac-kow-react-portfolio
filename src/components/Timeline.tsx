import "@fortawesome/free-regular-svg-icons";
import {
    faBriefcase,
    faChartLine,
    faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
// import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";

function Timeline() {
    return (
        <div id="history">
            <div className="items-container">
                <h1>Education & Experience</h1>
                <p className="timeline-intro">
                    My journey from studying Economics & Statistics to building
                    practical data analytics skills through healthcare data
                    management and personal projects.
                </p>
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2025 - Present"
                        iconStyle={{
                            background: "#5000ca",
                            color: "#fff",
                            boxShadow: "0 0 15px rgba(80,0,202,0.5)",
                        }}
                        // iconStyle={{ background: "#5000ca", color: "#fff" }}
                        icon={<FontAwesomeIcon icon={faBriefcase} />}>
                        <h3 className="vertical-timeline-element-title">
                            National Service Personnel
                        </h3>
                        <h4 className="vertical-timeline-element-subtitle">
                            Health Information Unit, Winneba Municipal Hospital
                            - Winneba
                        </h4>
                        <p>
                            Managing healthcare data entry, validation,
                            reporting, and health information systems. Working
                            with patient records and monthly health statistics
                            to support decision-making.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2025 - Present"
                        iconStyle={{
                            background: "#5000ca",
                            color: "#fff",
                            boxShadow: "0 0 15px rgba(80,0,202,0.5)",
                        }}
                        // iconStyle={{ background: "#5000ca", color: "#fff" }}
                        icon={<FontAwesomeIcon icon={faChartLine} />}>
                        <h3 className="vertical-timeline-element-title">
                            Data Analytics Learning Journey
                        </h3>
                        <h4 className="vertical-timeline-element-subtitle">
                            Self-Directed Training
                        </h4>
                        <p>
                            Building projects using Excel, SQL, PostgreSQL,
                            Python and Tableau. Developing skills in data
                            cleaning, visualization, dashboard creation, and
                            statistical analysis.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2022 - 2025"
                        iconStyle={{
                            background: "#5000ca",
                            color: "#fff",
                            boxShadow: "0 0 15px rgba(80,0,202,0.5)",
                        }}
                        // iconStyle={{ background: "#5000ca", color: "#fff" }}
                        icon={<FontAwesomeIcon icon={faGraduationCap} />}>
                        <h3 className="vertical-timeline-element-title">
                            BA Economics & Statistics
                        </h3>
                        <h4 className="vertical-timeline-element-subtitle">
                            University of Ghana, Legon
                        </h4>
                        <p>
                            Studied statistical methods, inference, experimental
                            designs, calculus, linear algebra, economic theory,
                            econometrics, data analysis, research methods, and
                            quantitative problem solving.
                        </p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
                {/* <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2022 - present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Technology Consultant</h3>
            <h4 className="vertical-timeline-element-subtitle">Dallas, TX</h4>
            <p>
              Full-stack Web Development, GenAI/LLM, Project Management, Business Development
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 - 2022"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Full Stack Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Laie, HI</h4>
            <p>
              Frontend Development, Backend Development, User Experience, Team Leading
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2021 - 2021"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Staff Engineer Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Laie, HI</h4>
            <p>
              Full-stack Development, API Development, User Experience
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 - 2020"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Data Analyst Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Tokyo, Japan</h4>
            <p>
              Automation, Data Governance, Statistical Analysis
            </p>
          </VerticalTimelineElement> */}
            </div>
        </div>
    );
}

export default Timeline;

import hospitalDashboard from "../assets/images/projects/hospital-dashboard.png";
import "../assets/styles/Project.scss";

function Project() {
    return (
        <div className="projects-container" id="projects">
            <h1>Featured Analytics Projects</h1>
            <div className="projects-grid">
                <div className="project">
                    <img
                        src={hospitalDashboard}
                        alt="Hospital Dashboard"
                        width="100%"
                    />
                    <h2>Hospital Service Utilization Dashboard</h2>
                    <div className="project-tools">
                        <span>Excel</span>
                        <span>Tableau</span>
                        <span>Statistics</span>
                    </div>
                    <p>
                        Developed an interactive healthcare dashboard to analyze
                        patient attendance, service utilization, and monthly
                        trends. Designed visualizations that support data-driven
                        decision making in a healthcare environment.
                    </p>
                    <div className="project-links">
                        <a href="/">GitHub</a>
                        <a href="/">Live Demo</a>
                    </div>
                </div>
                <div className="project">
                    <img
                        src={hospitalDashboard}
                        alt="OPD Dashboard"
                        width="100%"
                    />
                    <h2>Outpatient Department Performance Dashboard</h2>
                    <div className="project-tools">
                        <span>Excel</span>
                        <span>Power Query</span>
                        <span>Tableau</span>
                    </div>
                    <p>
                        Analyzed outpatient attendance data to identify service
                        utilization trends, peak attendance periods, and
                        department performance indicators. Built interactive
                        visualizations to support hospital planning and resource
                        allocation.
                    </p>
                    <div className="project-links">
                        <a href="/">GitHub</a>
                        <a href="/">Live Demo</a>
                    </div>
                </div>
                <div className="project">
                    <img
                        src={hospitalDashboard}
                        alt="Data Quality Assessment"
                        width="100%"
                    />
                    <h2>Health Records Data Quality Assessment</h2>
                    <div className="project-tools">
                        <span>Excel</span>
                        <span>SQL</span>
                        <span>Statistics</span>
                    </div>
                    <p>
                        Performed data cleaning and quality assessment on health
                        facility records. Identified missing values, duplicates,
                        and inconsistencies to improve reporting accuracy.
                    </p>
                    <div className="project-links">
                        <a href="/">GitHub</a>
                        <a href="/">Live Demo</a>
                    </div>
                </div>
                <div className="project">
                    <img
                        src={hospitalDashboard}
                        alt="Household Survey Analysis"
                        width="100%"
                    />
                    <h2>Household Survey Analysis</h2>
                    <div className="project-tools">
                        <span>Python</span>
                        <span>Pandas</span>
                        <span>Statistics</span>
                    </div>
                    <p>
                        Analyzed household survey datasets using statistical
                        techniques to generate insights on demographic and
                        socioeconomic indicators. Produced summary statistics
                        and visual reports.
                    </p>
                    <div className="project-links">
                        <a href="/">GitHub</a>
                        <a href="/">Live Demo</a>
                    </div>
                </div>
                <div className="project">
                    <img
                        src={hospitalDashboard}
                        alt="Sales Dashboard"
                        width="100%"
                    />
                    <h2>Sales Data Analysis Dashboard</h2>
                    <div className="project-tools">
                        <span>Excel</span>
                        <span>SQL</span>
                        <span>Tableau</span>
                    </div>
                    <p>
                        Built an interactive dashboard to track revenue,
                        customer trends, and product performance. Generated
                        actionable insights for business decision-making.
                    </p>
                    <div className="project-links">
                        <a href="/">GitHub</a>
                        <a href="/">Live Demo</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;

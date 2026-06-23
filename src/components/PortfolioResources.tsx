import DownloadIcon from "@mui/icons-material/Download";
import { trackDownload } from "../utils/analytics";

import "../assets/styles/PortfolioResources.scss";

function PortfolioResources() {
    return (
        <section
            id="portfolio-resources"
            className="portfolio-resources-section">
            <h1>Portfolio Resources</h1>

            <p className="resources-subtitle">
                Download professional documents showcasing my experience,
                projects, certifications and technical skills.
            </p>

            <div className="resources-grid">
                <div className="resource-card">
                    <h3>Portfolio PDF</h3>

                    <p>
                        Complete portfolio containing dashboards, projects,
                        certifications and professional profile.
                    </p>

                    <a
                        href="/documents/Isaac_Kow_Mensah_CV.pdf"
                        download
                        className="resource-btn"
                        onClick={() => trackDownload("Portfolio PDF")}>
                        <DownloadIcon />
                        Download Portfolio
                    </a>
                </div>

                <div className="resource-card">
                    <h3>Resume / CV</h3>

                    <p>
                        Latest resume highlighting education, skills and
                        professional experience.
                    </p>

                    <a
                        href="/documents/Isaac_Kow_Mensah_CV.pdf"
                        download
                        className="resource-btn"
                        onClick={() => trackDownload("Resume CV")}>
                        <DownloadIcon />
                        Download Resume
                    </a>
                </div>
            </div>
        </section>
    );
}

export default PortfolioResources;

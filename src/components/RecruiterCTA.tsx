import DownloadIcon from "@mui/icons-material/Download";
import EmailIcon from "@mui/icons-material/Email";
import { trackCTA, trackDownload } from "../utils/analytics";

import "../assets/styles/RecruiterCTA.scss";

function RecruiterCTA() {
    return (
        <section className="recruiter-cta">
            <div className="cta-content">
                <h2>Interested in Working Together?</h2>

                <p>
                    Available for Data Analyst, Business Intelligence, Health
                    Information, Monitoring & Evaluation, and Data Management
                    opportunities.
                </p>

                <div className="cta-buttons">
                    <a
                        href="/documents/Isaac_Kow_Mensah_CV.pdf"
                        download
                        className="cta-primary"
                        onClick={() => trackDownload("Recruiter CTA Resume")}>
                        <DownloadIcon />
                        Download Resume
                    </a>
                    <a
                        href="#contact"
                        className="cta-secondary"
                        onClick={() => trackCTA("recruiter_contact_button")}>
                        <EmailIcon />
                        Contact Me
                    </a>
                </div>
            </div>
        </section>
    );
}

export default RecruiterCTA;

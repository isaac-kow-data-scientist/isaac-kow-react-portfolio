import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { trackContactClick, trackCTA } from "../utils/analytics";
import VisitorCounter from "./VisitorCounter";

import "../assets/styles/Footer.scss";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-grid">
                {/* Column 1 */}
                <div className="footer-column">
                    <h2>Isaac Kow Mensah</h2>

                    <p className="footer-description">
                        Aspiring Data Analyst passionate about transforming data
                        into actionable insights through analytics,
                        visualization and statistical methods.
                    </p>

                    <div className="footer-socials">
                        <a
                            href="https://github.com/isaac-kow-data-scientist"
                            target="_blank"
                            rel="noreferrer"
                            onClick={() =>
                                trackContactClick("github_click", "footer")
                            }>
                            <GitHubIcon />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/isaackowmensah/"
                            target="_blank"
                            rel="noreferrer"
                            onClick={() =>
                                trackContactClick("linkedin_click", "footer")
                            }>
                            <LinkedInIcon />
                        </a>

                        <a
                            href="https://wa.me/233551505703"
                            target="_blank"
                            onClick={() =>
                                trackContactClick("whatsapp_click", "footer")
                            }
                            rel="noreferrer">
                            <WhatsAppIcon />
                        </a>
                    </div>
                </div>

                {/* Column 2 */}
                <div className="footer-column">
                    <h3>Quick Links</h3>

                    <a
                        href="#expertise"
                        onClick={() => trackCTA("footer_expertise")}>
                        Expertise
                    </a>
                    <a
                        href="#history"
                        onClick={() => trackCTA("footer_experience")}>
                        Experience
                    </a>
                    <a
                        href="#projects"
                        onClick={() => trackCTA("footer_projects")}>
                        Projects
                    </a>
                    <a
                        href="#dashboard-gallery"
                        onClick={() => trackCTA("footer_dashboard")}>
                        Dashboards
                    </a>
                    <a
                        href="#certifications"
                        onClick={() => trackCTA("footer_certifications")}>
                        Certifications
                    </a>
                    <a
                        href="#contact"
                        onClick={() => trackCTA("footer_contact")}>
                        Contact
                    </a>
                </div>

                {/* Column 3 */}
                <div className="footer-column">
                    <h3>Contact Me</h3>

                    <a
                        href="mailto:ikmensah025@gmail.com"
                        onClick={() =>
                            trackContactClick("email_click", "footer")
                        }>
                        📧 ikmensah025@gmail.com
                    </a>

                    <a
                        href="tel:+233551505703"
                        onClick={() =>
                            trackContactClick("phone_click", "footer")
                        }>
                        📱 +233 55 150 5703
                    </a>
                    <p>📍 Ghana</p>
                </div>
            </div>

            <div className="footer-bottom">
                <VisitorCounter />
                <p>
                    © {new Date().getFullYear()} Isaac Kow Mensah. All rights
                    reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;

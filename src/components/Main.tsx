import DownloadIcon from "@mui/icons-material/Download";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import isaacImage from "../assets/images/isaac.jpeg";
import "../assets/styles/Main.scss";
import { trackContactClick, trackCTA, trackDownload } from "../utils/analytics";

function Main() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });
    return (
        <div className="container">
            <div className="about-section">
                <div className="image-wrapper">
                    <img src={isaacImage} alt="Isaac Kow Mensah" />
                </div>
                <div className="content">
                    <div className="social_icons">
                        <a
                            href="https://github.com/isaac-kow-data-scientist"
                            target="_blank"
                            onClick={() => trackCTA("hero_github")}
                            rel="noreferrer">
                            <GitHubIcon />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/isaackowmensah/"
                            target="_blank"
                            onClick={() => trackCTA("hero_linkedin")}
                            rel="noreferrer">
                            <LinkedInIcon />
                        </a>
                    </div>
                    <h1>Isaac Kow Mensah</h1>
                    <h2 className="hero-tagline">
                        Transforming Data into Actionable Insights
                    </h2>
                    <h3>
                        Aspiring Data Analyst | Economics & Statistics Graduate
                    </h3>
                    <h4 className="skills-heading">Core Skills</h4>
                    <div className="skill-tags">
                        <span>Excel</span>
                        <span>SQL</span>
                        <span>PostgreSQL</span>
                        <span>Python</span>
                        <span>Tableau</span>
                        <span>Statistics</span>
                    </div>
                    <p className="hero-summary">
                        Aspiring Data Analyst with a background in Economics and
                        Statistics. Skilled in Python, SQL, Excel, PostgreSQL,
                        Tableau, and Statistical Analysis. Passionate about
                        transforming raw data into actionable insights that
                        support business and policy decision-making.
                    </p>
                    <div className="hero-buttons">
                        <a
                            href="/documents/Isaac_Kow_Mensah_CV.pdf"
                            target="_blank"
                            rel="noreferrer"
                            className="primary-btn"
                            onClick={() => trackCTA("view_cv")}>
                            View CV
                        </a>
                        <a
                            href="/documents/Isaac_Kow_Mensah_CV.pdf"
                            download
                            className="primary-btn"
                            onClick={() => trackDownload("hero_cv_download")}>
                            <DownloadIcon />
                            Download CV
                        </a>
                        <a
                            href="#contact"
                            className="secondary-btn"
                            onClick={() => trackCTA("hero_contact_button")}>
                            <EmailIcon />
                            Contact Me
                        </a>
                    </div>
                    <div className="quick-contact">
                        <a
                            href="mailto:ikmensah025@gmail.com"
                            onClick={() =>
                                trackContactClick("email_click", "hero")
                            }>
                            📧 ikmensah025@gmail.com
                        </a>
                        <a
                            href="tel:+233551505703"
                            onClick={() =>
                                trackContactClick("phone_click", "hero")
                            }>
                            📱 +233 55 150 5703
                        </a>
                        <span>📍 Ghana</span>
                    </div>
                    <div className="hero-stats" ref={ref}>
                        <div className="hero-stat">
                            <h2>
                                {inView && (
                                    <CountUp start={0} end={5} duration={2} />
                                )}
                                +
                            </h2>
                            <p>Projects</p>
                        </div>
                        <div className="hero-stat">
                            <h2>
                                {inView && (
                                    <CountUp start={0} end={6} duration={2} />
                                )}
                                +
                            </h2>
                            <p>Technical Skills</p>
                        </div>
                        <div className="hero-stat">
                            <h2>
                                {inView && (
                                    <CountUp start={0} end={1} duration={2} />
                                )}
                                +
                            </h2>
                            <p>Years Learning</p>
                        </div>
                    </div>
                    <div className="mobile_social_icons">
                        <a
                            href="https://github.com/isaac-kow-data-scientist"
                            target="_blank"
                            rel="noreferrer">
                            <GitHubIcon />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/isaackowmensah/"
                            target="_blank"
                            rel="noreferrer">
                            <LinkedInIcon />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;

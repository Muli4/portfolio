import Image from "next/image";
import profilePic from "../public/profile.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faLinkedin, 
    faGithub, 
    faTwitter, 
    faWhatsapp, 
    faInstagram, 
    faFacebook 
} from "@fortawesome/free-brands-svg-icons";

export default function Hero() {
    return (
        <section className="hero">
            {/* Left content */}
            <div className="hero-text">
                <h2>Software Developer</h2>
                <h1>Hello I'm <span>Maurice Muli</span></h1>
                <p>
                    I excel at crafting elegant digital experiences and 
                    I am proficient in various programming languages and technologies.
                </p>
                <div className="hero-buttons">
                    <button className="cv-button">Download CV</button>
                    <div className="social-icons">
                        <a href="#"><FontAwesomeIcon icon={faLinkedin} size="1x" /></a>
                        <a href="#"><FontAwesomeIcon icon={faGithub} size="1x" /></a>
                        <a href="#"><FontAwesomeIcon icon={faTwitter} size="1x" /></a>
                        <a href="#"><FontAwesomeIcon icon={faWhatsapp} size="1x" /></a>
                        <a href="#"><FontAwesomeIcon icon={faInstagram} size="1x" /></a>
                        <a href="#"><FontAwesomeIcon icon={faFacebook} size="1x" /></a>
                    </div>
                </div>
            </div>
            
            {/* Right Content */}
            <div className="hero-image">
                <div className="image-border">
                    <Image src={profilePic} alt="Profile Picture" className="profile-pic"/>
                </div>
            </div>

            {/* Statistics */}
            <div className="hero-status">
                <div className="stat">
                    <h3>3</h3>
                    <p>Years of Experience</p>
                </div>

                <div className="stat">
                    <h3>23</h3>
                    <p>Projects Completed</p>
                </div>

                <div className="stat">
                    <h3>7</h3>
                    <p>Technologies Mastered</p>
                </div>

                <div className="stat">
                    <h3>313</h3>
                    <p>Commits</p>
                </div>
            </div>
        </section>
    );
}

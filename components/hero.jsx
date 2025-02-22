import { useState, useEffect } from "react";
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
    // State for animated numbers
    const [experience, setExperience] = useState(0);
    const [projects, setProjects] = useState(0);
    const [technologies, setTechnologies] = useState(0);
    const [commits, setCommits] = useState(0);

    // Function to handle counting animation
    const animateCount = (setter, target) => {
        let start = 0;
        let increment = Math.ceil(target / 100); // Speed control
        const interval = setInterval(() => {
            start += increment;
            if (start >= target) {
                setter(target);
                clearInterval(interval);
            } else {
                setter(start);
            }
        }, 30);
    };

    // Run animation when component mounts
    useEffect(() => {
        animateCount(setExperience, 3);
        animateCount(setProjects, 10);
        animateCount(setTechnologies, 7);
        animateCount(setCommits, 313);
    }, []);

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
                        <a href="https://www.linkedin.com/in/maurice-muli-12463830a/"><FontAwesomeIcon icon={faLinkedin} size="1x" /></a>
                        <a href="https://github.com/Muli4"><FontAwesomeIcon icon={faGithub} size="1x" /></a>
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
                    <h3>{experience}</h3>
                    <p>Years of Experience</p>
                </div>

                <div className="stat">
                    <h3>{projects}</h3>
                    <p>Projects Completed</p>
                </div>

                <div className="stat">
                    <h3>{technologies}</h3>
                    <p>Technologies Mastered</p>
                </div>

                <div className="stat">
                    <h3>{commits}</h3>
                    <p>Commits</p>
                </div>
            </div>
        </section>
    );
}

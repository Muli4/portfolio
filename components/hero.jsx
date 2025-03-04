import { useState, useEffect } from "react";
import Image from "next/image";
import profilePic from "../public/profile.jpg";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLinkedin,
    faGithub,
    faTwitter,
    faWhatsapp,
    faInstagram,
    faFacebook,
} from "@fortawesome/free-brands-svg-icons";

export default function Hero() {
    // State for animated numbers
    const [experience, setExperience] = useState(0);
    const [projects, setProjects] = useState(0);
    const [technologies, setTechnologies] = useState(0);
    const [commits, setCommits] = useState(0);

    // Function to animate counting
    const animateCount = (setter, target, duration = 1000) => {
        let start = 0;
        const stepTime = Math.max(Math.floor(duration / target), 10);
        const step = () => {
            start += Math.ceil(target / (duration / stepTime));
            setter(start < target ? start : target);
            if (start < target) {
                requestAnimationFrame(step);
            }
        };
        step();
    };

    // Run animation when component mounts
    useEffect(() => {
        animateCount(setExperience, 3);
        animateCount(setProjects, 10);
        animateCount(setTechnologies, 7);
        animateCount(setCommits, 313);
    }, []);

    return (
        <>
            {/* HERO SECTION */}
            <section className="hero">
                {/* Left content */}
                <div className="hero-text">
                    <h2>Software Developer</h2>
                    <h1>
                        Hello, I'm <span>Maurice Muli</span>
                    </h1>
                    <p>
                        I excel at crafting elegant digital experiences and am proficient in
                        various programming languages and technologies.
                    </p>
                    <div className="hero-buttons">
                        <button className="cv-button">
                           <Link href="/Maurice_Muli_CV.pdf" download>
                               Download CV
                            </Link>
                        </button>
                        <div className="social-icons">
                            <a href="https://www.linkedin.com/in/maurice-muli-12463830a/" aria-label="LinkedIn">
                                <FontAwesomeIcon icon={faLinkedin} size="1x" />
                            </a>
                            <a href="https://github.com/Muli4" aria-label="GitHub">
                                <FontAwesomeIcon icon={faGithub} size="1x" />
                            </a>
                            <a href="#" aria-label="Twitter">
                                <FontAwesomeIcon icon={faTwitter} size="1x" />
                            </a>
                            <a href="#" aria-label="WhatsApp">
                                <FontAwesomeIcon icon={faWhatsapp} size="1x" />
                            </a>
                            <a href="#" aria-label="Instagram">
                                <FontAwesomeIcon icon={faInstagram} size="1x" />
                            </a>
                            <a href="#" aria-label="Facebook">
                                <FontAwesomeIcon icon={faFacebook} size="1x" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right content */}
                <div className="hero-image">
                    <div className="image-border">
                        <Image src={profilePic} alt="Maurice Muli's Profile Picture" className="profile-pic" />
                    </div>
                </div>
            </section>

            {/* STATISTICS SECTION */}
            <section className="statistics">
                <h2 className="stats-title">My Achievements</h2>
                <div className="hero-status">
                    <div className="stat">
                        <h3>{experience}+</h3>
                        <p>Years of Experience</p>
                    </div>
                    <div className="stat">
                        <h3>{projects}+</h3>
                        <p>Projects Completed</p>
                    </div>
                    <div className="stat">
                        <h3>{technologies}+</h3>
                        <p>Technologies Mastered</p>
                    </div>
                    <div className="stat">
                        <h3>{commits}+</h3>
                        <p>Commits</p>
                    </div>
                </div>
            </section>
        </>
    );
}

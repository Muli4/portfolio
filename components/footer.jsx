import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLinkedin,
    faGithub,
    faTwitter,
    faWhatsapp,
    faInstagram,
    faFacebook,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto px-6 text-center md:text-left">
                {/* Top Section */}
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
                    {/* Left: Brand Info */}
                    <div className="mb-6 md:mb-0">
                        <h2 className="text-2xl font-bold">Maurice Muli</h2>
                        <p className="text-gray-400 mt-2 max-w-sm">
                            Building exceptional digital experiences with modern technologies.
                        </p>
                    </div>

                    {/* Center: Quick Links */}
                    <div className="mb-6 md:mb-0">
                        <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
                        <ul className="text-gray-400 space-y-2">
                            <li><a href="#about" className="hover:text-green-400">About</a></li>
                            <li><a href="#projects" className="hover:text-green-400">Projects</a></li>
                            <li><a href="#skills" className="hover:text-green-400">Skills</a></li>
                            <li><a href="#contact" className="hover:text-green-400">Contact</a></li>
                        </ul>
                    </div>

                    {/* Right: Social Media */}
                    <div>
                        <h3 className="text-lg font-semibold mb-3">Follow Me</h3>
                        <div className="flex space-x-4">
                            <a href="https://www.linkedin.com/in/maurice-muli-12463830a/" aria-label="LinkedIn">
                                <FontAwesomeIcon icon={faLinkedin} className="text-xl hover:text-green-400" />
                            </a>
                            <a href="https://github.com/Muli4" aria-label="GitHub">
                                <FontAwesomeIcon icon={faGithub} className="text-xl hover:text-green-400" />
                            </a>
                            <a href="#" aria-label="Twitter">
                                <FontAwesomeIcon icon={faTwitter} className="text-xl hover:text-green-400" />
                            </a>
                            <a href="#" aria-label="WhatsApp">
                                <FontAwesomeIcon icon={faWhatsapp} className="text-xl hover:text-green-400" />
                            </a>
                            <a href="#" aria-label="Instagram">
                                <FontAwesomeIcon icon={faInstagram} className="text-xl hover:text-green-400" />
                            </a>
                            <a href="#" aria-label="Facebook">
                                <FontAwesomeIcon icon={faFacebook} className="text-xl hover:text-green-400" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-700 mt-6 pt-4 text-gray-500 text-sm text-center">
                    <p>&copy; {new Date().getFullYear()} Maurice Muli. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

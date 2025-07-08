import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [darkMode, setDarkMode] = useState(() => {
        if (typeof window !== "undefined") {
            return localStorage.getItem("theme") === "dark";
        }
        return true; // Default to dark mode
    });

    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add("dark-mode");
            localStorage.setItem("theme", "dark");
        } else {
            document.body.classList.remove("dark-mode");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    return (
        <div className={`navbar-container ${menuOpen ? "expanded" : ""}`}>
            <nav className={`navbar ${darkMode ? "dark-mode" : "light-mode"}`}>
                <h1 className="nav-logo">MauriTech Services.</h1>

                {/* Menu Button */}
                <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>

                {/* Navigation Links */}
                <div className={`nav-links ${menuOpen ? "open" : ""}`}>
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <a href="#skills">Skills</a>
                    <a href="#contact">Contact</a>
                </div>

                {/* Theme Toggle Button */}
                <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
                    {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
                </button>
            </nav>
        </div>
    );
}

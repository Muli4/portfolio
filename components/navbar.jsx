import { FaMoon, FaSun } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [darkMode, setDarkMode] = useState(() => {
        if (typeof window !== "undefined") {
            return localStorage.getItem("theme") === "dark";
        }
        return true; // Default to dark mode
    });

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
        <nav className={darkMode ? "dark-mode" : "light-mode"}>
            <h1>Maurice .</h1>
            <div className="nav-links">
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#skills">Skills</a>
                <a href="#contact">Contact</a>
                <button onClick={() => setDarkMode(!darkMode)}>
                    {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
                </button>
            </div>
        </nav>
    );
}

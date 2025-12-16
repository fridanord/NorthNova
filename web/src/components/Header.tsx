import { Link } from "react-router-dom"
//import Navbar from "./Navbar.tsx"
import "../styles/Header.scss"
import { useState } from "react"

export default function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
            <div className="header-left">
                <Link to="/" className="logo">
                  <span className="logo-icon"></span>
                  NorthNova
                </Link>
            </div>

            <nav className="header-nav desktop-only">
                <Link to="/about">Om oss</Link>
                <Link to="/projects">Projekt</Link>
                <Link to="/articles">Nyheter</Link>
                <Link to="/jobs">Jobb</Link>
                <Link to="/contact">Våra kontor</Link>
            </nav>

            <div className="header-right desktop-only">
                <Link to="/contact" className="cta-button">
                   Kontakta oss
                </Link>
            </div>

            <button className="hamburger-btn" onClick={toggleMenu}>
                {isMenuOpen ? "✕" : "☰"}
            </button>

            <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
                <Link to="/about" onClick={toggleMenu}>Om oss</Link>
                <Link to="/projects" onClick={toggleMenu}>Projekt</Link>
                <Link to="/articles" onClick={toggleMenu}>Nyheter</Link>
                <Link to="/jobs" onClick={toggleMenu}>Jobb</Link>
                <Link to="/contact" onClick={toggleMenu}>Kontakt</Link>

                
            </div>

        </header>
    )
}
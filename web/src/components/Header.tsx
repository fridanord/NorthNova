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
                  NorthNova.
                </Link>
            </div>

            <nav className="header-nav desktop-only">
                <Link to="/about">Om oss</Link>
                <Link to="/projects">Projekt</Link>
                <Link to="/articles">Nyheter</Link>
                <Link to="/jobs">Karriär</Link>
                <Link to="/offices">Våra kontor</Link>
                <Link to= "/contact">Kontakta oss</Link>
            </nav>

            
            <button className="hamburger-btn" onClick={toggleMenu}>
                {isMenuOpen ? "✕" : "☰"}
            </button>

            <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
                <Link to="/about" onClick={toggleMenu}>Om oss</Link>
                <Link to="/projects" onClick={toggleMenu}>Projekt</Link>
                <Link to="/articles" onClick={toggleMenu}>Nyheter</Link>
                <Link to="/jobs" onClick={toggleMenu}>Karriär</Link>
                <Link to="/offices">Våra kontor</Link>
                <Link to="/contact" onClick={toggleMenu}>Kontakta oss</Link>

                
            </div>

        </header>
    )
}
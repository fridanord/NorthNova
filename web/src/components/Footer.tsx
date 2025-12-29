import { Link } from "react-router-dom"
import { FaInstagram, FaLinkedin, FaFacebook, FaYoutube } from "react-icons/fa"
import "../styles/Footer.scss"

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">

                <div className="footer-section info">
                    <h2 className="footer-logo">NorthNova</h2>
                    <p>
                        NorthNova är en ledande aktör inom förbybar energi.
                        Vi erbjuder skalbara vindkraftslösningar och hållbar
                        infrastruktur för en grönare framtid.
                    </p>
                    <p>
                        Vill du vara med och påverka framtiden? Kontakta oss idag.
                    </p>
                </div>

                <div className="footer-section links">
                    <h3>Om NorthNova</h3>
                    <ul>
                        <li><Link to="/about">Om oss</Link></li>
                        <li><Link to="/projects">Projekt</Link></li>
                        <li><Link to="/articles">Nyheter</Link></li>
                        <li><Link to="/contact">Våra kontor</Link></li>
                    </ul>
                </div>

                <div className="footer-section links">
                    <h3>Kontakt</h3>
                    <ul>
                        <li><Link to="/contact">Kontakta oss</Link></li>
                        <li><Link to="/jobs">Lediga tjänster</Link></li>
                        <li><Link to="/contact">Våra kontor</Link></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="legal-links">
                    <Link to="/">Cookieinställningar</Link>
                    <span>|</span>
                    <Link to="/">Integritetspolicy</Link>
                </div>

                <div className="social-icons">
                    <a href="https://instagram.com" target="_blank" aria-label="Instagram"><FaInstagram /></a>
                    <a href="https://linkedin.com" target="_blank" aria-label="LinkedIn"><FaLinkedin /></a>
                    <a href="https://facebook.com" target="_blank" aria-label="Facebook"><FaFacebook /></a>
                    <a href="https://youtube.com" target="_blank" aria-label="Youtube"><FaYoutube /></a>
                </div>
            </div>
        </footer>
    )
}
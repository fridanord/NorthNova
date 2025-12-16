import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        <nav>
        <Link to="/about">Om oss</Link>
        <Link to="/projects">Projekt</Link>
        <Link to="/articles">Nyheter</Link>
        <Link to="/jobs">Jobb</Link>
        <Link to="/contact">Kontakt</Link>
      </nav>
    )
}
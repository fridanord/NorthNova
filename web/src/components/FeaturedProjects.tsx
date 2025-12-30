import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { client } from '../sanity'
import { getLatestProjects } from "../queries"
import "../styles/FeaturedProjects.scss"

export default function FeaturedProjects() {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        client.fetch(getLatestProjects)
        .then(setProjects)
        .catch(console.error)
    }, [])

    if (!projects.length) return null;

    return (
        <section className="featured-projects">
            <div className="section-header">
                <h2>Utvalda Projekt</h2>
                <Link to="/projects" className="see-all-link">Se alla projekt</Link>
            </div>

            <div className="grid-row">
                {projects.map((project: any) => (
                    <Link to={`/projects/${project.slug}`} key={project._id} className="mini-card">
                        {project.imageUrl && <img src={project.imageUrl} alt={project.title} />}
                        <div className="content">
                            <span className="meta">{project.status === 'ongoing' ? 'Pågående' : 'Projekt' }</span>
                            <h3>{project.title}</h3>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    )
}
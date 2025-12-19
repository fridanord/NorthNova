import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { client } from "../sanity"
import { getSingleProject } from "../queries"
import "../styles/ProjectDetails.scss"


export default function ProjectDetails() {
    const { slug } = useParams()
    const [project, setProject] = useState<any>(null)

    useEffect(() => {
        client.fetch(getSingleProject, {slug }) // Skickar sluggen till Sanity
        .then((data) => setProject(data))
        .catch(console.error)

    }, [slug])

    if (!project) return <div className="loading">Laddar projekt...</div>

    return (
        <div className="project-details-page">
            <article className="content-container">
                <Link to="/projects" className="back-link">Tillbaka till all projekt</Link>

                <header className="project-header">
                    {project.type && <span className="project-type">{project.type}</span>}
                    <h1>{project.title}</h1>
                </header>

                {project.imageUrl && (
                    <div className="image-wrapper">
                        <img
                          src={project.imageUrl}
                          alt={project.tile}
                          className="project-main-image"
                        />
                    </div>
                )}

                <div className="body-text">
                    <p>{project.description}</p>
                </div>

                <footer className="project-footer">
                    <div className="divider"></div>
                    <div className="meta-info">
                        <span>Publicerad: {new Date(project.date).toLocaleDateString('sv-SE')}</span>
                    </div>
                </footer>
            </article>
        </div>
    )
}
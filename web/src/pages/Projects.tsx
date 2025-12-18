import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { client } from "../sanity"
import { getAllProjects } from "../queries"
import "../styles/Projects.scss"


export default function Projects() {

    //Skapa lådor = state för att spara projekten
    const [projects, setProjects] = useState([])

    useEffect(() => {
        client.fetch(getAllProjects)
        .then((data) => {
            console.log("Hämtade projekt:", data) //Felsök
            setProjects(data)
        })
        .catch(console.error)
    }, [])


    return (
        <div className="projects-page">
            <div className="projects-header">
                <h1>Våra projekt</h1>
                <p>Här kan du se vad vi arbetar med just nu</p>
            </div>

            <div className="projects-grid">
                {projects.map((project: any) => (
                    <Link to={`/projects/${project.slug}`} key={project._id} className="project-card">

                        <div className="image-container">
                            {project.imageUrl ? (
                                <img src={project.imageUrl} alt={project.title} />
                            ) : (
                                <div className="placeholder">Ingen bild</div>
                            )}
                        </div>
                        <div className="card-content">
                            <span className="project-type">{project.type}</span>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <span className="read-more">Läs mer &rarr;</span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { client } from "../sanity"
import { getAllProjects } from "../queries"
import "../styles/Projects.scss"
import "../styles/FilterButtons.scss"
import { urlFor } from "../sanity"


export default function Projects() {

    
    const [projects, setProjects] = useState([])
    const [filter, setFilter] = useState('all')

    useEffect(() => {
        client.fetch(getAllProjects)
        .then((data) => {
            console.log("Hämtade projekt:", data)
            setProjects(data)
        })
        .catch(console.error)
    }, [])

    const filtreredProjects = projects.filter((project: any) => {
        if (filter === 'all') return true;
        return project.status === filter;
    });


    return (
        <div className="projects-page">
            <div className="projects-header">
                <h1>Våra projekt</h1>
                <p>Utforska vad vi bygger just nu och vad som kommer härnäst.</p>
            </div>

            <div className="filter-container">
                <button
                  className={filter === 'all' ? 'active' : ''}
                  onClick={() => setFilter('all')}
                >
                    Alla
                </button>
                <button
                  className={filter === 'ongoing' ? 'active' : ''}
                  onClick={() => setFilter('ongoing')}
                >
                    Pågående
                </button>
                <button
                  className={filter === 'upcoming' ? 'active' : ''}
                  onClick={() => setFilter('upcoming')}
                >
                    Kommande
                </button>
                <button
                  className={filter === 'completed' ? 'active' : ''}
                  onClick={() => setFilter('completed')}
                >
                    Avslutade
                </button>
            </div>

            <div className="projects-grid">

                {filtreredProjects.map((project: any) => (
                    <Link to={`/projects/${project.slug}`} key={project._id} className="project-card">
                        {project.imageUrl && (
                            <div className="image-container">
                                <img src={urlFor(project.imageUrl).width(600).height(400).url()} alt={project.title} loading="lazy" />
                                {project.status === 'upcoming' && <span className="status-badge">Kommande</span>}
                            </div>
                        )}
                        <div className="card-content">
                            <h3>{project.title}</h3>
                            <span className="project-type">{project.type}</span>
                            <div className="read-more">Läs mer</div>
                        </div>
                    </Link>
                ))}
                
            </div>

            {filtreredProjects.length === 0 && (
                <p style={{textAlign: 'center', color: '#999', marginTop: '2rem'}}>
                    Inga projekt i denna kategori just nu.
                </p>
            )}
        </div>
    )
}
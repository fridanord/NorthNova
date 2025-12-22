import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { client } from "../sanity"
import { getSingleJob } from "../queries"
import "../styles/JobDetails.scss"

export default function JobDetails() {
    const { slug } = useParams()
    const [job, setJob ] = useState<any>(null)

    useEffect(() => {
        client.fetch(getSingleJob, { slug })
        .then((data) => setJob(data))
        .catch(console.error)
    }, [slug])

    if (!job) return <div className="loading-container">Laddar annons...</div>

    return (
    <div className="job-details-page">
        <article className="content-container">
            <Link to="/jobs" className="back-link">Tillbaka till alla tjänster</Link>

            <header className="article-header">
                <div className="meta-tags">
                    {job.location && (
                        <span className="pill-location">{job.location}</span>
                    )}
                    {job.deadline && (
                        <span className="pill deadline"> Ansök senast: {job.deadline}</span>
                    )}
                </div>

                <h1>{job.title}</h1>
            </header>

            {job.imageUrl && (
                <div className="image-wrapper">
                    <img src={job.imageUrl} alt={job.title} className="article-main-image" />
                </div>
            )}

            <div className="body-text">
                <p>{job.description}</p>
            </div>

            <div style={{ marginTop: "4rem" }}>
                <Link to="/contact" className="simple-apply-btn">
                  Ansök här →
                </Link>
            </div>
            <footer className="article-footer">
                <div className="divider"></div>
                <div className="meta-info">
                    <span>NorthNova Karriär</span>
                </div>
            </footer>
        </article>
    </div>
  )

} 

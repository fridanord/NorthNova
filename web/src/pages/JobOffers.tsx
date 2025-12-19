import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { client } from "../sanity"
import { getAllJobs } from "../queries"
import "../styles/JobOffers.scss"

export default function JobOffers() {
    const [jobs, setJobs] = useState([])

    useEffect(() => {
        client.fetch(getAllJobs)
        .then((data) => {
            console.log("Hittade jobb i Sanity:", data);
            setJobs(data);
    })
        .catch(console.error)
    },[])

    const truncateText = (text: string, length: number) => {
        if (!text) return "";
        if (text.length <= length) return text;
        return text.substring(0, length) + "...";
    }

    return (
        <div className="job-offers-page">
            
            <div className="page-header">
                <h1>Lediga tjänster</h1>
                <p>Vill du vara med och bygga framtidens energi? Hitta din nästa utmaning här</p>
            </div>

            <div className="jobs-list-container">
                {jobs.map((job: any) => (
                    <Link to={`/jobs/${job.slug}`} key={job._id} className="horizontal-job-card">

                        <div className="job-image-container">
                            {job.imageUrl ? (
                                <img src={job.imageUrl} alt={job.title} />
                            ) : (
                                <div className="placeholder-image"></div>
                            )}
                        </div>

                        <div className="job-card-content">
                            <div className="meta-pills">
                                {job.location && <span className="pill">{job.location}</span>}
                                {job.deadline && <span className="pill deadline">Deadline: {job.deadline}</span>}
                            </div>

                            <h3>{job.title}</h3>
                            <p className="short-description">
                                {truncateText(job.description, 150)}
                            </p>
                        </div>

                        <div className="job-card-arrow">
                            →
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}
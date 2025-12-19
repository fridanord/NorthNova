import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { client } from '../sanity'
import { getAllArticles } from '../queries'
import '../styles/Projects.scss'

export default function Articles() {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        client.fetch(getAllArticles)
        .then((data) => setArticles(data))
        .catch(console.error)
    }, [])
   
    return (
    <div className='projects-page'>
        <div className="projects-header">
            <h1>Nyheter</h1>
            <p>Senaste nytt</p>
        </div>

        <div className='projects-grid'>
            {articles.map((article: any) => (
                <Link to={`/articles/${article.slug}`} key={article._id} className='project-card'>

                    <div className="image-container">
                        {article.imageUrl ? (
                            <img src={article.imageUrl} alt={article.title} />
                        ) : (
                            <div className="placeholder">Ingen bild</div>
                        )}
                    </div>

                    <div className='card-content'>
                        <span className='project-type'>
                            {new Date(article.publishedAt).toLocaleDateString('sv-SE')}
                        </span>

                        <h3>{article.title}</h3>

                        {article.description && <p>{article.description}</p>}

                        <span className='read-more'>Läs artikeln &rarr;</span>
                    </div>
                </Link>
            ))}
        </div>
    </div>
   )
}
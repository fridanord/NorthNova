import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { client } from "../sanity"
import { getSingleArticle } from "../queries"
import "../styles/ArticleDetails.scss"

export default function ArticleDetails () {
    const { slug } = useParams()
    const [article, setArticle] = useState<any>(null)

    useEffect(() => {
        client.fetch(getSingleArticle, { slug })
        .then((data) => setArticle(data))
        .catch(console.error)
    },[slug])

    if (!article) return <div className="loading-container">Laddar artikel...</div>

    return (
        <div className="article-details-page">
            <article className="content-container">

                <Link to="/articles" className="back-link">← Tillbaka till nyheter</Link>

                <header className="article-header">
                    <span className="article-date">
                        {new Date(article.publishedAt).toLocaleDateString('sv-SE')}
                    </span>
                    <h1>{article.title}</h1>
                </header>

                {article.imageUrl && (
                    <div className="image-wrapper">
                        <img
                          src={article.imageUrl}
                          alt={article.title}
                          className="article-main-image"
                        />
                    </div>
                )}

                <div className="body-text">
                    <p>{article.description}</p>
                </div>

                <footer className="article-footer">
                    <div className="divider"></div>
                    <div className="meta-info">
                        <span>NorthNova Nyheter</span>
                    </div>
                </footer>
            </article>
        </div>
    )
}
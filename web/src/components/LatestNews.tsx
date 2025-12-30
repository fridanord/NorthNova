import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { client } from "../sanity"
import { getLatestArticles } from "../queries"
import "../styles/LatestNews.scss"

export default function LatestNews() {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        client.fetch(getLatestArticles).then(setArticles).catch(console.error)
    }, [])

    if (!articles.length) return null;

    return (

        <section className="latest-news">
            <div className="container">

                <div className="section-header">
                    <h2>Nyheter & Press</h2>
                    <Link to="/articles" className="see-all-link">Läs alla nyheter</Link>
                </div>

                <div className="grid-row">
                    {articles.map((article: any) => (
                        <Link to={`/articles/${article.slug}`} key={article._id} className="mini-card">
                            {article.imageUrl && <img src={article.imageUrl} alt={article.title} /> }
                            <div className="content">
                                <span className="meta">
                                    {new Date(article.publishedAt).toLocaleDateString()}
                                </span>
                                <h3>{article.title}</h3>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}
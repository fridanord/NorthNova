import '../styles/Home.scss'
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { client } from '../sanity'
import FeaturedProjects from '../components/FeaturedProjects'
import LatestNews from "../components/LatestNews"
import AboutUs from "./AboutUs"
import videoPoster from "../assets/windturbine1.webp"

interface HeroData {
  videoUrl: string;
}

export default function Home() {
  const [heroData, setHeroData] = useState<HeroData | null>(null)

  useEffect(() => {
    client.fetch(`*[_type == "hero"][0]{
        "videoUrl": videoBg.asset->url
    }`)
    .then((data) => {
        setHeroData(data)
    })
    .catch(console.error)
  }, [])

  return (
    <div className="home-container">
      <div className="hero">
        {heroData?.videoUrl && (
          <video className="video-bg" autoPlay loop muted playsInline preload="auto" poster={videoPoster} aria-label="Video som visar vindturbin i solnedgång">
              <source src={heroData.videoUrl} type="video/mp4" />
          </video>
        )}
        <div className="hero-overlay"></div>
        <div className="hero-content">
            <h1>Vår vision är ett fossilfritt Norden - drivet av vinden.</h1>
            <Link to="/about" className="cta-button">
               Läs mer här ➝
            </Link>
        </div>
      </div>

      <FeaturedProjects />
      <LatestNews />
      <AboutUs />
    </div>
  )
}
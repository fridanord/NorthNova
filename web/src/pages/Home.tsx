import videoBg from "../assets/wind-turbines.mp4"
import '../styles/Home.scss'

export default function Home() {
    return (
      <div className="home-container">
        <div className="hero">
            <video className="video-bg" autoPlay loop muted playsInline>
                <source src={videoBg} type="video/mp4" />
            </video>
            <div className="hero-overlay"></div>
            <div className="hero-content">
                <h1>Vår vision är ett fossilfritt Norden <br /> - drivet av vinden. </h1>
                <button className="cta-button">Läs mer här</button>
            </div>
        </div>
      </div>
    )
    
}
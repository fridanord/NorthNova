import videoBg from "../assets/wind-turbines.mp4"
import '../styles/Home.scss'
import { useEffect } from "react"
//import { SanityClient } from "@sanity/client"
import { client } from '../sanity'



export default function Home() {

useEffect(() => {
    client.fetch(`*`).then((data) => {
        console.log("Sanity funkar, här är datan:", data)
    }).catch(console.error)
}, [])

    return (
      <div className="home-container">
        <div className="hero">
            <video className="video-bg" autoPlay loop muted playsInline>
                <source src={videoBg} type="video/mp4" />
            </video>
            <div className="hero-overlay"></div>
            <div className="hero-content">
                <h1>Vår vision är ett fossilfritt Norden <br /> - drivet av vinden. </h1>
                <button className="cta-button">Läs mer här ➝</button>
            </div>
        </div>
      </div>
    )
    
}
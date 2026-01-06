import "../styles/Offices.scss"

export default function Offices() {

    const offices = [
        {
            city: "Sundsvall",
            role: "Huvudkontor",
            address: ["Storgatan 12", "852 30 Sundsvall"],
            email: "sundsvall@northnova.se",
            mapLink: "https://maps.google.com"
        },
        {
            city: "Östersund",
            role: "Regionkontor Jämtland",
            address: ["Prästgatan 44", "831 31 Östersund"],
            email: "ostersund@northnova.se",
            mapLink: "https://maps.google.com"
        },
        {
            city: "Umeå",
            role: "Regionkontor Västerbotten",
            address: ["Västra Esplanaden 2", "903 26 Umeå"],
            email: "umea@northnova.se",
            mapLink: "https://maps.google.com"
        }
    ]

    return (
        <div className="offices-page">

            <div className="hero-wrapper">

                <img src="/waterfall.jpg" alt="Norrland" className="hero-image" />
                <div className="overlay"></div>

                <div className="floating-card">
                    <h1>Hela Norrland som arbetsplats</h1>
                    <p>Vi finns där det händer. Besök oss gärna för en kaffe och ett samtal om framtidens energi.</p>
                </div>
            </div>

            
            <div className="office-list-section">

                {offices.map((office, index) => (
                    <div className="office-item" key={index}>

                        <div className="info">
                            <h2>{office.city}</h2>
                            <span className="role">{office.role}</span>
                            <div className="address">
                                {office.address.map((line, i) => (
                                    <p key={i}>{line}</p>
                                ))}
                            </div>
                        </div>

                        <div className="actions">
                            <a href={`mailto:${office.email}`} className="email-btn">Mejla kontoret</a>
                            <a href={office.mapLink} target="_blank" rel="norefferer" className="map-btn">Hitta hit</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
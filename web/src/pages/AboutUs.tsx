import "../styles/AboutUs.scss"
import aboutVideo from "../assets/clouds2.mp4"

export default function AboutUs() {
    return (
        <div className="about-page">


            <section className="about-hero-video">
                <video className="video-bg" autoPlay loop muted playsInline aria-label="Video föreställer berg bland moln från hög höjd">
                    <source src={aboutVideo} type="video/mp4" />
                </video>
                <div className="overlay-tint"></div>
                <div className="content-container">

                    <div className="hero-card">
                        <h1>Energi för generationer</h1>
                        <p>Vi grundades med en enkel vision: Att göra Norden oberoende av fossila bränslen genom att utnyttja kraften i vår natur - vinden, solen och vattnet. </p>
                    </div>
                </div>
            </section>

            <section className="story-section">
                <div className="image-wrapper">
                    <img
                      src="/northnova.png" alt="Bild av chef & vd gjord med gemini"
                    />

                </div>
                <div className="text-content">
                    <h2>Vår historia</h2>
                    <p>
                        NorthNova startades 2015 av en grupp ingenjörer och miljövetare i Sundsvall. Vi såg potentialen i Norrlands enorma naturresurser men saknade aktörer som kombinerade storskalig teknik med lokal förankring.
          
                    </p>
                    <p>
                        Idag är vi en av regionens snabbast växande utvecklare av förnybar energi. Vi tror på transparens, dialog och att teknikutveckling måste ske på naturens villkor. Vårt mål är inte att bli störst, utan att vara bäst på hållbarhet.
                    </p>
                </div>
            </section>

            <section className="values-section">
                <h2>Våra hörnstenar</h2>
                <div className="values-grid">
                    <div className="value-card">
                        <h3>Närhet</h3>
                        <p>Vi sitter inte ett glastorn i storstan. Vi finns på plats där vi verkar, och vi känner markägarna och kommuninvånarna vid namn. </p>
                    </div>

                    <div className="value-card">
                        <h3>Innovation</h3>
                        <p>Vi nöjer oss inte med gårdagens teknik. Genom att satsa på batterilagring och AI-optimering maximerar vi varje kilowatt.</p>
                    </div>

                    <div className="value-card">
                        <h3>Ansvar</h3>
                        <p>Vi återställer alltid marken efter oss och investerar en del av vinsten i lokala föreningsliv och naturvårdsprojekt. </p>
                    </div>

                </div>
            </section>

            <section className="story-section">
                
                <div className="text-content">
                    <h2>Varför fossilfritt?</h2>
                    <p>
                        Omställningen handlar inte bara om att minska utsläppen. Det handlar om att säkra Nordens energiförsörjning och konkurrenskraft för framtiden. Genom att utnyttja vindens och solens kraft skapar vi ett robust energisystem som är oberoende av globala oljepriser och geopolitiska oroligheter.
          
                    </p>
                    <p>
                        Men framförallt gör vi det för att bevara det vi älskar mest: våra djupa skogar, klara älvar och snörika vintrar. Att välja fossilfritt är att välja en framtid där naturen får fortsätta vara en källa till kraft och återhämtning, inte bara en resurs att förbruka.
                    </p>
                </div>
                <div className="image-wrapper">
                    <img
                      src="/river.jpg" alt="Bild på flod som går igenom en skog"
                    />

                </div>
            </section>

        </div>
    )
}
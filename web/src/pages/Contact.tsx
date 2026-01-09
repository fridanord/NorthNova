import { useState } from "react"
import "../styles/Contact.scss"

export default function Contact() {

    
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "other",
        message: "",
        cvFile: null as File | null
    })
    
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle')
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFormData({
                ...formData,
                cvFile: e.target.files[0]
            })
        }
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setStatus('submitting')

        setTimeout(() => {
            console.log('Formulär skickat:', formData)
            setStatus('success')
            setFormData({ name: '', email: '', subject: 'other', message: '', cvFile: null })
        }, 1500)
    }
    return (
        <div className="contact-page">
            <div className="contact-container">

                <h1>Kontakta oss</h1>
                <p className="intro">Har du frågor om våra projekt, fakturor eller vill du arbeta med oss? Fyll i formuläret så hör vi av oss! </p>

                {status === 'success' ? (
                    <div style={{textAlign: 'center', padding: '2rem', background: '#e8f5e9', borderRadius: "12 px"}}>
                        <h3 style={{color: "#2e7d32"}}>Tack för ditt meddelande!</h3>
                        <p>Vi återkommer till dig så snart vi kan.</p>

                        </div>
                ) : (
                    <form className="contact-form" onSubmit={handleSubmit}>

                        <div>
                            <label htmlFor="name">Namn</label>
                            <input
                              type="text"
                              id= "name"
                              name="name"
                              required
                              placeholder="Ditt för- och efternamn"
                              value={formData.name}
                              onChange={handleChange}
                            />
                        </div>

                        <div>
                            <label htmlFor="email">E-post</label>
                            <input
                               type="email"
                               id="email"
                               name="email"
                               required
                               placeholder="din.email@exempel.se"
                               value={formData.email}
                               onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="subject">Vad gäller ärendet?</label>
                            <select
                              id="subject"
                              name="subject"
                              value={formData.subject}
                              onChange={handleChange}
                            >
                              <option value="other">Övriga frågor</option>
                              <option value="invoice">Fakturafrågor</option>
                              <option value="project">Projektförfrågan</option>
                              <option value="job">Lediga tjänster</option>
                            </select>
                        </div>

                        {formData.subject === 'job' && (
                            <div className="file-upload-button">
                                <p>Bifoga ditt CV</p>
                                <input
                                  type="file"
                                  accept=".pdf,.doc,.docx"
                                  onChange={handleFileChange}
                                />
                            </div>
                        )}

                        <div>
                            <label htmlFor="message">
                                {formData.subject === 'job' ? 'Personligt brev' : 'Ditt meddelande'}
                            </label>
                            <textarea
                              id="message"
                              name="message"
                              required
                              placeholder={formData.subject === 'job' ? "Berätta kort om dig själv och varför du vill jobba hos oss..." : "Skriv ditt meddelande här..."}
                              value={formData.message}
                              onChange={handleChange}
                            />
                        </div>

                        <button type="submit" disabled={status === 'submitting'}>
                            {status === 'submitting' ? 'Skickar...' : 'Skicka meddelande'}
                        </button>
                    </form>
            )}
            </div>
        </div>
    )
}
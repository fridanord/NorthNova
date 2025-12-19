import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Articles from "./pages/Articles"
import JobOffers from "./pages/JobOffers"
import Contact from "./pages/Contact"
import AboutUs from "./pages/AboutUs"
import ProjectDetails from "./pages/ProjectDetails"
import ArticleDetails from "./pages/ArticleDetails"

export default function App() {
    return (
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/projects' element={<Projects />} />
        <Route path="/projects/:slug" element={<ProjectDetails />} />
        <Route path='/articles' element={<Articles />} />
        <Route path='/articles/:slug' element={<ArticleDetails />} />
        <Route path='/jobs' element={<JobOffers />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      
    )
}
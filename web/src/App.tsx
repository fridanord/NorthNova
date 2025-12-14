import './App.css'
import { BrowserRouter, Link } from "react-router-dom"
import AppRouter from "./AppRouter"


function App() {

  return (// Test
    <BrowserRouter>
    <nav>
        <Link to="/">Hem</Link>
        <Link to="/projects">Projekt</Link>
        <Link to="/articles">Nyheter</Link>
        <Link to="/jobs">Jobb</Link>
        <Link to="/contact">Kontakt</Link>
      </nav>

      <main>
        <AppRouter/>
      </main>
    </BrowserRouter>
  )
}

export default App

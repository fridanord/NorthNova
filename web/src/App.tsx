import './App.scss'
import { BrowserRouter } from "react-router-dom"
import AppRouter from "./AppRouter"
//import Navbar from './components/NavBar'
import Header from "./components/Header"
import Footer from "./components/Footer"
import FeaturedProjects from './components/FeaturedProjects'
import LatestNews from './components/LatestNews'



function App() {

  return (// Test
    <BrowserRouter>

    <Header />

      <main>
        <AppRouter/>
      </main>
      
      <Footer />
    </BrowserRouter>
  )
}

export default App

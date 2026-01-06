import './App.scss'
import { BrowserRouter } from "react-router-dom"
import AppRouter from "./AppRouter"
import Header from "./components/Header"
import Footer from "./components/Footer"
import ScrollToTop from './components/ScrollToTop'



function App() {

  return (// Test
    <BrowserRouter>

    <ScrollToTop />
    <Header />

      <main>
        <AppRouter/>
      </main>
      
      <Footer />
    </BrowserRouter>
  )
}

export default App

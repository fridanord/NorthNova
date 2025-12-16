import { Link } from "react-router-dom"
import Navbar from "./Navbar.tsx"

export default function Header() {
    return (
        <header style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 20px"}}>
            {/*Logga här*/}
            <Link to="/">NorthNova</Link>

            <Navbar />
            
        </header>
    )
}
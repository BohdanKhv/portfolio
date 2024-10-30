import { useEffect } from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Window from "../components/Window"

const About = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "Bohdan Khvorostovskyi | About | Web developer | Programming | Design | Khvorostovskyi.com"
    }, [])

    return (
        <>
        <div className="min-h-100-vh flex justify-center align-center">
            <Window/>
        </div>
        <Footer/>
        </>
    )
}

export default About
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
        <Header/>
        <div className="divider divider-minus-body"/>
        <Window/>
        <Footer/>
        </>
    )
}

export default About
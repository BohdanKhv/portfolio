import { useEffect } from "react"
import Footer from "../components/Footer"
import Work from "../components/Work"

const Portfolio = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "Bohdan Khvorostovskyi | Portfolio | Web developer | Programming | Design | Khvorostovskyi.com"
    }, [])

    return (
        <>
            <Work/>
            <Footer/>
        </>
    )
}

export default Portfolio
import { useEffect } from "react"
import Header from "../components/Header"
import Window from "../components/Window"
import Footer from "../components/Footer"
import Work from "../components/Work"

const Home = () => {

  useEffect(() => {
      window.scrollTo(0, 0);
      document.title = "Bohdan Khvorostovskyi | Home | Portfolio | Web developer | Programming | Design | Khvorostovskyi.com"
  }, [])

  return (
    <div>
      <Header/>
      <div className="divider divider-minus-body"/>
      <div className="divider-minus">
        <Window/>
      </div>
      <Work/>
      <Footer/>
    </div>
  )
}

export default Home
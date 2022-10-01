import { useEffect, useState } from "react"
import Nav from "../components/Nav"
import Header from "../components/Header"
import Window from "../components/Window"
import Footer from "../components/Footer"
import Work from "../components/Work"

const Home = () => {
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  return (
    <div>
      <div className={`splash-screen${!loading ? ' hide' : '' }`}>
        <div className="splash-screen-content">
          {`> `}BK
        </div>
      </div>
      <Nav />
      <Header/>
      <div className="divider divider-minus-body"/>
      <Window/>
      <Work/>
      <Footer/>
    </div>
  )
}

export default Home
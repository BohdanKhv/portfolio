import { useRef, useEffect, useState } from "react"
import "./styles/header.css"

const Header = () => {
    const [loading, setLoading] = useState(false)
    const imageRef = useRef(null)

    useEffect(() => {
        if (imageRef.current) {
        imageRef.current.addEventListener("load", () => {
            setLoading(true)
        })
    }

        return () => {
            if (imageRef.current) {
                imageRef.current.removeEventListener("load", () => {
                    setLoading(false)
                });
            }
        }
    }, [])

    return (
        <div className="container">
            <div className="header">
                <div className="photo">
                    <img src="/assets/photo.png" alt="Me" ref={imageRef} className={`${!loading ? 'opacity-0' : ''}`}/>
                </div>
                <div className="info">
                    <div className="arrow-item">
                        <h1 className="arrow">
                            {">"}
                        </h1>
                        <h1 className="arrow-text">
                            Bohdan Khvorostovskyi
                        </h1>
                    </div>
                    <div className="arrow-item">
                        <h2 className="arrow">
                            {">"}
                        </h2>
                        <h2 className="arrow-text flex">
                            <span className="job">Web Developer</span><div className="blink text-cursor"/>
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
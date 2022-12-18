import { useEffect, useState } from "react"

const Splash = () => {
    const [loading, setLoading] = useState(true)


        useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000)
        }, [])

    return (
        <div className={`splash-screen${!loading ? ' hide' : '' }`}>
            <div className="splash-screen-content">
                {`> `}BK
            </div>
        </div>
    )
}

export default Splash
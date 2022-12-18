import { Link, useLocation } from 'react-router-dom'
import './styles/nav.css'

const Nav = () => {
    const location = useLocation()

    return (
        <div className="container">
            <nav>
                <ul>
                    <li>
                        <Link to="/" className={`${location.pathname === '/' ? 'active' : ''}`}>HOME</Link>
                    </li>
                    <li>
                        <Link to="/about" className={`${location.pathname === '/about' ? 'active' : ''}`}>ABOUT</Link>
                    </li>
                    <li>
                        <Link to="/portfolio" className={`${location.pathname === '/portfolio' ? 'active' : ''}`}>PORTFOLIO</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav
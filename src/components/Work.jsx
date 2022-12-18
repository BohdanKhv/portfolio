import { useEffect, useState } from "react"
import { projects } from "../assets/data"
import { githubIcon, linkIcon } from "../assets/icons"
import './styles/work.css'

const Work = () => {
    const [active, setActive] = useState('All')
    const [chips, setChips] = useState([])

    useEffect(() => {
        // Get all unique tags and their count
        const tags = projects.map(item => item.stack).flat().reduce((acc, curr) => {
            if (acc[curr]) {
                acc[curr]++
            } else {
                acc[curr] = 1
            }
            return acc
        }, {})

        setChips(tags)
    }, [])

    return (
        <div className="container">
            <div className="work" id="work">
                <div className="work-title">
                    <div className="arrow-item">
                        <h1 className="arrow-text flex">
                        <span>{">"}Portfolio</span><div className="blink text-cursor"/>
                        </h1>
                    </div>
                    <p>
                        Check out my projects.
                        <br />
                        If you have any questions, feel free to contact me.
                    </p>
                </div>
                <div className="work-chips">
                    <div
                        className={`chip${active === 'All' ? ' active' : ''}`}
                        onClick={() => setActive('All')}
                    >
                        <span>All</span>
                        <span className="amount">
                            ({projects.length})
                        </span>
                    </div>
                    {Object.keys(chips).map((item, index) => (
                        <div
                            className={`chip${active === item ? ' active' : ''}`}
                            key={`chip-${index}`}
                            onClick={() => setActive(item)}
                        >
                            <span>{item}</span>
                            <span className="amount">({chips[item]})</span>
                        </div>
                    ))}
                </div>
                <div className="work-showcase">
                    {projects
                    .filter(item => active === 'All' || item.stack.includes(active))
                    .map((item, index) => (
                        <div
                            className="work-card"
                            key={`work-card-${index}`}
                        >
                            <div className="dots">
                                <div className="window-dot-1"/>
                                <div className="window-dot-2"/>
                                <div className="window-dot-3"/>
                            </div>
                            <div className="work-card-image">
                                <div className="work-card-image-wrapper">
                                    <img
                                        src={`/assets/work/${item.image}`}
                                        alt={item.title}
                                        loading="lazy"
                                        decoding="async"
                                    />
                                </div>
                            </div>
                            <div className="work-card-title">
                                <h3>{item.title}</h3>
                            </div>
                            <div className="work-card-stack">
                                {item.stack.slice(0,2).map((item, index) => (
                                    <div
                                        className="chip"
                                        key={`chip-stack-${index}`}
                                        onClick={() => setActive(item)}
                                    >
                                        <span>{item}</span>
                                    </div>
                                ))}
                                {item.stack.length > 2 && 
                                    <div className="chip" key={`chip-stack-${index}`}>
                                        <span>+{item.stack.slice(2).length}</span>
                                    </div>
                                }
                            </div>
                            <div className="work-card-actions">
                                {item.url &&
                                    <a href={item.url} target="_blank" rel="noreferrer" className="btn btn-link">
                                        <span>{linkIcon}</span>
                                        Preview
                                    </a>
                                }
                                {item.github &&
                                    <a href={item.github} target="_blank" rel="noreferrer" className="btn">
                                        <span>{githubIcon}</span>
                                        GitHub
                                    </a>
                                }
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Work
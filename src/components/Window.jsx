import { bohdan } from '../assets/data'
import './styles/window.css'


const Window = () => {
    return (
        <div className="container">
            <div className="window">
                <div className="window-header">
                    <div className="dots">
                        <div className="window-dot-1"/>
                        <div className="window-dot-2"/>
                        <div className="window-dot-3"/>
                    </div>
                    <div className="window-title">
                        About Me
                    </div>
                    <div className="cmd"/>
                </div>
                <div className="window-body">
                    <div className="window-body-content">
                        <span>{">"}</span> Bohdan.currentLocation
                    </div>
                    <div className="window-body-info mt-5">
                        "{bohdan.location}"
                    </div>
                    <div className="window-body-content mt-25">
                        <span>{">"}</span> Bohdan.contactInfo
                    </div>
                    <div className="window-body-info mt-5">
                        ["<a href={`mailto:${bohdan.contacts.email}`}>
                            {bohdan.contacts.email}
                            </a>", "
                            <a href={bohdan.contacts.linkedin} target="_blank" rel="noreferrer">
                                LinkedIn
                                </a>", "
                            <a href={bohdan.contacts.github} target="_blank" rel="noreferrer">
                                GitHub
                                </a>", "
                            <a href={bohdan.contacts.leetcode} target="_blank" rel="noreferrer">
                                LeetCode
                                </a>", "
                            <a href={bohdan.contacts.googleplay} target="_blank" rel="noreferrer">
                                GooglePlay
                                </a>"]
                    </div>
                    <div className="window-body-content mt-25">
                        <span>{">"}</span> Bohdan.CV
                    </div>
                    <div className="window-body-info mt-5">
                        "<a href={'/assets'+bohdan.resume} target="_blank" rel="noreferrer">
                            Bohdan_Khvorostovskyi_CV.pdf
                            </a>"
                    </div>
                    <div className="window-body-content mt-25">
                        <span>{">"}</span> Bohdan.interests
                    </div>
                    <div className="window-body-info mt-5">
                        [{bohdan.interests.map(interest => '"' + interest + '"').join(', ')}]
                    </div>
                    <div className="window-body-content mt-25">
                        <span>{">"}</span> Bohdan.education
                    </div>
                    <div className="window-body-info mt-5">
                        "{bohdan.education}"
                    </div>
                    <div className="window-body-content mt-25">
                        <span>{">"}</span> Bohdan.skills
                    </div>
                    <div className="window-body-info mt-5">
                        [{bohdan.skills.map(skill => '"' + skill + '"').join(', ')}]
                    </div>
                    <div className="window-body-content mt-25 flex">
                        <span>{">"}</span> <div className="blink text-cursor-light"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Window
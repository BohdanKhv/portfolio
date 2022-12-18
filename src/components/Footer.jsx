import { bohdan } from '../assets/data'
import { linkedInIcon, instagramIcon, googlePlayIcon, githubIcon } from '../assets/icons'
import './styles/footer.css'

const Footer = () => {
  return (
    <footer id="contacts">
        <div className="container">
          <div className="footer">
              <div className="arrow-item">
                <h1 className="arrow-text flex">
                  <span>{">"}Contacts</span><div className="blink text-cursor"/>
                </h1>
              </div>
              <div className="contacts">
                <a href="mailto:bohdankhv@gmail.com" className="email">
                  BohdanKhv@gmail.com
                </a>
                <div className="socials">
                  <a href={bohdan.contacts.linkedin} target="_blank" rel="noreferrer">
                    {linkedInIcon}
                  </a>
                  <a href={bohdan.contacts.instagram} target="_blank" rel="noreferrer">
                    {instagramIcon}
                  </a>
                  <a href={bohdan.contacts.googleplay} target="_blank" rel="noreferrer">
                    {googlePlayIcon}
                  </a>
                  <a href={bohdan.contacts.github} target="_blank" rel="noreferrer">
                    {githubIcon}
                  </a>
                </div>
              </div>
              <div className="footer-bottom">
                <small>
                  Handcrafted by me
                </small>
                <h2>
                  khvorostovskyi.com
                </h2>
              </div>
          </div>
        </div>
    </footer>
  )
}

export default Footer
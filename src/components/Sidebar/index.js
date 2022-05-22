import {Link, NavLink} from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faInstagram, faLinkedin, faSkype} from '@fortawesome/free-brands-svg-icons'

//TODO: Change logos to logob and logo-s to logo-b

const Sidebar = () => (
    <div className="nav-bar">
        <Link className="logo" to="/">
            <img src ={LogoS} alt="logo" />
            {/* change the alt and the subtitle*/}
            <img className="sub-logo" src ={LogoSubtitle} alt="slobodan" />
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank" rel='noreferreer' href='https://www.linkedin.com/in/behdad-baghaei-20347477/'>
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferreer' href='https://github.com/Behdad47'>
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferreer' href='https://www.instagram.com/icarusguitarworks/'>
                    <FontAwesomeIcon icon={faInstagram} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferreer' href='skype:live:behdad47'>
                    <FontAwesomeIcon icon={faSkype} color="#4d4d4e" />
                </a>
            </li>
        </ul> 
    </div>
)
export default Sidebar 
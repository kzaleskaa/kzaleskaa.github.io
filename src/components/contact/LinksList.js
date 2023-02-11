import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const LinksList = () => {
    return <ul>
        <li>
            <a href={"mailto:"+process.env.REACT_APP_MAIL}><FontAwesomeIcon icon={faEnvelope} />{process.env.REACT_APP_MAIL}</a>
        </li>
        <li>
            <a href={process.env.REACT_APP_GITHUB_LINK}><FontAwesomeIcon icon={faGithub} /></a>
        </li>
        <li>
            <a href={process.env.REACT_APP_LINKEDIN_LINK}><FontAwesomeIcon icon={faLinkedin} /></a>
        </li>
        <li>
            <a href={process.env.REACT_APP_INSTAGRAM_LINK}><FontAwesomeIcon icon={faInstagram} /></a>
        </li>
    </ul>
}

export default LinksList;

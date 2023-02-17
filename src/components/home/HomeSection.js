import { Link } from "react-scroll";
import ReactTypingEffect from 'react-typing-effect';
import LinksSection from "./LinksSection";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons';
import homeImage from "../../assets/images/home.png";

import styles from "./HomeSection.module.css";

const HomeSection = (props) => {
    return <section id={props.id} className={styles.section}>
        <div>
            <h1>Hi There,</h1>
            <h2>I'm Kasia Zaleska</h2>
            <h1> Check my&nbsp;
            <ReactTypingEffect
                text={["projects", "courses", "education", "experience", "portfolio"]}
                className={styles["typing-words"]}
                eraseDelay={2000}
                typingDelay={500}
            /></h1>
        <LinksSection className={styles.links} />
        </div>
        <img src={homeImage} alt="home profile" />
        <Link
            className={styles["scroll-link"]}
            to="projects"
            spy
            smooth
            offset={-70}
            duration={500}
        >My portfolio <FontAwesomeIcon icon={faAnglesDown} className={styles.icon} /></Link>
    </section>
}

export default HomeSection;

import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import homeImage from "../assets/images/home.png";

import InformationBlock from "../components/home/InformationBlock";
import styles from "../components/home/HomeSection.module.css";

const Home = (props) => {
    return (
        <section id={props.id} className={styles.section}>
            <InformationBlock />
            <img src={homeImage} alt="home profile" />
            <Link
                className={styles["scroll-link"]}
                to="projects"
                spy
                smooth
                offset={-70}
                duration={500}
            >
                My portfolio &nbsp;
                <FontAwesomeIcon icon={faAnglesDown} className={styles.icon} />
            </Link>
        </section>
    );
};

export default Home;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import homeImage from "../assets/images/home.png";

import InformationBlock from "../components/home/InformationBlock";
import styles from "../components/home/HomeSection.module.css";
import NavLink from "../components/layout/NavLink";

const Home = (props) => {
  return (
    <section id={props.id} className={styles.section}>
      <InformationBlock />
      <img src={homeImage} alt="home profile" />
      <NavLink>
        My portfolio &nbsp;
        <FontAwesomeIcon icon={faAnglesDown} className={styles.icon} />
      </NavLink>
    </section>
  );
};

export default Home;

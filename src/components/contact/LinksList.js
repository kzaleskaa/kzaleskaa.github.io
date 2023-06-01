import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Swing from 'react-reveal/Swing';

import styles from "./LinksList.module.css";

const LinksList = () => {
  return (
    <>
      <Swing>
        <h3>Contact me</h3>
      </Swing>
      <ul className={styles["links-list"]}>
        <li className={styles["list-item"]}>
          <a href={"mailto:" + process.env.REACT_APP_MAIL}>
            <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
            {process.env.REACT_APP_MAIL}
          </a>
        </li>
        <li className={styles["list-item"]}>
          <a href={process.env.REACT_APP_LINKEDIN_LINK}>
            <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
            Katarzyna Zaleska
          </a>
        </li>
        <li className={styles["list-item"]}>
          <a href={process.env.REACT_APP_GITHUB_LINK}>
            <FontAwesomeIcon icon={faGithub} className={styles.icon} />
            kzaleskaa
          </a>
        </li>
        <li className={styles["list-item"]}>
          <a href={process.env.REACT_APP_INSTAGRAM_LINK}>
            <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
            k.zaleskaa
          </a>
        </li>
      </ul>
    </>
  );
};

export default LinksList;

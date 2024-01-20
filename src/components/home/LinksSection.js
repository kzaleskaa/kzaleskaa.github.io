import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import styles from "./LinksSection.module.css";

const LinksSection = (props) => {
  return (
    <ul className={`${styles["links-list"]} ${props.className}`}>
      <li className={styles["list-item"]}>
        <a href={"mailto:" + process.env.REACT_APP_MAIL}>
          <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
        </a>
      </li>
      <li className={styles["list-item"]}>
        <a href={process.env.REACT_APP_LINKEDIN_LINK}>
          <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
        </a>
      </li>
      <li className={styles["list-item"]}>
        <a href={process.env.REACT_APP_GITHUB_LINK}>
          <FontAwesomeIcon icon={faGithub} className={styles.icon} />
        </a>
      </li>
    </ul>
  );
};

export default LinksSection;

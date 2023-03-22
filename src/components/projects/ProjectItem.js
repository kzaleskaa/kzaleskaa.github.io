import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import Fade from "react-reveal/Fade";

import styles from "./ProjectItem.module.css";

const ProjectItem = (props) => {
  const { image, title, description, tags, github, live } = props.data;

  return (
    <Fade bottom>
      <div className={styles.item}>
        <div className={styles["img-container"]}>
          <img src={image} alt="project demo" />
        </div>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles["tag-container"]}>
          {tags.map((tag, idx) => (
            <span key={`tag-${props.project_id}-${idx}`} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
        <p>{description}</p>
        <div className={styles["services-link"]}>
          {github && (
            <a className={styles["link"]} href={github}>
              <FontAwesomeIcon icon={faGithub} className={styles.icon} />
            </a>
          )}
          {live && (
            <a className={styles["link"]} href={live}>
              <FontAwesomeIcon icon={faGlobe} className={styles.icon} />
            </a>
          )}
        </div>
      </div>
    </Fade>
  );
};

export default ProjectItem;

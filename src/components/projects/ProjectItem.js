import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

import styles from "./ProjectItem.module.css";

const ProjectItem = (props) => {
  const { image, title, description, tags, github, live } = props.data;

  console.log(tags);
  return (
    <div className={styles.item}>
      <div className={styles["img-container"]}>
        <img src={image} alt="project demo" />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles["tag-container"]}>
        {tags.map(tag => <span className={styles.tag}>{tag}</span>)}
      </div>
      <p>{description}</p>
      <div className={styles["services-link"]}>
        {github && <a className={styles["link"]}><FontAwesomeIcon icon={faGithub} className={styles.icon} /></a>}
        {live && <a className={styles["link"]}><FontAwesomeIcon icon={faGlobe} className={styles.icon} /></a>}
      </div>
    </div>
  );
};

export default ProjectItem;

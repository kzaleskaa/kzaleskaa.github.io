import ProjectItem from "./ProjectItem";
import projects from "../../data/projects";

import styles from "./ProjectsContainer.module.css";

const ProjectsContainer = () => {
  return (
    <>
      <div className={styles.container}>
        {projects.map((el, idx) => (
          <ProjectItem key={`project-${idx}`} project_id={idx} data={el} />
        ))}
      </div>
      <div className={styles.link}>
        <a href="https://github.com/kzaleskaa">
          Click here and visit my GitHub account for more...
        </a>
      </div>
    </>
  );
};

export default ProjectsContainer;

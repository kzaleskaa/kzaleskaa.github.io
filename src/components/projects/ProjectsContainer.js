import ProjectItem from "./ProjectItem";
import projects from "./data";

import styles from "./ProjectsContainer.module.css";

const ProjectsContainer = () => {
  return (
    <div className={styles.container}>
      {projects.map((el, idx) => (
        <ProjectItem key={`project-${idx}`} project_id={idx} data={el} />
      ))}
    </div>
  );
};

export default ProjectsContainer;

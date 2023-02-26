import ProjectsContainer from "../components/projects/ProjectsContainer";

const Projects = (props) => {
  return (
    <section id={props.id}>
      <h3>Projects</h3>
      <ProjectsContainer />
    </section>
  );
};

export default Projects;

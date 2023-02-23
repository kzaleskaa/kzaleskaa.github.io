import ProjectsContainer from "./ProjectsContainer";

const ProjectSection = (props) => {
    return <section id={props.id} style={{"height": "100vh"}}>
        <h3>Projects</h3>
        <ProjectsContainer />
    </section>
}

export default ProjectSection;

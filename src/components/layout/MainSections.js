import HomeSection from "../home/HomeSection";
import ProjectSection from "../projects/ProjectSection";
import CoursesSection from "../courses/CoursesSection";
import ContactSection from "../contact/ContactSection";

const MainSections = () => {
    return (
        <>
            <HomeSection id="home" />
            <ProjectSection id="projects" />
            <CoursesSection id="courses"/>
            <ContactSection id="contact" />
        </>
    )
}

export default MainSections;
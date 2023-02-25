import Home from "../../pages/Home";
import Projects from "../../pages/Projects";
import Courses from "../../pages/Courses";
import Contact from "../../pages/Contact";

const MainSections = () => {
    return (
        <>
            <Home id="home" />
            <Projects id="projects" />
            <Courses id="courses" />
            <Contact id="contact" />
        </>
    );
};

export default MainSections;

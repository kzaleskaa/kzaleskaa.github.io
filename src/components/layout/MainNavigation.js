import { Link, animateScroll as scroll } from "react-scroll";

const MainNavigation = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link
                        activeClass="active"
                        to="home"
                        spy={true}
                        smooth={true}
                        // offset={-70}
                        duration={500}
                    >Home</Link>
                </li>
                <li>
                    <Link
                        activeClass="active"
                        to="projects"
                        spy={true}
                        smooth={true}
                        // offset={-70}
                        duration={500}
                    >projects</Link>
                </li>
                <li>
                    <Link
                        activeClass="active"
                        to="courses"
                        spy={true}
                        smooth={true}
                        // offset={-70}
                        duration={500}
                >courses</Link>
                </li>
                <li>
                    <Link
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        // offset={-70}
                        duration={500}
                >contact</Link>
                </li>
            </ul>
        </nav>
    )

}

export default MainNavigation;
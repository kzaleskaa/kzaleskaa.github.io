import { NavLink } from "react-router-dom";

const MainNavigation = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/projects">Projects</NavLink>
                </li>
                <li>
                    <NavLink to="/courses">Courses</NavLink>
                </li>
            </ul>
        </nav>
    )

}

export default MainNavigation;
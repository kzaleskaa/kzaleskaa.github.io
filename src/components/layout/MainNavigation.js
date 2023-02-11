import { Link } from "react-scroll";

import styles from "./MainNavigation.module.css";

const MainNavigation = () => {
    return (
        <nav className={styles["main-navigation"]}>
            <ul>
                <li className={styles["nav-item"]}>
                    <Link
                        activeClass={styles["active-link"]}
                        to="home"
                        spy
                        smooth
                        offset={-70}
                        duration={500}
                    >Home</Link>
                </li>
                <li className={styles["nav-item"]}>
                    <Link
                        activeClass={styles["active-link"]}
                        to="projects"
                        spy
                        smooth
                        offset={-70}
                        duration={500}
                    >projects</Link>
                </li>
                <li className={styles["nav-item"]}>
                    <Link
                        activeClass={styles["active-link"]}
                        to="courses"
                        spy
                        smooth
                        offset={-70}
                        duration={500}
                >courses</Link>
                </li>
                <li className={styles["nav-item"]}>
                    <Link
                        activeClass={styles["active-link"]}
                        to="contact"
                        spy
                        smooth
                        offset={-70}
                        duration={500}
                >contact</Link>
                </li>
            </ul>
        </nav>
    )

}

export default MainNavigation;
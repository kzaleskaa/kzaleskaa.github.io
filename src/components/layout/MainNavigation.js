import { useState } from "react";
import { Link } from "react-scroll";

import styles from "./MainNavigation.module.css";

const MainNavigation = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(false);

    return (
        <nav className={`${styles["main-navigation"]} ${isNavExpanded && styles["expanded-menu"]}`}>
            <ul>
                <li className={styles["nav-item"]}>
                    <Link
                        activeClass={styles["active-link"]}
                        className={styles.link}
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
                        className={styles.link}
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
                        className={styles.link}
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
                        className={styles.link}
                        to="contact"
                        spy
                        smooth
                        offset={-70}
                        duration={500}
                >contact</Link>
                </li>
            </ul>
            <button
                onClick={() => {setIsNavExpanded(prev => !prev)}}
            >X</button>
        </nav>
    )

}

export default MainNavigation;

import { useState } from "react";
import { Link } from "react-scroll";

import styles from "./MainNavigation.module.css";

const MainNavigation = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(false);

    return (
        <nav className={`${styles["main-navigation"]} ${isNavExpanded && styles["expanded-menu"]}`}>
            <div 
                className={`${styles["nav-burger"]} ${isNavExpanded &&  styles["open"]}`}
                onClick={() => {setIsNavExpanded(prev => !prev)}}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul>
                <li className={styles["nav-item"]}>
                    <Link
                        activeClass={styles["active-link"]}
                        className={styles.link}
                        onClick={() => {setIsNavExpanded(prev => !prev)}}
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
                        onClick={() => {setIsNavExpanded(prev => !prev)}}
                        to="projects"
                        spy
                        smooth
                        offset={-70}
                        duration={500}
                    >Projects</Link>
                </li>
                <li className={styles["nav-item"]}>
                    <Link
                        activeClass={styles["active-link"]}
                        className={styles.link}
                        onClick={() => {setIsNavExpanded(prev => !prev)}}
                        to="courses"
                        spy
                        smooth
                        offset={-70}
                        duration={500}
                >Courses</Link>
                </li>
                <li className={styles["nav-item"]}>
                    <Link
                        activeClass={styles["active-link"]}
                        className={styles.link}
                        onClick={() => {setIsNavExpanded(prev => !prev)}}
                        to="contact"
                        spy
                        smooth
                        offset={-70}
                        duration={500}
                >Contact</Link>
                </li>
            </ul>
        </nav>
    )

}

export default MainNavigation;

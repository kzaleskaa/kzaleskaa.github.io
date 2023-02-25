import { useState, useEffect } from "react";
import { Link } from "react-scroll";

import styles from "./MainNavigation.module.css";

const MainNavigation = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const handleResize = () => {
        if (window.innerWidth < 768) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    };

    const closeExpandedMenu = () => {
        if (isMobile) {
            setIsNavExpanded((prev) => !prev);
        }
    };

    useEffect(() => {
        handleResize();
        window.addEventListener("resize", handleResize);
    });

    useEffect(() => {
        if (isNavExpanded) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [isNavExpanded]);

    return (
        <nav
            className={`${styles["main-navigation"]} ${
                isNavExpanded && styles["expanded-menu"]
            }`}
        >
            <div
                className={`${styles["nav-burger"]} ${
                    isNavExpanded && styles["open"]
                }`}
                onClick={() => {
                    setIsNavExpanded((prev) => !prev);
                }}
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
                        to="home"
                        onClick={closeExpandedMenu}
                        spy
                        smooth
                        offset={-70}
                        duration={500}
                    >
                        Home
                    </Link>
                </li>
                <li className={styles["nav-item"]}>
                    <Link
                        activeClass={styles["active-link"]}
                        className={styles.link}
                        to="projects"
                        onClick={closeExpandedMenu}
                        spy
                        smooth
                        offset={-70}
                        duration={500}
                    >
                        Projects
                    </Link>
                </li>
                <li className={styles["nav-item"]}>
                    <Link
                        activeClass={styles["active-link"]}
                        className={styles.link}
                        to="courses"
                        onClick={closeExpandedMenu}
                        spy
                        smooth
                        offset={-70}
                        duration={500}
                    >
                        Courses
                    </Link>
                </li>
                <li className={styles["nav-item"]}>
                    <Link
                        activeClass={styles["active-link"]}
                        className={styles.link}
                        to="contact"
                        onClick={closeExpandedMenu}
                        spy
                        smooth
                        offset={-70}
                        duration={500}
                    >
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default MainNavigation;

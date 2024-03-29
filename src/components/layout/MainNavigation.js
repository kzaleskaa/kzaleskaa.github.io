import { useState, useEffect } from "react";
import { Link } from "react-scroll";

import styles from "./MainNavigation.module.css";

const MainNavigation = () => {
  const navLinks = [
    { navLinkId: "Home", scrollToId: "home" },
    { navLinkId: "Projects", scrollToId: "projects" },
    { navLinkId: "Courses", scrollToId: "courses" },
  ];
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
        className={`${styles["nav-burger"]} ${isNavExpanded && styles["open"]}`}
        onClick={() => {
          setIsNavExpanded((prev) => !prev);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul>
        {navLinks.map(({ navLinkId, scrollToId }) => (
          <li className={styles["nav-item"]} key={`link-${navLinkId}`}>
            <Link
              to={scrollToId}
              activeClass={styles["active-link"]}
              className={styles.link}
              onClick={closeExpandedMenu}
              spy
              smooth
              offset={-80}
              duration={500}
            >
              {navLinkId}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MainNavigation;

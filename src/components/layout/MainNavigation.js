import { useState, useEffect } from "react";
import NavLink from "./NavLink";

import styles from "./MainNavigation.module.css";

const MainNavigation = () => {
  const [activeNavLinkId, setActiveNavLinkId] = useState("");

  const navLinks = [
    { navLinkId: "Home", scrollToId: "home" },
    { navLinkId: "Projects", scrollToId: "projects" },
    { navLinkId: "Courses", scrollToId: "courses" },
    { navLinkId: "Contact", scrollToId: "contact" },
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
          <li className={styles["nav-item"]}>
            <NavLink
              navLinkId={navLinkId}
              scrollToId={scrollToId}
              activeNavLinkId={activeNavLinkId}
              setActiveNavLinkId={setActiveNavLinkId}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MainNavigation;

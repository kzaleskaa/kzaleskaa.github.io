import { useState, useEffect } from "react";
import { Link, animateScroll as scroll, scroller } from "react-scroll";

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
  const sections = document.querySelectorAll('section');

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

  // function to set active nav link  
  const setActiveNavLink = () => {
    const currentScrollPosition = window.pageYOffset;
    const sections = document.querySelectorAll('section');
    const arratOfSections = Array.from(sections);

    arratOfSections.slice(0, -1).forEach((val, key, arr) => {
      const sectionTop = val.offsetTop;
      const sectionHeight = val.offsetHeight;
      const sectionId = val.getAttribute('id');
      if (currentScrollPosition >= sectionTop && currentScrollPosition < sectionTop + sectionHeight) {
        setActiveNavLinkId(sectionId);
      }
    });
  }
  console.log(activeNavLinkId);

  useEffect(() => {
    setActiveNavLink();
    window.addEventListener('scroll', setActiveNavLink);
  }, []);

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
            <Link to={scrollToId} offset={-50} duration={500} smooth spy>
              {navLinkId}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MainNavigation;

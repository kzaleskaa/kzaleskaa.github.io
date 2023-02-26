import { ClassNames } from "@emotion/react";

const NavLink = ({
  navLinkId,
  scrollToId,
  activeNavLinkId,
  setActiveNavLinkId,
}) => {
  const handleClick = () => {
    setActiveNavLinkId(navLinkId);
    document.getElementById(scrollToId).scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <span
      id={navLinkId}
      className={activeNavLinkId == navLinkId ? "activeClass" : ""}
      onClick={handleClick}
    >
      {navLinkId}
    </span>
  );
};

export default NavLink;

import styles from "./NavLink.module.css";

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
      className={activeNavLinkId === navLinkId ? styles["active-link"] : ""}
      onClick={handleClick}
    >
      {navLinkId}
    </span>
  );
};

export default NavLink;

import styles from "./Footer.module.css";

const Footer = () => {
    return(
        <footer className={styles.footer}>
            &copy; 2023, created with passion by <a href={process.env.REACT_APP_GITHUB_LINK}>kzaleskaa</a>
        </footer>
    )
}

export default Footer;

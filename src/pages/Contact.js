import LinksList from "../components/contact/LinksList";
import Profile from "../components/contact/Profile";

import styles from "../components/contact/ContactSection.module.css";

const Contact = (props) => {
    return <section id={props.id} className={styles.section}>
        <Profile />
        <LinksList />
    </section>
}

export default Contact;

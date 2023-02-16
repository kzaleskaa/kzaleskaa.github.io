import LinksList from "./LinksList";
import Profile from "./Profile";

import styles from "./ContactSection.module.css";

const ContactSection = (props) => {
    return <section id={props.id} className={styles.section}>
        <Profile />
        <LinksList />
    </section>
}

export default ContactSection;

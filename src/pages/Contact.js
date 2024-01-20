import LinksList from "../components/contact/LinksList";
import Profile from "../components/contact/Profile";
import { Roll } from "react-awesome-reveal";
import styles from "../components/contact/ContactSection.module.css";

const Contact = (props) => {
  return (
    <section id={props.id} className={styles.section}>
      <Roll className="contact-header">
        <h3>Contact me</h3>
      </Roll>
      <div className={styles.card}>
        <Profile />
        <LinksList />
      </div>
    </section>
  );
};

export default Contact;

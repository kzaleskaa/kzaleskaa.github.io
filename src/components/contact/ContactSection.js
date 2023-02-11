import LinksList from "./LinksList";

const ContactSection = (props) => {
    return <section id={props.id} style={{height: "100vh"}}>
        <LinksList />
    </section>
}

export default ContactSection;

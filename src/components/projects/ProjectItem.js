import styles from "./ProjectItem.module.css";

const ProjectItem = (props) => {
    const {
        image,
        title, 
        description
    } = props.data;

    return <div className={styles.item}>
        <img src={image} alt="project demo" />
        <h4>{title}</h4>
        <p>{description}</p>
    </div>
}

export default ProjectItem;

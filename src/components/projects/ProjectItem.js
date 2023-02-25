import styles from "./ProjectItem.module.css";

const ProjectItem = (props) => {
    const { image, title, description } = props.data;

    return (
        <div className={styles.item}>
            <div className={styles["img-container"]}>
                <img src={image} alt="project demo" />
            </div>
            <h3 className={styles.title}>{title}</h3>
            <p>{description}</p>
        </div>
    );
};

export default ProjectItem;

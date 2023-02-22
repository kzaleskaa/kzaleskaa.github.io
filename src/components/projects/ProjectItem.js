import styles from "./ProjectItem.module.css";

const ProjectItem = (props) => {
    const {
        image,
        title, 
        description,
        tags
    } = props.data;
    const { project_id } = props.project_id;

    return <div className={styles.item}>
        <img src={image} />
        <h4>{title}</h4>
        <p>{description}</p>
        <div className={styles.tags}>
            {tags.map((el, idx) => <button key={`tag-${project_id}-${idx}`} onClick={props.addTagFilter}>{el}</button>)}
        </div>
    </div>
}

export default ProjectItem;

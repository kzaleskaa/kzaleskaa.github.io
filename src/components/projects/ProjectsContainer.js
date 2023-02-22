import ProjectItem from "./ProjectItem";
import FiltersList from "./FiltersList";
import projects from "./data";

import styles from "./ProjectsContainer.module.css";
import { useState } from "react";

const ProjectsContainer = () => {
    const [tagsArray, setTagsArray] = useState(["Python"]);
    let filteredProjects = projects;

    const checker = (array, target) => target.every((v) => array.includes(v));

    if (tagsArray.length !== 0) {
        filteredProjects = projects.filter(project => {
            return checker(
                project.tags, tagsArray
            );
        });
    }

    const addTagFilter = (e) => {
        if (![...tagsArray.map((item) => item)].includes(e.target.innerText)) {
            setTagsArray((prev) => [...prev, e.target.innerText,])
        }
    }

    const deleteTagFilter = (key) => {
        setTagsArray(prev => prev.filter((item, index) => key !== `filter-${index}`))
    }

    const clearAllFilters = () => {
        setTagsArray([]);
    }

    return <div>
        {tagsArray.length > 0 && (
            <FiltersList 
            tagsArray={tagsArray}
            deleteTagFilter={deleteTagFilter}
            clearAllFilters={clearAllFilters}
            />
        )}
        <div className={styles.container}>
            {filteredProjects.map((el, idx) => <ProjectItem key={`project-${idx}`} project_id={idx} data={el} addTagFilter={addTagFilter}/>)}
        </div>
    </div>
}

export default ProjectsContainer;

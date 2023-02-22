import styles from "./FiltersList.module.css";

const FiltersList = (props) => {
    return <div>
        <ul>
            {
                props.tagsArray.map((filter, idx) => (
                    <li key={`filter-${idx}`}>
                        <p>{filter}</p>
                        <button onClick={() => props.deleteTagFilter(`filter-${idx}`)}>x</button>
                    </li>
                ))
            }
        </ul>
        <button onClick={props.clearAllFilters}>Clear</button>
    </div>
}

export default FiltersList;

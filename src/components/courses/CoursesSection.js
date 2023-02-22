import CoursesLine from "./CoursesLine";

const CoursesSection = (props) => {
    return <section id={props.id}>
        <h3>Courses</h3>
        <CoursesLine />
    </section>
}

export default CoursesSection;

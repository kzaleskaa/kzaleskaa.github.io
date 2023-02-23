import CoursesLine from "../components/courses/CoursesLine";

const Courses = (props) => {
    return <section id={props.id}>
        <h3>Courses</h3>
        <CoursesLine />
    </section>
}

export default Courses;

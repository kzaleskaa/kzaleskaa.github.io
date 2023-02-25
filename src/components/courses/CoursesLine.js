import courses from "./data";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const CoursesLine = () => {
    return (
        <VerticalTimeline>
            {courses.map((el, idx) => {
                return (
                    <VerticalTimelineElement
                        key={`timeline-item-${idx}`}
                        className="vertical-timeline-element--work"
                        contentStyle={{
                            background: "var(--light-purple)",
                            color: "#fff",
                        }}
                        contentArrowStyle={{
                            borderRight: "7px solid  var(--light-purple)",
                        }}
                        date={el.company}
                        iconStyle={{
                            background: "var(--light-gray)",
                            color: "#fff",
                        }}
                    >
                        <h3 className="vertical-timeline-element-title">
                            {el.name}
                        </h3>
                        <p>{el.description}</p>
                    </VerticalTimelineElement>
                );
            })}
            <VerticalTimelineElement
                iconStyle={{ background: "var(--light-purple)", color: "#fff" }}
            />
        </VerticalTimeline>
    );
};

export default CoursesLine;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdCard } from "@fortawesome/free-solid-svg-icons";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import courses from "../../data/courses";
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
            icon={el.icon}
          >
            <h3 className="vertical-timeline-element-title">{el.name}</h3>
            <p>{el.description}</p>
          </VerticalTimelineElement>
        );
      })}
      <VerticalTimelineElement
        iconStyle={{ background: "var(--light-purple)", color: "#fff" }}
        icon={<FontAwesomeIcon icon={faPhoneVolume} />}
      />
    </VerticalTimeline>
  );
};

export default CoursesLine;

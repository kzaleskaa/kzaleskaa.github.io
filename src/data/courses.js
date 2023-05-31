import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPython, faReact } from "@fortawesome/free-brands-svg-icons";
import { faBrain, faChartSimple } from "@fortawesome/free-solid-svg-icons";

const courses = [
  {
    name: "Deep Learning - specialization",
    company: "DeepLearning.AI",
    date: "March 2022",
    description:
      "5 COURSES: Convolutional Neural Networks, Improving Deep Neural Networks, Neural Networks and Deep Learning, Sequence Models, Structuring Machine Learning Projects",
    icon: <FontAwesomeIcon icon={faBrain} />,
  },
  {
    name: "Fundamentals of Deep Learning",
    company: "NVIDIA",
    date: "April 2022",
    description:
      "Introduction and implementation of tasks mainly related to Convolutional Neural Networks.",
    icon: <FontAwesomeIcon icon={faBrain} />,
  },
  {
    name: "Python LevelUP: Data Science by Appsilon",
    company: "Daftcode",
    date: "June 2022",
    description:
      "Introduction to data processing (numpy, pandas), data visualization (plots, sklearn) and machine learning (sklearn).",
    icon: <FontAwesomeIcon icon={faChartSimple} />,
  },
  {
    name: "Python LevelUP Dev",
    company: "Daftcode",
    date: "June 2022",
    description:
      "FastAPI application hosted on Heroku cloud with PostgreSQL database was created as homework assigment.",
    icon: <FontAwesomeIcon icon={faPython} />,
  },
  {
    name: "Python Django - The Practical Guide",
    company: "Udemy",
    date: "February 2022",
    description:
      "Introduction and implementation of application development concepts in Django such as views, templates, models, forms, sessions and admin panel. Additionally, database connection for blog implementation was discussed. The completed application was hosted using Amazon RDS, Amazon S3 and Heroku.",
    icon: <FontAwesomeIcon icon={faPython} />,
  },
  {
    name: "React - The Complete Guide (incl Hooks, React Router, Redux)",
    company: "Udemy",
    date: "February 2022",
    description:
      "Participation in the course provided an introduction to multi-page SPA with React Router, hooks, sending HTTP requests or diving into Redux.",
    icon: <FontAwesomeIcon icon={faReact} />,
  },
];

export default courses;

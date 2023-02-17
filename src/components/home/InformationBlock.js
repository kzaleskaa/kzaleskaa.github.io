import ReactTypingEffect from 'react-typing-effect';
import LinksSection from "./LinksSection";

import styles from "./InformationBlock.module.css";

const InformationBlock = () => {
    return <div>
        <h1>Hi There,</h1>
        <h2>I'm Kasia Zaleska</h2>
        <h1> Check my&nbsp;
        <ReactTypingEffect
            text={["projects", "courses", "education", "experience", "portfolio"]}
            className={styles["typing-words"]}
            eraseDelay={2000}
            typingDelay={500}
        /></h1>
        <LinksSection className={styles.links} />
    </div>
}

export default InformationBlock;

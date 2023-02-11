import { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";

import styles from "./ScrollToTop.module.css";

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 340) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        })
    })

    const scrollToTop = () => {
        scroll.scrollToTop();
    }

    return <div className={styles["scroll-to-top"]}>
        {isVisible && <div onClick={scrollToTop}>top</div>}
    </div>
}

export default ScrollToTop;
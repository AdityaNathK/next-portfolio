import React from "react";
import styles from "./ScrollIndicator.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const ScrollIndicator = () => {
    return (
        <div className={styles.indicator}>
            <FontAwesomeIcon className={`${styles.down} `} icon={faAngleDown} />
            <FontAwesomeIcon className={`${styles.down}`} icon={faAngleDown} />
        </div>
    );
};

export default ScrollIndicator;

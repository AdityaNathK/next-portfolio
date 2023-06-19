import React from "react";
import styles from "./IsoTechStack.module.css";

type ListProps = {
    classOrder: string;
    title: string;
};

export const CustomList = (props: ListProps) => {
    const { classOrder, title } = props;
    return (
        <li className={`${styles.topStack} ${classOrder}`}>
            <div className={styles.textClass}>
                <span className={styles.spanClass}>
                    <span className={styles.spanImage}></span>
                </span>
                {title}
            </div>
        </li>
    );
};

const IsoTechStack = () => {
    return (
        <div className={styles.rootClass}>
            <ul className={styles.listClass}>
                <CustomList classOrder={styles.flutter} title="Flutter" />
                <CustomList classOrder={styles.nextjs} title="NEXT JS" />
                <CustomList classOrder={styles.reactjs} title="REACT JS" />
                <CustomList classOrder={styles.ts} title="TYPESCRIPT" />
                <CustomList classOrder={styles.js} title="JAVASCRIPT" />
                <CustomList classOrder={styles.scss} title="SCSS" />
                <CustomList classOrder={styles.tailwind} title="TAILWIND" />
                <CustomList classOrder={styles.css} title="CSS" />
                <CustomList classOrder={styles.html} title="HTML" />
            </ul>
        </div>
    );
};

export default IsoTechStack;

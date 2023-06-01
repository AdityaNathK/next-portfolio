import React from "react";
import styles from "./Construction.module.css";
const Construction = () => {
    return (
        <div className={styles.bodyMain}>
            <div className={styles.overlay}></div>
            <div className={styles.stars} aria-hidden="true"></div>
            <div className={styles.starts2} aria-hidden="true"></div>
            <div className={styles.stars3} aria-hidden="true"></div>
            <main className={styles.main}>
                <section className={styles.contact}>
                    <h1 className={styles.title}>Profile Under Construction</h1>
                    <h2 className={styles.subTitle}>
                        It&apos;s going to be amazing..!
                    </h2>
                </section>
            </main>
        </div>
    );
};

export default Construction;

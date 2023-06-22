import styles from "./TechStack.module.css";

type ListProps = {
    classOrder: string;
    titleClass: string;
};
export const CubeGroup = (props: ListProps) => {
    const { classOrder, titleClass } = props;
    return (
        <div className={`${styles.cubeGroupClass} ${classOrder}`}>
            <span className={`${styles.spanClass} ${titleClass}`}></span>
            <span className={`${styles.spanClass} ${titleClass}`}></span>
            <span className={`${styles.spanClass} ${titleClass}`}></span>
        </div>
    );
};
const TechStack = () => {
    return (
        // <section id="tech-stack" className="h-full mainBody mb-20 contentWidth">
        //     <div className="grid grid-cols-[2fr,1fr] items-center place-items-end">
        //         <div className="flex  flex-col align-center ">
        //             <h1
        //                 className={`text-left text-4xl mb-10 font-semibold headingClass w-full dark:text-sky-400`}
        //             >
        //                 My Tech Stack
        //             </h1>
        //             <IsoTechStack />
        //         </div>
        //     </div>
        // </section>
        <section>
            <div className={`${styles.container}`}>
                <div className={`${styles.cube}`}>
                    <div
                        className={`${styles.cubeGroupClass} ${styles.groupIndex1}`}
                    >
                        <span
                            className={`${styles.spanClass} ${styles.index3} `}
                        ></span>
                        <span
                            className={`${styles.spanClass} ${styles.index2}`}
                        ></span>
                        <span
                            className={`${styles.spanClass} ${styles.index1}`}
                        ></span>
                    </div>
                    <div
                        className={`${styles.cubeGroupClass} ${styles.groupIndex2}`}
                    >
                        <span
                            className={`${styles.spanClass} ${styles.index3} `}
                        ></span>
                        <span
                            className={`${styles.spanClass} ${styles.index2}`}
                        ></span>
                        <span
                            className={`${styles.spanClass} ${styles.index1}`}
                        ></span>
                    </div>
                    <div
                        className={`${styles.cubeGroupClass} ${styles.groupIndex3}`}
                    >
                        <span
                            className={`${styles.spanClass} ${styles.index3} `}
                        ></span>
                        <span
                            className={`${styles.spanClass} ${styles.index2}`}
                        ></span>
                        <span
                            className={`${styles.spanClass} ${styles.index1}`}
                        ></span>
                    </div>
                </div>
                <div className={`${styles.cube}`}>
                    <div
                        className={`${styles.cubeGroupClass} ${styles.groupIndex1}`}
                    >
                        <span
                            className={`${styles.spanClass} ${styles.index3} `}
                        ></span>
                        <span
                            className={`${styles.spanClass} ${styles.index2}`}
                        ></span>
                        <span
                            className={`${styles.spanClass} ${styles.index1}`}
                        ></span>
                    </div>
                    <div
                        className={`${styles.cubeGroupClass} ${styles.groupIndex2}`}
                    >
                        <span
                            className={`${styles.spanClass} ${styles.index3} `}
                        ></span>
                        <span
                            className={`${styles.spanClass} ${styles.index2}`}
                        ></span>
                        <span
                            className={`${styles.spanClass} ${styles.index1}`}
                        ></span>
                    </div>
                    <div
                        className={`${styles.cubeGroupClass} ${styles.groupIndex3}`}
                    >
                        <span
                            className={`${styles.spanClass} ${styles.index3} `}
                        ></span>
                        <span
                            className={`${styles.spanClass} ${styles.index2}`}
                        ></span>
                        <span
                            className={`${styles.spanClass} ${styles.index1}`}
                        ></span>
                    </div>
                </div>
                <div className={`${styles.cube}`}>
                    <div
                        className={`${styles.cubeGroupClass} ${styles.groupIndex1}`}
                    >
                        <span
                            className={`${styles.spanClass} ${styles.index9} `}
                        ></span>
                        <span
                            className={`${styles.spanClass} ${styles.index8}`}
                        ></span>
                        <span
                            className={`${styles.spanClass} ${styles.index7}`}
                        ></span>
                    </div>
                    <div
                        className={`${styles.cubeGroupClass} ${styles.groupIndex2}`}
                    >
                        <span
                            className={`${styles.spanClass} ${styles.index6} `}
                        ></span>
                        <span
                            className={`${styles.spanClass} ${styles.index5}`}
                        ></span>
                        <span
                            className={`${styles.spanClass} ${styles.index4}`}
                        ></span>
                    </div>
                    <div
                        className={`${styles.cubeGroupClass} ${styles.groupIndex3}`}
                    >
                        <span
                            className={`${styles.spanClass} ${styles.index3} `}
                        ></span>
                        <span
                            className={`${styles.spanClass} ${styles.index2}`}
                        ></span>
                        <span
                            className={`${styles.spanClass} ${styles.index1}`}
                        >
                            <span className={styles.spanImage}></span>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechStack;

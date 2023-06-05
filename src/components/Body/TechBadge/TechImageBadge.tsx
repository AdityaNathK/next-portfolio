import Image from "next/image";
import styles from "./TechImageBadge.module.css";

type svgBadgeProps = {
    tooltip: string;
    styleClass: string;
};

const TechImageBadge = (props: svgBadgeProps) => {
    const { tooltip, styleClass } = props;
    let brandStyles;

    switch (styleClass) {
        case "nextBrand":
            brandStyles = styles.nextBrand;
            break;
        case "tailwindBrand":
            brandStyles = styles.tailwindBrand;
            break;
        case "flutterBrand":
            brandStyles = styles.flutterBrand;
            break;
        case "tsBrand":
            brandStyles = styles.tsBrand;
            break;
    }
    return (
        <div>
            <div className={`${styles.icon} ${brandStyles} font-medium`}>
                <div className={styles.tooltip}>{tooltip}</div>
                <span className={`${styles.spanIcon} ${brandStyles}`}></span>
            </div>
        </div>
    );
};

export default TechImageBadge;

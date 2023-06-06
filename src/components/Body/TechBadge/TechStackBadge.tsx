import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import styles from "./TechStackBadge.module.css";

type BadgeProps = {
    tooltip: string;
    iconSrc: IconProp;
    styleClass: string;
    isSocial: boolean;
};

const TechStackBadge = (props: BadgeProps) => {
    const { tooltip, iconSrc, styleClass, isSocial } = props;
    let brandStyles;

    switch (styleClass) {
        case "htmlBrand":
            brandStyles = styles.htmlBrand;
            break;
        case "cssBrand":
            brandStyles = styles.cssBrand;
            break;
        case "jsBrand":
            brandStyles = styles.jsBrand;
            break;
        case "reactBrand":
            brandStyles = styles.reactBrand;
            break;
        case "scssBrand":
            brandStyles = styles.scssBrand;
            break;
        case "linkedInBrand":
            brandStyles = styles.linkedInBrand;
            break;
        case "githubBrand":
            brandStyles = styles.githubBrand;
            break;
    }

    return (
        <div className={styles.wrapper}>
            <div className={`${styles.icon} ${brandStyles} font-medium`}>
                {isSocial ? (
                    ""
                ) : (
                    <div className={`${styles.tooltip}`}>{tooltip}</div>
                )}
                <span className={`${styles.spanIcon}`}>
                    <FontAwesomeIcon
                        className={`${styles.iconStyles} ${brandStyles}`}
                        icon={iconSrc}
                    />
                </span>
            </div>
        </div>
    );
};

export default TechStackBadge;

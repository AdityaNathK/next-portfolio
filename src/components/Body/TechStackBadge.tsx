import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import styles from "./TechStackBadge.module.css";

type BadgeProps = {
    tooltip: string;
    iconSrc: IconProp;
    brandColor: string;
};

const TechStackBadge = (props: BadgeProps) => {
    const { tooltip, iconSrc, brandColor } = props;
    return (
        <div className={styles.wrapper}>
            <div className={styles.icon}>
                <div className={`${styles.tooltip} before:${brandColor}`}>
                    {tooltip}
                </div>
                <span className={`${styles.spanIcon} hover:${brandColor}`}>
                    <FontAwesomeIcon
                        className={`${styles.iconStyles} `}
                        icon={iconSrc}
                    />
                </span>
            </div>
        </div>
    );
};

export default TechStackBadge;

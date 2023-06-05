import Image from "next/image";
import styles from "./WaterDropCard.module.css";
import { nextLogo } from "@utils/fa-assets";

const WaterDropCard = () => {
    return (
        <div className="wrapper">
            <div className="icon">
                <div className="tooltip">facebook</div>
                <span>
                    <Image
                        src={nextLogo}
                        alt="html-logo"
                        width={30}
                        height={30}
                    />
                </span>
            </div>
            <div className={styles.badges}></div>
        </div>
    );
};

export default WaterDropCard;

import Image from "next/image";

type BadgeProps = {
    tooltip: string;
    imageSrc: string;
    altText: string;
};

const imageSize = 30;

const TechStackBadge = (props: BadgeProps) => {
    const { tooltip, imageSrc, altText } = props;
    return (
        <div className="wrapper">
            <div className="icon">
                <div className="tooltip">{tooltip}</div>
                <span>
                    <Image
                        src={imageSrc}
                        alt={altText}
                        width={imageSize}
                        height={imageSize}
                    />
                </span>
            </div>
        </div>
    );
};

export default TechStackBadge;

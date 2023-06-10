import TechStackBadge from "@components/Body/TechBadge/TechStackBadge";
import Image from "next/image";
import Link from "next/link";
import styles from "./Landing.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLinkedin,
    faGithub,
    faHtml5,
    faCss3Alt,
    faJs,
    faReact,
    faSass,
} from "@fortawesome/free-brands-svg-icons";
import TechImageBadge from "@components/Body/TechBadge/TechImageBadge";
import IsoTechStack from "@components/IsoTechStack/IsoTechStack";

const Landing = () => {
    return (
        <div className="container flex flex-col justify-center mb-20 mainBody">
            <section
                id="landing"
                className=" flex items-center gap-10 justify-between relative content text-black z-10 mb-[30px]"
            >
                <div className={`${styles.box}`}>
                    <div className={styles.content}>
                        <Image
                            className={styles.profileImage}
                            src="/assets/images/profile-image.jpg"
                            alt="Profile image"
                            width={600}
                            height={600}
                        />
                    </div>
                </div>
                <section className="flex flex-col justify-between self-center">
                    <h2 className="text-2xl my-2 text-right">
                        <p className="text-4xl">
                            Hi I&apos;m&nbsp;
                            <span className="px-2 bg-red-400 font-semibold text-slate-100 hover:bg-transparent hover:text-red-400">
                                Aditya Nath
                            </span>
                        </p>
                    </h2>
                    <br />
                    <p className="text-lg font-medium text-right">
                        A passionate and ambitious front-end developer
                        <br />
                        based in Adelaide, Australia 🇦🇺
                        <span></span>
                    </p>
                    <section className="flex gap-5 w-full justify-end mt-5">
                        <Link
                            href="https://github.com/AdityaNathK"
                            target="_blank"
                        >
                            <FontAwesomeIcon
                                className={` w-6 h-6 px-2 py-2 bg-[#333] text-white hover:bg-white rounded-[50%] hover:text-[#333]`}
                                icon={faGithub}
                            />
                        </Link>
                        <Link href="https://www.linkedin.com/in/aditya-nath-kalla/">
                            <FontAwesomeIcon
                                className={` w-6 h-6 px-2 py-2 bg-[#0072b1] text-white hover:bg-white rounded-[50%] hover:text-[#0072b1]`}
                                icon={faLinkedin}
                            />
                        </Link>
                    </section>
                </section>
            </section>
            {/* <section
                className={`${styles.activeSpan} flex items-center justify-center`}
            >
                <h3 className="text-xl pr-5 font-medium">Tech Stack</h3>
                <div className="flex gap-3 items-center">
                    <span className="text-2xl">|</span>
                    <TechStackBadge
                        isSocial={false}
                        tooltip="HTML"
                        iconSrc={faHtml5}
                        styleClass="htmlBrand"
                    />
                    <TechStackBadge
                        isSocial={false}
                        tooltip="CSS"
                        iconSrc={faCss3Alt}
                        styleClass="cssBrand"
                    />
                    <TechStackBadge
                        isSocial={false}
                        tooltip="JS"
                        iconSrc={faJs}
                        styleClass="jsBrand"
                    />
                    <TechStackBadge
                        isSocial={false}
                        tooltip="ReactJs"
                        iconSrc={faReact}
                        styleClass="reactBrand"
                    />
                    <TechStackBadge
                        isSocial={false}
                        tooltip="SCSS"
                        iconSrc={faSass}
                        styleClass="scssBrand"
                    />
                    <TechImageBadge tooltip="NextJs" styleClass="nextBrand" />
                    <TechImageBadge
                        tooltip="Tailwind"
                        styleClass="tailwindBrand"
                    />
                    <TechImageBadge
                        tooltip="Flutter"
                        styleClass="flutterBrand"
                    />
                    <TechImageBadge tooltip="TypeScript" styleClass="tsBrand" />
                </div>
                <div>&nbsp;</div>
            </section> */}
        </div>
    );
};

export default Landing;

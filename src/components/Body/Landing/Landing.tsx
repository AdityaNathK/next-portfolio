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

const Landing = () => {
    return (
        <div className="container flex flex-col justify-center mb-20">
            <section
                id="landing"
                className=" flex items-center gap-10 justify-center relative h-[22rem] content text-black z-10"
            >
                <div className={`${styles.box}`}>
                    <div className={styles.content}>
                        <Image
                            className={styles.profileImage}
                            src="/assets/images/profile.gif"
                            alt="Profile image"
                            width={50}
                            height={50}
                        />
                    </div>
                </div>
                <section className="">
                    <h2 className="text-2xl w-[40rem] my-10 text-right">
                        <p className="text-4xl -mb-2">
                            Hi I&apos;m
                            <span className="px-2 mx-3 bg-red-400 font-semibold text-slate-100">
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
                                className={`${styles.social} hover:text-slate-800`}
                                icon={faGithub}
                            />
                        </Link>
                        <Link href="https://www.linkedin.com/in/aditya-nath-kalla/">
                            <FontAwesomeIcon
                                className={`${styles.social} hover:text-sky-800`}
                                icon={faLinkedin}
                            />
                        </Link>
                    </section>
                </section>
            </section>
            <section
                className={`${styles.activeSpan} flex mt-5 items-center justify-center`}
            >
                <h3 className="text-xl pr-5 font-medium">Tech Stack</h3>
                <div className="flex gap-3 items-center">
                    <span className="text-2xl">|</span>
                    <TechStackBadge
                        tooltip="HTML"
                        iconSrc={faHtml5}
                        styleClass="htmlBrand"
                    />
                    <TechStackBadge
                        tooltip="CSS"
                        iconSrc={faCss3Alt}
                        styleClass="cssBrand"
                    />
                    <TechStackBadge
                        tooltip="JS"
                        iconSrc={faJs}
                        styleClass="jsBrand"
                    />
                    <TechStackBadge
                        tooltip="ReactJs"
                        iconSrc={faReact}
                        styleClass="reactBrand"
                    />
                    <TechStackBadge
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
            </section>
        </div>
    );
};

export default Landing;

import styles from "./About.module.css";
import Image from "next/image";
import { Inter, Roboto } from "next/font/google";
import TechStackBadge from "@/src/components/Body/TechBadge/TechStackBadge";
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
import TechImageBadge from "@/src/components/Body/TechBadge/TechImageBadge";
const inter = Inter({
    subsets: ["latin"],
    weight: ["100", "300", "400", "500", "700"],
});

const About = () => {
    return (
        <section id="about" className="h-full mainBody mb-20 contentWidth">
            <h1
                className={`text-left text-4xl mb-10 font-semibold headingClass w-full dark:text-sky-400`}
            >
                About Me
            </h1>
            <div className="grid grid-cols-[2fr,1fr] gap-2 items-center place-items-end">
                <div className="flex  flex-col align-center ">
                    <p
                        className={`text-justify text-lg font-normal text-[#332a43] w-full dark:text-slate-200`}
                    >
                        I&apos;m on a journey to refine my skills and make a
                        mark in the digital world. I loves to bring ideas to
                        life through captivating interfaces. With a blend of
                        artistic flair and technical expertise, I specialize in
                        crafting visually stunning and user-friendly websites
                        With a solid foundation in HTML, CSS, and JavaScript,
                        TypeScript and frameworks like React, Next, Tailwind,
                        and SCSS, I&apos;m eager to showcase my projects and
                        demonstrate my potential.&nbsp;
                    </p>
                    <div className="flex flex-row mt-20 mb-10 gap-5 ">
                        <h3
                            className={` flextext-left text-lg  font-semibold headingClass w-full dark:text-sky-400`}
                        >
                            My <br />
                            Tech Stack
                        </h3>
                        <div className="flex gap-3 items-center">
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
                            <TechImageBadge
                                tooltip="NextJs"
                                styleClass="nextBrand"
                            />
                            <TechImageBadge
                                tooltip="Tailwind"
                                styleClass="tailwindBrand"
                            />
                            <TechImageBadge
                                tooltip="Flutter"
                                styleClass="flutterBrand"
                            />
                            <TechImageBadge
                                tooltip="TypeScript"
                                styleClass="tsBrand"
                            />
                        </div>
                    </div>
                </div>
                <section className="flex align-center w-full justify-end h-full">
                    <div className={`${styles.box}`}>
                        <Image
                            className={styles.profileImage}
                            src="/assets/images/profile-image.jpg"
                            alt="Profile image"
                            width={800}
                            height={800}
                        />
                    </div>
                </section>
            </div>
        </section>
    );
};

export default About;

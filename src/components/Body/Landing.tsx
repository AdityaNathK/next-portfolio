import TechStackBadge from "@components/Body/TechStackBadge";

import { htmlLogo, githubLogo, linkedinLogo } from "@utils/fa-assets";
import Image from "next/image";
import Link from "next/link";
import styles from "./Landing.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Landing = () => {
    return (
        <div className="container flex flex-col justify-center">
            <section
                id="landing"
                className=" flex items-center gap-10 justify-center relative h-[32rem] content text-black z-10"
            >
                <section>
                    <h2 className="text-2xl w-[40rem] my-10">
                        <p className="text-4xl -mb-2">
                            Hi I&apos;m
                            <span className="px-2 mx-3 bg-red-400 font-semibold text-slate-100">
                                Aditya Nath
                            </span>
                        </p>
                        <br />
                        <p className="text-lg">
                            A passionate and ambitious front-end developer based
                            in Adelaide, Australia 🇦🇺
                        </p>
                    </h2>
                    <section className="flex -mt-3 gap-5 w-[20rem]">
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
            </section>

            <TechStackBadge
                tooltip="HTML"
                iconSrc={faGithub}
                brandColor="bg-sky-500"
            />
            <section className="flex">
                <h2 className="text-xl">Tech Stack</h2>
                <span className="flex">
                    [<div>HTML</div>
                    <div>CSS</div>
                    <div>JS</div>
                    <div>ReactJs</div>
                    <div>NextJs</div>]
                </span>
            </section>
        </div>
    );
};

export default Landing;

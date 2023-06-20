import styles from "./About.module.css";
import Image from "next/image";
import { Inter, Roboto } from "next/font/google";
const inter = Inter({
    subsets: ["latin"],
    weight: ["100", "300", "400", "500", "700"],
});

const About = () => {
    return (
        <section id="about" className="h-full mb-20 mainBody contentWidth">
            <div className="grid grid-cols-[2fr,1fr] items-center place-items-end">
                <div className="flex  flex-col align-center">
                    <h1
                        className={`text-left text-4xl mb-10 font-semibold headingClass w-full`}
                    >
                        About Me
                    </h1>
                    <p
                        className={` items-right text-justify text-lg font-normal text-slate-800 w-full`}
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
                </div>
                <section className="flex align-center ">
                    <div className={`${styles.box}`}>
                        <Image
                            className={styles.profileImage}
                            src="/assets/images/profile-image.jpg"
                            alt="Profile image"
                            width={600}
                            height={600}
                        />
                    </div>
                </section>
            </div>
        </section>
    );
};

export default About;

import IsoTechStack from "@components/IsoTechStack/IsoTechStack";
import { Inter, Roboto } from "next/font/google";
const inter = Inter({
    subsets: ["latin"],
    weight: ["100", "300", "400", "500", "700"],
});

const About = () => {
    return (
        <section id="about" className="h-full mb-20 mainBody ">
            <h1
                className={`text-right text-4xl mb-10 font-semibold headingClass`}
            >
                About Me
            </h1>
            <div className="flex flex-row  justify-between ">
                <section className="relative -top-[50px] ">
                    <h2 className="text-white relative -top-10 text-lg font-medium">
                        Tech Stack
                    </h2>
                    <IsoTechStack />
                </section>
                <p
                    className={` text-justify text-lg font-normal text-white max-w-[60%]`}
                >
                    I&apos;m on a journey to refine my skills and make a mark in
                    the digital world. I loves to bring ideas to life through
                    captivating interfaces. With a blend of artistic flair and
                    technical expertise, I specialize in crafting visually
                    stunning and user-friendly websites With a solid foundation
                    in HTML, CSS, and JavaScript, TypeScript and frameworks like
                    React, Next, Tailwind, and SCSS, I&apos;m eager to showcase
                    my projects and demonstrate my potential.&nbsp;
                </p>
            </div>
        </section>
    );
};

export default About;

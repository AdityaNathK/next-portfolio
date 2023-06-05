import { Inter, Roboto } from "next/font/google";
const inter = Inter({
    subsets: ["latin"],
    weight: ["100", "300", "400", "500", "700"],
});

const About = () => {
    return (
        <section id="about" className="h-full mb-20">
            <h1
                className={`text-center text-4xl mb-10 font-semibold headingClass`}
            >
                About Me
            </h1>
            <div>
                {/* As a Junior Front-End Developer, I possess an impressive arsenal
                of skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I
                excel in designing and maintaining responsive websites that
                offer a smooth user experience. My expertise lies in crafting
                dynamic, engaging interfaces through writing clean and optimized
                code and utilizing cutting-edge development tools and
                techniques. I am also a team player who thrives in collaborating
                with cross-functional teams to produce outstanding web
                applications. */}
                <p
                    className={`${inter.className} text-base text-justify font-small`}
                >
                    I&apos;m on a journey to refine my skills and make a mark in
                    the digital world. With a solid foundation in HTML, CSS, and
                    JavaScript, TypeScript and frameworks like React, Next,
                    Tailwind, and SCSS, I&apos;m eager to showcase my projects
                    and demonstrate my potential.&nbsp;
                    {/* I loves to bring ideas to life through
                                captivating interfaces. With a blend of artistic
                                flair and technical expertise, I specialize in
                                crafting visually stunning and user-friendly
                                websites */}
                    In this portfolio, you&apos;ll find a collection of my work
                    that highlights my dedication to creating clean and
                    intuitive user interfaces. From responsive designs to
                    interactive elements, each project represents my continuous
                    learning and growth as a front-end developer.
                </p>
            </div>
        </section>
    );
};

export default About;

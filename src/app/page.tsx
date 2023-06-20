import Image from "next/image";
import Navigation from "@components/Header/Navigation";
import About from "@components/Body/About/About";
import Contact from "@components/Body/Contact/Contact";
import Projects from "@components/Body/Projects";
import Landing from "@components/Body/Landing/Landing";
import Footer from "@components/Footer/Footer";
import TechStack from "@components/TechStack/TechStack";

export default function Home() {
    return (
        <main>
            <div className="dark:bg-slate-700 main"></div>
            <div className="dark:bg-purple-800  gradient"></div>
            <Navigation />
            <Landing />
            <About />
            <TechStack />
            <Projects />
            <Contact />
            <Footer />
        </main>
    );
}

/* <Head>
                <script
                    src="https:/kit.fontawesome.com/a076d05399.js"
                    defer
                ></script>
            </Head>
            <body>
                <div className="main"></div>
                <div className="gradient"></div>
                <Main />
                <NextScript />
            </body> */

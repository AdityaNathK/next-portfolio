import Image from "next/image";
import Navigation from "@components/Header/Navigation";
import About from "@components/Body/About/About";
import Contact from "@components/Body/Contact/Contact";
import Projects from "@components/Body/Projects";
import Landing from "@components/Body/Landing/Landing";
import Footer from "@components/Footer/Footer";
import TechStack from "@components/TechStack/TechStack";
import IsoTechStack from "@components/TechStack/IsoTechStack/IsoTechStack";

export default function Home() {
    return (
        <main>
            <div className="dark:bg-[#332a43] main"></div>
            <div className="dark:bg-[#5c4d76]  gradient"></div>
            <Navigation />
            <Landing />
            <About />
            <Projects />
            <Contact />
            <Footer />
        </main>
    );
}

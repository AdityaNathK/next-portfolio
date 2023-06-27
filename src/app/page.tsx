import { NextPage } from "next";
import Navigation from "@/src/components/Header/Navigation";
import About from "@/src/components/Body/About/About";
import Contact from "@/src/components/Body/Contact/Contact";
import Projects from "@/src/components/Body/Projects";
import Landing from "@/src/components/Body/Landing/Landing";
import Footer from "@/src/components/Footer/Footer";

const Home: NextPage = () => {
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
};

export default Home;

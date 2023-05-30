import { Fira_Code } from "next/font/google";
import Navigation from "@components/Header/Navigation";
import About from "@components/Body/About";
import Contact from "@components/Body/Contact";
import Projects from "@components/Body/Projects";
import Landing from "@components/Body/Landing";

const firaCode = Fira_Code({ subsets: ["latin"] });

export default function Home() {
    return (
        <>
            <Navigation />
            <main className={`flex flex-col ${firaCode.className}`}>
                <div className="z-10 flex flex-col h-full max-w-5xl px-10 mr-auto ml-auto">
                    <Landing />
                    <About />
                    <Projects />
                    <Contact />
                </div>
            </main>
            {/* <Footer/> */}
        </>
    );
}

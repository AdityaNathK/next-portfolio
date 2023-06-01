import Navigation from "@components/Header/Navigation";
import About from "@components/Body/About";
import Contact from "@components/Body/Contact";
import Projects from "@components/Body/Projects";
import Landing from "@components/Body/Landing";
import Construction from "@components/Construction";

const pageSwitch = false;

export default function Home() {
    return (
        <>
            {pageSwitch ? (
                <div>
                    <Navigation />
                    <div className="flex flex-col">
                        <div className="z-10 flex flex-col h-full max-w-5xl px-10 mr-auto ml-auto">
                            <Landing />
                            <About />
                            <Projects />
                            <Contact />
                        </div>
                    </div>
                    {/* <Footer/> */}
                </div>
            ) : (
                <Construction />
            )}
        </>
    );
}

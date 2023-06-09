import { useEffect, useState } from "react";

import Navigation from "@components/Header/Navigation";
import About from "@components/Body/About";
import Contact from "@components/Body/Contact/Contact";
import Projects from "@components/Body/Projects";
import Landing from "@components/Body/Landing/Landing";
import Construction from "@components/UnderConstruction/UnderConstruction";
import Footer from "@components/Footer/Footer";
import GithubCat from "@components/GithubCat/GithubCat";

const pageSwitch = false;

export default function Home() {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            setPosition({ x: event.pageX, y: event.pageY });
        };

        document.addEventListener("mousemove", handleMouseMove);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div>
            <div className="">
                {/* <div
                    id="blob"
                    style={{
                        position: "absolute",
                        left: position.x,
                        top: position.y,
                    }}
                ></div> */}
                <Navigation />
                <div className="mainBody">
                    <Landing />
                    <About />
                    <Projects />
                    <Contact />
                </div>

                <Footer />
            </div>
        </div>
    );
}

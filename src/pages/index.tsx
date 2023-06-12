import { useEffect, useState } from "react";

import Navigation from "@components/Header/Navigation";
import About from "@components/Body/About/About";
import Contact from "@components/Body/Contact/Contact";
import Projects from "@components/Body/Projects";
import Landing from "@components/Body/Landing/Landing";
import Footer from "@components/Footer/Footer";
import IsoTechStack from "@components/IsoTechStack/IsoTechStack";
import ScrollIndicator from "@components/ScrollIndicator/ScrollIndicator";

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

    const pageSwitch = false;

    return (
        <div>
            {pageSwitch ? (
                <ScrollIndicator />
            ) : (
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
                    <Landing />
                    <div className="z-20 relative">
                        <About />
                    </div>
                    <Projects />
                    <Contact />

                    <Footer />
                </div>
            )}
        </div>
    );
}

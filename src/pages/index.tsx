import { useEffect, useState } from "react";

import Navigation from "@components/Header/Navigation";
import About from "@components/Body/About/About";
import Contact from "@components/Body/Contact/Contact";
import Projects from "@components/Body/Projects";
import Landing from "@components/Body/Landing/Landing";
import Footer from "@components/Footer/Footer";
import ScrollIndicator from "@components/ScrollIndicator/ScrollIndicator";
import TechStack from "@components/TechStack/TechStack";

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
                <div>
                    <div className="z-20 relative">
                        <Navigation />
                        <Landing />
                        <About />
                        <TechStack />
                        <Projects />
                        <Contact />
                        <Footer />
                    </div>
                </div>
            )}
        </div>
    );
}

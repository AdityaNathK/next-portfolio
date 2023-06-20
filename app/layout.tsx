import "@/styles/globals.css";
import { Rajdhani } from "next/font/google";
import Navigation from "@components/Header/Navigation";
import About from "@components/Body/About/About";
import Contact from "@components/Body/Contact/Contact";
import Projects from "@components/Body/Projects";
import Landing from "@components/Body/Landing/Landing";
import Footer from "@components/Footer/Footer";
import TechStack from "@components/TechStack/TechStack";
import ScrollIndicator from "@components/ScrollIndicator/ScrollIndicator";

const rajdhani = Rajdhani({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
    title: "Aditya Nath",
    description: "Welcome to Aditya Nath Portfolio",
};

export default function RootLayout({
    // Layouts must accept a children prop.
    // This will be populated with nested layouts or pages
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={rajdhani.className}>
                <div className="main"></div>
                <div className="gradient"></div>
                <Navigation />
                {children}
            </body>
        </html>
    );
}

"use client";
import Link from "next/link";
import Logo from "@components/Header/Logo";
import { useRouter } from "next/router";
import useTheme from "@components/hooks/useTheme";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import GithubCat from "@components/GithubCat/GithubCat";

type NavProps = {
    href: string;
    title: string;
    className: string;
    onScroll: boolean;
    isButton: boolean;
};

export const CustomLink = (props: NavProps) => {
    const { href, title, className, onScroll, isButton } = props;
    const router = useRouter();
    const hrefLink = router.asPath != "/" ? router.asPath.slice(1) : "/";

    return (
        <Link
            href={href}
            scroll={onScroll}
            className={
                isButton
                    ? `${className}`
                    : `${className} relative group ${
                          href === hrefLink ? "navLinksActive" : "navLinks"
                      }
            `
            }
        >
            {title}
        </Link>
    );
};
const Navigation = () => {
    const [mode, toggleMode] = useTheme();
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const isTop = window.scrollY < 45;
            setIsScrolled(!isTop);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <>
            <header
                className={`${
                    isScrolled ? "bg-white shadow-md" : ""
                } sticky top-0 z-30 navHeader`}
            >
                <GithubCat />
                <div className="flex justify-between items-center max-w-[1440px] mx-auto pt-[15px] pb-[15px] px-[8rem] font-semibold text-lg">
                    <Logo />
                    <nav className="flex gap-4">
                        <CustomLink
                            isButton={false}
                            href="/"
                            className=""
                            title="Home"
                            onScroll={true}
                        />

                        <CustomLink
                            isButton={false}
                            href="#about"
                            className=""
                            title="About"
                            onScroll={true}
                        />

                        <CustomLink
                            isButton={false}
                            href="#portfolio"
                            className=""
                            title="Portfolio"
                            onScroll={true}
                        />
                    </nav>
                    <nav className="flex flex-row justify-stretch gap-10">
                        <button
                            type="button"
                            className="bg-red-400 text-white rounded hover:bg-white hover:text-black px-2"
                        >
                            <CustomLink
                                isButton={true}
                                href="#contact"
                                className=""
                                title="Contact"
                                onScroll={true}
                            />
                        </button>
                        <button
                            onClick={() =>
                                (
                                    toggleMode as React.Dispatch<
                                        React.SetStateAction<string>
                                    >
                                )(mode === "light" ? "dark" : "light")
                            }
                            className="min-w-[18px]"
                        >
                            {mode === "dark" ? (
                                <FontAwesomeIcon icon={faSun} />
                            ) : (
                                <FontAwesomeIcon icon={faMoon} />
                            )}
                        </button>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default Navigation;

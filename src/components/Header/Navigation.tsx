"use client";
import Link from "next/link";
import Logo from "@components/Header/Logo";
import useTheme from "@components/hooks/useTheme";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import GithubCat from "@components/GithubCat/GithubCat";
import GithubCatDark from "@components/GithubCat/GithubCatDark";

type NavProps = {
    href: string;
    title: string;
    className: string;
    onScroll: boolean;
    isButton: boolean;
};

export const CustomLink = (props: NavProps) => {
    const { href, title, className, onScroll, isButton } = props;
    const handleScroll = (
        e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ) => {
        // first prevent the default behavior
        e.preventDefault();
        // get the href and remove everything before the hash (#)
        const href = e.currentTarget.href;
        const targetId = href.replace(/.*\#/, "");
        // get the element by id and use scrollIntoView
        const elem = document.getElementById(targetId);
        elem?.scrollIntoView({
            behavior: "smooth",
        });
    };
    return (
        <Link
            href={href}
            scroll={onScroll}
            className={
                isButton
                    ? `${className}`
                    : `${className} relative navLinks  
                      dark:text-slate-200
            `
            }
            onClick={handleScroll}
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
                    isScrolled ? "bg-white shadow-md dark:bg-[#332a43]" : ""
                } sticky top-0 z-30 navHeader`}
            >
                {(mode === "dark" && <GithubCatDark />) || <GithubCat />}

                <div className="flex justify-between items-center  pt-[15px] pb-[15px] px-[8rem] font-semibold text-[#332a43] text-lg contentWidth">
                    <Logo />
                    <nav className="flex justfy-between gap-20">
                        <CustomLink
                            isButton={false}
                            href="#home"
                            className=""
                            title="Home"
                            onScroll={false}
                        />

                        <CustomLink
                            isButton={false}
                            href="#about"
                            className=""
                            title="About"
                            onScroll={false}
                        />

                        <CustomLink
                            isButton={false}
                            href="#portfolio"
                            className=""
                            title="Portfolio"
                            onScroll={false}
                        />
                    </nav>
                    <nav className="flex flex-row justify-stretch gap-10">
                        <button
                            type="button"
                            className="bg-red-400 text-slate-200 rounded hover:bg-sky-600 dark:bg-sky-500 dark:hover:bg-red-400 hover:text-slate-200 
                            dark:hover:text-white px-2"
                        >
                            <CustomLink
                                isButton={true}
                                href="#contact"
                                className=""
                                title="Contact"
                                onScroll={false}
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
                                <FontAwesomeIcon
                                    icon={faSun}
                                    className=" dark:text-slate-200 dark:hover:text-sky-400 "
                                />
                            ) : (
                                <FontAwesomeIcon
                                    icon={faMoon}
                                    className="dark:text-slate-200 text-[#332a43] hover:text-sky-600"
                                />
                            )}
                        </button>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default Navigation;

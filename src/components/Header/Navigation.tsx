"use client";
import Link from "next/link";
import Logo from "@components/Header/Logo";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type NavProps = {
    href: string;
    title: string;
    className: string;
    onScroll: boolean;
};

export const CustomLink = (props: NavProps) => {
    const { href, title, className, onScroll } = props;
    const router = useRouter();
    const hrefLink = router.asPath != "/" ? router.asPath.slice(1) : "/";

    return (
        <Link
            href={href}
            scroll={onScroll}
            className={`${className} relative group ${
                href === hrefLink ? "navLinksActive" : "navLinks"
            }
            `}
        >
            {title}
        </Link>
    );
};
const Navigation = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const isTop = window.scrollY < 45;
            setIsScrolled(!isTop);
        };
        window.addEventListener("scroll", handleScroll);
    }, []);
    return (
        <header
            className={`${
                isScrolled ? "bg-white shadow-md" : ""
            } sticky top-0 z-30 navHeader flex justify-between items-center w-full mb-10 pt-[15px] pb-[15px] px-10 font-semibold text-lg`}
        >
            <Logo />

            <nav className="flex gap-4">
                <CustomLink
                    href="/"
                    className=""
                    title="Home"
                    onScroll={true}
                />

                <CustomLink
                    href="#about"
                    className=""
                    title="About"
                    onScroll={true}
                />

                <CustomLink
                    href="#projects"
                    className=""
                    title="Projects"
                    onScroll={true}
                />
            </nav>
            <CustomLink
                href="#contact"
                className=""
                title="Contact"
                onScroll={true}
            />
        </header>
    );
};

export default Navigation;

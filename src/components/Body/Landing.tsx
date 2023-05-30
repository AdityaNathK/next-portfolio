import TechStackBadge from "@components/Body/TechStackBadge";
import { htmlLogo, tsLogo, nextLogo } from "@utils/fa-assets";
import Image from "next/image";
import Link from "next/link";
const Landing = () => {
    return (
        <div className="container bg-slate-200 flex flex-col justify-center">
            <section
                id="landing"
                className=" flex items-center gap-10 justify-center relative h-[32rem] content text-black z-10"
            >
                <section>
                    <h2 className="text-2xl w-[40rem] my-10">
                        <span className="text-4xl">
                            Hi I&apos;m Aditya Nath
                        </span>
                        <br />A Passionate Front-end Developer based in
                        Adelaide, Australia
                    </h2>
                    <section className="mx-auto align-center flex justify-between w-[20rem]">
                        <Link href="github">Github</Link>
                        <Link href="linkedin">LinkedIn</Link>
                    </section>
                </section>

                <div className="w-96 h-[15rem] bg-slate-800">
                    <Image
                        src="/assets/images/html-logo.svg"
                        alt="html-logo"
                        width={50}
                        height={50}
                    />
                </div>
            </section>

            <TechStackBadge
                tooltip="HTML"
                imageSrc={htmlLogo}
                altText="HTML Badge"
            />
            <section className="flex mx-auto">
                Tech Stack [<div>HTML</div>
                <div>CSS</div>
                <div>JS</div>
                <div>ReactJs</div>
                <div>NextJs</div>]
            </section>
        </div>
    );
};

export default Landing;

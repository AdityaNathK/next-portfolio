import {
    faGithub,
    faLinkedin,
    faNpm,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Footer = () => {
    return (
        <section className="py-10 px-36 bg-slate-800 mt-5 absolute w-full text-xl font-semibold z-10 text-white">
            <div className="flex flex-row items-center justify-between contentWidth mainBody">
                <p className="w-full">
                    Copyright © 2023. All rights are reserved to Aditya Nath
                    Kalla
                </p>
                <section className="flex gap-5 align-left">
                    <Link href="https://github.com/AdityaNathK" target="_blank">
                        <FontAwesomeIcon
                            className={` px-2 py-2 hover:bg-white rounded-[50%] hover:text-[#333]`}
                            icon={faGithub}
                        />
                    </Link>
                    <Link
                        href="https://www.linkedin.com/in/aditya-nath-kalla/"
                        target="_blank"
                    >
                        <FontAwesomeIcon
                            className={` px-2 py-2 hover:bg-white rounded-[50%] hover:text-[#0072b1]`}
                            icon={faLinkedin}
                        />
                    </Link>
                    <Link
                        href="https://www.npmjs.com/~adityanath"
                        target="_blank"
                    >
                        <FontAwesomeIcon
                            className={`px-2 py-2 hover:bg-white rounded-[50%] hover:text-[#cb3837]`}
                            icon={faNpm}
                        />
                    </Link>
                </section>
            </div>
        </section>
    );
};

export default Footer;

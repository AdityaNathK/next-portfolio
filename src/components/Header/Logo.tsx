import Link from "next/link";

const Logo = () => {
    return (
        <div className="flex items-center justify-center text-4xl  text-black rounded dark:text-slate-200">
            <Link href="/" className="logo">
                [AN]
            </Link>
        </div>
    );
};

export default Logo;

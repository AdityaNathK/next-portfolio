import Link from "next/link";

const Logo = () => {
    return (
        <div className="flex items-center justify-center text-4xl  text-black rounded">
            <Link href="/" className="logo">
                [AN]
            </Link>
        </div>
    );
};

export default Logo;

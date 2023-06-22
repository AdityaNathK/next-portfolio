import Link from "next/link";

const Logo = () => {
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
        <div className="flex items-center justify-center text-4xl  text-black rounded dark:text-slate-200">
            <Link href="#home" className="logo" onClick={handleScroll}>
                [AN]
            </Link>
        </div>
    );
};

export default Logo;

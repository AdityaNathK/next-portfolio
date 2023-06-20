import Construction from "@components/UnderConstruction/UnderConstruction";

const maskContent = true;
const Portfolio = () => {
    return (
        <div>
            {maskContent ? (
                <section
                    id="portfolio"
                    className="h-full mb-20 contentWidth mainBody"
                >
                    <h1 className="text-left text-4xl mb-10 font-semibold headingClass dark:text-sky-400">
                        Portfolio
                    </h1>
                    <p className="text-lg font-normal mb-10 dark:text-slate-200">
                        In this portfolio, you&apos;ll find a collection of my
                        work that highlights my dedication to creating clean and
                        intuitive user interfaces. From responsive designs to
                        interactive elements, each project represents my
                        continuous learning and growth as a front-end developer.
                    </p>
                    <div className="h-[400px]">
                        <Construction />
                    </div>
                </section>
            ) : (
                <section id="projects" className="h-96 mb-20">
                    <>
                        <p>Each project is a unique piece of development</p>
                    </>
                </section>
            )}
        </div>
    );
};

export default Portfolio;

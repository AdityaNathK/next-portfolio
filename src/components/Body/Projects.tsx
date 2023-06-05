import Construction from "@components/UnderConstruction/UnderConstruction";

const maskContent = true;
const Projects = () => {
    return (
        <div>
            {maskContent ? (
                <section id="projects" className="h-full mb-10">
                    <h1 className="text-center text-4xl mb-10 font-semibold">
                        Portfolio
                    </h1>
                    <Construction />
                </section>
            ) : (
                <section id="projects" className="h-96 mb-20">
                    <>
                        <p>Each project is a unique piece of development 🧩</p>
                    </>
                </section>
            )}
        </div>
    );
};

export default Projects;

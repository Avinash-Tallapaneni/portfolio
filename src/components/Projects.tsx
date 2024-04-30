import { siteConfig } from "../data/site-config";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section className="flex flex-col w-full mx-auto mb-20 max-w-7xl z-100 ">
      <div className="flex items-center justify-start w-full gap-4">
        <span className="select-none w-full h-[1px] bg-gradient-to-r from-darkNavy to-blue"></span>

        <div className="text-4xl text-transparent uppercase select-none text-nowrap bg-gradient-to-r from-blue to-blue/50 text-clip bg-clip-text dancing-font">
          Projects
        </div>
        <span className="select-none w-full h-[1px] bg-gradient-to-r from-blue to-darkNavy"></span>
      </div>
      <div className="grid w-full grid-cols-1 gap-12 mx-auto mt-10 mb-20 bg-transparent md:grid-cols-2 lg:grid-cols-3 ">
        {siteConfig.projectDetails.map((project, index) => (
          <ProjectCard key={index} index={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;

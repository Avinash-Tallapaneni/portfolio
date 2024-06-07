import { siteConfig } from "../data/site-config";
import SectionTitle from "../shared/SectionTitle";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-start flex-grow w-full h-full max-w-6xl gap-4 px-8 py-4 mx-auto mb-10 font-normal md:items-start xl:px-0 md:py-14 "
    >
      <SectionTitle message="Projects" />

      <div className="grid w-full grid-cols-1 gap-12 mx-auto my-10 bg-transparent md:grid-cols-2 lg:grid-cols-3 ">
        {siteConfig.projectDetails.map((project, index) => (
          <ProjectCard key={index} index={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;

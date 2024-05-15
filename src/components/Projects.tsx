import { siteConfig } from "../data/site-config";
import SectionTitle from "../shared/SectionTitle";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col w-full max-w-6xl gap-4 mx-auto mb-20 z-100 "
    >
      <SectionTitle message="Projects" />

      <div className="grid w-full grid-cols-1 gap-12 mx-auto mt-10 mb-20 bg-transparent md:grid-cols-2 lg:grid-cols-3 ">
        {siteConfig.projectDetails.map((project, index) => (
          <ProjectCard key={index} index={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;

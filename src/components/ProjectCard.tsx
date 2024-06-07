import { useState } from "react";
import { ProjectDetails, techStackDetails } from "../data/site-config";

const ProjectCard = ({
  project,
  index,
}: {
  project: ProjectDetails;
  index: number;
}) => {
  const { url, image, title, description, techStack } = project;
  const [isHovered, setIsHovered] = useState(false);

  const newURL = new URL(url);

  return (
    <div
      className="flex-grow p-2 rounded-md shadow-md select-none project bg-zeus/10 dark:bg-turquoise/10 ring-1 ring-zeus/40 dark:ring-turquoise/40"
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-delay={200 + 100 * (index + 1)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a
        href={url}
        target="_blank"
        className="flex flex-col items-center justify-between h-full gap-2"
      >
        <div className="flex items-center justify-between w-full gap-4 ">
          <div className="flex items-center justify-between gap-1 max-w-12">
            <div
              className={` w-2 h-2 rounded-full ${
                isHovered ? "bg-red-400" : "bg-zeus/50"
              }`}
            ></div>
            <div
              className={` w-2 h-2 rounded-full ${
                isHovered ? "bg-yellow-400" : "bg-zeus/50"
              }`}
            ></div>
            <div
              className={` w-2 h-2 rounded-full ${
                isHovered ? "bg-green-400" : "bg-zeus/50"
              }`}
            ></div>
          </div>
          <div className="flex items-center justify-center flex-1 px-4 py-1 text-[0.75rem] md:text-sm rounded-md text-nowrap bg-zeus/10 dark:bg-turquoise/10">
            <span>{newURL.hostname}</span>
          </div>

          <div className="flex items-center justify-end ">
            <svg
              className={` ${isHovered ? "text-turquoise" : " text-zeus"}`}
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.333 6.33333L17.333 1M17.333 1H11.9997M17.333 1L10.2219 8.11111M7.55523 2.77778H5.59967C4.1062 2.77778 3.35946 2.77778 2.78903 3.06843C2.28727 3.32409 1.87932 3.73204 1.62366 4.2338C1.33301 4.80423 1.33301 5.55097 1.33301 7.04444V12.7333C1.33301 14.2268 1.33301 14.9735 1.62366 15.544C1.87932 16.0457 2.28727 16.4537 2.78903 16.7094C3.35946 17 4.1062 17 5.59967 17H11.2886C12.782 17 13.5288 17 14.0992 16.7094C14.601 16.4537 15.0089 16.0457 15.2646 15.544C15.5552 14.9735 15.5552 14.2268 15.5552 12.7333V10.7778"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>{" "}
          </div>
        </div>

        <div className=" w-full h-full overflow-hidden flex-1 max-h-[25rem] mt-0">
          <img
            src={image.src}
            alt={image.alt}
            className="object-cover w-full h-full duration-700 rounded-md hover:scale-125"
          />
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-xl text-zeus/80 dark:text-turquoise/80">
            {title.split(":").map((titleSplit, index) => {
              return (
                <span key={index}>
                  {index === 0 ? (
                    <span className="font-bold">{titleSplit} : </span>
                  ) : (
                    <span className="text-lg ">{titleSplit}</span>
                  )}
                </span>
              );
            })}{" "}
          </h3>
          <div className="text-sm">
            <p>{description}</p>
          </div>
          <div className="flex items-center justify-start gap-3 my-2">
            {techStack.map((tech) => {
              const techDetails = techStackDetails.find((details) =>
                details.name.toLowerCase().includes(tech.toLowerCase())
              );
              if (techDetails) {
                return (
                  <div className="relative group" key={techDetails.name}>
                    <img
                      key={techDetails.name}
                      src={techDetails.image.src}
                      alt={techDetails.image.alt}
                      className="object-cover w-8 h-8 p-1 rounded-md ring-1 ring-zeus/40 dark:ring-turquoise/40"
                    />

                    <div className="absolute scale-0 left-1/2 bottom-full group-hover:scale-100 bg-cream text-zeus ">
                      <div className="absolute z-10 flex flex-col px-4 py-2 mb-2 font-semibold -translate-x-1/2 rounded-md techStackShadow bottom-full bg-cream w-52">
                        <span className="text-lg ">{techDetails.name}</span>
                        <span className="text-sm font-semibold ">
                          {techDetails.description}
                        </span>
                      </div>
                      <span className="absolute z-0 w-6 h-6 transform rotate-45 -translate-x-1/2 bg-cream left-1/2 -bottom-0"></span>
                    </div>
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;

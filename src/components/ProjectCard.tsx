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

  return (
    <div
      className="z-30 flex-grow p-2 text-white rounded-md select-none shadow-card project bg-darkNavy/50 ring-2 ring-border"
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-delay={200 + 100 * (index + 1)}
    >
      <a
        href={url}
        target="_blank"
        className="flex flex-col items-center justify-between h-full gap-2"
      >
        <div
          className="flex items-center justify-between w-full gap-4 "
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="flex items-center justify-between gap-2 max-w-12">
            <div
              className={` w-2 h-2 rounded-full ${
                isHovered ? "bg-red-400" : "bg-blue/50"
              }`}
            ></div>
            <div
              className={` w-2 h-2 rounded-full ${
                isHovered ? "bg-yellow-400" : "bg-blue/50"
              }`}
            ></div>
            <div
              className={` w-2 h-2 rounded-full ${
                isHovered ? "bg-green-400" : "bg-blue/50"
              }`}
            ></div>
          </div>
          <div className="flex items-center justify-center flex-1 px-4 py-1 text-sm rounded-md text-nowrap bg-blue/10">
            <span>{url}</span>
          </div>

          <div className="flex items-center justify-end ">
            <svg
              className={` ${isHovered ? "text-blue" : "text-aliceBlue/50"}`}
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

        <div className=" w-full h-full overflow-hidden flex-1 max-h-[25rem] mt-2">
          <img
            src={image.src}
            alt={image.alt}
            className="object-cover w-full h-full duration-700 rounded-md hover:scale-125"
          />
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-xl text-blue/80">
            {title.split(":").map((titleSplit, index) => {
              return (
                <>
                  {index === 0 ? (
                    <span className="font-bold">{titleSplit} : </span>
                  ) : (
                    <span className="text-lg ">{titleSplit}</span>
                  )}
                </>
              );
            })}{" "}
          </h3>
          <div className="text-sm text-aliceBlue">
            <p>{description}</p>
          </div>
          <div className="flex items-center justify-start gap-3 my-2">
            {techStack.map((tech, index) => {
              const techDetails = techStackDetails.find((details) =>
                details.name.toLowerCase().includes(tech.toLowerCase())
              );
              if (techDetails) {
                return (
                  <div className="relative group">
                    <img
                      key={techDetails.name}
                      src={techDetails.image.src}
                      alt={techDetails.image.alt}
                      className="object-cover w-6 h-6 rounded-md"
                    />

                    <div className="absolute flex flex-col mb-4 -translate-x-1/2 rounded-md opacity-0 group-hover:opacity-100 bg-blue hue-rotate-15 bottom-full left-1/2 w-52 ">
                      <p className="px-4 py-2 text-sm">{techDetails.description}</p>
                      <span className="absolute w-6 h-6 transform rotate-45 -translate-x-1/2 bg-blue -z-10 left-1/2 -bottom-2"></span>
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

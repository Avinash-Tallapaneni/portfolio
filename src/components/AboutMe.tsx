import { techStackDetails } from "../data/site-config";
import Typewriter from "typewriter-effect";
import TextHighLight from "../shared/TextHighLight";
import SectionTitle from "../shared/SectionTitle";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-start flex-grow w-full h-full max-w-6xl gap-4 px-8 py-4 mx-auto mb-10 font-normal md:items-start xl:px-0 md:py-14 "
    >
      <SectionTitle message="About Me" />

      <div className="flex justify-center w-full h-full mx-auto mt-6 lg:justify-between lg:items-center md:items-start lg:max-w-6xl md:max-w-4xl sm:px-20 md:p-0 ">
        <div className="flex flex-col w-full gap-4 text-lg lg:max-w-2xl ">
          <div className="flex flex-col items-center gap-2 md:flex-row">
            <span className="text-nowrap">I'm a seasoned</span>
            <span className="flex items-end justify-between gap-1 px-4 py-1 font-semibold rounded-md text-nowrap shadow-typeWriter bg-gradient-to-b from-zeus/5 to-zeus/10 bg-cream w-fit text-zeus dark:from-firefly/5 dark:to-firefly/10 dark:bg-firefly/5 dark:text-turquoise">
              <span> {"{"} </span>
              <Typewriter
                options={{
                  strings: [
                    "Software Engineer",
                    "Frontend Developer",
                    "No Code Developer",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
              <span> {"}"} </span>
            </span>
          </div>
          <span>
            with a love for creating outstanding user experiences. My goal is to
            create &nbsp;
            <TextHighLight message="user-friendly," />
            &nbsp;
            <TextHighLight message="aesthetically pleasing" />
            &nbsp; and &nbsp;
            <TextHighLight message="captivating web" /> interfaces.
          </span>

          <p>
            Thriving in the fast-paced environment of{" "}
            <TextHighLight message="startup" />
            and contribute at every level of growth. I always keep up with the
            newest frameworks and technologies because I'm a lifelong learner.
            This excitement motivates me to apply creative solutions for the
            tasks I do.
          </p>
          <span>
            I take on multiple roles at a startup, working closely with teams
            from idea to launch. In order to successfully develop products, I
            value collaboration, open communication, and working with product
            managers, designers, and stakeholders.
          </span>
          <div className="flex flex-col items-start justify-between gap-4 pb-4 mt-4">
            {" "}
            <span className="">
              {" "}
              Here are a few technologies I've been working with recently:
            </span>
            <div className="flex items-center flex-wrap  gap-2 p-2 mx-auto my-4  lg:m-0   rounded-lg ring-1 ring-zeus/40 dark:ring-turquoise/40  w-fit shadow-[ box-shadow:rgba(255, 255, 255, 0.17) 0px 0px 0px 1px inset]">
              {techStackDetails.map((stack) => {
                if (stack.name.toLowerCase() !== "stripe") {
                  return (
                    <div
                      key={stack.name}
                      className="relative flex flex-col items-center w-6 h-6 p-0 transition-all rounded-md cursor-pointer lg:w-12 lg:h-12 group techStackDetails "
                    >
                      <img
                        src={stack.image.src}
                        alt={stack.image.alt}
                        className="object-contain w-full h-full"
                      />

                      <span className="absolute z-10 px-2 py-1 mx-1 text-sm font-normal scale-0 rounded-md group-hover:scale-100 text-cream bg-zeus dark:text-firefly dark:bg-turquoise -top-12 text-nowrap ">
                        {stack.name}
                        <span className="absolute w-2 h-2 rotate-45 -translate-x-1/2 -bottom-[0.125rem] -z-10 left-1/2 bg-zeus dark:bg-turquoise"></span>
                      </span>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>
        <div className="rounded-md relative  lg:w-[20rem]  md:w-[12rem] hidden lg:block ">
          <div className="w-full h-full overflow-hidden ">
            <img
              src="/assets/me_bgRemoved.png"
              alt=""
              className="object-contain w-full h-full border-2 rounded-md pointer-events-none bg-cream border-zeus/60 dark:border-turquoise "
            />
          </div>
          <span className="absolute w-[99%] h-[99%] bg-transparent -z-10 inset-4 rounded-md border-2 border-zeus/60 dark:border-turquoise "></span>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

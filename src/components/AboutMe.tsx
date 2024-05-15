import { techStackDetails } from "../data/site-config";
import Typewriter from "typewriter-effect";
import TextHighLight from "../shared/TextHighLight";
import SectionTitle from "../shared/SectionTitle";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="flex flex-col w-full max-w-6xl gap-4 mx-auto mb-20 font-normal z-100 "
    >
      <SectionTitle message="About Me" />

      <div className="flex items-center justify-start w-full h-full gap-20 mt-6">
        <div className="flex flex-col max-w-2xl gap-4 text-lg text-justify">
          <div className="flex items-center gap-2">
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
            create
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
            <div className="flex items-center  gap-2 p-2  rounded-lg ring-1 ring-zeus/40 dark:ring-turquoise/40  w-fit shadow-[ box-shadow:rgba(255, 255, 255, 0.17) 0px 0px 0px 1px inset]">
              {techStackDetails.map((stack) => {
                if (stack.name.toLowerCase() !== "stripe") {
                  return (
                    <div
                      key={stack.name}
                      className="relative flex flex-col items-center w-12 h-12 p-0 transition-all rounded-md cursor-pointer group techStackDetails "
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
        <div className="rounded-md relative w-[20rem] ">
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

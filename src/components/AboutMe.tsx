import { techStackDetails } from "../data/site-config";

const AboutMe = () => {
  return (
    <section className="flex flex-col w-full gap-4 mx-auto mb-20 max-w-7xl z-100 ">
      <div className="flex items-center justify-start w-full gap-4">
        <div className="text-4xl text-transparent uppercase select-none text-nowrap bg-gradient-to-r from-turquoise to-turquoise/50 text-clip bg-clip-text dancing-font">
          About Me
        </div>
        <span className="select-none w-full h-[1px] bg-gradient-to-r from-turquoise to-firefly"></span>
      </div>
      <div className="flex items-center justify-center w-full h-full gap-20 mt-12">
        <div className="flex flex-col max-w-2xl gap-4 text-lg">
          <p>
            I'm a seasoned web developer with a passion for crafting exceptional
            user experiences. My focus is on building clean, intuitive, and
            engaging web interfaces that resonate with users.
          </p>

          <p>
            Thriving in the fast-paced environment of{" "}
            <span className="inline-block capitalize cursor-pointer text-turquoise group ">
              {" "}
              startups{" "}
              <span className=" max-w-0 block group-hover:max-w-full transition-all duration-100 h-[0.25px] bg-turquoise"></span>
            </span>
            , I contribute across all stages of development. I'm a constant
            learner, staying updated with the latest frameworks and
            technologies. This enthusiasm fuels my desire to implement
            innovative solutions for the projects I work on.
          </p>

          <span>
            Working in a startup allows me to wear many hats. I collaborate
            closely with the team, tackling challenges from concept and design
            all the way to launch and beyond. Beyond the code, I value clear
            communication and collaboration. I believe in working alongside
            designers, product managers, and stakeholders to ensure a successful
            final product.
          </span>

          <div className="flex flex-col items-start justify-between gap-4 pb-4 mt-8">
            {" "}
            <span className="text-sm text-turquoise">
              {" "}
              Some of the technologies i worked with{" "}
            </span>
            <div className="flex items-center  gap-2 p-2  rounded-lg ring-1 w-fit shadow-[ box-shadow:rgba(255, 255, 255, 0.17) 0px 0px 0px 1px inset]">
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

                      <span className="absolute z-10 px-2 py-1 mx-1 text-sm font-bold scale-0 rounded-md group-hover:scale-100 text-firefly bg-turquoise -top-12 text-nowrap ">
                        {stack.name}
                        <span className="absolute w-2 h-2 rotate-45 -translate-x-1/2 -bottom-[0.125rem] -z-10 left-1/2 bg-turquoise"></span>
                      </span>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>
        <div className="rounded-md overflow-hidden   w-[25rem] ">
          <div className="relative w-full h-full">
            <img
              src="../src/assets/me_bgRemoved.png"
              alt=""
              className="object-contain w-full h-full pointer-events-none"
            />
            {/* <span className="absolute top-0 left-0 w-full h-full opacity-25 cursor-pointer bg-turquoise hover:opacity-0 "></span> */}
          </div>
        </div>
      </div>

    </section>
  );
};

export default AboutMe;

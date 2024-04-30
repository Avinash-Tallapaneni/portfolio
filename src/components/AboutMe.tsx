const AboutMe = () => {
  return (
    <section className="flex flex-col w-full gap-4 mx-auto mb-20 max-w-7xl z-100 ">
      <div className="flex items-center justify-start w-full gap-4">
        <div className="text-4xl text-transparent uppercase select-none text-nowrap bg-gradient-to-r from-blue to-blue/50 text-clip bg-clip-text dancing-font">
          About Me
        </div>
        <span className="select-none w-full h-[1px] bg-gradient-to-r from-blue to-darkNavy"></span>
      </div>
      <div className="flex items-center justify-start w-full h-full gap-20 mt-12">
        <div className="flex flex-col max-w-2xl gap-4 text-lg">
          <p>
            I'm a seasoned web developer with a passion for crafting exceptional
            user experiences. My focus is on building clean, intuitive, and
            engaging web interfaces that resonate with users.
          </p>

          <p>
            Thriving in the fast-paced environment of{" "}
            <span className="inline-block capitalize cursor-pointer text-blue group ">
              {" "}
              startups{" "}
              <span className=" max-w-0 block group-hover:max-w-full transition-all duration-100 h-[0.25px] bg-blue"></span>
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
        </div>
        <div className="rounded-md overflow-hidden  w-[25rem] ">
          <div className="relative w-full h-full">
            <img
              src="../src/assets/me_bgRemoved.png"
              alt=""
              className="object-contain w-full h-full"
            />
            <span className="absolute top-0 left-0 w-full h-full opacity-25 cursor-pointer hover:opacity-0 "></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

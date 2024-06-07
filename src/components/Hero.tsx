import { siteConfig } from "../data/site-config";
import HeroSquareLines from "../ui/icons/HeroSquareLines";
import Doodle from "../ui/icons/Doodle";
import Email from "../ui/icons/Email";
import ButtonFan from "../ui/icons/ButtonFan";

// import Typewriter from "typewriter-effect";

const Hero = ({ theme }: { theme: string }) => {
  const scrollToSection = (href: string) => {
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <main className="relative flex-grow w-full px-8 py-4 select-none xl:mb-10 m xl:px-0 md:py-8 text-zeus dark:text-turquoise ">
      <div className="flex flex-col items-center h-full gap-4 mx-auto lg:justify-start lg:items-start lg:max-w-6xl md:max-w-4xl sm:px-20 md:p-0 items-left ">
        <h1
          className="text-2xl tracking-widest text-start md:text-center lg:text-start md:max-w-2xl lg:max-w-3xl md:text-5xl xl:text-6xl "
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-delay="500"
        >
          {siteConfig.hero.motto}
        </h1>

        <div className="md:my-4">
          <p
            className="max-w-2xl text-base tracking-widest md:text-center lg:text-start md:text-xl text-zeus dark:text-turquoise/80"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-delay="750"
          >
            {siteConfig.hero.content}
          </p>
        </div>

        <div
          className="relative flex items-center justify-between gap-2 px-4 py-2 mt-0 text-base rounded-md cursor-pointer md:text-lg group text-nowrap w-fit ring-1 ring-zeus text-zeus hover:duration-500 hover:bg-zeus hover:text-cream dark:ring-turquoise dark:text-turquoise dark:hover:bg-turquoise dark:hover:text-firefly"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-delay="1000"
          onClick={() => scrollToSection("#contact")}
        >
          <Email
            className="w-6 h-6 rounded-lg dark:group-hover:bg-firefly group-hover:bg-cream "
            fill={theme === "dark" ? "#38DFBA" : "#151632"}
          />
          Let's Collaborate{" "}
          <ButtonFan
            fill={theme === "dark" ? "#38DFBA" : "#151632"}
            className="absolute w-8 h-8 -top-6 -right-6"
          />
          <div className="skew-12 select-none absolute inset-0 flex h-full w-full translate-x-[-110%] transform  justify-center pointer-events-none group-hover:translate-x-[100%] group-hover:duration-1000">
            <div className="relative w-8 h-full bg-cream/20 dark:bg-firefly/20"></div>
          </div>
        </div>

        <Doodle
          className="absolute  scale-[3]  pointer-events-none  opacity-5 xl:right-60 xl:top-40  right-25 top-32 md:translate-y-1/2 "
          fill={theme === "dark" ? "#38DFBA" : "#151632"}
        />
      </div>
      <HeroSquareLines
        fill={theme === "dark" ? "#38DFBA" : "#51377E"}
        className="absolute left-0 w-full h-screen scale-x-95 scale-y-95 pointer-events-none -translate-x-0 -bottom-0 "
      />
    </main>
  );
};

export default Hero;

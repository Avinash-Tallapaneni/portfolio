import { siteConfig } from "../data/site-config";
import HeroBackground from "/assets/square-lines.svg";
import Arrow from "/assets/arrow.svg";
import ButtonFan from "/assets/buttonfan.svg";

import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <main className="flex-grow w-full h-screen pt-10 select-none text-onahau dark:text-burntSienna ">
      <div className="flex flex-col justify-start lg:pt-6 h-[85%] gap-4 mx-auto lg:max-w-7xl md:max-w-4xl sm:px-20 md:p-0 items-left ">
        <h1
          className="text-2xl text-left text-nowrap"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-delay="500"
        >
          {siteConfig.hero.greeting}
        </h1>
        <div className="font-Dancing-Script">
          <h2
            className="flex items-center w-full lg:text-6xl md:text-5xl sm:text-3xl whitespace-nowrap"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-delay="750"
          >
            <span> I'm </span>
            <span className="relative mx-4 lg:text-8xl md:text-7xl sm:text-4xl text-nowrap text-turquoise dark:text-burntSienna">
              {siteConfig.hero.name}
              <img
                src={Arrow}
                className=" absolute scale-y-[1] rotate-[70deg] top-8 -right-40 w-52 pointer-events-none "
                alt="Arrow background svg"
              ></img>
            </span>
          </h2>
        </div>
        <div
          className="flex items-end justify-between gap-1 px-4 py-2 mt-2 text-2xl rounded-md shadow-typeWriter bg-gradient-to-b from-turquoise/5 to-turquoise/10 bg-onahau/5 w-fit text-turquoise dark:from-burntSienna/5 dark:to-burntSienna/10 dark:bg-onahau/5 dark:text-burntSienna"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-delay="1000"
        >
          <span className="text-3xl"> {"{"} </span>
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
          <span className="text-3xl"> {"}"} </span>
        </div>
        <div className="my-2">
          <p
            className="max-w-2xl text-lg text-onahau/80 dark:text-burntSienna/80 font-Lumanosimo"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-delay="1250"
          >
            {siteConfig.hero.content}
          </p>
        </div>

        <div
          className="relative px-4 py-2 mt-4 font-bold rounded-md cursor-pointer text-nowrap w-fit ring-1 ring-turquoise text-turquoise hover:bg-turquoise/15 dark:ring-burntSienna dark:text-burntSienna dark:hover:bg-burntSienna/15"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-delay="1500"
        >
          <a href="mailto:avinashtallapaneni@gmail.com">Connect with me</a>
          <img
            className="absolute w-8 h-8 -top-6 -right-6"
            src={ButtonFan}
            alt="ButtonFan background svg "
          />
        </div>

        <img
          src={HeroBackground}
          className="absolute top-0 left-0 w-full h-screen scale-x-[-1] pointer-events-none "
          alt="Hero background svg"
        ></img>
        {/* <img
          src={Arrow}
          className="absolute right-60 top-52 scale-y-[1] rotate-[70deg] w-52 pointer-events-none "
          alt="Arrow background svg"
        ></img> */}
      </div>
    </main>
  );
};

export default Hero;

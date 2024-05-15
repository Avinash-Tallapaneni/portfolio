import { siteConfig } from "../data/site-config";
import HeroSquareLines from "../ui/icons/HeroSquareLines";
import Doodle from "../ui/icons/Doodle";
import Email from "../ui/icons/Email";
import ButtonFan from "../ui/icons/ButtonFan";

// import Typewriter from "typewriter-effect";

const Hero = ({ theme }: { theme: string }) => {
  return (
    <main className="relative flex-grow w-full h-screen select-none py-14 text-zeus dark:text-turquoise ">
      <div className="flex flex-col justify-start h-full gap-4 mx-auto lg:max-w-6xl md:max-w-4xl sm:px-20 md:p-0 items-left ">
        <h1
          className="max-w-4xl text-6xl leading-tight text-left"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-delay="500"
        >
          {siteConfig.hero.motto}
        </h1>

        <div className="my-4">
          <p
            className="max-w-2xl text-2xl font-normal text-justify text-zeus dark:text-turquoise/80"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-delay="750"
          >
            {siteConfig.hero.content}
          </p>
        </div>

        <div
          className="relative px-4 py-2 mt-4 rounded-md cursor-pointer group text-nowrap w-fit ring-1 ring-zeus text-zeus hover:bg-zeus hover:text-cream dark:ring-turquoise dark:text-turquoise dark:hover:bg-turquoise dark:hover:text-firefly"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-delay="1000"
        >
          <a
            href="mailto:avinashtallapaneni@gmail.com"
            className="flex items-center justify-between gap-2 text-lg"
          >
            {/* <img className="w-6 h-6 " src={EmailSVG} alt="Email svg " /> */}
            <Email
              className="w-6 h-6 rounded-lg dark:group-hover:bg-firefly group-hover:bg-cream "
              fill={theme === "dark" ? "#38DFBA" : "#1C1816"}
            />
            Let's Collaborate{" "}
          </a>
          <ButtonFan
            fill={theme === "dark" ? "#38DFBA" : "#1C1816"}
            className="absolute w-8 h-8 -top-6 -right-6"
          />
        </div>

        <Doodle
          width="10rem"
          height="10rem"
          className="absolute scale-150 pointer-events-none opacity-10 right-60 top-60 "
          fill={theme === "dark" ? "#38DFBA" : "#1C1816"}
        />
      </div>
      <HeroSquareLines
        fill={theme === "dark" ? "#38DFBA" : "#1C1816"}
        className="absolute left-0 w-full h-screen scale-x-95 scale-y-95 pointer-events-none -translate-x-0 -bottom-0 "
      />
    </main>
  );
};

export default Hero;

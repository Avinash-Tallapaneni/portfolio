import { siteConfig } from "../data/site-config";
import "aos/dist/aos.css";

import Resume from "/assets/Avinash_Tallapaneni_Frontend_Resume.pdf";

import Headroom from "react-headroom";
import Sun from "/assets/sun.svg";
import Moon from "/assets/moon.svg";
import Talavin from "../ui/icons/Talavin";

interface HeaderProps {
  prevScrollPos: number;
  handleThemeToggle: () => void;
  theme: string;
}

const Header = ({ prevScrollPos, handleThemeToggle, theme }: HeaderProps) => {
  const shouldShowNavbar = prevScrollPos > 10;

  const scrollToSection = (href: string) => {
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Headroom
      className={` flex items-center justify-center select-none
      `}
      style={{
        width: "100%",
        margin: "auto",
        // padding: "1rem",
        backgroundColor: theme === "dark" ? "#151632" : "#F1F0EF",
        boxShadow: shouldShowNavbar
          ? theme === "dark"
            ? "0 1px 40px -15px  rgba(56, 223, 186, 0.2)"
            : "0 1px 40px -15px  rgba(9, 27, 40, 0.2)"
          : "",
        transition: "all .5s ease-in-out",
      }}
    >
      <div
        className={`w-full lg:max-w-6xl md:max-w-4xl max-w-2xl px-8  xl:px-0  m-auto flex  items-center justify-between py-4  `}
      >
        <div className="flex items-center justify-between gap-2">
          <Talavin
            fill={theme === "dark" ? "#38DFBA" : "#151632"}
            className="w-8 h-8 lg:w-12 lg:h-12 "
          />

          <span className="text-lg md:text-2xl lg:text-3xl text-zeus dark:text-turquoise">
            TalAvin
          </span>
        </div>

        <nav className="items-center justify-between hidden md:flex">
          {siteConfig.headerNavLinks.map((link, index) => (
            <div
              key={link.text}
              className="mx-4 font-bold cursor-pointer text-zeus dark:text-turquoise group"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-delay={100 + 100 * (index + 1)}
              onClick={() => scrollToSection(link.href)}
            >
              {link.text}
              <span className=" max-w-0 block group-hover:max-w-full transition-all duration-500 h-[0.25px] bg-firefly dark:bg-turquoise"></span>
            </div>
          ))}
          <div
            className="px-4 py-2 mx-4 transition-colors duration-500 rounded-md cursor-pointer ring-1 ring-zeus text-zeus hover:bg-firefly hover:text-cream dark:ring-turquoise dark:text-turquoise dark:hover:bg-turquoise dark:hover:text-zeus"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-delay="500"
          >
            <a href={Resume} target="_blank">
              Resume
            </a>
          </div>
          <span
            onClick={handleThemeToggle}
            className="ml-2 leading-9 cursor-pointer"
          >
            <img src={theme === "dark" ? Moon : Sun} alt="theme toggle" />
          </span>
        </nav>
      </div>
    </Headroom>
  );
};

export default Header;

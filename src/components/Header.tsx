import { siteConfig } from "../data/site-config";
import "aos/dist/aos.css";

import Resume from "../../public/assets/Avinash_Tallapaneni_Frontend_Resume.pdf";

import Headroom from "react-headroom";
import Sun from "../../public/assets/sun.svg";
import Moon from "../../public/assets/moon.svg";
import { useState } from "react";

const Header = ({ prevScrollPos }: { prevScrollPos: number }) => {
  const shouldShowNavbar = prevScrollPos > 10;

  const [theme, setTheme] = useState<"light" | "dark">("dark");

  const handleToggle = () => {
    document.documentElement.classList.toggle("dark");

    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
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
        backgroundColor: theme === "dark" ? "#091B28" : "#EAE7DC",
        boxShadow: shouldShowNavbar
          ? "0 1px 40px -15px  rgba(143, 215, 188, 0.3)"
          : "",
        transition: "all .5s ease-in-out",
      }}
    >
      <div
        className={`w-full lg:max-w-7xl md:max-w-4xl   m-auto flex  items-center justify-between pt-8 py-4  `}
      >
        {/* <img
          src={siteConfig.logo.src}
          className="w-12 h-12"
          alt={siteConfig.logo.alt}
        /> */}
        <span className="text-4xl font-Dancing-Script text-turquoise text-nowrap dark:text-burntSienna">
          Tal Avin
        </span>

        <nav className="items-center justify-between hidden md:flex">
          {siteConfig.headerNavLinks.map((link, index) => (
            <div
              key={link.text}
              className="mx-4 font-mono cursor-pointer text-turquoise dark:text-burntSienna group"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-delay={100 + 100 * (index + 1)}
            >
              {link.text}
              <span className=" max-w-0 block group-hover:max-w-full transition-all duration-500 h-[0.25px] bg-turquoise dark:bg-burntSienna"></span>
            </div>
          ))}
          <div
            className="px-4 py-2 mx-4 transition-colors duration-500 rounded-md cursor-pointer ring-1 ring-turquoise text-turquoise hover:bg-turquoise/15 dark:ring-burntSienna dark:text-burntSienna dark:hover:bg-burntSienna/15"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-delay="500"
          >
            <a href={Resume} target="_blank">
              Resume
            </a>
          </div>
          <span
            onClick={handleToggle}
            className="ml-2 leading-9 cursor-pointer"
          >
            <img src={theme === "dark" ? Sun : Moon} alt="theme toggle" />
          </span>
        </nav>
      </div>
    </Headroom>
  );
};

export default Header;

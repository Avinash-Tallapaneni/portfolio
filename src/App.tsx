import { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Aos from "aos";
import Projects from "./components/Projects";
import Services from "./components/Services";
import AboutMe from "./components/AboutMe";
import Talavin from "./ui/icons/Talavin";

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const [theme, setTheme] = useState<"light" | "dark">(() => {
    const storedTheme = localStorage.getItem("theme");

    return (storedTheme ?? "light") as "light" | "dark";
  });

  /** If cursor reaches end of the webpage
   * gittery wont happen now
   */

  const totalScrollWidth = document.body.scrollWidth;
  const totalScrollHeight = document.body.scrollHeight;

  /*This is based on the width and heigh of the glow
    which is set to w-24 h-24
  */
  const cursorBlurOffset = 96;

  const handleMouseMove = (event: any) => {
    /** This is to check if the project classname exist
     * if yes then cursor glow wont show on the project card
     */
    // const targetClassExists = event.target.className.includes("project");

    // if (!targetClassExists) {

    // }

    setPosition({
      x:
        event.pageX + cursorBlurOffset < totalScrollWidth
          ? event.pageX
          : event.pageX - cursorBlurOffset,
      y:
        event.pageY + cursorBlurOffset < totalScrollHeight
          ? event.pageY
          : event.pageY - cursorBlurOffset,
    });
  };

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    setPrevScrollPos(currentScrollPos);
  };

  const handleThemeToggle = () => {
    const newTheme = theme === "light" ? "dark" : "light";

    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(newTheme);
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    // Initialize the Animation on scroll library
    Aos.init();

    // Theme setting directly to HTML

    const storedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(storedTheme);

    // navbar appear and disapperar during scroll
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleMouseMove);
    };
  }, [prevScrollPos]);

  return (
    <>
      <div onMouseMove={handleMouseMove}>
        <Header
          prevScrollPos={prevScrollPos}
          handleThemeToggle={handleThemeToggle}
          theme={theme}
        />
        <Hero theme={theme} />
        <AboutMe />
        <Services />
        <Projects />

        {position.x > 0 && position.y > 0 && (
          <div
            className="absolute w-24 h-24 rounded-full blur-[100px] bg-dark-blue  -z-10"
            style={{
              left: position.x,
              top: position.y,
            }}
          ></div>
        )}
      </div>

      {/* <div
        className="absolute top-0 left-0 z-0 w-full h-full bg-blue/50"
        style={{
          backdropFilter: "blur(16px)",
          pointerEvents: "none",
        }}
      ></div> */}
    </>
  );
}

export default App;

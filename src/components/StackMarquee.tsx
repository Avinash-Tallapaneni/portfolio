import Marquee from "react-fast-marquee";
import { techStackDetails } from "../data/site-config";

const StackMarquee = () => {
  return (
    <Marquee pauseOnHover autoFill>
      {techStackDetails.map((stack) => {
        return (
          <span key={stack.name}>
            <img
              src={stack.image.src}
              alt={stack.image.alt}
              className="w-12 h-12 m-2 ml-4 transition-all rounded-md cursor-pointer hover:scale-150"
            />
          </span>
        );
      })}
    </Marquee>
  );
};

export default StackMarquee;

import { siteConfig } from "../data/site-config";

const Services = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-start w-full gap-4">
        <span className="select-none w-full h-[1px] bg-gradient-to-r from-darkNavy to-blue"></span>

        <div className="flex flex-col items-center justify-center text-4xl text-transparent uppercase select-none bg-gradient-to-r from-blue to-blue/50 text-clip bg-clip-text dancing-font">
          <h2 className="">Services</h2>
          <p className="text-lg text-nowrap">Various services I offer</p>
        </div>
        <span className="select-none w-full h-[1px] bg-gradient-to-r from-blue to-darkNavy"></span>
      </div>

      <div className="flex gap-4 p-4 mx-auto mt-10 overflow-x-scroll md:overflow-hidden md:max-w-7xl md:flex-wrap md:justify-center">
        {siteConfig.services.map((service, index) => {
          return (
            <div
              className=" min-w-[67%] md:min-w-0 md:w-1/3 p-4 rounded-b-lg lg:w-[30%] bg-darkNavyGradient border-t-2 border-blue flex flex-col gap-4"
              key={`${service.title} - ${index}`}
              data-aos="fade-right"
              data-aos-duration="200"
              data-aos-easing="linear"
              data-aos-delay={0 + 500 * index}
            >
              <div className="w-12 h-12 p-2 mx-auto rounded-full bg-darkNavy">
                <img
                  className="w-full h-full"
                  src={service.image.src}
                  alt={service.image.alt}
                />
              </div>
              <h3 className="text-3xl text-center">{service.title}</h3>
              <p className="text-center text-md">{service.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;

import { siteConfig } from "../data/site-config";
import SectionTitle from "../shared/SectionTitle";

const Services = () => {
  return (
    <section className="flex flex-col w-full max-w-6xl gap-4 mx-auto mb-20 font-normal z-100">
      <SectionTitle message="Services I offer" />

      <div className="flex gap-4 mx-auto mt-10 overflow-x-scroll md:overflow-hidden md:flex-wrap md:justify-between">
        {siteConfig.services.map((service, index) => {
          return (
            <div
              className=" min-w-[67%] md:min-w-0 md:w-1/3 p-4 rounded-b-lg lg:w-[32%] bg-zeus/10 border-zeus dark:bg-turquoise/10 border-t-2 dark:border-turquoise flex flex-col gap-4"
              key={`${service.title} - ${index}`}
              data-aos="fade-right"
              data-aos-duration="200"
              data-aos-easing="linear"
              data-aos-delay={0 + 500 * index}
            >
              <div className="w-12 h-12 p-2 mx-auto rounded-full bg-zeus/40">
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
    </section>
  );
};

export default Services;

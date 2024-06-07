import { siteConfig } from "../data/site-config";
import SectionTitle from "../shared/SectionTitle";

const Services = () => {
  return (
    <section
      id="services"
      className="flex flex-col items-center justify-start flex-grow w-full h-full max-w-6xl gap-4 px-8 py-4 mx-auto overflow-hidden font-normal md:items-start xl:px-0 md:py-14 "
    >
      <SectionTitle message="Services I offer" />

      <div className="grid grid-cols-1 gap-4 mx-auto mt-10 md:grid-cols-2 xl:grid-cols-3 md:flex-wrap md:justify-center">
        {siteConfig.services.map((service, index) => {
          return (
            <div
              className="flex flex-col gap-4 p-4 border-t-2 rounded-b-lg bg-zeus/10 border-zeus dark:bg-turquoise/10 dark:border-turquoise"
              key={`${service.title} - ${index}`}
              data-aos="fade-right"
              data-aos-duration="200"
              data-aos-easing="linear"
              data-aos-delay={0 + 500 * index}
            >
              <div className="w-8 h-8 p-2 mx-auto rounded-full lg:w-12 lg:h-12 bg-zeus/40">
                <img
                  className="w-full h-full"
                  src={service.image.src}
                  alt={service.image.alt}
                />
              </div>
              <h3 className="text-xl text-center lg:text-3xl">
                {service.title}
              </h3>
              <p className="text-sm text-center lg:text-md">
                {service.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;

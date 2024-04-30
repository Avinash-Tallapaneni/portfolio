export type Image = {
  src: string;
  alt: string;
};
export type NavLink = {
  text: string;
  href: string;
};
export type Hero = {
  greeting: string;
  name: string;
  expertise: string;
  content: string;
};

export type TechStack = {
  name: string;
  image: Image;
  description: string;
};
export type Service = {
  image: Image;
  title: string;
  description: string;
};

export type ProjectDetails = {
  url: string;
  image: Image;
  title: string;
  description: string;
  techStack: string[];
};

export type Siteconfig = {
  logo: Image;
  headerNavLinks: NavLink[];
  hero: Hero;
  services: Service[];
  projectDetails: ProjectDetails[];
};

export const techStackDetails: TechStack[] = [
  {
    name: "Next.js",
    image: {
      src: "../src/assets/nextjs.svg",
      alt: "Next.js Logo",
    },
    description: "Next.js is a react framework for building web apps",
  },
  {
    name: "Tailwind CSS",
    image: {
      src: "../src/assets/tailwind.svg",
      alt: "Tailwind CSS Logo",
    },
    description:
      "Tailwind is a utility-first CSS framework that lets you focus on your content.",
  },
  {
    name: "React",
    image: {
      src: "../src/assets/react.svg",
      alt: "React Logo",
    },
    description: "React is a JavaScript library for building user interfaces",
  },
  {
    name: "Typescript",
    image: {
      src: "../src/assets/typescript.svg",
      alt: "Typescript Logo",
    },
    description: "Typescript is a JavaScript type-checking language",
  },
  {
    name: "Node.js",
    image: {
      src: "../src/assets/node.svg",
      alt: "Node.js Logo",
    },
    description: "Node.js is a JavaScript runtime for the UNIX-like system",
  },
  {
    name: "MongoDB",
    image: {
      src: "../src/assets/mongo.svg",
      alt: "Mongodb Logo",
    },
    description: "MongoDB is a powerful NoSQL database",
  },
  {
    name: "Prisma",
    image: {
      src: "../src/assets/prisma.svg",
      alt: "Prisma Logo",
    },
    description:
      "Prisma is a Node.js & TypeScript ORM which provides global database caching, connection pooling, and real-time database events.",
  },
  {
    name: "Framer",
    image: {
      src: "../src/assets/framer.svg",
      alt: "Framer Logo",
    },
    description:
      "Framer Motion is a React library for making beautiful and performant animations",
  },
  {
    name: "Figma",
    image: {
      src: "../src/assets/figma.svg",
      alt: "Figma Logo",
    },
    description:
      "Figma is a collaborative web application for interface design, with additional offline features enabled by desktop applications for macOS and Windows.",
  },
  {
    name: "Stripe",
    image: {
      src: "../src/assets/stripe.png",
      alt: "Stripe Logo",
    },
    description: "Stripe is a payment processing platform",
  },
];

export const siteConfig: Siteconfig = {
  logo: {
    src: "../src/assets/talavin.svg",
    alt: "Talavin Logo",
  },
  headerNavLinks: [
    {
      text: "Home",
      href: "/",
    },
    {
      text: "About",
      href: "/about",
    },
    {
      text: "Projects",
      href: "/projects",
    },
  ],
  hero: {
    greeting: "Nice to meet you!",
    name: "Avinash Tallapaneni.",
    expertise: "Software Engineer | Frontend Developer | No Code Developer",
    content:
      "I specialize in building exceptional digital experiences that are not only visually appealing but also highly functional and accessible. With a keen eye for design and a passion for coding, I bring creativity and technical expertise to every project I work on.",
  },

  services: [
    {
      image: {
        src: "../src/assets/frontend.svg",
        alt: "Front-End Development Image",
      },
      title: "Front-End Development",
      description:
        "Modern, responsive UIs that captivate. Seamless experiences. Clean, efficient code.",
    },
    {
      image: {
        src: "../src/assets/database.svg",
        alt: "Back-End Development Image",
      },
      title: "Back-End Development",
      description:
        "Delivering robust, scalable server-side logic, from RESTful APIs to full-fledged web applications.",
    },
    {
      image: {
        src: "../src/assets/webdesign.svg",
        alt: "Web Design Image",
      },
      title: "Web Design",
      description:
        "Crafting visually stunning, user-friendly interfaces with Figma, Framer, and Webflow, including wireframes and high-fidelity prototypes.",
    },
  ],

  projectDetails: [
    {
      url: "https://festivus.vercel.app/",
      image: {
        src: "../src/assets/mountain.avif",
        alt: "Festivus Image",
      },
      title: "Festivus: Your Ultimate Event Experience Platform",
      description:
        "Festivus is your all-in-one solution for creating, booking, and managing events. From concerts to conferences, Festivus makes event planning seamless and stress-free. Discover, create, and book events effortlessly with Festivus!",
      techStack: ["typeScript", "next", "tailwind", "mongo", "stripe"],
    },
    {
      url: "https://weather-warden.netlify.app/",
      image: {
        src: "../src/assets/mountain.avif",
        alt: "Weather Warden Image",
      },
      title: "Weather Warden: Your Personal Weather Companion",
      description:
        "Weather Warden is your go-to app for all your weather needs. Stay updated with real-time weather forecasts, radar maps, and personalized weather alerts. With Weather Warden, you'll always be prepared for whatever the weather brings.",
      techStack: ["react", "tailwind"],
    },
  ],
};

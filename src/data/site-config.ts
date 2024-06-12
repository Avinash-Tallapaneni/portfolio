export type Image = {
  src: string;
  alt: string;
};
export type NavLink = {
  text: string;
  href: string;
};
export type Hero = {
  motto: string;
  name: string;
  expertise: string;
  content: string;
};

export type TechStack = {
  name: string;
  image: Image;
  description: string;
  show: boolean;
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
      src: "/assets/nextjs.svg",
      alt: "Next.js Logo",
    },
    description: "Next.js is a react framework for building web apps",
    show: true,
  },

  {
    name: "React",
    image: {
      src: "/assets/react.svg",
      alt: "React Logo",
    },
    description: "React is a JavaScript library for building user interfaces",
    show: true,
  },
  {
    name: "Typescript",
    image: {
      src: "/assets/typescript.svg",
      alt: "Typescript Logo",
    },
    description: "Typescript is a JavaScript type-checking language",
    show: true,
  },
  {
    name: "Node.js",
    image: {
      src: "/assets/node.svg",
      alt: "Node.js Logo",
    },
    description: "Node.js is a JavaScript runtime for the UNIX-like system",
    show: true,
  },
  {
    name: "MongoDB",
    image: {
      src: "/assets/mongo.svg",
      alt: "Mongodb Logo",
    },
    description: "MongoDB is a powerful NoSQL database",
    show: true,
  },
  {
    name: "Tailwind CSS",
    image: {
      src: "/assets/tailwind.svg",
      alt: "Tailwind CSS Logo",
    },

    description:
      "Tailwind is a utility-first CSS framework that lets you focus on your content.",
    show: true,
  },
  {
    name: "Prisma",
    image: {
      src: "/assets/prisma.svg",
      alt: "Prisma Logo",
    },

    description:
      "Prisma is a Node.js & TypeScript ORM which provides global database caching, connection pooling, and real-time database events.",
    show: true,
  },
  {
    name: "Supabase",
    image: {
      src: "/assets/supabase.svg",
      alt: "Supabase Logo",
    },
    description:
      "Supabase is an open-source Firebase alternative. It provides a realtime REST API and dashboard for building modern apps.",

    show: true,
  },
  {
    name: "Framer",
    image: {
      src: "/assets/framer.svg",
      alt: "Framer Logo",
    },

    description:
      "Framer Motion is a React library for making beautiful and performant animations",
    show: true,
  },
  {
    name: "Figma",
    image: {
      src: "/assets/figma.svg",
      alt: "Figma Logo",
    },

    description:
      "Figma is a collaborative web application for interface design, with additional offline features enabled by desktop applications for macOS and Windows.",
    show: true,
  },
  {
    name: "Stripe",
    image: {
      src: "/assets/stripe.svg",
      alt: "Stripe Logo",
    },
    description: "Stripe is a payment processing platform",
    show: false,
  },
  {
    name: "Gemini AI",
    image: {
      src: "/assets/geminiAI.svg",
      alt: "Gemini AI Logo",
    },
    description:
      "Gemini AI is an artificial intelligence platform for various applications.",
    show: false,
  },
  {
    name: "Gmail",
    image: {
      src: "/assets/gmail.svg",
      alt: "Gmail Logo",
    },
    description: "Gmail is a free email service provided by Google.",
    show: false,
  },
  {
    name: "Expo",
    image: {
      src: "/assets/expo.svg",
      alt: "Expo Logo",
    },
    description:
      "Expo is a free and open-source platform for building universal native apps for Android, iOS, and the web with JavaScript and React.",
    show: true,
  },
  {
    name: "Firebase",
    image: {
      src: "/assets/firebase.svg",
      alt: "Firebase Logo",
    },
    description:
      "Firebase is a platform developed by Google for creating mobile and web applications.",
    show: false,
  },
  {
    name: "AdMob",
    image: {
      src: "/assets/admob.svg",
      alt: "AdMob Logo",
    },
    description:
      "AdMob is a mobile advertising platform developed by Google for monetizing mobile applications.",
    show: false,
  },
];

export const siteConfig: Siteconfig = {
  logo: {
    src: "/assets/talavin.svg",
    alt: "Talavin Logo",
  },
  headerNavLinks: [
    {
      text: "Home",
      href: "#",
    },
    {
      text: "About",
      href: "#about",
    },
    {
      text: "Projects",
      href: "#projects",
    },
    {
      text: "Services",
      href: "#services",
    },
  ],
  hero: {
    motto: "Empowering Brands through Compelling Visual Narratives",
    name: "Avinash Tallapaneni",
    expertise: "Software Engineer | Frontend Developer | No Code Developer",
    content:
      "I specialize in building exceptional digital experiences that are not only visually appealing but also highly functional and accessible. With a keen eye for design and a passion for coding, I bring creativity and technical expertise to every project I work on.",
  },

  services: [
    {
      image: {
        src: "/assets/frontend.svg",
        alt: "Front-End Development Image",
      },
      title: "Front-End Development",
      description:
        "Modern, responsive UIs that captivate. Seamless experiences. Clean, efficient code.",
    },
    {
      image: {
        src: "/assets/database.svg",
        alt: "Back-End Development Image",
      },
      title: "Back-End Development",
      description:
        "Delivering robust, scalable server-side logic, from RESTful APIs to full-fledged web applications.",
    },
    {
      image: {
        src: "/assets/webdesign.svg",
        alt: "Web Design Image",
      },
      title: "Web Design",
      description:
        "Crafting visually stunning, user-friendly interfaces with Figma, Framer, and Webflow, including wireframes and high-fidelity prototypes.",
    },
    {
      image: {
        src: "/assets/frontend.svg",
        alt: "React Native Development Image",
      },
      title: "React Native Development",
      description:
        "Cross-platform mobile apps with native performance. Sleek, intuitive interfaces. Robust, scalable code.",
    },
  ],

  projectDetails: [
    {
      url: "https://festivus.vercel.app/",
      image: {
        src: "/assets/mountain.avif",
        alt: "Festivus Image",
      },
      title: "Festivus: Your Ultimate Event Experience Platform",
      description:
        "Festivus is your all-in-one solution for creating, booking, and managing events. From concerts to conferences, Festivus makes event planning seamless and stress-free. Discover, create, and book events effortlessly with Festivus!",
      techStack: ["typeScript", "next", "tailwind", "mongo", "stripe"],
    },

    {
      url: "https://prioritymail.vercel.app/",
      image: {
        src: "/assets/prioritymail.png",
        alt: "PriorityMail Image",
      },
      title: "PriorityMail: Organize Your Inbox with AI",
      description:
        "PriorityMail is a web application that prioritizes and tags your Gmail emails using the power of Gemini AI. Securely authenticate with Google using NextAuth, fetch and classify emails using Gmail API, and store API keys in local storage. Experience a smarter way to manage your inbox.",
      techStack: ["next", "tailwind", "typeScript","gemini","gmail"],
    },
    {
      url: "https://expo.dev/accounts/testing_purpose/projects/learner_edu_app/builds/414a422a-40a1-4085-8c1a-9cd421f68611",
      image: {
        src: "/assets/mountain.avif",
        alt: "Exam Preparation App Image",
      },
      title: "Exam Preparation App: Study Smarter",
      description:
        "An exam preparation mobile application developed using React Native Expo and NativeWind, offering a seamless cross-platform experience. The app features an intuitive UI for navigating multiple-choice questions, a diverse question bank, personalized user data management, and AdMob integration for in-app advertisements. Stay updated with Firebase push notifications and enjoy a responsive design.",
      techStack: [
        "react",
        "expo",
        "tailwind",
        "typeScript",
        "admob",
        "firebase",
      ],
    },
    {
      url: "https://weather-warden.netlify.app/",
      image: {
        src: "/assets/weatherWarden.png",
        alt: "Weather Warden Image",
      },
      title: "Weather Warden: Your Personal Weather Companion",
      description:
        "Weather Warden is your go-to app for all your weather needs. Stay updated with real-time weather forecasts, radar maps, and personalized weather alerts. With Weather Warden, you'll always be prepared for whatever the weather brings.",
      techStack: ["react", "tailwind"],
    },
  ],
};

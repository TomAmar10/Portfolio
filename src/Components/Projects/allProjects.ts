const projects: Project[] = [
  {
    title: "Hotix",
    description:
      "I'm currently developing Hotix, a unique web application for an upcoming startup. It manages and secures second-hand ticket exchanges for various events. The code and application will be revealed in 1-2 months, as per managerial requirements. ",
    tools: [
      "React",
      "Redux toolkit",
      "NodeJs",
      "Typescript",
      "Mongoose",
      "Sass",
    ],
    videoPath: "assets/hotix.mp4",
    hotix: true,
  },
  {
    title: "Shop Online",
    description:
      "Shop Online is a user-friendly website that allows online shopping experiences. Users can create personalized shopping carts, place orders, and access previous orders, while admins can add new items to the store.",
    tools: [
      "Angular",
      "Rxjs & Observables",
      "NodeJS",
      "Typescript",
      "Mongoose",
    ],
    links: {
      website: "https://shop-online-ta7.netlify.app",
      front: "https://github.com/TomAmar10/Shop-Online-frontend-angular",
      back: "https://github.com/TomAmar10/Shop-Online-backend-mongo-nodejs",
    },
    videoPath: "assets/shop-online.mp4",
    shop: true,
  },
  {
    title: "Dor Levy Investments",
    description:
      "'Dor Levy Investments' is the personal website of Dor Levy, a trusted advisor in crypto and stock markets. Explore insightful blogs, book private lessons, and connect for expert guidance. Please note that the website is currently being built and will be available soon.",
    tools: ["Angular", "Rxjs & Observables", "FireBase", "Typescript"],
    links: {
      website: "https://dor-levy.netlify.app",
    },
    videoPath: "assets/dor-levy.mp4",
    dor: true,
  },
  {
    title: "InsTravel",
    description:
      "My first react project i built almost a year ago, and gained a lot of experience and knowledge since. InsTravel is a global vacation app that lets users track and follow their favorite destinations, while admins manage the vacations effectively.",
    tools: ["React", "Redux toolkit", "NodeJS", "Typescript", "MySql"],
    links: {
      website: "https://instravel.netlify.app",
      front: "https://github.com/TomAmar10/vacations-react_TS-deploy",
      back: "https://github.com/TomAmar10/vacations-nodejs_TS-deploy",
    },
    videoPath: "assets/instravel.mp4",
    instravel: true,
  },
  {
    title: "Tom Amar's Portfolio",
    description:
      "Welcome to Tom Amar's Portfolio, the very website you are exploring right now. Here, you'll discover a showcase of my diverse projects, gain insights into my background, and easily connect with me through links to my GitHub, LinkedIn, and WhatsApp. Feel free to reach out for any question in the Contact page.",
    tools: ["React", "Typescript", "SASS", "Bootstrap"],
    videoPath: "assets/portfolio.mp4",
    links: {
      front: "https://github.com/TomAmar10/Portfolio",
    },
    portfolio: true,
  },
];

interface Links {
  website?: string;
  front?: string;
  back?: string;
}

export interface Project {
  title: string;
  description: string;
  tools: string[];
  links?: Links;
  videoPath: string;
  hotix?: boolean;
  portfolio?: boolean;
  dor?: boolean;
  instravel?: boolean;
  shop?: boolean;
}

export default projects;

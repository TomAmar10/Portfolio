const projects: Project[] = [
  {
    title: "Hotix",
    description:
      "I'm currently developing Hotix, my biggest project, a unique web application I'm working on for the last 4 months, for an upcoming startup. It manages and secures second-hand ticket exchanges for various events. Website will be available soon. ",
    tools: [
      "React",
      "Redux toolkit",
      "NodeJs",
      "Express",
      "Typescript",
      "Mongoose",
      "Sass",
    ],
    videoPath: "assets/hotix.mp4",
    links: {
      code: "https://github.com/TomAmar10/Tickets-exchange-platform",
    },
    hotix: true,
  },
  {
    title: "Dor Levy Investments",
    description:
      "a personal website of Dor Levy, a trusted advisor in crypto and stock markets. Explore insightful blogs, book private lessons, and connect for expert guidance. Admin also has his own website to manage blogs, contacts and more. Server side code is private.",
    tools: ["Angular", "Rxjs & Observables", "FireBase", "Typescript", "Node.js", "Express"],
    links: {
      website: "https://dor-levy.netlify.app",
      code: "https://github.com/TomAmar10/Dor-Levy-personal-website",
    },
    videoPath: "assets/dor-levy.mp4",
    dor: true,
  },
  {
    title: "Shop Online",
    description:
      "Shop Online was one of my first projects with Angular, a user-friendly website that allows online shopping experiences. Users can create new shopping carts, order, and access previous orders, while admins can add new items to the store.",
    tools: [
      "Angular",
      "Rxjs & Observables",
      "NodeJS",
      "Typescript",
      "Mongoose",
      "Express",
    ],
    links: {
      website: "https://shop-online-ta7.netlify.app",
      code: "https://github.com/TomAmar10/Angular-Shop-Online"
    },
    videoPath: "assets/shop-online.mp4",
    shop: true,
  },
  {
    title: "InsTravel",
    description:
      "One of my first react project i built long time ago, and gained a lot of experience and knowledge since. InsTravel is a global vacation app that lets users track and follow their favorite destinations, while admins manage the vacations effectively.",
    tools: [
      "React",
      "Redux toolkit",
      "NodeJS",
      "Typescript",
      "MySql",
      "Express",
    ],
    links: {
      website: "https://instravel.netlify.app",
      code: "https://github.com/TomAmar10/InsTravel_vacations-project"
    },
    videoPath: "assets/instravel.mp4",
    instravel: true,
  },
  {
    title: "Tom Amar's Portfolio",
    description:
      "Welcome to Tom Amar's Portfolio, the very website you are exploring right now. Here, you'll discover a showcase of my diverse projects, gain insights into my background, and easily connect with me through links to my GitHub, LinkedIn, and WhatsApp.",
    tools: ["React", "Typescript", "SASS", "Bootstrap"],
    videoPath: "assets/portfolio.mp4",
    links: {
      code: "https://github.com/TomAmar10/Portfolio",
    },
    portfolio: true,
  },
];

interface Links {
  website?: string;
  code?: string;
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

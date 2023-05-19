const projects: Project[] = [
  {
    title: "InsTravel",
    description:
      "InsTravel is a global vacation app that lets users track and follow their favorite destinations, while admins manage the vacations effectively.",
    tools: ["React", "Redux toolkit", "NodeJS", "Typescript", "MySql"],
    links: {
      website: "https://instravel.netlify.app",
      front: "https://github.com/TomAmar10/vacations-react_TS-deploy",
      back: "https://github.com/TomAmar10/vacations-nodejs_TS-deploy",
    },
    videoPath: "assets/instravel.mp4",
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
    title: "Hotix",
    description:
      "Hotix is an upcoming application designed for buying and selling second-hand tickets for various events. While the application is still in the building phase, the video demonstration showcases its core functionalities, with some features intentionally not shown to respect the company's privacy. The application and its source code is not currently accessible as it belongs to the company.",
    tools: [
      "React",
      "Redux toolkit",
      "NodeJs",
      "Typescript",
      "Mongoose",
      "SASS",
    ],
    videoPath: "assets/hotix.mp4",
    hotix: true,
  },
  {
    title: "Tom Amar's Portfolio",
    description:
      "Welcome to Tom Amar's Portfolio, the very website you are exploring right now. Here, you'll discover a showcase of my diverse projects, gain insights into my background, and easily connect with me through links to my GitHub, LinkedIn, and WhatsApp. Feel free to reach out for any question in the Contact page.",
    tools: ["React", "Typescript", "SASS", "Bootstrap"],
    videoPath: "assets/portfolio.mp4",
    links: {
      front: "df.com",
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
}

export default projects;

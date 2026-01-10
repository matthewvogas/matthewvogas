import LinkSvg from "../../public/icons/Link.svg";

import figma from "../../public/icons/figma.svg";
import github from "../../public/icons/github.svg";
import linkedin from "../../public/icons/linkedin.svg";
import instagram from "../../public/icons/instagram.svg";

import Index from "../../public/images/projects/Index.png";
import Hoosling from "../../public/images/projects/Hoosling.png";
import GesmiaWeb from "../../public/images/projects/GesmiaWeb.png";
import AthenaImage from "../../public/images/projects/athena.png";
import NoFappApp from "../../public/images/projects/no-fapp-app.png";
import Ghosta from "../../public/images/projects/ghosta.png";

export const experience = [
  {
    startDate: "2024",
    endDate: "Contractor",
    name: "Designer & Product Developer at Holdex",
    description:
      "Designed, developed, and reviewed code as part of a high-performance web3 team for Index.Fun, Truflation, Clearpool Protocol and Ozean",
    stack: [
      "Svelte",
      "Subsquid",
      "Tailwind",
      "GraphQL",
      "React",
      "Supabase",
      "ThirdWeb",
    ],
    items: [{}],
    url: "https://www.holdex.io/",
  },
  {
    startDate: "2024",
    endDate: "2025",
    name: "Frontend Developer at Nitel",
    description:
      "Developed internal tools using Angular and SCSS. Integrated Salesforce for process automation and real-time reporting.",
    stack: ["Angular", "SCSS", "Salesforce", "TypeScript", "Express"],
    items: [{}],
    url: "",
  },
  {
    startDate: "2024",
    endDate: "Freelance",
    name: "Designer & Mobile Engineer at Gesmia",
    description:
      "Led the App design and developed an iOS/Android integrating an API built in C# for realtime information provided by the Backend team.",
    stack: ["React Native", "Zustand", "Storybook", "Figma", "Web Sockets"],
    items: [{}],
    url: "https://www.gesmia.com/",
  },
  {
    startDate: "2022, 2024",
    endDate: "Full Time",
    name: "Frontend Developer & Full-Stack at Golabs Tech",
    description:
      "Development of more than 5 projects, including a web app for influencers used by L'Oréal Paris, a .NET API for electric chargers and a coin exchange features for mobile and web app.",
    stack: ["React", "Redux", "Next", ".NET", "Angular", "Laravel", "Node"],
    items: [{}],
    url: "https://golabstech.com",
  },
  {
    startDate: "2023",
    endDate: "Contributor",
    name: "Figma Design Community Contributor",
    description:
      "Achieved +30,000 Figma Interfaces Downloads Milestone through open-source contributions.",
    stack: ["Figma", "Framer Motion", "Three JS", "Blender 3D"],
    items: [{}],
    url: "https://www.figma.com/@matthewvogas",
  },
  {
    startDate: "2021",
    endDate: "Co-Founder",
    name: "Co-Founder at Hoosling & Front-End Engineer",
    description:
      "Developed a crowdfunding platform with React and PHP, achieving $2K MRR, handling UI/UX, frontend development, and usability testing with Hotjar and Figma.",
    stack: ["React", "PHP", "Figma", "Hotjar", "JavaScript"],
    items: [{}],
    url: "https://medium.com/@matthewvogas/levantar-inversi%C3%B3n-con-criptomonedas-futurista-o-una-estupidez-80dbfb5bc3a?source=user_profile---------3----------------------------",
  },
  {
    startDate: "2021",
    endDate: "Contributor",
    name: "Web3 Costa Rica Site",
    description:
      "Designed and developed the community website for Web3 Costa Rica at my 17 years old.",
    stack: ["Next.js", "Figma", "Rizz"],
    items: [{}],
    url: "https://web3cr.com",
  },
  {
    startDate: "2021, 2022",
    endDate: "Freelance",
    name: "Freelance",
    description:
      "Working through freelance projects at 16 years old, including Cavernas Del Venado Expedition, an Shopping center in Quito, Ecuador and some hotels in Costa Rica",
    stack: ["Figma", "WordPress", "CMSs", "JavaScript"],
    items: [{}],
    url: "",
  },
];

export const projects = [
  {
    id: "athena-fe",
    image: AthenaImage,
    name: "Athena",
    description:
      "AI-powered app for the crypto trading creation with drag and drop and code editor, helping users to create their own trading systems.",
    items: [{}],
    url: "https://athena.ai/",
    role: "Product Designer & Frontend Developer",
    team: "Along with the founder - Former NASA employee",
    timeline: "2024",
    longDescription:
      "AI-powered application for crypto trading system creation, featuring an intuitive drag-and-drop interface and advanced code editor. Enables users to build, test, and deploy custom trading strategies without extensive programming knowledge. Combines visual workflow design with powerful scripting capabilities for both beginners and advanced traders.",
    objective:
      "Democratize algorithmic trading by providing an accessible platform that bridges visual design and code, allowing users to create sophisticated trading systems through an intuitive interface while maintaining the flexibility of custom code for advanced strategies.",
    video: ["https://youtu.be/rpMJZrHCELw"],
  },
  {
    id: "index-fun",
    name: "Index Fun",
    description:
      "Web3 index funds creation platform, allowing users to trade and invest. Top 10 most revolutionary web3 project in Asia according to Crypyo Banter.",
    items: [{}],
    url: "https://index.fun/",
    role: "Lead Product Developer & Designer",
    team: "Holdex",
    longDescription:
      "Designed, developed, and reviewed code working alongside with the former CEO of Bitcoin.com and Index Founder. App that allows users to create and manage meme index funds.",
    objective:
      "Developed a seamless Web3 index funds creation experience that bridges users and creators through token-based rewards. Consuming data from truflation.com, performing complex mathematical calculations, and delivering them quickly to users for their trades.",
    image: Index,
  },
  {
    id: "ghosta",
    image: Ghosta,
    name: "Ghosta AI",
    description:
      "Build your digital twin with AI. Upload a short video and Ghosta creates a lifelike AI avatar that speaks, moves, and connects with your audience.",
    items: [{}],
    url: "",
    role: "Designer & Wrapper Prompt Engineer",
    team: "Along with the founder",
    timeline: "2024",
    longDescription:
      "Revolutionary AI platform that enables users to create lifelike digital avatars from short video uploads. Users can create AI avatars that speak, move, and interact naturally, with integration capabilities for live streaming on platforms like Facebook, YouTube, Twitch, Instagram, and TikTok.",
    objective:
      "Democratize AI avatar creation by providing an accessible, secure, and fast platform that allows anyone to build their digital twin, enabling new forms of content creation and audience engagement across major social media platforms.",
  },
  {
    id: "no-fapp",
    image: NoFappApp,
    name: "No-Fap",
    description:
      "Mobile app designed to help users quit addiction, featuring community support, progress tracking, and streak management.",
    items: [{}],
    url: "",
    role: "Designer & Mobile Developer",
    team: "Along with the founderr",
    timeline: "2024",
    longDescription:
      "A comprehensive mobile application built to support users in their journey to overcome addiction. Features include a welcoming onboarding experience, community feed with trending and latest posts, progress tracking with daily streak visualization, and a calendar view for monitoring abstinence periods. The app combines social support with personal accountability tools to help users achieve their goals.",
    objective:
      "Create a supportive and engaging platform that empowers users to break free from addiction through community connection, progress visualization, and daily accountability, making the recovery journey more manageable and motivating.",
  },
  {
    id: "Hoosling",
    image: Hoosling,
    name: "Hoosling",
    description:
      "Crowdfunding platform for crypto projects, helping projects to raise funds from the community.",
    items: [{}],
    url: "https://medium.com/@matthewvogas/levantar-inversi%C3%B3n-con-criptomonedas-futurista-o-una-estupidez-80dbfb5bc3a",
    role: "Co-Founder & Frontend Engineer",
    team: "Fabricio Solis and Alexander Guevara - Open English Sales VP",
    timeline: "2021",
    longDescription:
      "At 16, I built Hoosling, a crypto fundraiser startup that received $60-80K in proposals. Developed a crowdfunding platform with React and PHP, achieving $2K MRR. Handled UI/UX design, frontend development, and usability testing with Hotjar and Figma. Mentored by Open English's VP, this project taught me valuable lessons about startup development and product design.",
    objective:
      "Create a decentralized crowdfunding platform that enables crypto projects to raise capital from the community, providing transparency and trust through blockchain technology while simplifying the fundraising process for emerging projects.",
  },
  {
    id: "gesmia",
    image: GesmiaWeb,
    name: "Gesmia",
    description:
      "Top-20 App in Magazines and Newspapers category on the App Store. Family app - share your location with friends & family.",
    items: [{}],
    url: "https://gesmia.com/",
    role: "Designer & Mobile Engineer",
    team: "Gesmia Development Team",
    timeline: "2024",
    longDescription:
      "Led the app design and developed iOS/Android applications integrating a C# API for real-time information provided by the backend team. Achieved Top-20 ranking in the App Store's Magazines and Newspapers category. Built a family location-sharing platform that helps users stay connected with friends and family through real-time location updates and communication features.",
    objective:
      "Create a seamless family location-sharing experience that prioritizes privacy and ease of use, enabling families to stay connected and informed about each other's whereabouts while maintaining user control over sharing preferences and data security.",
  },
];

export const blogs = [
  {
    name: "¿Levantar inversión con criptomonedas, futurista o una estupidez?",
    time: "4 minutes",
    items: [
      {
        url: "https://medium.com/@mvttheo/levantar-inversi%C3%B3n-con-criptomonedas-futurista-o-una-estupidez-80dbfb5bc3a",
        icon: LinkSvg,
        description: "Read in Medium",
      },
    ],
  },
  {
    name: "¿Cómo un niño de 16 años crea una app para suprimir la depresión de los profesores?",
    time: "3 minutes",
    items: [
      {
        url: "https://medium.com/@mvttheo/como-un-ni%C3%B1o-de-16-a%C3%B1os-crea-una-app-para-suprimir-la-depresi%C3%B3n-de-los-profesores-4a6417fe8efe",
        icon: LinkSvg,
        description: "Read in Medium",
      },
    ],
  },
];

export const social = [
  {
    icon: figma,
    name: "Figma",
    url: "https://www.figma.com/@matthewvogas",
  },
  {
    icon: github,
    name: "Github",
    url: "https://github.com/matthewvogas",
  },
  {
    icon: linkedin,
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/matthewvogas/",
  },
  {
    icon: instagram,
    name: "Instagram",
    url: "https://www.instagram.com/matthewvogas/",
  },
];

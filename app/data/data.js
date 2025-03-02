import LinkSvg from '../../public/icons/Link.svg'

import figma from '../../public/icons/figma.svg'
import github from '../../public/icons/github.svg'
import linkedin from '../../public/icons/linkedin.svg'
import instagram from '../../public/icons/instagram.svg'

import GesmiaWeb from '../../public/images/projects/GesmiaWeb.png'
import PixelPerfect from '../../public/images/projects/PixelPerfect.png'
import Index from '../../public/images/projects/Index.png'
import Hoosling from '../../public/images/projects/Hoosling.png'

export const experience = [
    {
        startDate: "2024",
        endDate: "Contractor",
        name: "Designer & Product Developer at Holdex",
        description: "Designed, developed, and reviewed code as part of a high-performance web3 team for Index.Fun, Truflation, Clearpool Protocol and Ozean",
        stack: ["Svelte", "Subsquid", "Tailwind", "GraphQL", "React", "Supabase", "ThirdWeb"],
        items: [{}],
        url: "https://www.holdex.io/"
    },
    {
        startDate: "2024",
        endDate: "2025",
        name: "Frontend Developer at Nitel",
        description: "Developed internal tools using Angular and SCSS. Integrated Salesforce for process automation and real-time reporting.",
        stack: ["Angular", "SCSS", "Salesforce", "TypeScript", "Express"],
        items: [{}],
        url: ""
    },
    {
        startDate: "2024",
        endDate: "Freelance",
        name: "Designer & Mobile Engineer at Gesmia",
        description: "Led the App design and developed an iOS/Android integrating an API built in C# for realtime information provided by the Backend team.",
        stack: ["React Native", "Zustand", "Storybook", "Figma", "Web Sockets"],
        items: [{}],
        url: "https://www.gesmia.com/"
    },
    {
        startDate: "2022, 2024",
        endDate: "Full Time",
        name: "Frontend Developer & Full-Stack at Golabs Tech",
        description: "Development of more than 5 projects, including a web app for influencers used by L'Oréal Paris, a .NET API for electric chargers and a coin exchange features for mobile and web app.",
        stack: ["React", "Redux", "Next", ".NET", "Angular", "Laravel", "Node"],
        items: [{}],
        url: "https://golabstech.com"
    },
    {
        startDate: "2023",
        endDate: "Contributor",
        name: "Figma Design Community Contributor",
        description: "Achieved +30,000 Figma Interfaces Downloads Milestone through open-source contributions.",
        stack: ["Figma", "Framer Motion", "Three JS", "Blender 3D"],
        items: [{}],
        url: "https://www.figma.com/@matthewvogas"
    },
    {
        startDate: "2021",
        endDate: "Co-Founder",
        name: "Co-Founder at Hoosling & Front-End Engineer",
        description: "Developed a crowdfunding platform with React and PHP, achieving $2K MRR, handling UI/UX, frontend development, and usability testing with Hotjar and Figma.",
        stack: ["React", "PHP", "Figma", "Hotjar", "JavaScript"],
        items: [{}],
        url: "https://medium.com/@matthewvogas/levantar-inversi%C3%B3n-con-criptomonedas-futurista-o-una-estupidez-80dbfb5bc3a?source=user_profile---------3----------------------------"
    },
    {
        startDate: "2021",
        endDate: "Contributor",
        name: "Web3 Costa Rica Site",
        description: "Designed and developed the community website for Web3 Costa Rica at my 17 years old.",
        stack: ["Next.js", "Figma", "Rizz"],
        items: [{}],
        url: "https://web3cr.com"
    },
    {
        startDate: "2021, 2022",
        endDate: "Freelance",
        name: "Freelance",
        description: "Working through freelance projects at 16 years old, including Cavernas Del Venado Expedition, an Shopping center in Quito, Ecuador and some hotels in Costa Rica",
        stack: ["Figma", "WordPress", "CMSs", "JavaScript"],
        items: [{}],
        url: ""
    },
];

export const projects = [
    {
        image: PixelPerfect,
        name: "Top Designer in Figma",
        description: "Over 30k open source downloads speak for me on Figma",
        items: [{}],
        url: "https://figma.com/@matthewvogas",
    },
    {
        image: Index,
        name: "Index Fun",
        description: "One of the top 10 most revolutionary web3 project in Asia according to Crypyo Banter magazine, leading the frontend app and design",
        items: [{}],
        url: "http://index.fun/",
    },
    {
        image: Hoosling,
        name: "Hoosling",
        description: "At 16, I built Hoosling—a crypto fundraiser that got $60-80K in proposals and caught the eye of Open English’s VP (my mentor). It failed, but I learned tons.",
        items: [{}],
        url: "https://www.figma.com/design/4Q4aTd7JEuulhu1CTB7Hk5/Nothing---Vue?node-id=14-2&t=7oyb7DL2tkJv0979-1",
    },
    {
        image: GesmiaWeb,
        name: "Gesmia - iOS Security App",
        description: "Family app: share your location with friends & family, report incidents, and view maps of safe & dangerous areas.",
        items: [{}],
        url: "https://gesmia.com/",
    },
];

export const blogs = [
    {
        name: "¿Levantar inversión con criptomonedas, futurista o una estupidez?",
        time: "4 minutes",
        items: [{ url: "https://medium.com/@mvttheo/levantar-inversi%C3%B3n-con-criptomonedas-futurista-o-una-estupidez-80dbfb5bc3a", icon: LinkSvg, description: "Read in Medium" }]
    },
    {
        name: "¿Cómo un niño de 16 años crea una app para suprimir la depresión de los profesores?",
        time: "3 minutes",
        items: [{ url: "https://medium.com/@mvttheo/como-un-ni%C3%B1o-de-16-a%C3%B1os-crea-una-app-para-suprimir-la-depresi%C3%B3n-de-los-profesores-4a6417fe8efe", icon: LinkSvg, description: "Read in Medium" }]
    },
];

export const social = [
    {
        icon: figma,
        name: "Figma",
        url: "https://www.figma.com/@matthewvogas"
    },
    {
        icon: github,
        name: "Github",
        url: "https://github.com/matthewvogas"
    },
    {
        icon: linkedin,
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/matthewvogas/"
    },
    {
        icon: instagram,
        name: "Instagram",
        url: "https://www.instagram.com/matthewvogas/"
    },
];

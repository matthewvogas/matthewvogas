import LinkSvg from '../../public/icons/Link.svg'

import figma from '../../public/icons/figma.svg'
import github from '../../public/icons/github.svg'
import linkedin from '../../public/icons/linkedin.svg'
import instagram from '../../public/icons/instagram.svg'

import GesmiaWeb from '../../public/images/projects/GesmiaWeb.png'
import PixelPerfect from '../../public/images/projects/PixelPerfect.png'
import Nothing from '../../public/images/projects/Nothing.png'

export const experience = [
    {
        startDate: "Sep. 2024",
        endDate: "Present",
        name: "Designer & Product Developer at Holdex",
        description: "Designed, developed, and reviewed code as part of a high-performance team for Truflation, Index.Fun, Clearpool Protocol and Ozean Protocol development.",
        stack: ["Svelte", "Subsquid", "Tailwind", "GraphQL", "SCSS", "Next", "React"],
        items: [{}],
        url: "https://www.holdex.io/"
    },
    {
        startDate: "Aug. 2024",
        endDate: "Sep. 2024",
        name: "Designer & Frontend Mobile Engineer at Gesmia",
        description: "Led the UI design using Atomic Design and developed an iOS/Android app with React Native, Zustand, and Storybook, integrating an API built in C# - .NET provided by the Backend team.",
        stack: ["React Native", "Zustand", "Storybook", "C#", ".NET"],
        items: [{}],
        url: "https://www.gesmia.com/"
    },
    {
        startDate: "Sept. 2022",
        endDate: "Jul. 2024",
        name: "Frontend Developer & Designer at Golabs Tech",
        description: "Optimized a legacy e-commerce with React/Redux, cutting load times by 20%, built a web app for influencers used by L'Oréal Paris, developed a .NET API for electric chargers, enhanced security in Angular/.NET sites, and led coin exchange features for mobile and web apps.",
        stack: ["React", "Redux", "Next.js", ".NET", "Angular", "Laravel"],
        items: [{}],
        url: "https://golabstech.com"
    },
    {
        startDate: "2023",
        endDate: "Present",
        name: "Figma Design Community Contributor",
        description: "Achieved +27,000 Figma Interfaces Downloads Milestone through open-source contributions.",
        stack: ["Figma"],
        items: [{}],
        url: "https://www.figma.com/@matthewvogas"
    },
    {
        startDate: "Oct. 2021",
        endDate: "Sept. 2022",
        name: "Front-End Engineer Web3 & Co-Founder at Hoosling",
        description: "Developed a crowdfunding platform with React and PHP, achieving $4K MRR, handling UI/UX, frontend development, and usability testing with Hotjar and Figma.",
        stack: ["React", "PHP", "Figma", "Hotjar"],
        items: [{}],
        url: "https://medium.com/@matthewvogas/levantar-inversi%C3%B3n-con-criptomonedas-futurista-o-una-estupidez-80dbfb5bc3a?source=user_profile---------3----------------------------"
    },
    {
        startDate: "2021",
        endDate: "2021",
        name: "Web3 Costa Rica Contributor",
        description: "Designed and developed the community website for Web3 Costa Rica at my 17 years old.",
        stack: ["Next.js", "Figma"],
        items: [{}],
        url: "https://web3cr.com"
    },
    {
        startDate: "May. 2021",
        endDate: "Sept. 2022",
        name: "Designer & Developer (Freelancer)",
        description: "Redesigned the Cavernas Expedition site in Figma and built it on WordPress, boosting bookings by 40%. Led UI/UX updates for Bungalows Las Iguanas and Cabañas del Norte on web and mobile. Developed the Mall World Plaza redesign in WordPress.",
        stack: ["Figma", "WordPress", "Sketch", "TS", "JS"],
        items: [{}],
        url: ""
    },
];

export const projects = [
    {
        image: GesmiaWeb,
        name: "Landing Pages & MVPs",
        description: "From launching landing pages to creating fast MVPs",
        items: [{}],
        url: "https://gesmia.com/",
    },
    {
        image: PixelPerfect,
        name: "Pixel Perfect Eye",
        description: "Over 27k open source downloads speak for me on Figma",
        items: [{}],
        url: "https://figma.com/@matthewvogas",
    },
    {
        image: Nothing,
        name: "Creativity",
        description: "Always keeping in mind the balance between innovation and functionality.",
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

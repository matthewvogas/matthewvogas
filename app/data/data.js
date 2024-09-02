import LinkSvg from '../../public/icons/Link.svg'

import figma from '../../public/icons/figma.svg'
import github from '../../public/icons/github.svg'
import linkedin from '../../public/icons/linkedin.svg'
import instagram from '../../public/icons/instagram.svg'

import Convida from '../../public/images/projects/Convida.png'
import Harvest from '../../public/images/projects/Harvest.png'
import Mall from '../../public/images/projects/Mall.png'
import Studently from '../../public/images/projects/Studently.png'
import Venado from '../../public/images/projects/Venado.png'

export const experience = [
    {
        startDate: "Aug. 2024",
        endDate: "Sep. 2024",
        name: "Designer & Frontend Mobile Engineer at Gesmia",
        description: "Led the UI design using Atomic Design and developed an iOS/Android app with React Native, Zustand, and Storybook, integrating an API built in C# - .Net provided by the Backend team.",
        stack: ["React Native", "Zustand", "Storybook", "C#", ".Net"],
        items: [{}],
        url: "https://www.gesmia.com/"
    },
    {
        startDate: "Sept. 2022",
        endDate: "Jul. 2024",
        name: "Frontend Developer & Designer at Golabs Tech",
        description: "Optimized a legacy e-commerce platform using React and Redux, reducing load times by 20%. Developed a web app for connecting influencers with brands, used by L'Oreal Paris in pilot campaigns. Developed an API in .NET for electric chargers and updated legacy Angular and .NET sites with CORS security enhancements. Led the implementation of a coin exchange functionality in a mobile and web app.",
        stack: ["React", "Redux", "Next.js", ".Net", "Angular", "Laravel"],
        items: [{}],
        url: "https://golabstech.com"
    },
    {
        startDate: "2023",
        endDate: "Present",
        name: "Figma Design Community Contributor",
        description: "Achieved +25,000 Figma Interfaces Downloads Milestone through open-source contributions.",
        stack: ["Figma"],
        items: [{}],
        url: "https://www.figma.com/matthewvogas"
    },
    {
        startDate: "Oct. 2021",
        endDate: "Sept. 2022",
        name: "Front-End Engineer Web3 & Co Founder at Hoosling",
        description: "Developed a crowdfunding platform with a React frontend and PHP backend. Reached $4k Monthly Recurring Revenue. Responsible for UI/UX, frontend development, and usability testing with Hotjar & Figma prototypes.",
        stack: ["React", "PHP", "Figma", "Hotjar"],
        items: [{}],
        url: "https://medium.com/@matthewvogas/levantar-inversi%C3%B3n-con-criptomonedas-futurista-o-una-estupidez-80dbfb5bc3a?source=user_profile---------3----------------------------"
    },
    {
        startDate: "2021",
        endDate: "2021",
        name: "Web3 Costa Rica Contributor",
        description: "Designed and developed the community website for Web3 Costa Rica at my 17yo.",
        stack: ["Web Development", "Design"],
        items: [{}],
        url: "https://web3cr.com"
    },
    {
        startDate: "May. 2021",
        endDate: "Sept. 2022",
        name: "Designer & Developer (Freelancer)",
        description: "Redesigned the website for Cavernas Expedition using Figma and developed it on WordPress, resulting in a 40% increase in bookings. Redesigned UI/UX for Hotel Bungalows Las Iguanas & Hotel Cabañas del Norte for Web and Mobile using Figma. Collaborated with the design team to redesign the website for Mall World Plaza and developed it in WordPress.",
        stack: ["Figma", "WordPress", "Sketch"],
        items: [{}],
        url: ""
    },
];


export const projects = [
    {
        image: Convida,
        name: "Convida",
        description: "QA and front-end testing for a personal care app iOS",
        items: [{ url: "https://apps.apple.com/us/app/convida/id1635652026", icon: LinkSvg, description: "App Store" }, { url: "https://play.google.com/store/apps/details?id=fit.convida", icon: LinkSvg, description: "Google Play" }],
        url: "https://convida.fit/",
    },
    {
        image: Harvest,
        name: "Harvest To Market",
        description: "Search Engine Front-End Flow for a Farmers and Markets App",
        items: [{ url: "https://www.linkedin.com/in/andrew-walters-24397426/", icon: LinkSvg, description: "Andrew Walters" }],
        url: "https://harvesttomarket.com/",
    },
    {
        image: Studently,
        name: "Studently",
        description: "Web app Design for an education Startup",
        items: [{ }],
        url: "https://www.figma.com/design/KCnLCN7Ny5DkOER72d3b0e/Studently-App?node-id=0-1&t=xQd6q1CosCYD8aMG-1",
    },
    {
        image: Mall,
        name: "World Plaza Mall, Ecuador",
        description: "Design of Mall Ecommerce in Ecuador",
        items: [{}],
        url: "https://www.figma.com/community/file/1307779821278258232/eccommerce-web-apple-ux",
    },
    {
        image: Venado,
        name: "Cavernas del Venado",
        description: "Design, development and maintenance of Tours Website",
        items: [{ }],
        url: "https://cavernasdelvenado.com",
    },
]
export const blogs = [
    {
        name: "¿Levantar inversión con criptomonedas, futurista o una estupidez?",
        time: "4 minutes",
        items: [{ url: "https://medium.com/@mvttheo/levantar-inversi%C3%B3n-con-criptomonedas-futurista-o-una-estupidez-80dbfb5bc3a", icon: LinkSvg, description: "Read in Medium" }]
    },
    {
        name: "Como un niño de 16 años crea una app para suprimir la depresión de los profesores",
        time: "3 minutes",
        items: [{ url: "https://medium.com/@mvttheo/como-un-ni%C3%B1o-de-16-a%C3%B1os-crea-una-app-para-suprimir-la-depresi%C3%B3n-de-los-profesores-4a6417fe8efe", icon: LinkSvg, description: "Read in Medium" }]
    },
]

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
]
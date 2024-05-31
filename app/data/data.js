import LinkSvg from '../../public/icons/Link.svg'

import figma from '../../public/icons/figma.svg'
import github from '../../public/icons/github.svg'
import linkedin from '../../public/icons/linkedin.svg'
import instagram from '../../public/icons/instagram.svg'

import Convida from '../../public/images/projects/Convida.png'
import Bungalows from '../../public/images/projects/Bungalows.png'
import Harvest from '../../public/images/projects/Harvest.png'
import Hoosling from '../../public/images/projects/Hoosling.png'
import Mall from '../../public/images/projects/Mall.png'
import Norte from '../../public/images/projects/Norte.png'
import Studently from '../../public/images/projects/Studently.png'
import Transfer from '../../public/images/projects/Transfer.png'
import Venado from '../../public/images/projects/Venado.png'
import Web3 from '../../public/images/projects/Web3.png'

export const experience = [
    {
        startDate: "2022",
        endDate: "Present",
        name: "Full-Stack Engineer at Golabs",
        description: "Increased ROI by 10x with new features in an influencer app. Implemented a billing API for electric vehicles in Costa Rica. Improved product search with UI/UX for a farming company in the USA. Reduced vulnerabilities by 96% in a client/server app. Integrated a reward redemption web app for Golabs.",
        stack: ["JavaScript", "TypeScript", "React", "Redux", "Laravel", ".Net", "Vue", "Storybook"],
        items: [{}],
        url: "https://www.linkedin.com/company/golabstech/"
    },
    {
        startDate: "2021",
        endDate: "2022",
        name: "Full-Stack Engineer as a Freelance",
        description: "Designed, developed, and maintained the Cavernas Del Venado website, increasing visitors by 380% and sales by 40% in 3 months. Improved SEO by 200% in 5 months for Bungalows Las Iguanas. Boosted sales by 30% in 2 months for Cabañas del Norte through website design and development, and developed several other websites.",
        stack: ["React", "PHP", "WordPress", "JavaScript", "Figma"],
        items: [{}],
        url: "https://www.figma.com/@matthewvogas"
    },
    {
        startDate: "2021",
        endDate: "2022",
        name: "Hoosling Startup Co-Founder",
        description: "Developed a cryptocurrency fundraising platform, achieving monthly recurring revenue of $4,000 for 2 months and obtaining 2 venture capital investment proposals.",
        stack: ["Team Colaboration", "Client Spectative", "User Research", "UI/UX"],
        items: [{},],
        url: "https://medium.com/@mvttheo/levantar-inversi%C3%B3n-con-criptomonedas-futurista-o-una-estupidez-80dbfb5bc3a"
    },
]
export const projects = [
    {
        image: Convida,
        name: "Convida",
        description: "QA and front-end testing for a personal care app iOS",
        items: [{ url: "https://apps.apple.com/us/app/convida/id1635652026", icon: LinkSvg, description: "App Store" }, { url: "https://play.google.com/store/apps/details?id=fit.convida", icon: LinkSvg, description: "Google Play" }],
        url: "https://convida.fit/",
    },
    {
        image: Bungalows,
        name: "Bungalows Las Iguanas",
        description: "Design, development and maintenance of Website Hotel",
        items: [{ }],
        url: "https://bungalowslasiguanas.com/",
    },
    {
        image: Harvest,
        name: "Harvest To Market",
        description: "Search Engine for a Farmers and Markets App",
        items: [{ url: "https://www.linkedin.com/in/andrew-walters-24397426/", icon: LinkSvg, description: "Andrew Walters" }],
        url: "https://harvesttomarket.com/",
    },
    {
        image: Hoosling,
        name: "Hoosling",
        description: "Cryptocurrency fundraising platform",
        items: [{}],
        url: "https://medium.com/@matthewvogas/levantar-inversi%C3%B3n-con-criptomonedas-futurista-o-una-estupidez-80dbfb5bc3a?source=user_profile---------3----------------------------",
    },
    {
        image: Mall,
        name: "World Plaza Mall, Ecuador",
        description: "Design of Mall Ecommerce in Ecuador",
        items: [{}],
        url: "https://www.figma.com/community/file/1307779821278258232/eccommerce-web-apple-ux",
    },
    {
        image: Norte,
        name: "Cabañas del Norte",
        description: "Design, development and maintenance of Website Hotel",
        items: [{ }],
        url: "https://cabanasdelnorte.com/",
    },
    {
        image: Studently,
        name: "Studently",
        description: "Web app Design for an education Startup",
        items: [{ }],
        url: "https://www.figma.com/design/KCnLCN7Ny5DkOER72d3b0e/Studently-App?node-id=0-1&t=xQd6q1CosCYD8aMG-1",
    },
    {
        image: Transfer,
        name: "Transfer",
        description: "Design, development and maintenance of Transfer Website",
        items: [{ }],
        url: "https://arenalvolcanotransfer.com",
    },
    {
        image: Venado,
        name: "Venado",
        description: "Design, development and maintenance of Tours Website",
        items: [{ }],
        url: "https://cavernasdelvenado.com",
    },
    {
        image: Web3,
        name: "Web3",
        description: "Donation of a website for the web3 Costa Rica community",
        items: [{ url: "https://web3cr.com/", icon: LinkSvg, description: "Website" }, { url: "https://discord.gg/mnKzQzA3", icon: LinkSvg, description: "Discord Comunnity" }],
        url: "",
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
        url: "https://github.com/bvrgerqueen"
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
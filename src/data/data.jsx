import {FaCode, FaJs, FaReact, FaNodeJs} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";
import Project01 from "../assets/Project01.jpeg"
import Project02 from "../assets/Project02.jpeg"
import Project03 from "../assets/Project03.jpeg"
import Project04 from "../assets/Project04.jpeg"
import Project05 from "../assets/Project05.jpeg"
import Project06 from "../assets/Project06.jpeg"
const navItems = [
    {
       label: "Home",
       href: "#home"
    },

    {
        label: "Skills",
        href: "#skills"
    },
    {
        label: "Projects",
        href: "#projects"
    },
    {
        label: "Contact",
        href: "#contact"
    }
]

const skills = [
    {
        icon: <FaCode />,
        label: "Html & Css",
        description: "Structured and responsive interfaces built with modern CSS.",
        rank: "Advanced"
    },

    {   
        icon: <FaJs />,
        label: "JavaScript",
        description: "Dynamic and interactive experiences for modern web applications.",
        rank: "Advanced"
    },
    {
        icon: <FaReact />,
        label: "React",
        description: "Building scalable and component-based interfaces.",
        rank: "Intermediate"
    },
    {
        icon: <FaNodeJs />,
        label: "Node.js",
        description: "Backend fundamentals for building complete applications.",
        rank: "Beginner"
    },

    {
        icon: <RiTailwindCssFill />,
        label: "Tailwind CSS",
        description: "Fast and consistent UI development with utility-first styling.",
        rank: "Advanced"
    },

    {
        icon: <BiLogoPostgresql />,
        label: "PostgreSQL",
        description: "Managing structured data and relational databases.",
        rank: "Intermediate"
    }
]


const projects = [
    {
        image: Project06, // substitua pela imagem do projeto
        name: "NexAgender – Smart Scheduling Platform",
        desc: "NexAgender is a smart scheduling and service management platform currently in development. Designed for professionals and businesses, it simplifies appointments, client management, and financial tracking while introducing intelligent automation and data-driven insights.",
        situation: "Developing",
        skills: ["Next.js", "Node.js", "PostgreSQL", "Tailwindcss"],
        link: "#",
        github: "#"
    },

    {
        image: Project05,
        name: "Aurora Pro - Meta AI",
        desc: "Developed for a client. Aurora Pro is a Chrome extension and landing page that automates creative workflows on Meta AI — batch image and animation generation, real-time task monitoring, and automatic file organization. Features smart error handling, retry queues, and bilingual support (EN/PT-BR).",
        situation: "Live",
        skills: ["React", "Tailwindcss", "Chrome Extension", "Meta AI", "JavaScript"],
        link: "https://aurorapro.netlify.app/",
        github: "https://github.com/adoniasgoesw/Aurora"
    },
    {   
        image: Project01,
        name: "iPhone 17 Experience",
        desc: "Explore the ultimate iPhone 17 Pro – titanium design, pro-level camera, blazing A18 chip, and features crafted for the next generation of mobile performance",
        situation: "Live",
        skills: ["React", "Tailwindcss"],
        link:"https://iphonefornow.netlify.app/",
        github: "https://github.com/adoniasgoesw/iPhone-17"
    },

    {   image: Project02,
        name: "Layers – The Design Flow",
        desc: "A modern landing page for Layers, a powerful design tool that lets you create, prototype, and collaborate effortlessly. Combine simplicity with advanced features to stay in your creative flow.",
        situation: "Live",
        skills: ["React", "Tailwindcss"],
        link:"https://layersdesigntools.netlify.app/",
        github: "https://github.com/adoniasgoesw/Layers-Design-Tools"
    },

    {
        image: Project03,
        name: "FlorexTrade – Next-Gen Forex",
        desc: "FlorexTrade is a modern forex trading platform designed for both novice and professional traders. With real-time analytics, institutional-grade security, and advanced trading tools, users can trade confidently and efficiently.",
        situation: "Live",
        skills: ["React", "Tailwindcss"],
        link:"https://florextrader.netlify.app/",
        github: "https://github.com/adoniasgoesw/FlorexTrade"
    },

    {
        image: Project04,
        name: "RPG Dev Portfolio",
        desc: "Embark on a developer’s quest: a front-end portfolio styled like an RPG adventure, where each project is a mission, every skill is a power unlocked, and the UI blends magic with modern web technologies.",
        situation: "Live",
        skills: ["React", "Tailwindcss"],
        link:"https://adoniasgoes.netlify.app/",
        github: "https://github.com/adoniasgoesw/Portfolio/tree/main"
    }

    

   
]
export { navItems , skills, projects};
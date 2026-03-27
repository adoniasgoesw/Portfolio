import {FaCode, FaJs, FaReact, FaNodeJs} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";
import Project01 from "../assets/Project01.jpeg"
import Project02 from "../assets/Project02.jpeg"
import Project03 from "../assets/Project03.jpeg"
import Project04 from "../assets/Project04.jpeg"
import Project05 from "../assets/Project05.jpeg"
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
        image: Project01,
        name: "iPhone 17 Experience",
        desc: "Explore the ultimate iPhone 17 Pro – titanium design, pro-level camera, blazing A18 chip, and features crafted for the next generation of mobile performance",
        skills: ["React", "Tailwindcss"],
        link:"https://iphonefornow.netlify.app/",
        github: "https://github.com/adoniasgoesw/iPhone-17"
    },

    {   image: Project02,
        name: "Layers – The Design Flow",
        desc: "A modern landing page for Layers, a powerful design tool that lets you create, prototype, and collaborate effortlessly. Combine simplicity with advanced features to stay in your creative flow.",
        skills: ["React", "Tailwindcss"],
        link:"https://layersdesigntools.netlify.app/",
        github: "https://github.com/adoniasgoesw/Layers-Design-Tools"
    },

    {
        image: Project03,
        name: "FlorexTrade – Next-Gen Forex",
        desc: "FlorexTrade is a modern forex trading platform designed for both novice and professional traders. With real-time analytics, institutional-grade security, and advanced trading tools, users can trade confidently and efficiently.",
        skills: ["React", "Tailwindcss"],
        link:"https://florextrader.netlify.app/",
        github: "https://github.com/adoniasgoesw/FlorexTrade"
    },

    {
        image: Project04,
        name: "RPG Dev Portfolio",
        desc: "Embark on a developer’s quest: a front-end portfolio styled like an RPG adventure, where each project is a mission, every skill is a power unlocked, and the UI blends magic with modern web technologies.",
        skills: ["React", "Tailwindcss"],
        link:"https://adoniasgoes.netlify.app/",
        github: "https://github.com/adoniasgoesw/Portfolio/tree/main"
    },

    {
        image: Project05, // substitua pela imagem do Aurora Pro
        name: "Aurora Pro",
        desc: "Aurora Pro is a Chrome extension and modern landing page that automates your Meta AI workflow. Generate images and animations in batches, monitor tasks in real time, and keep your files organized—boosting your creative flow with minimal manual effort.",
        skills: ["React", "Tailwindcss", "Chrome Extension", "Meta AI", "JavaScript"],
        link: "https://aurorapro.netlify.app/",
        github: "https://github.com/adoniasgoesw/Aurora"
    }
]
export { navItems , skills, projects};
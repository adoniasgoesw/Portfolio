import {FaCode, FaJs, FaReact, FaNodeJs} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";
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
        description: "Semantic markup and responsive styling with modern CSS.",
        rank: "Advanced"
    },

    {   
        icon: <FaJs />,
        label: "JavaScript",
        description: "Interactive web development with dynamic behavior and client-side scripting.",
        rank: "Advanced"
    },
    {
        icon: <FaReact />,
        label: "React",
        description: "Building scalable and efficient web applications with React.",
        rank: "Intermediate"
    },
    {
        icon: <FaNodeJs />,
        label: "Node.js",
        description: "Building scalable and efficient web applications with Node.js.",
        rank: "Beginner"
    },

    {
        icon: <RiTailwindCssFill />,
        label: "Tailwind CSS",
        description: "Building scalable and efficient web applications with Tailwind CSS.",
        rank: "Advanced"
    },

    {
        icon: <BiLogoPostgresql />,
        label: "PostgreSQL",
        description: "Building scalable and efficient web applications with PostgreSQL.",
        rank: "Intermediate"
    }
]

export { navItems , skills};
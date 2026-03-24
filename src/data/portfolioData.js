import { GraduationCap, BookOpen, Github, Linkedin, Instagram, Youtube } from "lucide-react";
import PucprCertificate from "../assets/pucpr.pdf";
import PucprCertificateImage from "../assets/pucImg.png";

export const socials = [
  { label: "LinkedIn", href: "https://linkedin.com", Icon: Linkedin },
  { label: "Instagram", href: "https://instagram.com", Icon: Instagram },
  { label: "YouTube", href: "https://youtube.com", Icon: Youtube },
  { label: "GitHub", href: "https://github.com", Icon: Github },
];

export const achievements = [
  {
    Course: "System Analysis and Development",
    Institution: "PUCPR",
    Date: "2026",
    certificateId: "PUCPR-2026",
    Description: "I graduated from PUCPR in 2026.",
    Icon: GraduationCap,
    image: null,
    Tag: "Epic Reward",
    Situation: "Graduated",
    tags: ["GRADUATION", "TECH"],
    certificated: PucprCertificate,
    certificateImage: PucprCertificateImage,
  },
  {
    Course: "React by Zero to Hero",
    Institution: "Udemy",
    Date: "2026",
    certificateId: "UDEMY-REACT-2026",
    Description: "I learned React from Udemy in 2026.",
    Icon: BookOpen,
    image: null,
    Tag: "In Progress",
    Situation: "In Course",
    tags: ["FRONTEND", "REACT"],
  },
  {
    Course: "The Complete 2026 Web Development Bootcamp",
    Institution: "Udemy",
    Date: "2026",
    certificateId: "UDEMY-WEB-2026",
    Description: "I learned Web Development from Udemy in 2026.",
    Icon: BookOpen,
    image: null,
    Tag: "In Progress",
    Situation: "In Course",
    tags: ["WEB", "DEVELOPMENT"],
  },
];

export const projects = [
  {
    id: "layers",
    title: "Layers Design Tool",
    description:
      "Modern landing page for a powerful design tool that combines simplicity with advanced features.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://layersdesigntools.netlify.app/",
    githubUrl: "https://github.com/adoniasgoesw/Layers-Design-Tools",
  },
  {
    id: "virtualr",
    title: "VirtualR",
    description:
      "Modern, responsive landing page for a Virtual Reality experience/product, built with React + Vite + Tailwind CSS and deployed on Netlify.",
    technologies: ["React", "Vite", "Tailwind CSS"],
    liveUrl: "https://virtualrealityexperience.netlify.app/",
    githubUrl: "https://github.com/adoniasgoesw/VirtualR",
  },
  {
    id: "portfolio-rpg",
    title: "Portfolio RPG Website",
    description:
      "A gamified personal landing page with character stats, leveling system, and quest-based project discovery.",
    technologies: ["React", "Tailwind"],
    liveUrl: "https://adoniasgoes.dev",
    githubUrl: "https://github.com/adoniasgoesw/Portfolio",
  },
  {
    title: "Task Manager Dashboard",
    id: "task-manager",
    description:
      "Kanban-style task manager with drag-and-drop columns, status filters, and persistent local data.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://example.com/task-manager",
    githubUrl: "https://github.com/adoniasgoesw/task-manager-dashboard",
  },
  {
    title: "Weather Insights",
    id: "weather-insights",
    description:
      "Weather forecast app with dynamic charts, geolocation support, and clean responsive layouts.",
    technologies: ["React", "Chart.js", "API"],
    liveUrl: "https://example.com/weather-insights",
    githubUrl: "https://github.com/adoniasgoesw/weather-insights",
  },
  {
    title: "Dev Notes CMS",
    id: "dev-notes-cms",
    description:
      "Markdown-based content manager for publishing technical notes with tags, search, and drafts.",
    technologies: ["Node.js", "React", "MongoDB"],
    liveUrl: "https://example.com/dev-notes",
    githubUrl: "https://github.com/adoniasgoesw/dev-notes-cms",
  },
  {
    title: "Design System Kit",
    id: "design-system-kit",
    description:
      "Reusable UI component library with tokens, accessibility checks, and Storybook documentation.",
    technologies: ["React", "Storybook", "TypeScript"],
    liveUrl: "https://example.com/design-system",
    githubUrl: "https://github.com/adoniasgoesw/design-system-kit",
  },
  {
    title: "Realtime Chat Hub",
    id: "realtime-chat-hub",
    description:
      "Group chat with channels, typing indicators, and message persistence powered by WebSocket.",
    technologies: ["React", "Node.js", "Socket.io"],
    liveUrl: "https://example.com/chat-hub",
    githubUrl: "https://github.com/adoniasgoesw/realtime-chat-hub",
  },
];

export const aboutStats = {
  yearsExp: 3,
  questsCompleted: projects.length,
  openSourcePRs: 24,
  certifiedTracks: achievements.filter(
    (achievement) => achievement?.Situation === "Graduated"
  ).length,
};

export const navItems = [
  { label: "Home", href: "#hero" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

import { GraduationCap, BookOpen, Github, Linkedin, Mail, Instagram, Youtube } from "lucide-react";
import PucprCertificate from '../assets/pucpr.pdf';
import PucprCertificateImage from '../assets/pucImg.png';
import Project01Image from '../assets/project_01.png';
import Project02Image from '../assets/project_02.png';

export const socials = [
  { label: "LinkedIn", href: "https://linkedin.com", Icon: Linkedin },
  { label: "Instagram", href: "https://instagram.com", Icon: Instagram },
  { label: "YouTube", href: "https://youtube.com", Icon: Youtube },
  { label: "Email", href: "mailto:hello@example.com", Icon: Mail },
  { label: "GitHub", href: "https://github.com", Icon: Github },
];

export const achievements = [
  {
      Course: 'System Analysis and Development',
      Institution: 'PUCPR',
      Date: '2026',
      certificateId: 'PUCPR-2026',
      Description: 'I graduated from PUCPR in 2026.',
      Icon: GraduationCap,
      image: null,
      Tag: 'Epic Reward',
      Situation: 'Graduated',
      tags: ['GRADUATION', 'TECH'],
      certificated: PucprCertificate,
      certificateImage: PucprCertificateImage,
  },
  {
      Course: 'React by Zero to Hero',
      Institution: 'Udemy',
      Date: '2026',
      certificateId: 'UDEMY-REACT-2026',
      Description: 'I learned React from Udemy in 2026.',
      Icon: BookOpen,
      image: null,
      Tag: 'In Progress',
      Situation: 'In Course',
      tags: ['FRONTEND', 'REACT'],
  },
  {
      Course: 'The Complete 2026 Web Development Bootcamp',
      Institution: 'Udemy',
      Date: '2026',
      certificateId: 'UDEMY-WEB-2026',
      Description: 'I learned Web Development from Udemy in 2026.',
      Icon: BookOpen,
      image: null,
      Tag: 'In Progress',
      Situation: 'In Course',
      tags: ['WEB', 'DEVELOPMENT'],
  },
];

export const projects = [
  {
    id: "layers",
    title: 'Layers Design Tool',
    descriptionKey: "projectsContent.layers.description",
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    liveUrl: 'https://layersdesigntools.netlify.app/',
    githubUrl: 'https://github.com/adoniasgoesw/Layers-Design-Tools',
    image: Project01Image,
  },
  {
    id: "virtualr",
    title: 'VirtualR',
    descriptionKey: "projectsContent.virtualr.description",
    technologies: ['React', 'Vite', 'Tailwind CSS'],
    liveUrl: 'https://virtualrealityexperience.netlify.app/',
    githubUrl: 'https://github.com/adoniasgoesw/VirtualR',
    image: Project02Image,
  },
  {
    id: "portfolio-rpg",
    title: 'Portfolio RPG Website',
    descriptionKey: "projectsContent.portfolioRpg.description",
    technologies: ['React', 'Tailwind'],
    liveUrl: '#',
    githubUrl: '#',
    image: null,
  },
  {
    title: 'Portfolio RPG Website',
    id: "portfolio-rpg",
    descriptionKey: "projectsContent.portfolioRpg.description",
    technologies: ['React', 'Tailwind'],
    liveUrl: '#',
    githubUrl: '#',
    image: null,
  },

  {
    title: 'Portfolio RPG Website',
    id: "portfolio-rpg",
    descriptionKey: "projectsContent.portfolioRpg.description",
    technologies: ['React', 'Tailwind'],
    liveUrl: '#',
    githubUrl: '#',
    image: null,
  },
  {
    title: 'Portfolio RPG Website',
    id: "portfolio-rpg",
    descriptionKey: "projectsContent.portfolioRpg.description",
    technologies: ['React', 'Tailwind'],
    liveUrl: '#',
    githubUrl: '#',
    image: null,
  },
];

export const aboutStats = {
  yearsExp: 3,
  projectsDone: projects.length,
  certificates: achievements.filter(
    (achievement) => achievement?.Situation === "Graduated"
  ).length,
};

export const navItems = [
  { labelKey: "nav.home", href: "#hero" },
  { labelKey: "nav.skills", href: "#skills" },
  { labelKey: "nav.projects", href: "#projects" },
  { labelKey: "nav.hero", href: "#about" },
  { labelKey: "nav.achievements", href: "#achievements" },
  { labelKey: "nav.contact", href: "#contact" },
];
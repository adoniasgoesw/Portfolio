import SkillCard from "../components/SkillCard";
import SectionHeader from "../components/SectionHeader";
import { useLanguage } from "../context/LanguageContext";
import useT from "../i18n/useT";

const skillsBase = [
  {
    name: "HTML & CSS",
    level: "Advanced",
    description: {
      en: "Semantic markup and responsive styling with modern CSS.",
      pt: "Marcação semântica e estilização responsiva com CSS moderno.",
    },
  },
  {
    name: "JavaScript",
    level: "Advanced",
    description: {
      en: "ES6+, async patterns, and DOM manipulation.",
      pt: "ES6+, padrões assíncronos e manipulação do DOM.",
    },
  },
  {
    name: "TypeScript",
    level: "Intermediate",
    description: {
      en: "Type-safe development for scalable applications.",
      pt: "Desenvolvimento com segurança de tipos para aplicações escaláveis.",
    },
  },
  {
    name: "React",
    level: "Advanced",
    description: {
      en: "Component-driven UIs with hooks and state management.",
      pt: "Interfaces baseadas em componentes com hooks e gerenciamento de estado.",
    },
  },
  {
    name: "Node.js",
    level: "Intermediate",
    description: {
      en: "Server-side APIs and backend services.",
      pt: "APIs no servidor e serviços de backend.",
    },
  },
  {
    name: "Tailwind CSS",
    level: "Advanced",
    description: {
      en: "Utility-first CSS for rapid UI development.",
      pt: "CSS utilitário-first para desenvolvimento rápido de interfaces.",
    },
  },
];

export default function Skills() {
  const { lang } = useLanguage();
  const t = useT();
  const skills = skillsBase.map((s) => ({
    ...s,
    description: s.description[lang] ?? s.description.en,
  }));

  return (
    <section id="skills" className="px-4 sm:px-10 md:px-16 lg:px-20 xl:px-40 py-16 min-h-[800px]">
      <div className="max-w-7xl mx-auto flex flex-col gap-10 items-center justify-cente mt-50 sm:mt-20 ">
        <SectionHeader
          tag={t("skills.tag")}
          title={t("skills.title")}
          description={t("skills.description")}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-center items-center  max-w-4xl ">
          {skills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}

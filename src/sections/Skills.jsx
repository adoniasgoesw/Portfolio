import SkillCard from "../components/cards/SkillCard";
import SectionHeader from "../components/SectionHeader";
import { Atom, Braces, Code2, FileCode2, Server, Wind } from "lucide-react";

const skillsBase = [
  {
    name: "HTML & CSS",
    level: "Advanced",
    description: "Semantic markup and responsive styling with modern CSS.",
    Icon: Code2,
  },
  {
    name: "JavaScript",
    level: "Advanced",
    description: "ES6+, async patterns, and DOM manipulation.",
    Icon: Braces,
  },
  {
    name: "TypeScript",
    level: "Intermediate",
    description: "Type-safe development for scalable applications.",
    Icon: FileCode2,
  },
  {
    name: "React",
    level: "Advanced",
    description: "Component-driven UIs with hooks and state management.",
    Icon: Atom,
  },
  {
    name: "Node.js",
    level: "Intermediate",
    description: "Server-side APIs and backend services.",
    Icon: Server,
  },
  {
    name: "Tailwind CSS",
    level: "Advanced",
    description: "Utility-first CSS for rapid UI development.",
    Icon: Wind,
  },
];

export default function Skills() {
  const skills = skillsBase;

  return (
    <section id="skills" className="px-4 sm:px-10 md:px-16 lg:px-20 xl:px-40 py-16 min-h-[800px]">
      <div className="max-w-7xl mx-auto flex flex-col gap-10 items-center justify-cente mt-50 sm:mt-20 ">
        <SectionHeader
          tag="UNLOCKED ABILITIES"
          title="Skills & Tools"
          description="Technologies and tools I use to build web applications."
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

import { projects } from "../data/portfolioData.js";
import ProjectCard from "../components/cards/ProjectCard";
import SectionHeader from "../components/SectionHeader";

export default function Projects() {
  const maxVisible = 10;
  const visibleProjects = projects.slice(0, maxVisible);
  const total = visibleProjects.length;

  const getLastRowPlacement = (index) => {
    const remainder = total % 3;
    if (remainder === 1 && index === total - 1) return "lg:col-start-3";
    if (remainder === 2 && index === total - 2) return "lg:col-start-2";
    if (remainder === 2 && index === total - 1) return "lg:col-start-4";
    return "";
  };

  return (
    <section id="projects" className="px-4 sm:px-10 md:px-16 lg:px-20 xl:px-40 py-16 min-h-[800px]">
      <div className="max-w-7xl mx-auto flex flex-col gap-15 items-center justify-center ">
      <SectionHeader
        tag="COMPLETED QUESTS"
        title="Featured Projects"
        description="Some of the projects I&apos;ve built and published."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-10 justify-items-stretch items-stretch w-full max-w-4xl mx-auto">
        {visibleProjects.map((project, i) => (
          <div
            key={project.id ?? i}
            className={`w-full lg:col-span-2 ${getLastRowPlacement(i)}`}
          >
            <ProjectCard project={project} index={i} />
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}

import { projects } from "../data/Data";
import ProjectCard from "../components/ProjectCard";
import SectionHeader from "../components/SectionHeader";
import useT from "../i18n/useT";

export default function Projects() {
  const t = useT();
  return (
    <section id="projects" className="px-4 sm:px-10 md:px-16 lg:px-20 xl:px-40 py-16 min-h-[800px]">
      <div className="max-w-7xl mx-auto flex flex-col gap-10 items-center justify-center ">
      <SectionHeader
        tag={t("projects.tag")}
        title={t("projects.title")}
        description={t("projects.description")}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 justify-items-center items-center w-full max-w-4xl mx-auto">
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>
      </div>
    </section>
  );
}

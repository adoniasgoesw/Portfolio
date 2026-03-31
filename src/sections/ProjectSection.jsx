import HeaderSection from "../components/HeaderSection";
import { useTheme } from "../context/ThemeContext";
import { motion } from "motion/react";
import { useState } from "react";
import { projects } from "../data/data";
import ProjectCard from "../components/cards/ProjectCard";
import Modal from "../components/modal/modal";

export default function ProjectSection() {
    const { theme } = useTheme();
    const isDark = theme === "dark";
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const totalProjects = projects.length;
    const remainder = totalProjects % 3;

    return (
        <section className={`${isDark ? "bg-dark-quaternary" : "bg-light-quaternary"} px-4 py-16 sm:px-6 md:px-8 lg:px-10 xl:px-40 min-h-[100vdh] flex flex-col relative  `}>
            <div className="max-7xl mx-auto flex flex-col gap-15 justify-center items-center">
                <div>
                <motion.div
                    initial={{ y: 24, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ amount: 0.35 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <HeaderSection variant="secondary" title="Featured Projects" description="Challenges completed along my journey, turning ideas into real solutions." tagName="Completed Missions" />
                </motion.div>
                </div>

                <div className="max-w-4xl w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 items-stretch justify-center">
                    {projects.map((project, idx) => {
                        const isLast = idx === totalProjects - 1;
                        const isSecondLast = idx === totalProjects - 2;

                        // Center last row on md+ when there are 1 or 2 cards left
                        const placementClasses =
                          remainder === 1 && isLast
                            ? "md:col-start-2" // single card in middle column
                            : remainder === 2 && isSecondLast
                              ? "md:col-start-2" // first of the last pair starts in column 2
                              : "";

                        return (
                          <motion.div
                            key={project.name}
                            className={["flex justify-center", placementClasses]
                              .filter(Boolean)
                              .join(" ")}
                            initial={{ y: 24, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ amount: 0.25 }}
                            transition={{
                              duration: 0.45,
                              ease: "easeOut",
                              delay: 0.1 + idx * 0.05,
                            }}
                          >
                            <ProjectCard
                              id={idx + 1}
                              name={project.name}
                              desc={project.desc}
                              onOpen={() => {
                                setSelectedProject({
                                  id: idx + 1,
                                  name: project.name,
                                  desc: project.desc,
                                  situation: project.situation,
                                  image: project.image,
                                  link: project.link,
                                  github: project.github,
                                  skills: project.skills,
                                });
                                setModalOpen(true);
                              }}
                            />
                          </motion.div>
                        );
                    })}
                </div>
            </div>

            <Modal
                open={modalOpen}
                onClose={() => setModalOpen(false)}
                project={selectedProject}
            />
        </section>
    )
}
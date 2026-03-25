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

                <div className="max-w-4xl w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                    {projects.map((project, idx) => (
                        <ProjectCard
                            key={project.name}
                            id={idx + 1}
                            name={project.name}
                            desc={project.desc}
                            onOpen={() => {
                                setSelectedProject({
                                  id: idx + 1,
                                  name: project.name,
                                  desc: project.desc,
                                  image: project.image,
                                  link: project.link,
                                  github: project.github,
                                  skills: project.skills,
                                });
                                setModalOpen(true);
                              }}
                        />
                    ))}
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
import HeaderSection from "../components/HeaderSection";
import { useTheme } from "../context/ThemeContext";
import { motion } from "motion/react";
import { skills } from "../data/data";
import SkillCard from "../components/cards/SkillCard";
export default function SkillSection() {
    const { theme } = useTheme();
    const isDark = theme === "dark";
    return (
        <section id="skills" className={`${isDark ? "bg-dark-quaternary" : "bg-light-quaternary"} px-4 py-16 sm:px-6 md:px-8 lg:px-10 xl:px-40 min-h-[800px]`}>
            <div className="max-w-4xl mx-auto w-full flex flex-col gap-15 items-center justify-center ">
                <div>
                <motion.div
                    initial={{ y: 24, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ amount: 0.35 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <HeaderSection
                        variant="secondary"
                        title="Skills & Tools"
                        description="Technologies mastered throughout my journey to build modern and efficient applications."
                        tagName="Unlocked Skills"
                        
                    />
                </motion.div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4 w-full items-center justify-center">
                    {skills.map((skill, idx) => (
                        <motion.div
                            key={skill.label}
                            initial={{ y: 22, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ amount: 0.25 }}
                            transition={{ duration: 0.55, ease: "easeOut", delay: idx * 0.06 }}
                        >
                            <SkillCard {...skill} index={idx} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
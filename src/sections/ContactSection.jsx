import HeaderSection from "../components/HeaderSection";
import { useTheme } from "../context/ThemeContext";
import { motion } from "motion/react";


export default function ContactSection() {
    const { theme } = useTheme();
    const isDark = theme === "dark";
    return (
        <section className={`${isDark ? "bg-dark-quaternary" : "bg-light-quaternary"} px-4 py-16 sm:px-6 md:px-8 lg:px-10 xl:px-40 min-h-[800px]`}>
            <div>
                <div>
                <motion.div
                  initial={{ y: 24, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <HeaderSection
                    variant="secondary"
                    title={
                      <>
                        Ready for the{" "}
                        <span className="font-extrabold text-accent-primary">Next Mission</span>
                      </>
                    }
                    description="Send a message and let's build something legendary."
                    tagName="Convocar o aventureiro"
                  />
                </motion.div>
                </div>

                <div>
                    
                </div>
            </div>
        </section>
    )
}
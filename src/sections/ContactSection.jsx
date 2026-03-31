import HeaderSection from "../components/HeaderSection";
import { useTheme } from "../context/ThemeContext";
import { motion } from "motion/react";
import FormContact from "../components/cards/FormContact";
import { useState } from "react";


export default function ContactSection() {
    const { theme } = useTheme();
    const isDark = theme === "dark";
    const [startPlaceholderTyping, setStartPlaceholderTyping] = useState(false);
    return (
        <section className={`${isDark ? "bg-dark-quaternary" : "bg-light-quaternary"} px-4 py-16 sm:px-6 md:px-8 lg:px-10 xl:px-40 min-h-[100vdh] flex justify-center`}>
            <div className="max-w-7xl flex flex-col justify-center items-center gap-15">
                <div>
                <motion.div
                  initial={{ y: 24, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ amount: 0.35 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <HeaderSection
                    variant="secondary"
                    title={
                      <>
                        Ready for the{" "}
                        <span className="font-extrabold text-accent-primary">Next Mission</span> ?
                      </>
                    }
                    description="Send a message and let's build something impactful together."
                    tagName="Call the Adventurer"
                  />
                </motion.div>
                </div>

                <motion.div
                    className="w-full"
                    initial={{ y: 28, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ amount: 0.3 }}
                    transition={{ duration: 0.65, ease: "easeOut", delay: 0.12 }}
                    onAnimationComplete={() => {
                      if (!startPlaceholderTyping) {
                        setStartPlaceholderTyping(true);
                      }
                    }}
                >
                    <FormContact startTyping={startPlaceholderTyping} />
                </motion.div>
            </div>
        </section>
    )
}

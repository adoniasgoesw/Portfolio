import Waves from "../components/backgrounds/Waves";
import { StarsBackground } from "../components/animate-ui/components/backgrounds/stars";
import { useTheme } from "../context/ThemeContext";
import { motion } from "motion/react";

export default function Footer() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      className={`${isDark ? "bg-dark-primary" : "bg-light-primary"} px-4 py-16 sm:px-6 md:px-8 lg:px-10 xl:px-40 relative overflow-hidden flex flex-col items-center justify-center`}
    >
      {isDark ? (
        <StarsBackground
          pointerEvents={false}
          starColor="#FFF"
          className="absolute inset-0 z-0"
        />
      ) : null}

      {/* Waves on top, rotated 180° */}
      <Waves position="top" className="rotate-180 -translate-y- z-10" />

      <motion.footer
        className="relative z-10 flex items-end justify-start max-w-7xl w-full h-[500px] "
        initial={{ scale: 0.96, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="flex flex-col items-start justify-end gap-6">
          <div>
            <h2 className={`text-2xl font-bold ${isDark ? "text-light-quaternary" : "text-dark-quaternary"}`}>
              Adonias Goes
            </h2>
          </div>

          <div>
            <p className={isDark ? "text-light-quaternary/80" : "text-dark-quaternary/80"}>
              © 2026 Adonias Goes — All rights reserved
            </p>
          </div>
        </div>
      </motion.footer>
    </section>
  );
}
import { useEffect, useRef } from "react";
import { animate } from "motion";
import { motion, useMotionValue, useTransform } from "motion/react";
import { useTheme } from "../../context/ThemeContext";

export default function SkillCard({ icon, label, rank, description, index = 0 }) {
    const { theme } = useTheme();
    const isDark = theme === "dark";

    function getRankPercent(rank) {
        switch (rank) {
            case "Expert":
                return 100;
            case "Advanced":
                return 75;
            case "Intermediate":
                return 50;
            case "Beginner":
                return 25;
            default:
                return 0;
        }
    }

    const percent = getRankPercent(rank);

    const cardRef = useRef(null);
    const progress = useMotionValue(0);
    const width = useTransform(progress, (v) => `${v}%`);
    const rounded = useTransform(progress, (v) => `${Math.round(v)}%`);

    useEffect(() => {
        const el = cardRef.current;
        if (!el) return;

        const io = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) return;
                io.disconnect();

                progress.set(0);
                animate(progress, percent, {
                    duration: 0.9,
                    delay: 0.35 + index * 0.08,
                    easing: "ease-out",
                });
            },
            { threshold: 0.35 }
        );

        io.observe(el);
        return () => io.disconnect();
    }, [index, percent, progress]);

    return (

       
        <article
            ref={cardRef}
            className={[
                "rounded-xl border-2 p-6 cursor-pointer",
                "hover:translate-y-[-8px] hover:border-accent-primary/35 hover:shadow-[0_12px_40px_-18px_rgba(91,140,255,0.55)]",
                "transition-all duration-300",
                isDark
                    ? "border-light-quaternary/10 bg-dark-secondary/30 backdrop-blur-sm"
                    : "border-neutral-primary/30 bg-white/55",
            ].join(" ")}
        >
            <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                    <p className="text-accent-primary">{icon}</p>
                    <h4 className={[
                        "text-lg font-medium",
                        isDark ? "text-title-primary" : "text-title-secondary",
                    ].join(" ")}>{label}</h4>
                </div>
                <p className={[
                    "uppercase text-xs tracking-widest",
                    isDark ? "text-light-quaternary/70" : "text-neutral-primary",
                ].join(" ")}>rank -  {rank}</p>
                <p className={[
                    "text-sm font-light mt-2 line-clamp-2",
                    isDark ? "text-light-quaternary/80" : "text-neutral-secondary",
                ].join(" ")}>{description}</p>
                </div>

                <div className="flex flex-col gap-1">

                    <div className="flex items-center gap-2 w-full justify-between">
                            <p className={[
                                "font-light text-[12px]",
                                isDark ? "text-light-quaternary/70" : "text-neutral-secondary",
                            ].join(" ")}>Proficiency </p>
                            <motion.p className={[
                                "font-light text-[12px] tabular-nums",
                                isDark ? "text-light-quaternary/70" : "text-neutral-secondary",
                            ].join(" ")}>
                                {rounded}
                            </motion.p>
                    </div>

                    <div className={[
                        "h-2 rounded-full overflow-hidden",
                        isDark ? "bg-light-quaternary/10" : "bg-neutral-primary/30",
                    ].join(" ")}>
                        <motion.div
                            className={[
                                "h-full rounded-full will-change-[width]",
                                isDark ? "bg-accent-primary" : "bg-light-primary",
                            ].join(" ")}
                            style={{ width }}
                        />
                    </div>
                </div>
            </div>
        </article>
    )
}
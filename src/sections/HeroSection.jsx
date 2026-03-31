import { Download, Play } from "lucide-react";
import { useEffect } from "react";
import HeaderSection from "../components/HeaderSection";
import Button from "../components/buttons/Button";
import Waves from "../components/backgrounds/Waves";
import Avatar from "../components/backgrounds/Avatar";
import ToggleTheme from "../components/backgrounds/ToggleTheme";
import { useTheme } from "../context/ThemeContext";
import { StarsBackground } from "../components/animate-ui/components/backgrounds/stars";
import cvPdfUrl from "../assets/Adonias_Goes_Frontend_2026.docx.pdf?url";
import { animate } from "motion";
export default function HeroSection() {
    const { theme } = useTheme();
    const isDark = theme === "dark";

    useEffect(() => {
        const root = document.querySelector("[data-hero]");
        const waves = document.querySelector("[data-waves]");
        const avatar = document.querySelector("[data-avatar]");

        if (root) {
            animate(
                root,
                {
                    opacity: [0, 1],
                    scale: [0.96, 1],
                    filter: ["saturate(1.6)", "saturate(1)"],
                },
                { duration: 0.7, easing: "ease-out", delay: 0.5}
            );
        }

        if (waves) {
            animate(
                waves,
                {
                    opacity: [0, 1],
                    scale: [0.98, 1],
                    filter: ["saturate(1.8)", "saturate(1)"],
                },
                { duration: 0.85, easing: "ease-out", delay: 0.06 }
            );
        }

        // Guarantee avatar stays above waves during animation
        if (avatar) {
            animate(
                avatar,
                { opacity: [0, 1], scale: [0.9, 1] },
                { duration: 0.65, easing: "ease-out", delay: 0.7 }
            );
        }
    }, []);

    const handleDownloadCv = () => {
        // Open in a new tab
        window.open(cvPdfUrl, "_blank", "noopener,noreferrer");

        // Trigger download
        const a = document.createElement("a");
        a.href = cvPdfUrl;
        a.download = "Adonias_Goes_Frontend_2026.pdf";
        document.body.appendChild(a);
        a.click();
        a.remove();
    };

    const handleStartAdventure = () => {
        const el = document.getElementById("skills");
        if (!el) return;

        const targetY = el.getBoundingClientRect().top + window.scrollY;
        const startY = window.scrollY;

        animate(startY, targetY, {
            duration: 1.1,
            easing: "ease-in-out",
            onUpdate: (latest) => window.scrollTo(0, latest),
        });
    };

    
    return (
        <section className={`${isDark ? "bg-light-primary/60" : "bg-light-primary"} px-4 py-16 sm:px-6 md:px-8 lg:px-10 xl:px-40 min-h-[900px] relative`}>
            <Waves />
            {isDark ? (
                <StarsBackground
                    pointerEvents={false}
                    starColor="#FFF"
                    className="absolute inset-0 z-0"
                />
            ) : null}
            <div data-hero className="mt-20 max-w-7xl mx-auto w-full flex flex-col items-center justify-center gap-10 relative z-20">
                <Avatar />
                <ToggleTheme />

                <div className="relative z-20">
                <HeaderSection variant="primary" title="Front-end Developer" description="On a quest as a front-end developer, mastering skills and completing missions to craft modern, responsive web interfaces."
                         tagName="Start the Journey" />



                    <div className="flex items-center justify-center gap-2 md:gap-5 flex-wrap w-full mt-8">
                        <Button variant="primary" icon={Play} iconClickAnimation="scale" text="Start Adventure" className="w-2/3 sm:w-auto" onClick={handleStartAdventure} />
                        <Button variant="outline" icon={Download} iconClickAnimation="down" text="Download CV" className="w-2/3 sm:w-auto" onClick={handleDownloadCv} />
                    </div>
                </div>
            </div>
        </section>
    )
}

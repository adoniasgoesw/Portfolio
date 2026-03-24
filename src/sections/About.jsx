import AvatarImage from "../assets/Avatar1.png";
import AvatarVideo from "../assets/Avatar.mp4";
import AvatarAltImage from "../assets/Avatar2.jpg";
import SectionHeader from "../components/SectionHeader";
import Button from "../components/ui/Button";
import { aboutStats } from "../data/portfolioData.js";
import { useTheme } from "../context/ThemeContext";
import { useRef, useState } from "react";
import { RotateCcw } from "lucide-react";

export default function About() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const videoRef = useRef(null);
  const [useAltAvatar, setUseAltAvatar] = useState(false);

  const toggleAvatarMedia = () => {
    const v = videoRef.current;
    if (v) {
      v.pause();
      v.currentTime = 0;
    }
    setUseAltAvatar((p) => !p);
  };

  const handleHoverPlay = () => {
    const v = videoRef.current;
    if (!v) return;
    // Começa sempre do início ao passar o mouse.
    v.currentTime = 0;
    v.play().catch(() => {});
  };

  const handleHoverPause = () => {
    const v = videoRef.current;
    if (!v) return;
    v.pause();
    v.currentTime = 0;
  };
  return (
    <section id="about" className="px-4 sm:px-10 md:px-16 lg:px-20 xl:px-40 py-16 min-h-[650px]">
      <div className="max-w-7xl mx-auto flex flex-col gap-10 items-center justify-center ">
        <SectionHeader
          tag="ADVENTURER LOG"
          title="About Me"
          description="Who I am and my journey as a developer."
        />

        <div className="flex flex-col gap-10 md:flex-row max-w-4xl mx-auto ">
          <div className="w-full md:w-1/2 flex justify-center items-center ">
          <div className="w-56   h-56 rounded-xl relative ">
             <div
               className={`h-full w-full absolute top-0 left-0 rotate-8 rounded-xl z-0 ${
                 isDark ? "bg-dark-secondary/80" : "bg-light-tertiary"
               }`}
             ></div>

            {/* Botão de trocar mídia (top-right) */}
            

            <div
              className="h-full w-full absolute top-0 left-0 overflow-hidden rounded-xl z-0 transition-transform duration-300 ease-out hover:scale-105 hover:-rotate-2 bg-neutral-800"
              onMouseEnter={useAltAvatar ? undefined : handleHoverPlay}
              onMouseLeave={useAltAvatar ? undefined : handleHoverPause}
            >
              {useAltAvatar ? (
                <img
                  src={AvatarAltImage}
                  alt="Adonias avatar alternative"
                  className="w-full h-full object-cover"
                />
              ) : (
                <video
                  ref={videoRef}
                  src={AvatarVideo}
                  muted
                  playsInline
                  preload="metadata"
                  poster={AvatarImage}
                  onEnded={handleHoverPause}
                  className="w-full h-full object-cover"
                />
              )}

<Button
              type="button"
              ariaLabel="Toggle avatar media"
              variant="icon"
              icon={RotateCcw}
              onClick={toggleAvatarMedia}
              className="absolute top-3 right-3 z-30 text-white"
            />
            </div>

             
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-4">
            <h3 className={`text-2xl font-bold ${isDark ? "text-light-quaternary" : "text-dark-quaternary"}`}>
              Hello! I&apos;m{" "}
              <span className={isDark ? "text-light-primary" : "text-dark-secondary"}>
                Adonias Goes
              </span>
              .
            </h3>
            <p className={`text-sm text-left leading-relaxed ${isDark ? "text-light-quaternary/80" : "text-neutral-primary"}`}>
              Adonias Goes, formado em Analise de Sistemas pela PUCPR. Sou desenvolvedor front-end e trabalho com React para criar interfaces modernas, responsivas e com foco em experiencia do usuario.
            </p>
            
              

            <ul className="flex gap-4">
              {
                [
                  { value: aboutStats.yearsExp, label: "YEARS EXP." },
                  { value: aboutStats.questsCompleted, label: "QUESTS COMPLETED" },
                  { value: aboutStats.openSourcePRs, label: "OPEN-SOURCE PRS" },
                ].map((stat) => (
                  <li
                    key={stat.label}
                    className="flex flex-col items-center justify-center"
                  >
                    <span className={`text-2xl font-bold ${isDark ? "text-light-primary" : "text-dark-secondary"}`}>{stat.value}</span>
                    <span className={`text-sm ${isDark ? "text-light-quaternary/70" : "text-gray-500"}`}>{stat.label}</span>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

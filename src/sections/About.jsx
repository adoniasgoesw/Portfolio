import AvatarImage from "../assets/avatar1.png";
import AvatarVideo from "../assets/Avatar.mp4";
import SectionHeader from "../components/SectionHeader";
import useT from "../i18n/useT";
import { aboutStats } from "../data/Data";
import { useTheme } from "../context/ThemeContext";
import { useRef } from "react";

export default function Jorney() {
  const t = useT();
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const videoRef = useRef(null);

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
    <section id="about" className="px-4 sm:px-10 md:px-16 lg:px-20 xl:px-40 py-16 min-h-[800px]">
      <div className="max-w-7xl mx-auto flex flex-col gap-10 items-center justify-center">
        <SectionHeader
          tag={t("about.tag")}
          title={t("about.title")}
          description={t("about.description")}
        />

        <div className="flex flex-col gap-10 md:flex-row max-w-4xl mx-auto">
          <div className="w-full md:w-1/2 flex justify-center items-center">
          <div className="w-56 h-56 rounded-xl relative">
             <div className="h-full w-full bg-light-tertiary absolute top-0 left-0 rotate-8  rounded-xl z-0"></div>

            <div
              className="h-full w-full absolute top-0 left-0 overflow-hidden rounded-xl z-0 transition-transform duration-300 ease-out hover:scale-105 hover:-rotate-2 bg-neutral-800"
              onMouseEnter={handleHoverPlay}
              onMouseLeave={handleHoverPause}
            >
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
             </div>

             
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-4">
            <h3 className={`text-2xl font-bold ${isDark ? "text-light-quaternary" : "text-dark-quaternary"}`}>{t("about.hello")}</h3>
            <p className={`text-sm ${isDark ? "text-light-quaternary/80" : "text-neutral-primary"}`}>
              {t("about.p1")}
            </p>
            <p className={`text-sm ${isDark ? "text-light-quaternary/80" : "text-neutral-primary"}`}>
              {t("about.p2")}
            </p>
            <p className={`text-sm ${isDark ? "text-light-quaternary/80" : "text-neutral-primary"}`}>
              {t("about.p3")}
            </p>

            <ul className="flex gap-4">
              {
                [
                  { value: aboutStats.yearsExp, label: t("about.stats.yearsExp") },
                  { value: aboutStats.projectsDone, label: t("about.stats.projectsDone") },
                  { value: aboutStats.certificates, label: t("about.stats.certificates") },
                ].map((stat) => (
                  <li
                    key={stat.label}
                    className="flex flex-col items-center justify-center"
                  >
                    <span className={`text-2xl font-bold ${isDark ? "text-light-quaternary" : "text-dark-quaternary"}`}>{stat.value}</span>
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

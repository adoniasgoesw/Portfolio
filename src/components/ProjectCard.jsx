import Button from "./button";
import useT from "../i18n/useT";
import { Github, SquareArrowOutUpRight } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function ProjectCard({ project }) {
  const t = useT();
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const { title, descriptionKey, technologies, liveUrl, githubUrl, image } = project;

  const displayDescription =
    descriptionKey ? t(descriptionKey) : "";

  const techList = technologies ?? [];
  const visibleTechs = techList.length > 3 ? techList.slice(0, 3) : techList;
  const extraTechsCount = techList.length > 3 ? techList.length - 3 : 0;

  return (
    <article
      className={`w-full rounded-2xl shadow-sm overflow-hidden transition-all duration-200 ${
        isDark
          ? "bg-dark-quaternary/90 border border-[#1f2c3d] hover:border-[#2d4e69] hover:shadow-[0_0_0_1px_rgba(45,78,105,0.35)]"
          : "bg-white border border-slate-200"
      }`}
    >
      <div
        className={`w-full aspect-video overflow-hidden ${
          isDark ? "bg-[#1b2433]" : "bg-slate-100"
        }`}
      >
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div
            className={`w-full h-full flex items-center justify-center text-sm ${
              isDark ? "text-[#6f86a3]" : "text-slate-400"
            }`}
          >
            {title}
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="flex flex-nowrap gap-2 overflow-hidden">
          {visibleTechs.map((tech) => (
            <span
              key={tech}
              className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${
                isDark ? "bg-[#1b2433] text-[#b7c4d6]" : "bg-slate-100 text-neutral-secondary"
              }`}
            >
              {tech}
            </span>
          ))}
          {extraTechsCount > 0 ? (
            <span
              className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${
                isDark ? "bg-[#1b2433] text-[#b7c4d6]" : "bg-slate-100 text-neutral-secondary"
              }`}
            >
              + {extraTechsCount}
            </span>
          ) : null}
        </div>

        <h3 className={`mt-4 text-lg font-bold ${isDark ? "text-light-quaternary" : "text-neutral-quinary"}`}>
          {title}
        </h3>
        <p
          className={`mt-3 text-sm leading-relaxed ${isDark ? "text-[#b7c4d6]" : "text-neutral-secondary"}`}
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {displayDescription}
        </p>

        <div className="mt-6 flex gap-2 w-full min-h-[44px]">
          {liveUrl && (
            <Button
              text={t("projectCard.liveDemo")}
              type="button"
              variant="secondary"
              icon={SquareArrowOutUpRight}
              iconAnimation="grow"
              onClick={() => window.open(liveUrl, "_blank", "noopener,noreferrer")}
              className="flex-1"
            />
          )}
          {githubUrl && (
            <Button
              text={t("projectCard.github")}
              type="button"
              variant="outlineSecondary"
              icon={Github}
              iconAnimation="grow"
              onClick={() => window.open(githubUrl, "_blank", "noopener,noreferrer")}
              className="flex-1"
            />
          )}
        </div>
      </div>
    </article>
  );
}

import { useTheme } from "../../context/ThemeContext";
import Button from "../ui/Button";
import { Github, SquareArrowOutUpRight } from "lucide-react";

const ACCENTS = [
  {
    bgLight: "bg-emerald-200",
    bgDark: "bg-emerald-300/20",
    dotLight: "bg-emerald-400",
    dotDark: "bg-emerald-200",
    numberLight: "text-emerald-900",
    numberDark: "text-emerald-100",
    titleLight: "text-emerald-900",
    titleDark: "text-emerald-100",
    descLight: "text-emerald-900/80",
    descDark: "text-emerald-100/80",
  },
  {
    bgLight: "bg-rose-200",
    bgDark: "bg-rose-300/20",
    dotLight: "bg-rose-400",
    dotDark: "bg-rose-200",
    numberLight: "text-rose-900",
    numberDark: "text-rose-100",
    titleLight: "text-rose-900",
    titleDark: "text-rose-100",
    descLight: "text-rose-900/80",
    descDark: "text-rose-100/80",
  },
  {
    bgLight: "bg-indigo-200",
    bgDark: "bg-indigo-300/20",
    dotLight: "bg-indigo-400",
    dotDark: "bg-indigo-200",
    numberLight: "text-indigo-900",
    numberDark: "text-indigo-100",
    titleLight: "text-indigo-900",
    titleDark: "text-indigo-100",
    descLight: "text-indigo-900/80",
    descDark: "text-indigo-100/80",
  },
  {
    bgLight: "bg-sky-200",
    bgDark: "bg-sky-300/20",
    dotLight: "bg-sky-400",
    dotDark: "bg-sky-200",
    numberLight: "text-sky-900",
    numberDark: "text-sky-100",
    titleLight: "text-sky-900",
    titleDark: "text-sky-100",
    descLight: "text-sky-900/80",
    descDark: "text-sky-100/80",
  },
  {
    bgLight: "bg-amber-200",
    bgDark: "bg-amber-300/20",
    dotLight: "bg-amber-400",
    dotDark: "bg-amber-200",
    numberLight: "text-amber-900",
    numberDark: "text-amber-100",
    titleLight: "text-amber-900",
    titleDark: "text-amber-100",
    descLight: "text-amber-900/80",
    descDark: "text-amber-100/80",
  },
];

export default function ProjectCard({ project, index = 0 }) {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const { title, description, liveUrl, githubUrl } = project;

  const displayDescription = description ?? "";
  const number = String(index + 1).padStart(2, "0");
  const accent = ACCENTS[index % ACCENTS.length];
  const rotations = [-2.2, 1.6, -1.2, 2.4, -2.6, 1.1, -1.8, 2.0];
  const rotationDeg = rotations[index % rotations.length];

  return (
    <article
      className={`w-full rounded-2xl shadow-sm overflow-hidden transition-all duration-200 ${
        isDark
          ? "bg-dark-quaternary border border-neutral-quaternary hover:border-[#2d4e69] hover:shadow-[0_0_0_1px_rgba(45,78,105,0.35)]"
          : "bg-white border border-slate-200"
      }`}
      style={{ transform: `rotate(${rotationDeg}deg)` }}
    >
      <div className="flex items-center justify-center pt-5" />

      <div className="p-3 sm:p-4">
        <div
          className={`rounded-2xl p-5 sm:p-6 ${isDark ? accent.bgDark : accent.bgLight}`}
        >
          <div className="flex items-start justify-between gap-3">
            <span
              className={`text-4xl font-black leading-none ${
                isDark ? accent.numberDark : accent.numberLight
              }`}
            >
              {number}
            </span>
          </div>

          <h3
            className={`mt-3 text-base sm:text-lg font-bold leading-tight ${
              isDark ? accent.titleDark : accent.titleLight
            }`}
          >
            {title}
          </h3>

          <p
            className={`mt-2 text-sm sm:text-base leading-relaxed ${
              isDark ? accent.descDark : accent.descLight
            }`}
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {displayDescription}
          </p>

          <div className="mt-4 flex items-center gap-2">
            <Button
              text="View project"
              variant="outlineSecondary"
              icon={SquareArrowOutUpRight}
              onClick={() =>
                liveUrl && liveUrl !== "#"
                  ? window.open(liveUrl, "_blank", "noopener,noreferrer")
                  : undefined
              }
              disabled={!liveUrl || liveUrl === "#"}
            />
            <Button
              text=""
              variant="outlineSecondary"
              icon={Github}
              onClick={() =>
                githubUrl && githubUrl !== "#"
                  ? window.open(githubUrl, "_blank", "noopener,noreferrer")
                  : undefined
              }
              disabled={!githubUrl || githubUrl === "#"}
            />
          </div>
        </div>
      </div>
    </article>
  );
}

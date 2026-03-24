import { useTheme } from "../../context/ThemeContext";

function getProgressFromLevel(level) {
  if (level === "Expert") return 100;
  if (level === "Advanced") return 85;
  if (level === "Intermediate") return 60;
  if (level === "Beginner") return 35;
  return 0;
}

export default function SkillCard({ skill }) {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const progress = getProgressFromLevel(skill.level);
  const levelText = String(skill.level ?? "").toUpperCase();
  const Icon = skill.Icon;

  return (
    <article
      className={`w-full max-w-sm rounded-2xl shadow-sm p-6 transition-all duration-200 ${
        isDark
          ? "bg-dark-quaternary border border-neutral-quaternary hover:border-[#2d4e69] hover:shadow-[0_0_0_1px_rgba(45,78,105,0.35)]"
          : "bg-white border border-slate-200"
      }`}
    >
      <div className="flex items-center gap-2">
        {Icon ? (
          <Icon className={`h-4 w-4 ${isDark ? "text-accent-primary" : "text-accent-secondary"}`} />
        ) : null}
        <h3 className={`text-lg font-bold ${isDark ? "text-light-quaternary" : "text-neutral-quinary"}`}>{skill.name}</h3>
      </div>

      <p className={`mt-2 text-[11px] tracking-widest uppercase ${isDark ? "text-[#6f86a3]" : "text-neutral-secondary"}`}>
        Mission rank — {levelText}
      </p>

      {skill.description ? (
        <p
          className={`mt-4 text-sm leading-relaxed ${isDark ? "text-[#b7c4d6]" : "text-neutral-secondary"}`}
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {skill.description}
        </p>
      ) : null}

      <div className="mt-6">
        <div className="mb-1 flex items-center justify-between">
          <span className={`text-[11px] tracking-wide ${isDark ? "text-neutral-secondary" : "text-neutral-secondary"}`}>
            Proficiency
          </span>
          <span className={`text-[11px] font-bold ${isDark ? "text-light-quaternary" : "text-neutral-tertiary"}`}>
            {progress}%
          </span>
        </div>
        <div className={`h-2 w-full rounded-full overflow-hidden ${isDark ? "bg-[#1b2433]" : "bg-slate-100"}`}>
          <div
            className={`h-full rounded-full ${isDark ? "bg-linear-to-r from-[#2ea7d8] via-[#2f7fb8] to-[#223a61]" : "bg-linear-to-r from-light-primary to-light-secondary"}`}
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </article>
  );
}

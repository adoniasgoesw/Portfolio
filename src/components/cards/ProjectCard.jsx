import { useTheme } from "../../context/ThemeContext";

export default function ProjectCard({ id, name, desc, onOpen }) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <article
      onClick={() => {
        console.log("Projeto clicado");
        console.log("Projeto aberto", { id, name, desc });
        onOpen?.({ id, name, desc });
      }}
      className={[
        "rounded-xl border-2 p-6 cursor-pointer",
        "hover:translate-y-[-8px] transition-all duration-300",
        "hover:border-accent-primary/35 hover:shadow-[0_12px_40px_-18px_rgba(91,140,255,0.55)]",
        isDark
          ? "border-light-quaternary/10 bg-dark-secondary/30 backdrop-blur-sm"
          : "border-neutral-primary/30 bg-white/55",
      ].join(" ")}
    >
      <div className="flex flex-col gap-4">
        <div>
          <p
            className={[
              "text-xs uppercase tracking-widest",
              isDark ? "text-light-quaternary/70" : "text-neutral-primary",
            ].join(" ")}
          >
            Mission {String(id).padStart(2, "0")}
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h4
            className={[
              "text-lg sm:text-xl font-medium leading-snug line-clamp-1",
              isDark ? "text-title-primary" : "text-title-secondary",
            ].join(" ")}
          >
            {name}
          </h4>

          <p
            className={[
              "text-sm font-light line-clamp-2",
              isDark ? "text-light-quaternary/80" : "text-neutral-secondary",
            ].join(" ")}
          >
            {desc}
          </p>
        </div>
      </div>
    </article>
  );
}
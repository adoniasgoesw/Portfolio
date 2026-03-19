import { useTheme } from "../context/ThemeContext";

function getInitials(name) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export default function HeroCard({ hero }) {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const attrs = hero.attributes?.[0] ? Object.entries(hero.attributes[0]) : [];

  return (
    <article className="w-full max-w-md p-0.5 rounded-2xl transition-transform duration-300 hover:-translate-y-1">
      <div
        className={`relative flex flex-col gap-4 w-full rounded-2xl p-5 shadow-lg transition-all duration-200 ${
          isDark
            ? "bg-dark-quaternary/90 border border-[#1f2c3d] shadow-black/40 hover:border-[#2d4e69] hover:shadow-[0_0_0_1px_rgba(45,78,105,0.35)]"
            : "bg-white border border-slate-200 shadow-slate-200 hover:shadow-xl hover:shadow-slate-300"
        }`}
      >
        {/* Level: absolute top right */}
        <div
          className={`absolute top-3 right-3 px-2 py-1 rounded-lg text-xs font-bold ${
            isDark ? "bg-[#1b2433] text-[#2ea7d8]" : "bg-light-primary/20 text-light-primary"
          }`}
        >
          Level {hero.Level}
        </div>

        {/* Top: avatar, name, class - rank */}
        <div className="flex flex-col items-center gap-2 text-center">
          <div
            className={`w-20 h-20 rounded-full flex items-center justify-center overflow-hidden shrink-0 ${
              isDark ? "bg-[#0f1620] border-2 border-[#1f2c3d]" : "bg-slate-100 border-2 border-slate-200"
            }`}
          >
            {hero.avatar ? (
              <img
                src={hero.avatar}
                alt={hero.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <span className={`text-xl font-bold ${isDark ? "text-[#6f86a3]" : "text-neutral-secondary"}`}>
                {getInitials(hero.name)}
              </span>
            )}
          </div>
          <h3 className={`text-lg font-semibold ${isDark ? "text-light-quaternary" : "text-title-light"}`}>{hero.name}</h3>
          <p className={`text-sm font-medium ${isDark ? "text-[#b7c4d6]" : "text-neutral-primary"}`}>
            {hero.class} – {hero.rank}
          </p>
        </div>

        {/* Attributes: list with progress bars (value 1–10) */}
        <div className={`flex flex-col gap-2 pt-2 ${isDark ? "border-t border-[#1f2c3d]" : "border-t border-slate-100"}`}>
          <p className={`text-[10px] font-semibold uppercase tracking-wide ${isDark ? "text-[#6f86a3]" : "text-neutral-secondary"}`}>
            Attributes
          </p>
          {attrs.map(([key, value]) => (
            <div key={key} className="flex flex-col gap-0.5">
              <div className="flex justify-between text-xs">
                <span className={`font-medium ${isDark ? "text-[#b7c4d6]" : "text-neutral-primary"}`}>{key}</span>
                <span className={`font-semibold ${isDark ? "text-[#6f86a3]" : "text-neutral-secondary"}`}>{value}/10</span>
              </div>
              <div className={`h-1.5 w-full rounded-full overflow-hidden ${isDark ? "bg-[#1b2433]" : "bg-slate-100"}`}>
                <div
                  className={`h-full rounded-full transition-all duration-500 ${isDark ? "bg-linear-to-r from-[#2ea7d8] via-[#2f7fb8] to-[#223a61]" : "bg-primary"}`}
                  style={{ width: `${(value / 10) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

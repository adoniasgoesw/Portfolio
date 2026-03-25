import { Sun, Moon } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

export default function ToggleTheme() {
  const { theme, rotationDeg, rotateLeft180 } = useTheme();
  const isLight = theme === "light";
  const isDark = theme === "dark";

  return (
    <div
      className="absolute -bottom-65 -right-30 sm:-bottom-90 sm:-right-10  w-62 h-62 z-0 pointer-events-auto will-change-transform"
      style={{ transform: `rotate(${rotationDeg}deg)` }}
    >
      <div className="relative h-full w-full toggle-theme-float">
        <button
          type="button"
          onClick={rotateLeft180}
          className={`absolute top-0 left-0 pointer-events-auto cursor-pointer transition-opacity ${
            isLight ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          aria-label="Rotate with Sun"
        >
          <Sun className="size-20 text-amber-400" />
        </button>

        <button
          type="button"
          onClick={rotateLeft180}
          className={`absolute bottom-0 right-0 pointer-events-auto cursor-pointer transition-opacity ${
            isDark ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          aria-label="Rotate with Moon"
        >
          <Moon className="size-20 text-light-quaternary -rotate-160" />
        </button>
      </div>
    </div>
  );
}
import PlayerLight from "../assets/player12.png";
import PlayerDark from "../assets/Player14.png";
import { useTheme } from "../context/ThemeContext";

export default function Player() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const PlayerImage = isDark ? PlayerDark : PlayerLight;

  return (
    <div className="absolute left-0 -bottom-65 z-60 pointer-events-none w-56 h-56">
      <div className="relative w-full h-full">
        {/* Silhueta (atrás) */}
        <img
          src={PlayerImage}
          alt="Player shadow"
          className="absolute inset-0 w-full h-full object-contain z-10 filter grayscale brightness-0 contrast-200 opacity-60"
        />

        {/* Imagem principal (por cima) */}
        <img
          src={PlayerImage}
          alt="Player"
          className="absolute inset-0 w-full h-full object-contain z-20"
        />

        {/* “Luz” borrada */}
        <div className="absolute hidden top-20 right-15 w-14 h-14 rounded-full bg-linear-to-r from-transparent via-white to-transparent blur-xl shadow-[0_0_35px_rgba(245,158,11,0.6)] ring-1 ring-white z-30" />

        {/* Shadow on the ground (ellipse blur) */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-24 h-15 rounded-full bg-linear-to-b from-transparent to-black blur-2xl opacity-100 z-10" />
      </div>

      
    </div>
  );
}
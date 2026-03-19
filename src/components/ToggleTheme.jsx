import { Sun, Moon } from "lucide-react";

export default function ToggleTheme({
  rotationDeg = 0,
  onRotateLeft180 = () => {},
}) {
  return (
    <div
      className="absolute -bottom-10 md:bottom-50 -right-10 md:right-30 w-62 h-62 z-0 will-change-transform"
      style={{ transform: `rotate(${rotationDeg}deg)` }}
    >
      <div className="relative h-full w-full">
        <button
          type="button"
          onClick={onRotateLeft180}
          className="absolute top-0 left-0"
          aria-label="Rotate with Sun"
        >
          <Sun className="size-20 text-amber-400" />
        </button>

        <button
          type="button"
          onClick={onRotateLeft180}
          className="absolute bottom-0 right-0"
          aria-label="Rotate with Moon"
        >
          <Moon className="size-20 text-light-quaternary -rotate-160" />
        </button>
      </div>
    </div>
  );
}
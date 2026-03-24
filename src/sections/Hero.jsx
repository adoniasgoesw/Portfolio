import SectionHeader from "../components/SectionHeader";
import Clouds from "../components/backgrounds/Clouds";
import Button from "../components/ui/Button";
import ToggleTheme from "../components/ToggleTheme";
import { Download, Play } from "lucide-react";
import HeroPlane from "../components/backgrounds/HeroPlane";
import { useTheme } from "../context/ThemeContext";
import Player from "../components/Player";
import { StarsBackground } from "../components/backgrounds/StarsBackground";

export default function Hero({ rotationDeg, onRotateLeft180 }) {
  const { theme } = useTheme();
  return (
    <section
      id="hero"
      className={`px-4 sm:px-10 md:px-16 lg:px-20 xl:px-40 py-16 relative min-h-[900px] ${
        theme === "dark"
          ? "bg-dark-primary"
          : "bg-light-primary"
      }`}
    >
      <div className="absolute top-90 right-0 relative z-0 pointer-events-auto will-change-transform max-w-7xl mx-auto">
      <ToggleTheme rotationDeg={rotationDeg} onRotateLeft180={onRotateLeft180} />
      </div>
      <div className="max-w-7xl mx-auto mt-20 flex flex-col gap-10 items-center justify-center relative z-20">
      
      <Player />
        <SectionHeader
          tag="START OF THE JOURNEY"
          variant="primary"
          title="Frontend developer"
          description="Building modern, scalable web applications with React, JavaScript, and cutting-edge technologies. Transforming ideas into exceptional digital experiences."
        />

        <div className="flex gap-4 flex-col sm:flex-row w-full sm:w-auto">
          <Button
            type="button"
            text="Start Adventure"
            variant="primary"
            icon={Play}
            iconAnimation="grow"
          />
          <Button
            type="button"
            text="Download CV"
            variant="outline"
            icon={Download}
            iconAnimation="drop"
          />
        </div>
      </div>
      <Clouds position="bottom" className="translate-y-55  md:translate-y-2" />
      
      <HeroPlane />
      
      {theme === "dark" ? (
        <StarsBackground
          pointerEvents={false}
          starColor="#FFF"
          className="absolute inset-0 z-0 bg-none"
        />
      ) : null}
    </section>
  );
}
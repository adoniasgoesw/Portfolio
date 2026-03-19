import SectionHeader from "../components/SectionHeader";
import Clouds from "../components/Clouds";
import Button from "../components/button";
import ToggleTheme from "../components/ToggleTheme";
import useT from "../i18n/useT";
import { Download, Play } from "lucide-react";
import Plane from '../components/Plane';  
import { useTheme } from "../context/ThemeContext";
import Player from "../components/Player";

export default function Hero({ rotationDeg, onRotateLeft180 }) {
  const t = useT();
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
      
      <div className="max-w-7xl mx-auto mt-20 flex flex-col gap-10 items-center justify-center">
        <SectionHeader
          tag={t("hero.tag")}
          variant="primary"
          title={t("hero.title")}
          description={t("hero.description")}
        />

        <div className="flex gap-4 flex-col sm:flex-row w-full sm:w-auto">
          <Button
            type="button"
            text={t("hero.startAdventure")}
            variant="primary"
            icon={Play}
            iconAnimation="grow"
          />
          <Button
            type="button"
            text={t("hero.downloadCv")}
            variant="outline"
            icon={Download}
            iconAnimation="drop"
          />
        </div>
      </div>
      <Clouds position="bottom" className="translate-y-55  md:translate-y-2" />
      <ToggleTheme rotationDeg={rotationDeg} onRotateLeft180={onRotateLeft180} />
      <Plane />
      <Player />
    </section>
  );
}
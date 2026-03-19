import Clouds from "../components/Clouds";
import { useTheme } from "../context/ThemeContext";

export default function FooterClouds() {
  const { theme } = useTheme();
  return (
    <section
      className={`relative w-full overflow-hidden min-h-[400px] ${
        theme === "dark" ? "bg-dark-primary" : "bg-light-primary"
      }`}
    >
      <Clouds position="top" className="-translate-y-10 rotate-180" />
    </section>
  );
}


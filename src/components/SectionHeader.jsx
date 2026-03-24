import Tag from "./ui/Tag";
import { Sparkles } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function SectionHeader({
  tag,
  title,
  description,
  variant = "secondary", // primary | secondary
}) {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const isPrimary = variant === "primary";
  const titleClass = isPrimary
    ? "text-4xl md:text-5xl lg:text-6xl font-extrabold text-light-quaternary text-center mt-4 leading-[1.05] px-2 whitespace-pre-line"
    : `text-4xl font-bold text-center mt-4 ${isDark ? "text-light-quaternary" : "text-dark-quaternary"}`;
  const descriptionClass = isPrimary
    ? "text-light-quaternary/70 text-center text-sm sm:text-base max-w-xl"
    : `text-center text-sm sm:text-base max-w-xl ${isDark ? "text-light-quaternary/70" : "text-neutral-primary"}`;

  return (
    <header className="flex flex-col gap-2 items-center justify-center">
      {tag ? <Tag icon={Sparkles} text={tag} /> : null}
      {title ? <h2 className={titleClass}>{title}</h2> : null}
      {description ? <p className={descriptionClass}>{description}</p> : null}
    </header>
  );
}
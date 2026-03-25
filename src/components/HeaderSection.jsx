import Tag from "./Tag";
import { useTheme } from "../context/ThemeContext";

export default function HeaderSection({
  title,
  description,
  tagName,
  variant = "primary", // primary | secondary
  className = "",
  titleClassName = "",
  descriptionClassName = "",
  tagClassName = "",
}) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const variants = {
    primary: {
      container: "flex flex-col gap-2 items-center justify-center text-center",
      title: isDark
        ? "text-4xl md:text-5xl font-bold text-title-primary mt-4 "
        : "text-4xl md:text-5xl font-bold text-title-primary mt-4",
      description: isDark
      ? "text-light-quaternary/80 text-center max-w-sm text-sm"
      : "text-light-quaternary/80 text-center max-w-sm text-sm",
      tag: "",
    },
    secondary: {
      container: "",
      title: isDark
        ? "text-4xl font-bold text-title-primary mt-4"
        : "text-4xl font-bold text-title-secondary mt-4",
      description: isDark
        ? "text-light-quaternary/80 text-center max-w-lg text-sm"
        : "text-neutral-primary text-center max-w-lg text-sm",
      tag: "",
    },
  };

  const v = variants[variant] ?? variants.primary;

  return (
    <div
      className={[
        "flex flex-col gap-2 items-center justify-center",
        v.container,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <Tag
        tagName={tagName}
        variant={variant}
        className={[v.tag, tagClassName].filter(Boolean).join(" ")}
      />

      <h2 className={[v.title, titleClassName].filter(Boolean).join(" ")}>
        {title}
      </h2>

      <p
        className={[v.description, descriptionClassName]
          .filter(Boolean)
          .join(" ")}
      >
        {description}
      </p>
    </div>
  );
}
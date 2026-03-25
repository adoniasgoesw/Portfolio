import { useTheme } from "../context/ThemeContext";

export default function Tag({
  tagName,
  variant = "primary", // primary | secondary
  className = "",
}) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const variants = {
    primary: isDark
      ? "text-light-quaternary text-xs bg-light-secondary/10 rounded-full px-4 py-1 hover:bg-dark-primary/70 transition-all duration-300"
      : "text-light-quaternary  text-xs bg-light-secondary rounded-full px-4 py-1 hover:bg-light-primary/70 transition-all duration-300",
    secondary: isDark
      ? "text-light-quaternary  text-xs bg-light-secondary/10 rounded-full px-4 py-1 hover:bg-dark-primary/70 transition-all duration-300"
      : "text-dark-quaternary text-xs bg-light-secondary rounded-full px-4 py-1 hover:bg-light-primary/70 transition-all duration-300",
  };

  const variantClass = variants[variant] ?? variants.primary;

  return (
    <span className={[variantClass, className].filter(Boolean).join(" ")}>
      <p>{tagName}</p>
    </span>
  );
}
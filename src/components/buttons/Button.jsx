import { useEffect, useState } from "react";
import { useTheme } from "../../context/ThemeContext";

export default function Button({
  variant = "button", // button | primary | secondary | outline | icon
  text = "",
  icon: Icon,
  iconClassName = "",
  onClick,
  iconClickAnimation, // "scale" | "down"
  disabled = false,
  ariaLabel,
  className = "",
  type = "button",
  children,
  ...props
}) {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [isIconAnimating, setIsIconAnimating] = useState(false);

  const variants = {
    button: " ",
    primary: isDark
      ? "bg-light-secondary/10 text-light-quaternary px-6 py-4 rounded-xl flex items-center gap-2 hover:bg-light-secondary/20 transition-all duration-300 cursor-pointer hover:scale-105 active:scale-95"
      : "bg-light-secondary text-light-quaternary px-6 py-4 rounded-xl flex items-center gap-2 hover:bg-light-secondary/70 transition-all duration-300 cursor-pointer hover:scale-105 active:scale-95",
    secondary: isDark
    ? "bg-light-secondary/10 text-light-quaternary px-6 py-4 rounded-xl flex items-center justify-center text-center gap-2 hover:bg-light-secondary/20 transition-all duration-300 cursor-pointer hover:scale-105 active:scale-95"
    : "bg-dark-tertiary text-light-quaternary px-6 py-4 rounded-xl flex items-center justify-center text-center gap-2 hover:bg-dark-tertiary/70 transition-all duration-300 cursor-pointer hover:scale-105 active:scale-95 ",
    outline: isDark
      ? "border-2 border-light-quaternary text-light-quaternary px-6 py-4 rounded-xl flex items-center gap-2 transition-all duration-300 cursor-pointer hover:scale-105 active:scale-95"
      : "border-2 border-light-quaternary text-light-quaternary px-6 py-4 rounded-xl flex items-center gap-2 transition-all duration-300 cursor-pointer hover:scale-105 active:scale-95",
    outlineSecondary: isDark
      ? "border-2 border-dark-secondary text-light-quaternary px-6 py-4 rounded-xl flex items-center gap-2 hover:bg-dark-tertiary/40 transition-all duration-300 cursor-pointer hover:scale-105 active:scale-95"
      : "border-2 border-dark-secondary text-dark-secondary px-6 py-4 rounded-xl flex items-center gap-2 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer",
    icon: isDark ? "text-title-primary"
    : "text-title-secondary"
  };

  // Only a “label” for now (no styling on purpose).
  const variantClass = variants[variant] ?? variants.button;

  useEffect(() => {
    if (!isIconAnimating) return;
    const t = setTimeout(() => setIsIconAnimating(false), 260);
    return () => clearTimeout(t);
  }, [isIconAnimating]);

  const handleClick = (e) => {
    if (iconClickAnimation) setIsIconAnimating(true);
    onClick?.(e);
  };

  return (
    <button
      type={type}
      disabled={disabled}
      aria-label={ariaLabel}
      onClick={handleClick}
      className={[
        variantClass,
        className,
        "disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none disabled:hover:!scale-100 disabled:active:!scale-100",
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {Icon ? (
        <span
          aria-hidden
          className={[
            "inline-flex",
            isIconAnimating
              ? iconClickAnimation === "scale"
                ? "animate-icon-scale-click"
                : iconClickAnimation === "down"
                  ? "animate-icon-down-click"
                  : ""
              : "",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          <Icon
            aria-hidden
            className={[
              variant === "icon" ? "w-5 h-5" : "",
              iconClassName,
            ]
              .filter(Boolean)
              .join(" ")}
          />
        </span>
      ) : null}
      {text ? text : null}
      {children}
    </button>
  );
}
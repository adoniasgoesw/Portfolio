import { useRef, useState } from "react";
import { useTheme } from "../context/ThemeContext";

export default function Button({
  text = "",
  icon: Icon,
  variant = "primary", // primary | secondary | icon | outline | lang
  type = "button",
  onClick,
  ariaLabel,
  className = "",
  disabled = false,
  iconAnimation = "none", // none | grow | drop
}) {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl font-bold text-sm leading-none whitespace-nowrap transition-transform duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";
  const hover = ["primary", "outline"].includes(variant) ? "hover:-translate-y-1" : "";

  const variants = {
    primary: isDark
      ? "bg-light-quaternary/10  text-light-quaternary hover:bg-[#7dd7ff]"
      : "bg-light-secondary text-light-quaternary hover:bg-light-secondary/90",
    secondary: isDark
      ? "bg-light-quaternary/10  text-light-quaternary hover:bg-[#7dd7ff]"
      : "bg-light-secondary text-light-quaternary hover:bg-light-secondary/90",
    icon: isDark ? "bg-transparent text-light-quaternary" : "bg-transparent text-dark-quaternary",
    outline: isDark
      ? "bg-transparent border border-white text-white hover:bg-white/12 hover:border-white"
      : "bg-transparent border border-light-quaternary text-light-quaternary hover:bg-light-quaternary/10 hover:border-light-quaternary/70",
    outlineSecondary: isDark
      ? "bg-transparent border border-white text-white hover:bg-white/12 hover:border-white"
      : "bg-transparent border border-neutral-quaternary text-neutral-quaternary hover:bg-neutral-quaternary/5",
    lang: isDark
      ? "bg-transparent text-light-quaternary font-normal"
      : "bg-transparent text-dark-quaternary font-normal",
  };

  const sizes = {
    primary: "px-6 py-4",
    secondary: "px-4 py-2 min-h-[44px]",
    outline: "px-6 py-4",
    icon: "p-2",
    lang: "h-10 w-10",
    outlineSecondary: "px-4 py-2 min-h-[44px]",
  };

  const timeoutRef = useRef(null);
  const clickScaleTimeoutRef = useRef(null);
  const [iconTransform, setIconTransform] = useState("translateY(0) scale(1)");
  const [buttonScale, setButtonScale] = useState(1);

  const triggerIconAnimation = () => {
    if (!Icon || disabled || iconAnimation === "none") return;

    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    if (iconAnimation === "grow") {
      setIconTransform("translateY(0) scale(1.35)");
    } else if (iconAnimation === "drop") {
      setIconTransform("translateY(4px) scale(1.02)");
    }

    timeoutRef.current = setTimeout(() => {
      setIconTransform("translateY(0) scale(1)");
    }, 260);
  };

  const handleClick = (e) => {
    triggerIconAnimation();
    if (["secondary", "outlineSecondary"].includes(variant)) {
      if (clickScaleTimeoutRef.current)
        window.clearTimeout(clickScaleTimeoutRef.current);
      setButtonScale(1.16);
      clickScaleTimeoutRef.current = window.setTimeout(
        () => setButtonScale(1),
        220
      );
    }
    onClick?.(e);
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={handleClick}
      aria-label={ariaLabel}
      className={[
        base,
        hover,
        sizes[variant] ?? sizes.primary,
        variants[variant] ?? variants.primary,
      variant === "lang" ? "btn-lang" : "",
      variant === "icon" ? "btn-icon" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={{ transform: `scale(${buttonScale})` }}
    >
      {Icon ? (
        <span
          className="btn-icon-wrap inline-flex items-center justify-center will-change-transform"
          style={{
            transform: iconTransform,
            transition: "transform 260ms ease-in-out",
          }}
        >
          <Icon className="size-4" />
        </span>
      ) : null}
      {variant !== "icon" && text ? text : null}
    </button>
  );
}

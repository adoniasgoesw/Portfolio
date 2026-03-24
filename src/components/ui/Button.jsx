import { useRef, useState } from "react";
import { useTheme } from "../../context/ThemeContext";

export default function Button({
  text = "",
  icon: Icon,
  variant = "primary",
  type = "button",
  onClick,
  ariaLabel,
  className = "",
  disabled = false,
  iconAnimation = "none",
}) {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const isIconButton = variant === "icon";
  const isHoverable = !isIconButton;
  const hoverScaleValue = ["primary", "outline"].includes(variant) ? 1.04 : 1.02;
  const clickScaleValue = 0.97;
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl font-bold text-sm leading-none whitespace-nowrap transition-transform duration-250 ease-out cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";
  const hover = "";

  const variants = {
    primary: isDark
      ? "bg-dark-secondary text-white hover:bg-[var(--color-accent-secondary)]"
      : "bg-light-secondary text-white hover:bg-[var(--color-accent-secondary)]",
    secondary: isDark
      ? "bg-dark-secondary text-light-quaternary border border-neutral-quaternary hover:bg-dark-primary"
      : "bg-light-secondary text-dark-quaternary border border-light-secondary hover:bg-light-primary",
    orange: isDark
      ? "bg-[var(--color-accent-primary)] text-white hover:bg-[var(--color-accent-secondary)]"
      : "bg-[var(--color-accent-primary)] text-white hover:bg-[var(--color-accent-secondary)]",
    blue: isDark
      ? "bg-dark-secondary text-light-quaternary border border-neutral-quaternary hover:bg-dark-primary"
      : "bg-light-secondary text-dark-quaternary border border-light-secondary hover:bg-light-primary",
    icon: isDark ? "bg-transparent text-light-quaternary" : "bg-transparent text-dark-quaternary",
    outline: isDark
      ? "bg-transparent border border-light-quaternary/70 text-light-quaternary hover:bg-light-quaternary/10 hover:border-light-quaternary"
      : "bg-transparent border border-light-quaternary/40 text-light-quaternary hover:bg-light-quaternary/5 hover:border-light-quaternary/70",
    outlineSecondary: isDark
      ? "bg-transparent border border-white text-white hover:bg-white/12 hover:border-white"
      : "bg-transparent border border-neutral-quaternary text-neutral-quaternary hover:bg-neutral-quaternary/5",
    outlineLight: isDark
      ? "bg-transparent border border-light-quaternary/70 text-light-quaternary hover:bg-light-quaternary/10 hover:border-light-quaternary"
      : "bg-transparent border border-light-quaternary text-neutral-tertiary hover:bg-light-quaternary/40 hover:border-light-quaternary",
    outlineDark: isDark
      ? "bg-transparent border border-dark-secondary text-light-quaternary hover:bg-dark-secondary/40 hover:border-dark-primary"
      : "bg-transparent border border-dark-quaternary text-dark-quaternary hover:bg-dark-quaternary/5 hover:border-dark-quaternary/80",
    outlineOrange: isDark
      ? "bg-transparent border border-[var(--color-accent-primary)] text-[var(--color-accent-primary)] hover:bg-[var(--color-accent-primary)]/15"
      : "bg-transparent border border-[var(--color-accent-secondary)] text-[var(--color-accent-secondary)] hover:bg-[var(--color-accent-primary)]/12",
    lang: isDark
      ? "bg-transparent text-light-quaternary font-normal"
      : "bg-transparent text-dark-quaternary font-normal",
  };

  const sizes = {
    primary: "px-6 py-4",
    secondary: "px-4 py-2 min-h-[44px]",
    orange: "px-6 py-4",
    blue: "px-6 py-4",
    outline: "px-6 py-4",
    outlineLight: "px-6 py-4",
    outlineDark: "px-6 py-4",
    outlineOrange: "px-6 py-4",
    icon: "p-2",
    lang: "h-10 w-10",
    outlineSecondary: "px-4 py-2 min-h-[44px]",
  };

  const timeoutRef = useRef(null);
  const clickScaleTimeoutRef = useRef(null);
  const [iconTransform, setIconTransform] = useState("translateY(0) scale(1)");
  const [buttonScale, setButtonScale] = useState(1);
  const hoveredRef = useRef(false);

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
    if (isHoverable) {
      if (clickScaleTimeoutRef.current)
        window.clearTimeout(clickScaleTimeoutRef.current);
      setButtonScale(clickScaleValue);
      clickScaleTimeoutRef.current = window.setTimeout(
        () => setButtonScale(hoveredRef.current ? hoverScaleValue : 1),
        240
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
      onMouseEnter={
        isHoverable
          ? () => {
              hoveredRef.current = true;
              if (clickScaleTimeoutRef.current)
                window.clearTimeout(clickScaleTimeoutRef.current);
              setButtonScale(hoverScaleValue);
            }
          : undefined
      }
      onMouseLeave={
        isHoverable
          ? () => {
              hoveredRef.current = false;
              if (clickScaleTimeoutRef.current)
                window.clearTimeout(clickScaleTimeoutRef.current);
              setButtonScale(1);
            }
          : undefined
      }
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

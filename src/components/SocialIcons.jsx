import { socials } from "../data/Data";
import { useTheme } from "../context/ThemeContext";

export default function SocialIcons({
  variant = "outline",
  ulClassName = "flex gap-3",
}) {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const variants = {
    outline: isDark
      ? "social-icon inline-flex items-center justify-center rounded-xl w-11 h-11 transition-all duration-200 border border-light-secondary/40 bg-light-secondary/10 text-light-quaternary/85 hover:border-light-secondary/80 hover:text-light-quaternary"
      : "social-icon inline-flex items-center justify-center rounded-xl w-11 h-11 transition-all duration-200 border border-light-primary/40 bg-white/40 text-dark-quaternary/80 hover:border-light-primary/70 hover:text-dark-quaternary",
    plain: isDark
      ? "social-icon inline-flex items-center justify-center rounded-xl w-11 h-11 transition-all duration-200 border-0 bg-transparent text-light-quaternary/80 hover:text-light-quaternary"
      : "social-icon inline-flex items-center justify-center rounded-xl w-11 h-11 transition-all duration-200 border-0 bg-transparent text-dark-quaternary/80 hover:text-dark-quaternary",
  };
  const buttonClassName = variants[variant] ?? variants.outline;

  return (
    <ul className={ulClassName}>
      {socials.map(({ label, href, Icon }) => (
        <li key={label}>
          <a
            href={href}
            target={href.startsWith("mailto:") ? undefined : "_blank"}
            rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
            aria-label={label}
            className={buttonClassName}
          >
            {Icon ? (
              <Icon className="w-5 h-5 social-icon-svg" />
            ) : null}
          </a>
        </li>
      ))}
    </ul>
  );
}


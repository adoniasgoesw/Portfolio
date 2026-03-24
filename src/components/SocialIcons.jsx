import { socials } from "../data/portfolioData.js";
import { useTheme } from "../context/ThemeContext";


export default function SocialIcons({
  variant = "outline",
  ulClassName = "flex gap-3",
}) {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const variants = {
    outline: isDark
      ? "social-icon inline-flex items-center justify-center rounded-xl w-11 h-11 transition-all duration-200 border border-[#2a3d53] bg-transparent text-light-quaternary/90 hover:border-[#3f6688] hover:text-light-quaternary"
      : "social-icon inline-flex items-center justify-center rounded-xl w-11 h-11 transition-all duration-200 border border-light-primary/40 bg-transparent text-dark-quaternary/80 hover:border-light-primary/70 hover:text-dark-quaternary",
    plain: isDark
      ? "social-icon inline-flex items-center justify-center rounded-xl w-11 h-11 transition-all duration-200 border-0 bg-transparent text-light-quaternary/80 hover:text-light-quaternary"
      : "social-icon inline-flex items-center justify-center rounded-xl w-11 h-11 transition-all duration-200 border-0 bg-transparent text-dark-quaternary/80 hover:text-dark-quaternary",
  };
  const buttonClassName = variants[variant] ?? variants.outline;
  const emailWrapperClassName = isDark
    ? "mt-3 inline-flex max-w-full items-center gap-2 rounded-xl border border-[#2a3d53] bg-transparent px-3 py-2 text-sm text-light-quaternary/90"
    : "mt-3 inline-flex max-w-full items-center gap-2 rounded-xl border border-light-primary/35 bg-transparent px-3 py-2 text-sm text-dark-quaternary/85";

  return (
    <div className="w-full flex flex-col gap-3 items-center justify-center">
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

    
    </div>


  );
}


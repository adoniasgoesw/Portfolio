import { Sun, Moon } from "lucide-react";
import { useMemo } from "react";
import Button from "../components/button";
import SocialIcons from "../components/SocialIcons";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
import useT from "../i18n/useT";
import { navItems } from "../data/Data";
import Car from "../components/Car";

export default function Footer({
  onRotateLeft180 = () => {},
  showSun = true,
}) {
  const t = useT();
  const { lang, toggleLanguage } = useLanguage();
  const { theme } = useTheme();
  const year = useMemo(() => new Date().getFullYear(), []);
  const isDark = theme === "dark";

  return (
    <footer
      className={`px-4 sm:px-10 md:px-16 lg:px-20 xl:px-40 py-16 relative isolate overflow-hidden ${
        isDark
          ? "bg-dark-primary text-light-quaternary"
          : "bg-light-primary text-dark-quaternary"
      }`}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-start gap-10">
          <div className="flex-1 text-center md:text-left">
            <div className="text-3xl font-bold">{t("footer.title")}</div>
            <div className={`mt-1 text-sm ${isDark ? "text-light-quaternary/80" : "text-dark-quaternary/80"}`}>{t("footer.role")}</div>

            <div className={`mt-4 text-sm ${isDark ? "text-light-quaternary/80" : "text-dark-quaternary/80"}`}>{t("footer.thanks")}</div>
            <div className={`text-sm ${isDark ? "text-light-quaternary/80" : "text-dark-quaternary/80"}`}>
              {t("footer.madeWith")} <span className="text-red-500">❤</span>{" "}
              {t("footer.by")}
            </div>
          </div>

          <div className="w-full md:w-1/2 flex flex-col items-center md:items-end gap-6">
            <div className="flex flex-wrap items-center justify-center md:justify-end gap-3">
              <Button
                type="button"
                ariaLabel="Toggle language"
                text={lang === "en" ? "EN" : "PT"}
                onClick={() => toggleLanguage()}
                variant="lang"
                className={`no-auto-translate ${isDark ? "text-light-quaternary" : ""}`}
              />

              <Button
                type="button"
                ariaLabel="Toggle theme"
                icon={showSun ? Sun : Moon}
                onClick={() => onRotateLeft180()}
                variant="icon"
                className={`p-2 ${isDark ? "text-light-quaternary" : ""}`}
              />
            </div>

            <div className="w-full md:w-auto">
              <div className={`text-sm font-bold uppercase tracking-widest text-center md:text-right ${isDark ? "text-light-quaternary" : "text-dark-quaternary"}`}>
                {t("footer.menuTitle")}
              </div>

              <nav aria-label="Footer navigation" className="mt-3">
                <ul className="flex flex-col gap-3 items-center md:items-end">
                  {navItems.map((item) => (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        className={`text-sm font-medium transition-colors duration-200 ${
                          isDark
                            ? "text-light-quaternary/80 hover:text-light-quaternary"
                            : "text-dark-quaternary/80 hover:text-light-quaternary"
                        }`}
                      >
                        {t(item.labelKey)}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className={`order-2 md:order-1 text-sm text-center md:text-left ${isDark ? "text-light-quaternary/80" : "text-dark-quaternary/80"}`}>
            © {year} {t("footer.title")} — All rights reserved.
          </div>

          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <SocialIcons
              variant="plain"
              ulClassName="flex items-center gap-3"
            />
          </div>
        </div>
      </div>

      <Car />
    </footer>
  );
}


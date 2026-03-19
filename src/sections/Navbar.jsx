  import { useEffect, useState } from "react";
  import { Sun, Moon, Menu, X } from "lucide-react";
  import Button from "../components/button";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
import useT from "../i18n/useT";
import { navItems } from "../data/Data";

export default function Navbar({
  onRotateLeft180 = () => {},
  showSun = true,
}) {
    const { lang, toggleLanguage } = useLanguage();
    const { theme } = useTheme();
    const t = useT();
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
      const onScroll = () => setScrolled(window.scrollY > 0);
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const resolveNavLabel = (labelKey) => t(labelKey);

    return (
      <>
        <header
          className={[
            "fixed top-0 left-0 right-0 z-50 px-4 sm:px-10 md:px-16 lg:px-20 xl:px-40 py-4 w-full transition-all duration-200",
            scrolled
              ? theme === "dark"
                ? "bg-dark-quaternary/40 backdrop-blur-xs"
                : "bg-white/0 backdrop-blur-xs"
              : "bg-transparent",
          ].join(" ")}
        >
          <nav className="max-w-7xl mx-auto flex justify-between items-center">
            <a
              href="#hero"
              className={`font-bold ${
                theme === "dark" ? "text-light-quaternary" : "text-dark-quaternary"
              }`}
            >
              Adonias Goes
            </a>

            <ul className="hidden md:flex gap-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={`text-sm font-medium ${
                      theme === "dark"
                        ? "text-light-quaternary hover:text-light-quaternary/80"
                        : "text-dark-quaternary hover:text-light-quaternary/80"
                    }`}
                  >
                    {resolveNavLabel(item.labelKey)}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3">
              <Button
                type="button"
                ariaLabel="Rotate"
                icon={showSun ? Sun : Moon}
                onClick={() => {
                  onRotateLeft180();
                }}
                variant="icon"
                className={theme === "dark" ? "text-light-quaternary" : ""}
              />

              <Button
                type="button"
                ariaLabel="Language"
                text={lang === "en" ? "EN" : "PT"}
                onClick={() => toggleLanguage()}
                variant="lang"
                className={`no-auto-translate ${
                  theme === "dark" ? "text-light-quaternary" : ""
                }`}
              />

              <Button
                type="button"
                ariaLabel="Menu"
                icon={mobileOpen ? X : Menu}
                onClick={() => setMobileOpen((v) => !v)}
                variant="icon"
                className={`md:hidden ${theme === "dark" ? "text-light-quaternary" : ""}`}
              />
            </div>
          </nav>
        </header>

        {mobileOpen ? (
          <div className="md:hidden fixed inset-0 z-40" role="dialog" aria-modal="true">
            <Button
              type="button"
              ariaLabel="Close menu overlay"
              onClick={() => setMobileOpen(false)}
              variant="icon"
              className="absolute inset-0 w-full h-full rounded-none bg-black/40 border-0 hover:translate-y-0"
            />

            <div
              className={`absolute top-20 left-4 right-4 sm:left-10 sm:right-10 rounded-2xl backdrop-blur p-4 shadow-xl ${
                theme === "dark"
                  ? "border border-white/10 bg-dark-quaternary/95"
                  : "border border-white/10 bg-white/90"
              }`}
            >
              

              <ul className="mt-4 flex flex-col gap-2">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={`block px-1 py-3 text-sm font-medium ${
                        theme === "dark"
                          ? "text-light-quaternary hover:text-light-quaternary/70"
                          : "text-dark-quaternary hover:text-dark-quaternary/70"
                      }`}
                    >
                      {resolveNavLabel(item.labelKey)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ) : null}
      </>
    );
  }

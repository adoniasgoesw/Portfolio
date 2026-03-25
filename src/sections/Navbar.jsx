import { navItems } from "../data/data";
import Button from "../components/buttons/Button";
import { Menu, Sun, Moon, X } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { useEffect, useState } from "react";
import { animate } from "motion";
export default function Navbar() {
    const { theme, rotateLeft180 } = useTheme();
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    const ThemeIcon = theme === "light" ? Sun : Moon;
    const isDark = theme === "dark";
    const textClass = isDark ? "text-light-quaternary text-sm" : "text-dark-quaternary text-sm";

    useEffect(() => {
        const onScroll = () => {
            const scrollTop = document.documentElement.scrollTop;
            setScrolled(scrollTop > 10); // usa 10 pra evitar flicker
            
          };
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        const header = document.querySelector("[data-navbar]");
        if (!header) return;
        animate(
            header,
            { opacity: [0, 1], y: [-20, 0] },
            { duration: 0.55, easing: "ease-out", delay: 0.3 }
        );
    }, []);

    return (
        <>
            <header
                data-navbar
                className={[
                    "fixed top-0 left-0 right-0 z-50 px-4 py-6 sm:px-6 md:px-8 lg:px-10 xl:px-40 transition-all duration-200 ",
                    scrolled
                        ? isDark
                            ? "bg-dark-quaternary/40 backdrop-blur-xs"
                            : "bg-white/30 backdrop-blur-xs"
                        : "bg-transparent",
                ].join(" ")}
            >
                <nav className="flex items-center justify-between max-w-7xl w-full mx-auto">
                    <div>
                        <h2 className={textClass + " font-bold text-2xl"}>Adonias Goes</h2>
                    </div>

                    {/* Desktop nav */}
                    <ul className="hidden md:flex items-center gap-6">
                        {navItems.map((item) => (
                            <li key={item.label}>
                                <a
                                    href={item.href}
                                    className={[
                                        textClass,
                                        "transition-colors duration-200 hover:opacity-80",
                                    ].join(" ")}
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className="flex items-center gap-2 md:gap-4">
                        <Button
                            variant="icon"
                            icon={ThemeIcon}
                            className={`icon-shake-on-hover ${textClass}`}
                            onClick={rotateLeft180}
                            ariaLabel="Toggle theme"
                        />

                        {/* Mobile menu button */}
                        <Button
                            variant="icon"
                            icon={mobileOpen ? X : Menu}
                            className={`icon-shake-on-hover ${textClass} md:hidden`}
                            onClick={() => setMobileOpen((v) => !v)}
                            ariaLabel={mobileOpen ? "Close menu" : "Open menu"}
                            aria-expanded={mobileOpen}
                        />
                    </div>
                </nav>
            </header>

            {/* Mobile menu */}
            {mobileOpen ? (
                <div className="fixed inset-0 z-40 md:hidden">
                    <button
                        aria-label="Close menu backdrop"
                        onClick={() => setMobileOpen(false)}
                        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                    />

                    <div
                        className={[
                            "absolute left-4 right-4 top-20 sm:left-6 sm:right-6",
                            "p-4",
                            isDark ? "bg-dark-quaternary/95" : "bg-white/95",
                            "rounded-xl",
                            "shadow-xl",
                        ].join(" ")}
                    >
                        <div className="max-w-7xl mx-auto w-full">
                            <ul className="flex flex-col gap-3">
                                {navItems.map((item) => (
                                    <li key={item.label}>
                                        <a
                                            href={item.href}
                                            onClick={() => setMobileOpen(false)}
                                            className={[
                                                "block w-full px-4 py-3 text-center",
                                                textClass,
                                                "font-medium",
                                            ].join(" ")}
                                        >
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            ) : null}
        </>
    )
}
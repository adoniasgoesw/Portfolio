import { useEffect, useState } from "react";
import { useTheme } from "../../context/ThemeContext";

export default function FormContact({ startTyping = false }) {
    const { theme } = useTheme();
    const isDark = theme === "dark";

    const [namePlaceholder, setNamePlaceholder] = useState("");
    const [emailPlaceholder, setEmailPlaceholder] = useState("");
    const [messagePlaceholder, setMessagePlaceholder] = useState("");

    useEffect(() => {
        if (!startTyping) return;

        const placeholders = [
            { text: "Enter your Name...", delay: 200, setter: setNamePlaceholder },
            { text: "you@gmail.com...", delay: 1000, setter: setEmailPlaceholder },
            { text: "Tell me about the quest...", delay: 1500, setter: setMessagePlaceholder },
        ];

        const timeouts = [];
        const intervals = [];

        placeholders.forEach(({ text, delay, setter }) => {
            setter("");
            const timeoutId = window.setTimeout(() => {
                let i = 0;
                const intervalId = window.setInterval(() => {
                    i += 1;
                    setter(text.slice(0, i));
                    if (i >= text.length) {
                        window.clearInterval(intervalId);
                    }
                }, 45);
                intervals.push(intervalId);
            }, delay);
            timeouts.push(timeoutId);
        });

        return () => {
            timeouts.forEach((id) => window.clearTimeout(id));
            intervals.forEach((id) => window.clearInterval(id));
        };
    }, [startTyping]);

    return (
        <form className={[
            "flex flex-col gap-5 items-start justify-center rounded-xl border-2 p-6",
            "hover:border-accent-primary/35 hover:shadow-[0_12px_40px_-18px_rgba(91,140,255,0.55)] transition-all duration-300",
            isDark
                ? "border-light-quaternary/10 bg-dark-secondary/30 backdrop-blur-sm"
                : "border-neutral-primary/30 bg-white/55",
        ].join(" ")}>
            <div className={[
                "w-full border-b-2 pb-2",
                isDark ? "border-light-quaternary/15" : "border-neutral-primary/20",
            ].join(" ")}>
                <h4 className={[
                    "uppercase text-xs tracking-widest",
                    isDark ? "text-light-quaternary/70" : "text-neutral-primary",
                ].join(" ")}>mission terminal</h4>
            </div>
            <div className="flex flex-col gap-2 w-full">
            <label className={[
                "uppercase text-xs tracking-widest",
                isDark ? "text-light-quaternary/70" : "text-neutral-primary",
            ].join(" ")}>Player Name</label>
            <input
                type="text"
                name="name"
                id="name"
                placeholder={namePlaceholder}
                className={[
                    "w-full border-2 rounded-xl py-2 px-4 outline-none transition-all duration-200",
                    "focus:border-accent-primary focus:ring-2 focus:ring-accent-primary/30",
                    isDark
                        ? "border-light-quaternary/15 bg-dark-tertiary/70 text-light-quaternary placeholder:text-light-quaternary/45"
                        : "border-neutral-primary/25 bg-light-quaternary text-neutral-tertiary placeholder:text-neutral-secondary/70",
                ].join(" ")}
            />
            </div>

            <div className="flex flex-col gap-2 w-full">
            <label className={[
                "uppercase text-xs tracking-widest",
                isDark ? "text-light-quaternary/70" : "text-neutral-primary",
            ].join(" ")}>Communication Frequency</label>
            <input
                type="text"
                name="email"
                id="email"
                placeholder={emailPlaceholder}
                className={[
                    "w-full border-2 rounded-xl py-2 px-4 outline-none transition-all duration-200",
                    "focus:border-accent-primary focus:ring-2 focus:ring-accent-primary/30",
                    isDark
                        ? "border-light-quaternary/15 bg-dark-tertiary/70 text-light-quaternary placeholder:text-light-quaternary/45"
                        : "border-neutral-primary/25 bg-light-quaternary text-neutral-tertiary placeholder:text-neutral-secondary/70",
                ].join(" ")}
            />
            </div>

            <div className="flex flex-col gap-2 w-full">
            <label className={[
                "uppercase text-xs tracking-widest",
                isDark ? "text-light-quaternary/70" : "text-neutral-primary",
            ].join(" ")}>Your Mission</label>
            <textarea
                type="text"
                name="message"
                id="message"
                placeholder={messagePlaceholder}
                className={[
                    "w-full border-2 rounded-xl py-2 pb-20 px-4 outline-none transition-all duration-200",
                    "focus:border-accent-primary focus:ring-2 focus:ring-accent-primary/30",
                    isDark
                        ? "border-light-quaternary/15 bg-dark-tertiary/70 text-light-quaternary placeholder:text-light-quaternary/45"
                        : "border-neutral-primary/25 bg-light-quaternary text-neutral-tertiary placeholder:text-neutral-secondary/70",
                ].join(" ")}
            />
            </div>
        </form>

    )
}
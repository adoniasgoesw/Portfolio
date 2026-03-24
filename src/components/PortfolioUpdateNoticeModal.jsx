import { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";
import Button from "./ui/Button";
import { Construction } from "lucide-react";

export default function PortfolioUpdateNoticeModal() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [open, setOpen] = useState(true);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center p-4"
      role="presentation"
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/55 backdrop-blur-sm"
        aria-label="Fechar aviso"
        onClick={() => setOpen(false)}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="portfolio-update-notice-title"
        className={`relative z-10 w-full max-w-md rounded-2xl border p-6 shadow-xl ${
          isDark
            ? "bg-dark-quaternary border-neutral-quaternary text-light-quaternary"
            : "bg-white border-slate-200 text-dark-quaternary"
        }`}
      >
        <div className="flex justify-center mb-4">
          <div
            className={`flex h-14 w-14 items-center justify-center rounded-2xl ${
              isDark ? "bg-dark-secondary text-accent-primary" : "bg-light-secondary/15 text-accent-secondary"
            }`}
          >
            <Construction className="h-8 w-8" aria-hidden />
          </div>
        </div>

        <h2
          id="portfolio-update-notice-title"
          className="text-center text-lg font-bold leading-snug"
        >
          Ops!
        </h2>
        <p
          className={`mt-3 text-center text-sm leading-relaxed ${
            isDark ? "text-light-quaternary/85" : "text-neutral-primary"
          }`}
        >
          Este portfólio está sendo atualizado. Volte mais tarde.
        </p>

        <div className="mt-6 flex justify-center">
          <Button
            type="button"
            text="Entendi"
            variant="primary"
            onClick={() => setOpen(false)}
            ariaLabel="Fechar aviso"
          />
        </div>
      </div>
    </div>
  );
}

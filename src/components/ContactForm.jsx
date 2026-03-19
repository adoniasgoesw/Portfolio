import Button from "./button";
import { useState } from "react";
import useT from "../i18n/useT";
import { useTheme } from "../context/ThemeContext";

export default function ContactForm() {
  const t = useT();
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, message });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`w-full max-w-sm rounded-2xl shadow-sm p-6 ${
        isDark ? "bg-dark-quaternary/90 border border-[#1f2c3d]" : "bg-white border border-slate-200"
      }`}
    >
      <div className="flex flex-col gap-2">
        <label
          htmlFor="contact-name"
          className={`text-[11px] tracking-widest uppercase font-bold px-2 ${
            isDark ? "text-[#6f86a3]" : "text-neutral-secondary"
          }`}
        >
          {t("contact.form.nameLabel")}
        </label>
        <input
          id="contact-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={t("contact.form.namePlaceholder")}
          className={`w-full rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-light-secondary/30 focus:border-light-secondary ${
            isDark
              ? "border border-[#1f2c3d] bg-[#0f1620] text-light-quaternary placeholder:text-[#6f86a3]"
              : "border border-slate-200 bg-white text-neutral-quinary placeholder:text-slate-400"
          }`}
        />
      </div>

      <div className="mt-4 flex flex-col gap-2">
        <label
          htmlFor="contact-email"
          className={`text-[11px] tracking-widest uppercase font-bold px-2 ${
            isDark ? "text-[#6f86a3]" : "text-neutral-secondary"
          }`}
        >
          {t("contact.form.emailLabel")}
        </label>
        <input
          id="contact-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t("contact.form.emailPlaceholder")}
          className={`w-full rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-light-secondary/30 focus:border-light-secondary ${
            isDark
              ? "border border-[#1f2c3d] bg-[#0f1620] text-light-quaternary placeholder:text-[#6f86a3]"
              : "border border-slate-200 bg-white text-neutral-quinary placeholder:text-slate-400"
          }`}
        />
      </div>

      <div className="mt-4 flex flex-col gap-2">
        <label
          htmlFor="contact-message"
          className={`text-[11px] tracking-widest uppercase font-bold px-2 ${
            isDark ? "text-[#6f86a3]" : "text-neutral-secondary"
          }`}
        >
          {t("contact.form.messageLabel")}
        </label>
        <textarea
          id="contact-message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={5}
          placeholder={t("contact.form.messagePlaceholder")}
          className={`w-full resize-none rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-light-secondary/30 focus:border-light-secondary ${
            isDark
              ? "border border-[#1f2c3d] bg-[#0f1620] text-light-quaternary placeholder:text-[#6f86a3]"
              : "border border-slate-200 bg-white text-neutral-quinary placeholder:text-slate-400"
          }`}
        />
      </div>

      <div className="mt-5">
        <Button
          type="submit"
          text={t("contact.form.send")}
          variant="secondary"
          className="w-full"
          disabled={!name.trim() || !email.trim() || !message.trim()}
        />
      </div>
    </form>
  );
}

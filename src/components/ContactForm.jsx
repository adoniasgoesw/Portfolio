import Button from "./ui/Button";
import { useState } from "react";
import { useTheme } from "../context/ThemeContext";

export default function ContactForm() {
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
      className={`w-full rounded-2xl p-6 sm:p-7 transition-all duration-200 ${
        isDark
          ? "bg-dark-quaternary/95 border border-neutral-quaternary shadow-[0_12px_30px_rgba(0,0,0,0.35)] hover:border-dark-secondary hover:shadow-[0_0_0_1px_var(--color-dark-secondary),0_14px_34px_rgba(0,0,0,0.4)]"
          : "bg-white border border-slate-200 shadow-[0_10px_28px_rgba(15,23,42,0.08)] hover:shadow-[0_14px_30px_rgba(15,23,42,0.12)]"
      }`}
    >
      <div
        className={`mb-5 pb-4 border-b ${
          isDark ? "border-[#1f2c3d]" : "border-slate-200"
        }`}
      >
        <p
          className={`text-[11px] tracking-[0.2em] uppercase font-semibold ${
            isDark ? "text-neutral-secondary" : "text-neutral-secondary"
          }`}
        >
          Quest Terminal
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="contact-name"
          className={`text-[11px] tracking-widest uppercase font-bold px-2 ${
            isDark ? "text-neutral-secondary" : "text-neutral-secondary"
          }`}
        >
          ADVENTURER NAME
        </label>
        <input
          id="contact-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Hero name..."
          className={`w-full rounded-xl px-3 py-2.5 text-sm transition-colors focus:outline-none focus:ring-2 ${
            isDark
              ? "border border-neutral-quaternary bg-transparent text-light-quaternary placeholder:text-neutral-secondary focus:ring-dark-secondary/40 focus:border-dark-secondary"
              : "border border-slate-200 bg-[#f8fafc] text-neutral-quinary placeholder:text-slate-400 focus:ring-light-secondary/30 focus:border-light-secondary"
          }`}
        />
      </div>

      <div className="mt-4 flex flex-col gap-2">
        <label
          htmlFor="contact-email"
          className={`text-[11px] tracking-widest uppercase font-bold px-2 ${
            isDark ? "text-neutral-secondary" : "text-neutral-secondary"
          }`}
        >
          YOUR SIGNAL 
        </label>
        <input
          id="contact-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@gmail.com"
          className={`w-full rounded-xl px-3 py-2.5 text-sm transition-colors focus:outline-none focus:ring-2 ${
            isDark
              ? "border border-neutral-quaternary bg-transparent text-light-quaternary placeholder:text-neutral-secondary focus:ring-dark-secondary/40 focus:border-dark-secondary"
              : "border border-slate-200 bg-[#f8fafc] text-neutral-quinary placeholder:text-slate-400 focus:ring-light-secondary/30 focus:border-light-secondary"
          }`}
        />
      </div>

      <div className="mt-4 flex flex-col gap-2">
        <label
          htmlFor="contact-message"
          className={`text-[11px] tracking-widest uppercase font-bold px-2 ${
            isDark ? "text-neutral-secondary" : "text-neutral-secondary"
          }`}
        >
          THE QUEST DETAILS
        </label>
        <textarea
          id="contact-message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={5}
          placeholder="Tell me about your mission..."
          className={`w-full resize-none rounded-xl px-3 py-2.5 text-sm transition-colors focus:outline-none focus:ring-2 ${
            isDark
              ? "border border-neutral-quaternary bg-transparent text-light-quaternary placeholder:text-neutral-secondary focus:ring-dark-secondary/40 focus:border-dark-secondary"
              : "border border-slate-200 bg-[#f8fafc] text-neutral-quinary placeholder:text-slate-400 focus:ring-light-secondary/30 focus:border-light-secondary"
          }`}
        />
      </div>

      <div className="mt-6">
        <Button
          type="submit"
          text="Send Message"
          variant="primary"
          className="w-full rounded-xl"
          disabled={!name.trim() || !email.trim() || !message.trim()}
        />
      </div>
    </form>
  );
}

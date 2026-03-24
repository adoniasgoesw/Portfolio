import ContactForm from "../components/ContactForm";
import SocialIcons from "../components/SocialIcons";
import { useTheme } from "../context/ThemeContext";
export default function Contact() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      id="contact"
      className={`px-4 sm:px-10 md:px-16 lg:px-20 xl:px-40 py-16 relative ${
        isDark ? "bg-dark-quaternary" : "bg-light-quaternary"
      }`}
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-10 items-center justify-center">
        <div className="max-w-3xl mx-auto text-center flex flex-col gap-4">
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-extrabold ${
              isDark ? "text-light-quaternary" : "text-dark-quaternary"
            }`}
          >
            Ready for the{" "}
            <span className={isDark ? "text-accent-primary" : "text-accent-primary"}>
              Next Mission
            </span>
            ?
          </h2>
          <p
            className={`text-sm sm:text-base leading-relaxed ${
              isDark ? "text-light-quaternary/80" : "text-neutral-primary"
            }`}
          >
            Send a message and let&apos;s build something legendary.
          </p>
        </div>

        <div className="w-full max-w-2xl">
          <div
            className={`rounded-3xl p-1 ${
              isDark
                ? "bg-light-quaternary/5 border border-light-quaternary/10 backdrop-blur-sm"
                : "bg-white/70 border border-white/70 backdrop-blur-sm"
            }`}
          >
            <ContactForm />
          </div>
          <div className="mt-5 flex justify-center">
            <SocialIcons variant="outline" ulClassName="flex flex-wrap justify-center gap-3" />
          </div>
        </div>
      </div>
    </section>
  )
}
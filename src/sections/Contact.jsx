import ContactForm from "../components/ContactForm";
import SectionHeader from "../components/SectionHeader";
import useT from "../i18n/useT";
import SocialIcons from "../components/SocialIcons";
import { useTheme } from "../context/ThemeContext";

export default function Contact() {
  const t = useT();
  const { theme } = useTheme();
  const isDark = theme === "dark";
  return (
    <section id="contact" className="px-4 sm:px-10 md:px-16 lg:px-20 xl:px-40 py-16  min-h-[800px]">
      <div className="max-w-7xl mx-auto flex flex-col gap-10 items-center justify-center">
      <SectionHeader
        tag={t("contact.tag")}
        title={t("contact.title")}
        description={t("contact.description")}
      />

      <div className="flex flex-col gap-10 md:flex-row max-w-4xl mx-auto">
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <h3 className={`text-3xl font-bold ${isDark ? "text-light-quaternary" : "text-dark-quaternary"}`}>
            {t("contact.h3Prefix")}{" "}
            <span className={`${isDark ? "text-light-primary" : "text-dark-secondary"}`}>{t("contact.h3Span")}</span>{" "}
            {t("contact.h3Suffix")}
          </h3>
          <p className={`text-sm ${isDark ? "text-light-quaternary/80" : "text-neutral-primary"}`}>
            {t("contact.p")}
          </p>
          <SocialIcons
              variant="plain"
              ulClassName="flex items-center gap-3"
            />
        </div>

        <div className="w-full md:w-1/2 flex justify-center items-center ">
          <ContactForm />
        </div>
      </div>
      </div>
    </section>
  );
}
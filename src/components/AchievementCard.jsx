import useT from "../i18n/useT";
import { useLanguage } from "../context/LanguageContext";
import dictionary from "../i18n/dictionary";
import Button from "./button";
import { SquareArrowOutUpRight } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function AchievementCard({ achievement }) {
  const toTitleCase = (value = "") =>
    String(value)
      .toLowerCase()
      .replace(/\b\w/g, (char) => char.toUpperCase());

  const t = useT();
  const { lang } = useLanguage();
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const Icon = achievement?.Icon;
  const hasCertificate = Boolean(achievement?.certificated);
  const situationKey =
    achievement?.Situation === "In Course" ? "InCourse" : achievement?.Situation;
  const translatedCourse =
    dictionary[lang]?.achievements?.courses?.[achievement?.Course] ??
    achievement?.Course;

  const tagText = achievement?.Tag;
  const translatedTag =
    dictionary[lang]?.achievements?.badges?.[tagText] ?? tagText;
  const tags = achievement?.tags ?? [];
  const isEpicReward = tagText === "Epic Reward";
  const isInProgress = tagText === "In Progress";
  const situationLabel =
    achievement?.Situation && situationKey
      ? t(`achievements.situation.${situationKey}`)
      : "";

  return (
    <article
      className={`relative w-full rounded-2xl shadow-sm p-6 flex flex-col min-h-[280px] transition-all duration-200 hover:-translate-y-1 ${
        isDark
          ? "bg-dark-quaternary/90 border border-[#1f2c3d] hover:border-[#2d4e69] hover:shadow-[0_0_0_1px_rgba(45,78,105,0.35)]"
          : "bg-white border border-slate-200 hover:shadow-md"
      }`}
    >
      {tagText ? (
        <div className="absolute -top-3 -right-3 -rotate-12 z-10">
          <span
            className={[
              "inline-flex items-center justify-center rounded-full px-3 py-1 text-[11px] font-extrabold tracking-wide border shadow-sm",
              isEpicReward
                ? "bg-linear-to-r from-amber-200 via-yellow-200 to-amber-300 text-amber-950 border-amber-300"
                : isInProgress
                  ? "bg-linear-to-r from-sky-400 to-blue-500 text-white border-transparent"
                  : isDark
                    ? "bg-[#1b2433] text-[#b7c4d6] border-[#1f2c3d]"
                    : "bg-slate-100 text-slate-700 border-slate-200",
            ].join(" ")}
          >
            {translatedTag}
          </span>
        </div>
      ) : null}

      <div className="flex flex-col items-start gap-3 flex-1">
        {Icon ? (
          <div className="w-full flex justify-center">
            <div className={`h-20 w-full rounded-2xl inline-flex items-center justify-center ${
              isDark ? "bg-[#1b2433] text-[#2ea7d8]" : "bg-light-secondary/10 text-light-secondary"
            }`}>
              <Icon className="w-full h-full p-4" />
            </div>
          </div>
        ) : null}

        <h3
          className={`w-full text-lg font-bold ${isDark ? "text-light-quaternary" : "text-neutral-quinary"}`}
          title={translatedCourse}
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {translatedCourse}
        </h3>

        <div className={`w-full text-xs flex flex-col gap-2 ${isDark ? "text-[#b7c4d6]" : "text-neutral-secondary"}`}>
          <div className="flex items-center flex-wrap gap-2">
            <span className={`font-semibold ${isDark ? "text-light-quaternary/90" : "text-neutral-primary"}`}>
              {achievement?.Institution}
            </span>
            {achievement?.Date ? (
              <>
                <span aria-hidden>•</span>
                <span className={isDark ? "text-light-quaternary/75" : "text-neutral-secondary"}>
                  {achievement?.Date}
                </span>
              </>
            ) : null}
          </div>
          {situationLabel ? (
            <span className={isDark ? "text-light-quaternary/75" : "text-neutral-secondary"}>
              {situationLabel}
            </span>
          ) : null}
        </div>

        {tags?.length ? (
          <div className="flex flex-wrap gap-2 pt-1">
            {tags.map((tag) => (
              <span
                key={tag}
                className={`px-3 py-1 rounded-full text-[11px] font-medium border ${
                  isDark
                    ? "bg-[#121a25] text-[#c8d7ea] border-[#2a3a4f]"
                    : "bg-light-secondary/20 text-dark-quaternary border-light-secondary/40"
                }`}
              >
                {toTitleCase(dictionary[lang]?.achievements?.tags?.[tag] ?? tag)}
              </span>
            ))}
          </div>
        ) : null}

        <div className="w-full mt-auto min-h-[44px] pt-1">
          <Button
            type="button"
            text={t("achievements.viewCertificate")}
            variant="secondary"
            icon={SquareArrowOutUpRight}
            iconAnimation="grow"
            disabled={!hasCertificate}
            onClick={
              hasCertificate
                ? () =>
                    window.open(
                      achievement.certificated,
                      "_blank",
                      "noopener,noreferrer"
                    )
                : undefined
            }
            className="w-full"
          />
        </div>
      </div>
    </article>
  );
}

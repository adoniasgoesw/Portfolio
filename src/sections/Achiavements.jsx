import { achievements } from '../data/Data';
import AchievementCard from "../components/AchievementCard";
import SectionHeader from "../components/SectionHeader";
import useT from "../i18n/useT";


export default function Achiavements() {
    const t = useT();

    
    return (
        <section id="achievements" className="px-4 sm:px-10 md:px-16 lg:px-20 xl:px-40 py-16 min-h-[500px] ">
            <div className="max-w-7xl mx-auto flex flex-col gap-10 items-center justify-center">
            <SectionHeader
              tag={t("achievements.sectionTag")}
              title={t("achievements.title")}
              description={t("achievements.description")}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                {achievements.map((achievement, i) => (
                    <AchievementCard key={i} achievement={achievement} />
                ))}
            </div>
            </div>
        </section>
    );
}
import AvatarImage from "../../assets/Avatar1.png";
import AvatarImageDark from "../../assets/Avatar2.png";
import { useTheme } from "../../context/ThemeContext";

export default function Avatar() {
    const { theme } = useTheme();

    return (
        <div data-avatar className="absolute top-[370px]  md:top-75 -left-20 sm md:-left-25 w-48 h-48 md:w-56 md:h-56 z-60 pointer-events-none">
            <img src={theme === "light" ? AvatarImage : AvatarImageDark} alt="Avatar" className="w-full h-full object-cover" />
        </div>
    )
}
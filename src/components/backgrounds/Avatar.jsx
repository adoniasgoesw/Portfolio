import AvatarImage from "../../assets/Avatar1.png";
import AvatarImageDark from "../../assets/Avatar2.png";
import { useTheme } from "../../context/ThemeContext";

export default function Avatar() {
    const { theme } = useTheme();

    return (
        <div data-avatar className="absolute top-[450px] sm:top-75 -left-10 sm:-left-20 w-40 h-40 sm:w-56 sm:h-56 z-60 pointer-events-none">
            <img src={theme === "light" ? AvatarImage : AvatarImageDark} alt="Avatar" className="w-full h-full object-cover" />
        </div>
    )
}
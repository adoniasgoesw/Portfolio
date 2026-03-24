import FooterAvatar from "../components/FooterAvatar";
import CloudSecondary from "../components/backgrounds/CloudSecondary";
import Clouds from "../components/backgrounds/Clouds";
import { StarsBackground } from "../components/backgrounds/StarsBackground";
import { useTheme } from "../context/ThemeContext";
import SocialIcons from "../components/SocialIcons";

export default function Footer() {
  const { theme } = useTheme();
  return (
    <footer className="relative flex flex-col gap-10 bg-light-primary py-5 overflow-hidden">
      {theme === "dark" ? (
        <StarsBackground
          pointerEvents={false}
          starColor="#FFF"
          className="absolute inset-0 z-0 bg-none"
        />
      ) : null}

      <div className="min-h-[500px] w-full relative rotate-180 -translate-y-8">
        <Clouds position="top" />
      </div>
      <div className="flex flex-col gap-10 max-w-7xl mx-auto  w-full relative z-10 px-10">
        
    

        <div className="flex flex-col gap-2">
          <h1 className="text-xl font-bold w-1/4 text-balance text-light-quaternary">The End of the Journey... or just the beginning?</h1>
          <p className="text-sm text-light-quaternary/80 text-balance w-1/2">Every great project starts with a simple idea. Let's build yours.</p>
        </div>
        
        <div>
          <p className="text-sm text-neutral-primary">© 2026 Adonias Goes — All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}
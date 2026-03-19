import Achiavements from "./sections/Achiavements.jsx";
import Contact from "./sections/Contact.jsx";
import FooterClouds from "./sections/FooterClouds.jsx";
import Footer from "./sections/Footer.jsx";
import Hero from "./sections/Hero.jsx";
import Navbar from "./sections/Navbar.jsx";
import Skills from "./sections/Skills.jsx";
import Projects from "./sections/Projects.jsx";
import Jorney from "./sections/About.jsx";
import { useRef, useState } from "react";
import { useTheme } from "./context/ThemeContext.jsx";

export default function App() {
  const [rotationDeg, setRotationDeg] = useState(0);
  const { theme, toggleTheme } = useTheme();

  const animRef = useRef({
    rafId: 0,
    start: 0,
    from: 0,
    to: 0,
    durationMs: 550,
    running: false,
  });
  const rotationRef = useRef(0);

  // Rotate left by 180deg per click, using JS tween.
  // This avoids CSS transition choosing the "shortest path" and flipping direction.
  const rotateLeft180 = () => {
    if (animRef.current.rafId) cancelAnimationFrame(animRef.current.rafId);

    toggleTheme();

    const from = rotationRef.current;
    const to = from - 180;
    const start = performance.now();

    animRef.current = {
      ...animRef.current,
      rafId: 0,
      start,
      from,
      to,
      running: true,
    };

    const easeInOut = (t) => {
      // Smoothstep-ish
      return t * t * (3 - 2 * t);
    };

    const tick = (now) => {
      const { durationMs, start: s, from: f, to: target } = animRef.current;
      const rawT = durationMs <= 0 ? 1 : (now - s) / durationMs;
      const t = Math.min(1, Math.max(0, rawT));
      const eased = easeInOut(t);
      const next = f + (target - f) * eased;
      rotationRef.current = next;
      setRotationDeg(next);

      if (t < 1) {
        animRef.current.rafId = requestAnimationFrame(tick);
      } else {
        animRef.current.running = false;
        animRef.current.rafId = 0;
      }
    };

    animRef.current.rafId = requestAnimationFrame(tick);
  };

  return (
    <>
      <Navbar
        onRotateLeft180={rotateLeft180}
        showSun={theme === "light"}
      />
      <div>
        <Hero rotationDeg={rotationDeg} onRotateLeft180={rotateLeft180} />
        <Skills />
        <Projects />
        <Jorney />
        <Achiavements />
        <Contact />
        <FooterClouds />
        <Footer
          onRotateLeft180={rotateLeft180}
          showSun={theme === "light"}
        />
      </div>
    </>
  )
}
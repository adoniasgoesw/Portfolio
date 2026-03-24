import Contact from "./sections/Contact.jsx";
import Footer from "./sections/Footer.jsx";
import Hero from "./sections/Hero.jsx";
import Navbar from "./sections/Navbar.jsx";
import Skills from "./sections/Skills.jsx";
import Projects from "./sections/Projects.jsx";
import About from "./sections/About.jsx";

import PortfolioUpdateNoticeModal from "./components/PortfolioUpdateNoticeModal.jsx";
import { useRef, useState } from "react";
import { useTheme } from "./context/ThemeContext.jsx";

export default function App() {
  const { theme, toggleTheme } = useTheme();
  // Unwrapped rotation: each theme toggle always steps 180° to the left (e.g. 0 → -180 → -360…).
  const [rotationDeg, setRotationDeg] = useState(() =>
    theme === "dark" ? -180 : 0
  );

  const animRef = useRef({
    rafId: 0,
    start: 0,
    from: 0,
    to: 0,
    durationMs: 550,
    running: false,
  });
  const rotationRef = useRef(0);

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

    const easeInOut = (t) => t * t * (3 - 2 * t);

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
      <PortfolioUpdateNoticeModal />
      <Navbar
        onRotateLeft180={rotateLeft180}
        showSun={theme === "light"}
      />
      <div>
        <Hero rotationDeg={rotationDeg} onRotateLeft180={rotateLeft180} />
        <Skills />
        <Projects />
        <About />
       
        <Contact />
        <Footer />
      </div>
    </>
  );
}
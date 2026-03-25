import {
  createContext,
  useCallback,
  useContext,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";

const ThemeContext = createContext(null);

function getInitialTheme() {
  try {
    const saved = window.localStorage.getItem("portfolio-theme");
    return saved === "dark" ? "dark" : "light";
  } catch {
    return "light";
  }
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => getInitialTheme());

  // Rotate in -180° steps to force a “left spin” direction (unwrapped).
  const initialRotation = theme === "dark" ? -180 : 0;
  const [rotationDeg, setRotationDeg] = useState(initialRotation);

  // Keeps the “unwrapped” rotation value for left-only 180° steps.
  const rotationRef = useRef(initialRotation);

  const animRef = useRef({
    rafId: 0,
    start: 0,
    from: 0,
    to: 0,
    durationMs: 550,
  });

  useLayoutEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.style.colorScheme = theme;
    try {
      window.localStorage.setItem("portfolio-theme", theme);
    } catch {}
  }, [theme]);

  const rotateLeft180 = useCallback(() => {
    if (animRef.current.rafId) cancelAnimationFrame(animRef.current.rafId);

    // Flip theme immediately so the icons swap in sync with the rotation.
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

    const from = rotationRef.current;
    const to = from - 180;
    const start = performance.now();

    animRef.current = {
      ...animRef.current,
      start,
      from,
      to,
      rafId: 0,
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
        animRef.current.rafId = 0;
      }
    };

    animRef.current.rafId = requestAnimationFrame(tick);
  }, []);

  const value = useMemo(
    () => ({
      theme,
      rotationDeg,
      rotateLeft180,
    }),
    [theme, rotationDeg, rotateLeft180]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}


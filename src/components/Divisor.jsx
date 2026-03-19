export default function Divisor({ className = "" }) {
  return (
    <div
      className={["h-1 w-16 sm:w-20 mt-1 rounded-full", "bg-light-primary/60", className]
        .filter(Boolean)
        .join(" ")}
      aria-hidden
    />
  );
}

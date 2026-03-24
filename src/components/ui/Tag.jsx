export default function Tag({ icon: Icon, text }) {
  return (
    <span className="bg-light-tertiary text-neutral-tertiary dark:bg-dark-secondary dark:text-light-quaternary uppercase flex items-center gap-2 text-xs font-bold px-4 py-1 w-fit rounded-xl border border-light-secondary/45 dark:border-dark-primary/70">
      {Icon ? <Icon className="w-4 h-4" /> : null}
      {text}
    </span>
  );
}

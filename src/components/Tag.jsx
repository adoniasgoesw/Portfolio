export default function Tag({ icon: Icon, text }) {
  return (
    <span className="bg-light-secondary text-light-quaternary uppercase flex items-center gap-2 text-xs font-bold  px-4 py-1 w-fit rounded-xl">
      {Icon ? <Icon className="w-4 h-4" /> : null}
      {text}
    </span>
  );
}


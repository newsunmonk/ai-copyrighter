export default function FrameworkButton({ framework, selected, onToggle }) {
  return (
    <button
      type="button"
      onClick={() => onToggle(framework.key)}
      className={[
        "group rounded-2xl border p-4 text-left transition-all duration-200",
        "bg-panel/70 hover:-translate-y-0.5 hover:border-accentSoft/40",
        selected
          ? "border-accent bg-gradient-to-br from-accent/25 to-accentDeep/20 shadow-glow"
          : "border-white/10",
      ].join(" ")}
    >
      <div className="text-lg font-semibold tracking-wide text-white">
        {framework.title}
      </div>
      <div
        className={[
          "mt-1 text-sm leading-relaxed",
          selected ? "text-purple-100" : "text-slate-400 group-hover:text-slate-300",
        ].join(" ")}
      >
        {framework.description}
      </div>
    </button>
  );
}

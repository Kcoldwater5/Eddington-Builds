export default function Logo({ className = "h-8 w-auto", variant = "dark" }) {
  const text = variant === "light" ? "text-white" : "text-navy-900";
  const mark = variant === "light" ? "bg-white text-navy-900" : "bg-navy-900 text-white";
  return (
    <div className="flex items-center gap-2.5">
      <div
        className={`grid h-9 w-9 place-items-center rounded-md ${mark} font-bold tracking-tight`}
        aria-hidden="true"
      >
        EB
      </div>
      <div className={`leading-tight ${text}`}>
        <div className="text-[15px] font-bold tracking-tight">Eddington Builds</div>
        <div className={`text-[10px] font-medium uppercase tracking-[0.2em] ${variant === "light" ? "text-navy-200" : "text-navy-500"}`}>
          Playground Installation
        </div>
      </div>
    </div>
  );
}

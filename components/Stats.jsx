const stats = [
  { value: "150+", label: "Projects Completed" },
  { value: "10+", label: "Years of Experience" },
  { value: "12", label: "States / Regions Served" },
  { value: "25+", label: "Playground Partners Supported" },
];

export default function Stats() {
  return (
    <section
      aria-label="Credibility by the numbers"
      className="border-y border-navy-100 bg-white"
    >
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <dl className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="reveal text-center sm:text-left">
              <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-navy-500">
                {s.label}
              </dt>
              <dd className="mt-2 text-4xl font-bold tracking-tight text-navy-900 sm:text-5xl">
                {s.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

import { IconShield, IconHandshake, IconCheck, IconUsers, IconHammer } from "./Icon";

const reasons = [
  {
    icon: IconHandshake,
    title: "Reliable Subcontractor Partner",
    body: "Consistent communication from quote through punch list. We show up, we follow through, and we represent your brand well.",
  },
  {
    icon: IconUsers,
    title: "Professional Jobsite Conduct",
    body: "Clean uniforms, organized materials, respectful crews. Site contacts and reps know what they&rsquo;re getting.",
  },
  {
    icon: IconHammer,
    title: "Quality Craftsmanship",
    body: "Plumb posts. Torqued fasteners. Clean concrete pours. The details that hold up on a 10-year inspection cycle.",
  },
  {
    icon: IconShield,
    title: "Safety-Focused Installation",
    body: "CPSC guidance and ASTM compliance are baseline — not a finish line. Every install is built to be inspected.",
  },
  {
    icon: IconCheck,
    title: "Experience With Playground Companies",
    body: "We already speak the language of manufacturer specs, rep territories, and project coordination timelines.",
  },
];

export default function WhyPartner() {
  return (
    <section
      id="why"
      className="relative overflow-hidden bg-navy-900 py-20 text-white sm:py-24 lg:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 10%, white 1px, transparent 1px), radial-gradient(circle at 80% 60%, white 1px, transparent 1px)",
          backgroundSize: "40px 40px, 56px 56px",
        }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            Why Partner With Us
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Installers you can hand the job to — and stop worrying about.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-navy-100">
            Playground companies, vendors, and project reps partner with
            Eddington Builds because our crews deliver the jobsite standard their
            clients expect.
          </p>
        </div>

        <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r) => (
            <li
              key={r.title}
              className="reveal rounded-xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition hover:bg-white/[0.07]"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-accent text-white">
                <r.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">
                {r.title}
              </h3>
              <p
                className="mt-2 text-sm leading-relaxed text-navy-100"
                dangerouslySetInnerHTML={{ __html: r.body }}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

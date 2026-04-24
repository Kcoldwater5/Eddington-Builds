import {
  IconHammer,
  IconLayers,
  IconShield,
  IconTruck,
  IconClipboard,
} from "./Icon";

const services = [
  {
    icon: IconHammer,
    title: "Commercial Playground Installation",
    body: "Full-scope equipment installation for schools, parks, churches, and municipalities — to manufacturer spec.",
  },
  {
    icon: IconTruck,
    title: "Site Preparation Support",
    body: "Grading coordination, excavation support, drainage awareness, and subgrade readiness for smooth installs.",
  },
  {
    icon: IconLayers,
    title: "Safety Surfacing Support",
    body: "Assistance with engineered wood fiber, poured-in-place rubber, bonded rubber, and tile surfacing installs.",
  },
  {
    icon: IconShield,
    title: "Equipment Assembly",
    body: "Component-level assembly with fastener torque checks, post plumbing, and compliance with CPSC guidance.",
  },
  {
    icon: IconClipboard,
    title: "Final Walkthrough & Punch List",
    body: "Detailed jobsite walkthrough with project reps, documented punch list completion, and inspection-ready handoff.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal max-w-3xl">
          <span className="eyebrow">Services</span>
          <h2 className="heading mt-3 text-3xl sm:text-4xl lg:text-5xl">
            What we handle on every install.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-navy-700">
            From site prep to punch list, our crews support the full installation
            lifecycle so playground companies and reps can deliver with
            confidence.
          </p>
        </div>

        <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, idx) => (
            <li
              key={s.title}
              className="reveal relative overflow-hidden rounded-xl border border-navy-100 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex items-start gap-4">
                <div className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-navy-900 text-white ring-1 ring-navy-800">
                  <s.icon className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                    0{idx + 1}
                  </div>
                  <h3 className="mt-1 text-lg font-semibold text-navy-900">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-600">
                    {s.body}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

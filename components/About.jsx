import { IconShield, IconHandshake, IconClipboard, IconCheck } from "./Icon";

const highlights = [
  {
    icon: IconShield,
    title: "Safety-First Installation",
    body: "We follow manufacturer specs, CPSC guidance, and ASTM standards from footings to final inspection.",
  },
  {
    icon: IconHandshake,
    title: "Clear Communication",
    body: "Proactive updates to project reps and site contacts — no surprises, no silent delays.",
  },
  {
    icon: IconClipboard,
    title: "Professional Jobsites",
    body: "Clean, organized work areas. Respectful crews. Documentation every step of the way.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="reveal">
            <span className="eyebrow">About Eddington Builds</span>
            <h2 className="heading mt-3 text-3xl sm:text-4xl lg:text-5xl">
              A dependable installation partner built for commercial playground work.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-navy-700">
              Eddington Builds is a commercial playground installation contractor
              serving playground manufacturers, vendors, and project representatives
              across the country. We handle the work that decision-makers don&rsquo;t
              want to worry about — footings poured correctly, equipment assembled
              to spec, surfacing installed safely, and sites left clean and
              inspection-ready.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-navy-700">
              Our crews combine field-tested experience with a jobsite standard
              that playground companies and reps consistently trust to represent
              their brand on-site.
            </p>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "Insured and credentialed",
                "Manufacturer-spec compliant",
                "Punch-list discipline",
                "Travel-ready crews",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 rounded-md border border-navy-100 bg-navy-50/40 px-4 py-3 text-sm font-medium text-navy-800"
                >
                  <IconCheck className="h-5 w-5 flex-shrink-0 text-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal relative">
            {/*
              REPLACE ABOUT IMAGE HERE:
              Replace /public/images/about/about-crew.jpg with your real crew/jobsite photo.
            */}
            <div className="relative overflow-hidden rounded-xl bg-navy-100 shadow-lg ring-1 ring-navy-200">
              <img
                src="/images/about/showcase.JPG"
                alt="Eddington Builds crew on a commercial playground jobsite"
                className="aspect-[4/5] w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden w-64 rounded-lg bg-white p-5 shadow-xl ring-1 ring-navy-100 sm:block">
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                Trusted on-site
              </div>
              <div className="mt-1 text-sm font-medium text-navy-800">
                &ldquo;Our installer of choice for regional school district work.&rdquo;
              </div>
              <div className="mt-2 text-xs text-navy-500">
                — Placeholder testimonial
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-3">
          {highlights.map((h) => (
            <div
              key={h.title}
              className="reveal rounded-xl border border-navy-100 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-navy-900 text-white">
                <h.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-navy-900">
                {h.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-600">
                {h.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

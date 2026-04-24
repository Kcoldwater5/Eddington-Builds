import { IconLocation, IconArrowRight } from "./Icon";

/*
  REPLACE PROJECT IMAGES + DETAILS HERE.
  Each project's `image` path points to /public/images/projects/<file>.
  Drop your real photos into public/images/projects/ and either:
    1) keep the same filenames (project-1.jpg, project-2.jpg, etc.), OR
    2) rename the `image` field below to match your filenames.
  You can also edit `name`, `location`, and `description` for each project.
*/
const projects = [
  {
    image: "/images/projects/Drummond.JPG",
    name: "Drummond Elementary Playground",
    location: "St. Louis, MO",
    description:
      "Full installation of a multi-structure play system with poured-in-place safety surfacing.",
  },
  {
    image: "/images/projects/Overheadpreturf.JPG",
    name: "Maplewood Community Park",
    location: "Lexington, KY",
    description:
      "Multi-structure playground installation with engineered concrete footings and full equipment assembly, completed to manufacturer specifications.",
  },
  {
    image: "/images/projects/preturf.JPG",
    name: "Northview School District",
    location: "Indianapolis, IN",
    description:
      "Completed installation of a preschool playground structure with attention to safety, stability, and long-term use.",
  },
  {
    image: "/images/projects/Turf.JPG",
    name: "Cedar Grove HOA Play Area",
    location: "Nashville, TN",
    description:
      "Final project cleanup and turf installation, ensuring a polished, jobsite-ready result.",
  },
  {
    image: "/images/projects/orangepreturf.JPG",
    name: "Westbrook Church Campus",
    location: "Cincinnati, OH",
    description:
      "Active build of a single structure elementary playground with concrete footings annd equipment installation underway",
  },
  {
    image: "/images/projects/Courtyarddrum.JPG",
    name: "Lakeside Early Learning Center",
    location: "Grand Rapids, MI",
    description:
      "In-progress courtyard playground build, featuring structured installation and site coordination within a confined school space",
  },
];

export default function Work() {
  return (
    <section id="work" className="bg-navy-50/60 py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal max-w-3xl">
          <span className="eyebrow">Our Work</span>
          <h2 className="heading mt-3 text-3xl sm:text-4xl lg:text-5xl">
            Completed playground installations we&rsquo;re proud of.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-navy-700">
            A selection of commercial playground projects installed by our crews
            for playground companies and project representatives.
          </p>
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <li
              key={p.name}
              className="reveal group overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-navy-100 transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-navy-100">
                <img
                  src={p.image}
                  alt={`${p.name} — ${p.location}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-navy-900/60 to-transparent" />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                  <IconLocation className="h-4 w-4" />
                  {p.location}
                </div>
                <h3 className="mt-2 text-lg font-semibold text-navy-900">
                  {p.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-600">
                  {p.description}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-14 flex justify-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md bg-navy-900 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-navy-800"
          >
            Discuss your next install
            <IconArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
}

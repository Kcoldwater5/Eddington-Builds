import { IconArrowRight, IconShield, IconCheck } from "./Icon";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-navy-900 text-white">
      {/*
        REPLACE HERO IMAGE HERE:
        Swap the background image by replacing /public/images/hero/hero-playground.jpg
        with your own file of the same name, OR change the URL in the style below.
      */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero/hero-playground.jpg')" }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-br from-navy-950/90 via-navy-900/80 to-navy-800/70"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent/0"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 pb-24 pt-36 sm:px-6 sm:pt-40 lg:px-8 lg:pb-32 lg:pt-48">
        <div className="max-w-3xl animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/80 backdrop-blur">
            <IconShield className="h-4 w-4 text-accent" />
            Commercial Playground Installation
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Reliable Playground Installation Partners
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy-100 sm:text-xl">
            Eddington Builds delivers safe, efficient, and professionally completed
            commercial playground installations for playground companies, vendors,
            and project representatives nationwide.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#work"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-6 py-3.5 text-sm font-semibold text-white shadow-md transition hover:bg-accent-600"
            >
              View Our Work
              <IconArrowRight />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
            >
              Partner With Us
            </a>
          </div>

          <ul className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-navy-100">
            <li className="inline-flex items-center gap-2">
              <IconCheck className="h-5 w-5 text-accent" />
              Safety-focused installation
            </li>
            <li className="inline-flex items-center gap-2">
              <IconCheck className="h-5 w-5 text-accent" />
              Professional jobsite conduct
            </li>
            <li className="inline-flex items-center gap-2">
              <IconCheck className="h-5 w-5 text-accent" />
              On-time project delivery
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

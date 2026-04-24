import Logo from "./Logo";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-navy-800/40 bg-navy-950 text-navy-100">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Logo variant="light" />
            <p className="mt-4 max-w-md text-sm leading-relaxed text-navy-200">
              Commercial playground installation trusted by playground
              companies, vendors, and project representatives.
            </p>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
              Company
            </div>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#about" className="hover:text-white">About</a></li>
              <li><a href="#work" className="hover:text-white">Our Work</a></li>
              <li><a href="#services" className="hover:text-white">Services</a></li>
              <li><a href="#why" className="hover:text-white">Why Partner</a></li>
            </ul>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
              Contact
            </div>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a
                  href="mailto:contact@eddingtonbuilds.com"
                  className="hover:text-white"
                >
                  contact@eddingtonbuilds.com
                </a>
              </li>
              <li>
                <a href="tel:+10000000000" className="hover:text-white">
                  (000) 000-0000
                </a>
              </li>
              <li className="text-navy-300">Regional Midwest + nationwide</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-navy-800/60 pt-6 text-xs text-navy-300 sm:flex-row sm:items-center">
          <div>&copy; {year} Eddington Builds. All rights reserved.</div>
          <div>Commercial playground installation &middot; Insured</div>
        </div>
      </div>
    </footer>
  );
}

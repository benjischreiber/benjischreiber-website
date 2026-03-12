import Link from "next/link";

const DOCTIFY_URL = "https://www.doctify.com/uk/specialist/dr-benji-schreiber";
const GOOGLE_URL = "https://g.page/dr-benji-schreiber-consultant-r";

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-navy-300">
      <div className="container-content py-14 sm:py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {/* Brand */}
          <div>
            <p className="mb-1 font-serif text-lg text-white">Dr. Benji Schreiber</p>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-gold-500">
              Consultant Rheumatologist
            </p>
            <p className="text-sm leading-relaxed text-navy-400">
              MBBS&nbsp;MA&nbsp;MD&nbsp;FRCP<br />
              Honorary Associate Professor, UCL<br />
              NHS Consultant, Royal Free Hospital
            </p>
          </div>

          {/* Contact */}
          <div>
            <p className="text-white text-sm font-semibold uppercase tracking-widest mb-4">
              Contact
            </p>
            <address className="not-italic text-sm space-y-2 text-navy-400">
              <p className="font-medium text-navy-300">Secretary: Olivia Skeet</p>
              <p className="font-medium text-navy-300 pt-1">Wellington Diagnostics, Golders Green</p>
              <p>296 Golders Green Road, NW11 9PY</p>
              <p className="font-medium text-navy-300 pt-1">Hospital of St John &amp; St Elizabeth</p>
              <p>60 Grove End Road, NW8 9NH</p>
              <p>
                <a
                  href="tel:02084586775"
                  className="hover:text-gold-400 transition-colors duration-150"
                >
                  020 8458 6775
                </a>
              </p>
              <p className="pt-1">
                <a
                  href="mailto:info@benjischreiber.com"
                  className="hover:text-gold-400 transition-colors duration-150"
                >
                  info@benjischreiber.com
                </a>
              </p>
            </address>
            <Link href="/contact" className="btn-primary mt-6 !py-2 !px-5 text-xs">
              Book an Appointment
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-navy-800 pt-6 text-xs text-navy-500 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-center sm:text-left">© {new Date().getFullYear()} Dr. Benji Schreiber. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 sm:justify-end">
            <a href={DOCTIFY_URL} target="_blank" rel="noopener noreferrer"
              className="hover:text-gold-400 transition-colors duration-150">
              Doctify Reviews
            </a>
            <span className="hidden sm:inline">·</span>
            <a href={GOOGLE_URL} target="_blank" rel="noopener noreferrer"
              className="hover:text-gold-400 transition-colors duration-150">
              Google Reviews
            </a>
            <span className="hidden sm:inline">·</span>
            <Link href="/privacy" className="hover:text-gold-400 transition-colors duration-150">
              Privacy Notice
            </Link>
            <span className="hidden sm:inline">·</span>
            <p className="text-center sm:text-left">Registered with the General Medical Council</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

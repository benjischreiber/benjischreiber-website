"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/conditions", label: "Conditions" },
  { href: "/fees", label: "Fees" },
  { href: "/medicolegal", label: "Medicolegal" },
  { href: "/consulting-rooms", label: "Locations" },
  { href: "/reviews", label: "Reviews" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === href;
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-navy-100 bg-white/95 shadow-sm backdrop-blur">
      <div className="container-content flex h-16 items-center justify-between gap-6 sm:h-20 lg:gap-10">
        {/* Logo / Name */}
        <Link href="/" className="flex flex-col leading-tight lg:mr-4">
          <span className="whitespace-nowrap font-serif text-sm font-semibold tracking-[0.01em] text-navy-900 sm:text-base">
            Dr. Benji Schreiber
          </span>
          <span className="whitespace-nowrap text-[9px] font-semibold uppercase tracking-[0.16em] text-gold-500 sm:text-[10px]">
            Consultant Rheumatologist
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex flex-1 items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium tracking-wide transition-colors duration-150
                ${
                  isActive(link.href)
                    ? "text-gold-500 border-b-2 border-gold-500 pb-0.5"
                    : "text-navy-700 hover:text-gold-500"
                }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile click-to-call */}
        <div className="flex items-center gap-1 lg:hidden">
          <a
            href="tel:02084586775"
            className="rounded-full border border-gold-200 bg-gold-50 p-2 text-gold-600 transition-colors hover:bg-gold-100"
            aria-label="Call secretary"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </a>

          {/* Mobile hamburger */}
          <button
            className="rounded-full border border-navy-200 p-2 text-navy-800 transition-colors hover:border-gold-300 hover:text-gold-600"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div id="mobile-navigation" className="border-t border-navy-100 bg-white px-5 pb-6 shadow-lg lg:hidden">
          <nav className="flex flex-col gap-1 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`rounded-sm border-b border-navy-50 px-2 py-3 text-sm font-medium tracking-wide transition-colors
                  ${isActive(link.href) ? "text-gold-500" : "text-navy-700 hover:text-gold-500"}`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="btn-primary mt-3 w-full text-center"
            >
              Book Appointment
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

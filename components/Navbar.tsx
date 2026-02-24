"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/conditions", label: "Conditions" },
  { href: "/medicolegal", label: "Medicolegal" },
  { href: "/consulting-rooms", label: "Locations" },
  { href: "/reviews", label: "Reviews" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-white border-b border-navy-100 sticky top-0 z-50 shadow-sm">
      <div className="container-content flex items-center justify-between h-20">
        {/* Logo / Name */}
        <Link href="/" className="flex flex-col leading-tight">
          <span className="font-serif text-navy-900 text-base font-semibold tracking-wide whitespace-nowrap">
            Dr. Benji Schreiber
          </span>
          <span className="text-gold-500 text-[10px] tracking-[0.2em] uppercase font-semibold whitespace-nowrap">
            Consultant Rheumatologist
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium tracking-wide transition-colors duration-150
                ${
                  pathname === link.href
                    ? "text-gold-500 border-b-2 border-gold-500 pb-0.5"
                    : "text-navy-700 hover:text-gold-500"
                }`}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary ml-2 !py-2 !px-5">
            Book Appointment
          </Link>
        </nav>

        {/* Mobile click-to-call */}
        <a
          href="tel:02084586775"
          className="lg:hidden p-2 text-gold-500"
          aria-label="Call secretary"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </a>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 text-navy-800"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
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

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-navy-100 px-6 pb-6">
          <nav className="flex flex-col gap-4 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`text-sm font-medium tracking-wide py-1 border-b border-navy-50
                  ${pathname === link.href ? "text-gold-500" : "text-navy-700"}`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="btn-primary text-center mt-2"
            >
              Book Appointment
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

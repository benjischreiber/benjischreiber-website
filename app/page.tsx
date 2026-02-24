import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import ReviewCarousel from "@/components/ReviewCarousel";

export const metadata: Metadata = {
  title: "Private Consultant Rheumatologist London | Dr. Benji Schreiber",
  description:
    "Dr. Benji Schreiber MBBS MA MD FRCP is a leading private consultant rheumatologist in North London. Expert in arthritis, lupus, scleroderma and connective tissue diseases.",
};

const specialties = [
  {
    title: "Inflammatory Arthritis",
    description:
      "Expert diagnosis and management of rheumatoid arthritis, psoriatic arthritis, ankylosing spondylitis and other inflammatory joint conditions.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Connective Tissue Diseases",
    description:
      "Specialist care for lupus (SLE), scleroderma, Sjögren's syndrome, myositis and overlap syndromes, including pulmonary complications.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "Osteoporosis & Bone Health",
    description:
      "Assessment and treatment of osteoporosis and metabolic bone disease, with access to DEXA scanning and the full range of bone-protective therapies.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    title: "Soft Tissue & Joint Pain",
    description:
      "Diagnosis and treatment of fibromyalgia, chronic pain syndromes, hypermobility, bursitis, tendinopathy and other soft tissue conditions.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
      </svg>
    ),
  },
  {
    title: "Gout & Crystal Arthritis",
    description:
      "Comprehensive management of gout, pseudogout and calcium pyrophosphate deposition disease, including long-term urate-lowering therapy.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "Medicolegal Reports",
    description:
      "Expert witness reports for personal injury and clinical negligence cases in general rheumatology, chronic pain, connective tissue disease and pulmonary hypertension.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
];

const credentials = [
  { value: "MBBS MA MD FRCP", label: "Qualifications" },
  { value: "2010", label: "Consultant Since" },
  { value: "UCL", label: "Hon. Associate Professor" },
  { value: "4742768", label: "GMC Number" },
  { value: "315+", label: "Medicolegal Reports" },
  { value: "H-index 21", label: "Research Impact" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 opacity-95" />
        <div className="relative container-content section-padding flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Text */}
          <div className="flex-1 max-w-2xl">
            <p className="section-label !text-gold-400">Private Consultant Rheumatologist · London</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-4">
              Dr. Benji Schreiber
            </h1>
            <p className="text-gold-300 text-sm tracking-wide mb-5">
              Consultant-delivered care from first appointment to follow-up — no registrars, no delegation.
            </p>
            <div className="w-12 h-0.5 bg-gold-500 mb-6" />
            <p className="text-navy-300 text-lg leading-relaxed mb-8 max-w-xl">
              A leading specialist in inflammatory arthritis, connective tissue diseases and general
              rheumatology, practising privately at two North London locations.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">
                Book an Appointment
              </Link>
              <Link href="/about" className="btn-outline !border-navy-400 !text-navy-200 hover:!bg-navy-800 hover:!text-white">
                Learn More
              </Link>
            </div>
          </div>

          {/* Headshot */}
          <div className="flex-shrink-0 w-64 h-80 md:w-72 md:h-96 relative">
            <Image
              src="/images/benji.png"
              alt="Dr. Benji Schreiber — Consultant Rheumatologist"
              fill
              className="object-contain object-bottom"
              priority
            />
          </div>
        </div>
      </section>

      {/* Credentials strip */}
      <section className="bg-gold-500">
        <div className="container-content py-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-white text-center">
            {credentials.map((c) => (
              <div key={c.label}>
                <p className="font-serif text-lg font-semibold">{c.value}</p>
                <p className="text-xs tracking-widest uppercase opacity-80 mt-0.5">{c.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About summary */}
      <section className="section-padding bg-white">
        <div className="container-content">
          <div className="max-w-3xl">
            <p className="section-label">About Dr. Schreiber</p>
            <h2 className="section-title">
              Expertise you can trust, care you can feel
            </h2>
            <div className="divider-gold" />
            <p className="text-navy-600 leading-relaxed mb-5">
              Dr. Benji Schreiber trained at University College London and undertook his specialist
              training at some of London&apos;s leading hospitals, including Hammersmith, Chelsea and
              Westminster, and the Royal Free. He was appointed as an NHS Consultant Rheumatologist
              in 2010.
            </p>
            <p className="text-navy-600 leading-relaxed mb-8">
              He holds a Masters degree in Clinical Education and a research doctorate focused on
              pulmonary hypertension and connective tissue diseases. He is an Honorary Associate
              Professor at University College London, reflecting his ongoing commitment to research
              and postgraduate education.
            </p>
            <Link href="/about" className="btn-outline">
              Full Biography
            </Link>
          </div>
        </div>
      </section>

      {/* My approach */}
      <section className="section-padding bg-navy-50">
        <div className="container-content">
          <div className="max-w-3xl mx-auto">
            <p className="section-label">My Approach</p>
            <h2 className="section-title">A patient-centred practice</h2>
            <div className="divider-gold" />
            <div className="space-y-4 text-navy-600 leading-relaxed mt-2">
              <p>
                As a physician, I strive to ensure my patients feel listened to, well informed and well treated.
                Whether there&apos;s pain in a joint or something you can&apos;t quite put your finger on,
                I am well placed to offer an integrated approach — rapidly reaching a diagnosis and a clear
                management plan.
              </p>
              <p>
                I value taking the time at consultation to go through the issue thoroughly, to review previous
                investigations and treatments, and to agree a plan that is explained clearly. I aim to be
                compassionate, respectful and unhurried — and to ensure that every patient leaves feeling
                genuinely listened to.
              </p>
            </div>
            <p className="mt-6 text-navy-800 font-serif text-base italic">— Dr. Benji Schreiber</p>
          </div>
        </div>
      </section>

      {/* Reviews highlight */}
      <section className="bg-navy-950 py-16">
        <div className="container-content">
          <div className="text-center mb-10">
            <p className="section-label !text-gold-400">Patient Reviews</p>
            <div className="flex items-center justify-center gap-3 mt-2">
              <div className="flex gap-1">
                {[1,2,3,4,5].map(s => (
                  <svg key={s} className="w-5 h-5 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-white font-serif text-lg">5.0</span>
              <span className="text-navy-400 text-sm">· 110+ Google reviews</span>
            </div>
          </div>
          <ReviewCarousel />
          <div className="text-center mt-10">
            <Link href="/reviews" className="btn-outline !border-navy-600 !text-navy-300 hover:!bg-navy-800 hover:!text-white">
              Read all reviews
            </Link>
          </div>
        </div>
      </section>

      {/* Specialties */}
      <section className="section-padding bg-navy-50">
        <div className="container-content">
          <div className="text-center mb-14">
            <p className="section-label">Areas of Expertise</p>
            <h2 className="section-title">Conditions &amp; Services</h2>
            <div className="divider-gold mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialties.map((s) => (
              <div
                key={s.title}
                className="bg-white p-8 border border-navy-100 hover:border-gold-300 hover:shadow-md transition-all duration-200 group"
              >
                <div className="text-gold-500 mb-4 group-hover:scale-110 transition-transform duration-200">
                  {s.icon}
                </div>
                <h3 className="font-serif text-navy-900 text-lg mb-3">{s.title}</h3>
                <p className="text-navy-500 text-sm leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/conditions" className="btn-outline">
              View All Conditions
            </Link>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="section-padding bg-white">
        <div className="container-content">
          <div className="text-center mb-12">
            <p className="section-label">Consulting Rooms</p>
            <h2 className="section-title">Two convenient North London locations</h2>
            <div className="divider-gold mx-auto" />
            <p className="text-navy-600 leading-relaxed mt-4 max-w-2xl mx-auto">
              Dr. Schreiber sees private patients at two well-equipped facilities in North London,
              both offering on-site diagnostics and easy access by tube, bus or car.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Location 1 */}
            <div className="bg-navy-50 border border-navy-100 p-8 hover:border-gold-300 hover:shadow-sm transition-all duration-200">
              <p className="text-xs text-gold-500 uppercase tracking-widest font-semibold mb-3">Location 1</p>
              <h3 className="font-serif text-navy-900 text-lg mb-1">Wellington Diagnostics</h3>
              <p className="text-navy-500 text-sm mb-4">Golders Green, North London</p>
              <address className="not-italic text-navy-600 text-sm leading-relaxed mb-4">
                Roman House<br />
                296 Golders Green Road<br />
                London, NW11 9PY
              </address>
              <div className="space-y-1.5 text-sm text-navy-500 mb-6">
                <p><span className="font-medium text-navy-700">Tube: </span>Brent Cross station (Northern Line)</p>
                <p><span className="font-medium text-navy-700">Car: </span>On-site parking available</p>
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Roman+House+296+Golders+Green+Road+London+NW11+9PY"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold-600 hover:text-gold-700 text-sm font-medium underline underline-offset-2"
              >
                View on Google Maps →
              </a>
            </div>
            {/* Location 2 */}
            <div className="bg-navy-50 border border-navy-100 p-8 hover:border-gold-300 hover:shadow-sm transition-all duration-200">
              <p className="text-xs text-gold-500 uppercase tracking-widest font-semibold mb-3">Location 2</p>
              <h3 className="font-serif text-navy-900 text-lg mb-1">Hospital of St John &amp; St Elizabeth</h3>
              <p className="text-navy-500 text-sm mb-4">St John&apos;s Wood, North London</p>
              <address className="not-italic text-navy-600 text-sm leading-relaxed mb-4">
                60 Grove End Road<br />
                St John&apos;s Wood<br />
                London, NW8 9NH
              </address>
              <div className="space-y-1.5 text-sm text-navy-500 mb-6">
                <p><span className="font-medium text-navy-700">Tube: </span>St John&apos;s Wood station (Jubilee Line)</p>
                <p><span className="font-medium text-navy-700">Car: </span>Parking on site and nearby</p>
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=60+Grove+End+Road+St+Johns+Wood+London+NW8+9NH"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold-600 hover:text-gold-700 text-sm font-medium underline underline-offset-2"
              >
                View on Google Maps →
              </a>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link href="/consulting-rooms" className="btn-outline">
              Full directions &amp; maps
            </Link>
          </div>
        </div>
      </section>

      {/* Quick appointment request form */}
      <section className="section-padding bg-navy-950" id="request-appointment">
        <div className="container-content">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left text */}
            <div>
              <p className="section-label !text-gold-400">Get in Touch</p>
              <h2 className="section-title !text-white mb-4">Request an Appointment</h2>
              <div className="w-12 h-0.5 bg-gold-500 mb-6" />
              <p className="text-navy-300 leading-relaxed mb-4">
                To book a consultation with Dr. Schreiber, please fill in your details and we
                will respond within one working day.
              </p>
              <div className="space-y-3 text-sm text-navy-400">
                <div className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-gold-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:02084586775" className="hover:text-gold-400 transition-colors">020 8458 6775</a>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-gold-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:info@benjischreiber.com" className="hover:text-gold-400 transition-colors">info@benjischreiber.com</a>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Wellington Diagnostics, Golders Green &amp; Hospital of St John &amp; St Elizabeth</span>
                </div>
              </div>
            </div>

            {/* Right form */}
            <div className="bg-white p-8 shadow-xl">
              <h3 className="font-serif text-navy-900 text-lg mb-6">Quick Appointment Request</h3>
              <form action="https://formspree.io/f/mkovpegz" method="POST" className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="home-firstName" className="block text-xs font-semibold text-navy-500 uppercase tracking-widest mb-1.5">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="home-firstName"
                      name="firstName"
                      required
                      className="w-full border border-navy-200 px-3 py-2.5 text-sm text-navy-800 focus:outline-none focus:border-gold-400 transition-colors"
                      placeholder="Jane"
                    />
                  </div>
                  <div>
                    <label htmlFor="home-lastName" className="block text-xs font-semibold text-navy-500 uppercase tracking-widest mb-1.5">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="home-lastName"
                      name="lastName"
                      required
                      className="w-full border border-navy-200 px-3 py-2.5 text-sm text-navy-800 focus:outline-none focus:border-gold-400 transition-colors"
                      placeholder="Smith"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="home-email" className="block text-xs font-semibold text-navy-500 uppercase tracking-widest mb-1.5">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="home-email"
                    name="email"
                    required
                    className="w-full border border-navy-200 px-3 py-2.5 text-sm text-navy-800 focus:outline-none focus:border-gold-400 transition-colors"
                    placeholder="jane@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="home-phone" className="block text-xs font-semibold text-navy-500 uppercase tracking-widest mb-1.5">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="home-phone"
                    name="phone"
                    className="w-full border border-navy-200 px-3 py-2.5 text-sm text-navy-800 focus:outline-none focus:border-gold-400 transition-colors"
                    placeholder="07700 000000"
                  />
                </div>
                <div>
                  <label htmlFor="home-reason" className="block text-xs font-semibold text-navy-500 uppercase tracking-widest mb-1.5">
                    Reason / Symptoms *
                  </label>
                  <textarea
                    id="home-reason"
                    name="reason"
                    required
                    rows={3}
                    className="w-full border border-navy-200 px-3 py-2.5 text-sm text-navy-800 focus:outline-none focus:border-gold-400 transition-colors resize-none"
                    placeholder="Please briefly describe your symptoms or reason for appointment."
                  />
                </div>
                <button type="submit" className="btn-primary w-full text-center">
                  Send Request
                </button>
                <div className="space-y-1 text-xs text-navy-400 text-center">
                  <p>Olivia Skeet (secretary) will respond within one working day.</p>
                  <p>All enquiries are confidential and handled securely.</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

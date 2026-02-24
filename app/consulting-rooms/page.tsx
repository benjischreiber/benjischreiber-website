import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Consulting Rooms",
  description:
    "Dr. Benji Schreiber sees private patients at The Wellington Diagnostics and Outpatients Centre in Golders Green and the Hospital of St John and St Elizabeth in St John's Wood, London.",
};

const locations = [
  {
    name: "The Wellington Diagnostics and Outpatients Centre",
    shortName: "Wellington Diagnostics, Golders Green",
    address: ["Roman House", "296 Golders Green Road", "London, NW11 9PY"],
    network: "HCA Healthcare UK",
    tube: "Brent Cross station (Northern Line) — 6 minute walk. Golders Green station is also served by the Northern Line.",
    car: "On-site parking available. Easy access from the A406 North Circular.",
    bus: "Numerous routes along Golders Green Road including 112, 183, 210, 232, 240 and others.",
    mapQuery: "Roman+House+296+Golders+Green+Road+London+NW11+9PY",
    mapEmbed: "https://www.openstreetmap.org/export/embed.html?bbox=-0.2195%2C51.5705%2C-0.1995%2C51.5905&layer=mapnik&marker=51.5805%2C-0.2096",
  },
  {
    name: "Hospital of St John and St Elizabeth",
    shortName: "Hospital of St John & St Elizabeth",
    address: ["60 Grove End Road", "St John's Wood", "London, NW8 9NH"],
    network: "Independent charitable hospital",
    tube: "St John's Wood station (Jubilee Line) — approximately 5 minute walk.",
    car: "Parking available on site and nearby. Easy access via A41.",
    bus: "Routes 13, 46, 113 along Wellington Road; 187 along Circus Road; 139 and 189 along Abbey Road.",
    mapQuery: "60+Grove+End+Road+St+Johns+Wood+London+NW8+9NH",
    mapEmbed: "https://www.openstreetmap.org/export/embed.html?bbox=-0.1970%2C51.5269%2C-0.1570%2C51.5369&layer=mapnik&marker=51.5319%2C-0.1770",
  },
];

const facilities = [
  "State-of-the-art diagnostic imaging (X-ray, MRI, CT, ultrasound)",
  "On-site pathology and blood testing",
  "DEXA scanning for bone density assessment (Wellington Diagnostics)",
  "Joint injection and aspiration suite",
  "Specialist nursing support",
  "Convenient parking at both locations",
];

export default function ConsultingRoomsPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-navy-950 text-white py-20">
        <div className="container-content">
          <p className="section-label !text-gold-400">Location</p>
          <h1 className="text-4xl md:text-5xl font-serif">Consulting Rooms</h1>
          <div className="w-12 h-0.5 bg-gold-500 mt-5 mb-5" />
          <p className="text-navy-300 max-w-2xl leading-relaxed">
            Dr. Schreiber sees private patients at two convenient locations in North London,
            both offering excellent facilities and easy access.
          </p>
        </div>
      </section>

      {/* Two locations */}
      <section className="section-padding bg-white">
        <div className="container-content space-y-16">
          {locations.map((loc, i) => (
            <div key={loc.name} className={`grid md:grid-cols-2 gap-12 items-start ${i > 0 ? "pt-16 border-t border-navy-100" : ""}`}>
              {/* Info */}
              <div>
                <p className="section-label">Location {i + 1}</p>
                <h2 className="section-title text-2xl md:text-3xl">{loc.name}</h2>
                <div className="divider-gold" />
                <p className="text-navy-500 text-sm mb-6">{loc.network}</p>

                {/* Address card */}
                <div className="bg-navy-50 border border-navy-100 p-6 mb-6">
                  <p className="text-xs text-gold-500 uppercase tracking-widest font-semibold mb-3">Address</p>
                  <address className="not-italic text-navy-700 leading-loose text-sm">
                    <strong>{loc.shortName}</strong><br />
                    {loc.address.map((line) => (
                      <span key={line}>{line}<br /></span>
                    ))}
                  </address>
                  <div className="mt-4 pt-4 border-t border-navy-200 text-sm space-y-1">
                    <p>
                      <span className="font-medium text-navy-700">Tel: </span>
                      <a href="tel:02084586775" className="text-gold-600 hover:underline">
                        020 8458 6775
                      </a>
                    </p>
                    <p>
                      <span className="font-medium text-navy-700">Email: </span>
                      <a href="mailto:info@benjischreiber.com" className="text-gold-600 hover:underline">
                        info@benjischreiber.com
                      </a>
                    </p>
                  </div>
                </div>

                {/* Getting there */}
                <div className="space-y-3">
                  <p className="text-xs text-gold-500 uppercase tracking-widest font-semibold">Getting Here</p>
                  {[
                    { icon: "🚇", label: "Tube", detail: loc.tube },
                    { icon: "🚗", label: "By Car", detail: loc.car },
                    { icon: "🚌", label: "By Bus", detail: loc.bus },
                  ].map((t) => (
                    <div key={t.label} className="flex gap-3 text-sm">
                      <span className="text-base">{t.icon}</span>
                      <div>
                        <span className="font-medium text-navy-700">{t.label}: </span>
                        <span className="text-navy-500">{t.detail}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${loc.mapQuery}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline mt-6 inline-block"
                >
                  View on Google Maps
                </a>
              </div>

              {/* Map embed */}
              <div className="rounded-sm overflow-hidden shadow-md border border-navy-100 h-80">
                <iframe
                  src={loc.mapEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Map showing ${loc.shortName}`}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Facilities */}
      <section className="section-padding bg-navy-50">
        <div className="container-content">
          <div className="max-w-3xl mx-auto">
            <p className="section-label">On-Site Facilities</p>
            <h2 className="section-title">What&apos;s available</h2>
            <div className="divider-gold" />
            <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4 mt-2">
              {facilities.map((f) => (
                <li key={f} className="flex items-start gap-3 text-navy-600 text-sm">
                  <span className="w-1.5 h-1.5 bg-gold-500 rounded-full mt-2 flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-900 text-white py-16">
        <div className="container-content text-center">
          <h2 className="section-title !text-white mb-4">Ready to book?</h2>
          <p className="text-navy-300 max-w-lg mx-auto mb-8">
            Contact Dr. Schreiber&apos;s secretary to arrange an appointment at either location.
          </p>
          <Link href="/contact" className="btn-primary">
            Book an Appointment
          </Link>
        </div>
      </section>
    </>
  );
}

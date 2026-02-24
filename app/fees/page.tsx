import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fees & Insurance",
  description:
    "Consultation fees and insurance information for Dr. Benji Schreiber, private Consultant Rheumatologist in North London. Self-pay and all major insurers accepted.",
};

const feeItems = [
  {
    type: "New Patient Consultation",
    fee: "£300",
    detail: "Initial 30-minute consultation including clinical assessment, review of investigations, and written management plan.",
  },
  {
    type: "Follow-up Consultation",
    fee: "£200",
    detail: "30-minute follow-up appointment to review progress, results, and ongoing management.",
  },
];

const insurers = [
  "Bupa",
  "AXA Health",
  "Aviva",
  "Cigna",
  "WPA",
  "Vitality",
  "Allianz Care",
  "Freedom Health",
  "Simply Health",
  "All other major UK providers",
];

export default function FeesPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-navy-950 text-white py-20">
        <div className="container-content">
          <p className="section-label !text-gold-400">Private Practice</p>
          <h1 className="text-4xl md:text-5xl font-serif">Fees &amp; Insurance</h1>
          <div className="w-12 h-0.5 bg-gold-500 mt-5 mb-5" />
          <p className="text-navy-300 max-w-2xl leading-relaxed">
            Dr. Schreiber sees both insured and self-paying patients. All fees are transparent
            and communicated clearly before your appointment.
          </p>
        </div>
      </section>

      {/* Self-pay fees */}
      <section className="section-padding bg-white">
        <div className="container-content">
          <div className="max-w-3xl">
            <p className="section-label">Self-Pay Patients</p>
            <h2 className="section-title">Consultation Fees</h2>
            <div className="divider-gold" />
            <div className="space-y-5 mt-2">
              {feeItems.map((item) => (
                <div
                  key={item.type}
                  className="flex flex-col sm:flex-row sm:items-start gap-4 p-6 border border-navy-100 bg-navy-50"
                >
                  <div className="flex-1">
                    <h3 className="font-serif text-navy-900 font-semibold text-base mb-1">{item.type}</h3>
                    <p className="text-navy-500 text-sm leading-relaxed">{item.detail}</p>
                  </div>
                  <div className="text-2xl font-serif text-gold-600 font-semibold sm:text-right whitespace-nowrap">
                    {item.fee}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 p-5 bg-navy-50 border border-navy-100 text-sm text-navy-600 leading-relaxed space-y-2">
              <p>
                <span className="font-semibold text-navy-800">Investigations &amp; procedures</span> — any blood tests,
                imaging or injection procedures are charged separately at the facility&apos;s standard rates.
                Dr. Schreiber will always discuss the likely costs before arranging investigations.
              </p>
              <p>
                <span className="font-semibold text-navy-800">Medicolegal reports</span> — fees for expert witness
                reports are provided on request. Please{" "}
                <Link href="/contact" className="text-gold-600 hover:text-gold-700 underline underline-offset-2">
                  contact the secretary
                </Link>{" "}
                for a schedule of medicolegal fees.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance */}
      <section className="section-padding bg-navy-50">
        <div className="container-content">
          <div className="max-w-3xl">
            <p className="section-label">Insured Patients</p>
            <h2 className="section-title">Health Insurance</h2>
            <div className="divider-gold" />
            <p className="text-navy-600 leading-relaxed mt-2 mb-8">
              Dr. Schreiber is recognised by all major UK private medical insurance providers.
              If you are using health insurance, please ensure you have obtained authorisation
              from your insurer before attending your appointment. Most insurers require a GP
              referral letter for authorisation.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
              {insurers.map((ins) => (
                <div
                  key={ins}
                  className="bg-white border border-navy-100 px-4 py-3 text-sm text-navy-700 font-medium text-center"
                >
                  {ins}
                </div>
              ))}
            </div>
            <div className="p-5 border border-gold-200 bg-gold-50 text-sm text-navy-700 leading-relaxed">
              <p className="font-semibold text-navy-900 mb-1">Important</p>
              <p>
                It is your responsibility to check with your insurer that Dr. Schreiber is
                included in your policy and to obtain pre-authorisation before attending.
                If you are unsure, our secretary Olivia can help advise on the process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cancellation policy */}
      <section className="section-padding bg-white">
        <div className="container-content">
          <div className="max-w-3xl">
            <p className="section-label">Appointments</p>
            <h2 className="section-title">Cancellation Policy</h2>
            <div className="divider-gold" />
            <p className="text-navy-600 leading-relaxed mt-2">
              We ask that you give at least <strong>48 hours&apos; notice</strong> if you need to
              cancel or rearrange your appointment. This allows us to offer the slot to another
              patient. Late cancellations or missed appointments may be subject to a cancellation
              fee. Please contact Olivia Skeet as early as possible if your circumstances change.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-950 text-white py-16">
        <div className="container-content text-center">
          <h2 className="section-title !text-white mb-4">Ready to book?</h2>
          <p className="text-navy-300 max-w-lg mx-auto mb-8">
            Contact Olivia Skeet, Dr. Schreiber&apos;s secretary, to arrange an appointment
            or ask any questions about fees and insurance.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/contact" className="btn-primary">Book an Appointment</Link>
            <a href="tel:02084586775" className="btn-outline !border-navy-600 !text-navy-300 hover:!bg-navy-800 hover:!text-white">
              Call 020 8458 6775
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Appointments",
  description:
    "Contact Dr. Benji Schreiber's secretary to book a private rheumatology consultation in North London.",
};

const faqs = [
  {
    q: "Do I need a GP referral?",
    a: "A referral letter from your GP or another specialist is preferred, as it helps Dr. Schreiber understand your history and ensures continuity of care. However, self-referrals are also accepted.",
  },
  {
    q: "Which insurance companies are accepted?",
    a: "Dr. Schreiber works with all major UK health insurance providers, including Bupa, AXA Health, Aviva, Cigna, WPA, and others. Please check with your insurer that he is recognised and obtain authorisation before your appointment.",
  },
  {
    q: "What are the fees for self-paying patients?",
    a: "For patients paying without insurance, a new patient consultation is £300 and a follow-up appointment is £200. These fees cover the consultation itself; any investigations or procedures will be charged separately. Please contact Olivia Skeet for a full fee schedule.",
  },
  {
    q: "How long will a consultation take?",
    a: "All appointments are 30 minutes. Dr. Schreiber values taking the time to listen properly and not rushing consultations.",
  },
  {
    q: "What should I bring to my appointment?",
    a: "Please bring your referral letter, any relevant investigation results (blood tests, scans), a list of your current medications, and your insurance details if applicable.",
  },
  {
    q: "How quickly can I be seen?",
    a: "Dr. Schreiber's secretary Olivia will advise on the earliest available appointment. Urgent referrals can often be accommodated promptly.",
  },
  {
    q: "Do you offer second opinions?",
    a: "Yes. Dr. Schreiber is happy to provide independent second opinions on rheumatological conditions, investigations, and proposed treatments.",
  },
  {
    q: "What is the cancellation policy?",
    a: "Please give at least 48 hours' notice if you need to cancel or rearrange an appointment. Late cancellations may be subject to a cancellation fee.",
  },
  {
    q: "What investigations can be arranged?",
    a: "Both consulting locations have access to blood tests, imaging (X-ray, MRI, CT, ultrasound), and DEXA bone density scanning (at Wellington Diagnostics). Dr. Schreiber can arrange any necessary investigations directly.",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-navy-950 text-white py-20">
        <div className="container-content">
          <p className="section-label !text-gold-400">Get in Touch</p>
          <h1 className="text-4xl md:text-5xl font-serif">Contact &amp; Appointments</h1>
          <div className="w-12 h-0.5 bg-gold-500 mt-5 mb-5" />
          <p className="text-navy-300 max-w-2xl leading-relaxed">
            To book a consultation or make an enquiry, please contact Olivia Skeet, Dr. Schreiber&apos;s secretary.
            We aim to respond to all enquiries within one working day.
          </p>
        </div>
      </section>

      {/* Contact cards + form */}
      <section className="section-padding bg-white">
        <div className="container-content">
          <div className="grid md:grid-cols-5 gap-12">
            {/* Contact info */}
            <div className="md:col-span-2 space-y-6">
              <div>
                <p className="section-label">Contact Details</p>
                <h2 className="section-title text-2xl">Reach Us</h2>
                <div className="divider-gold" />
              </div>

              {/* Phone */}
              <div className="flex gap-4 items-start p-5 bg-navy-50 border border-navy-100">
                <div className="text-gold-500 mt-0.5">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-navy-400 uppercase tracking-widest font-medium mb-1">Phone</p>
                  <a
                    href="tel:02084586775"
                    className="text-navy-800 hover:text-gold-600 transition-colors font-medium text-sm"
                  >
                    020 8458 6775
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4 items-start p-5 bg-navy-50 border border-navy-100">
                <div className="text-gold-500 mt-0.5">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-navy-400 uppercase tracking-widest font-medium mb-1">Email</p>
                  <a
                    href="mailto:info@benjischreiber.com"
                    className="text-navy-800 hover:text-gold-600 transition-colors font-medium text-sm"
                  >
                    info@benjischreiber.com
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex gap-4 items-start p-5 bg-navy-50 border border-navy-100">
                <div className="text-gold-500 mt-0.5">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-navy-400 uppercase tracking-widest font-medium mb-1">Address</p>
                  <address className="not-italic text-navy-800 text-sm leading-relaxed">
                    <strong>Wellington Diagnostics, Golders Green</strong><br />
                    296 Golders Green Road, NW11 9PY<br /><br />
                    <strong>Hospital of St John &amp; St Elizabeth</strong><br />
                    60 Grove End Road, NW8 9NH
                  </address>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-4 items-start p-5 bg-navy-50 border border-navy-100">
                <div className="text-gold-500 mt-0.5">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-navy-400 uppercase tracking-widest font-medium mb-1">Secretary Hours</p>
                  <p className="text-navy-800 text-sm">Monday – Friday</p>
                  <p className="text-navy-600 text-sm">8:00 am – 4:00 pm</p>
                </div>
              </div>

              <p className="text-navy-400 text-xs leading-relaxed pt-2">
                For urgent medical concerns, please contact your GP or NHS 111. Dr. Schreiber&apos;s
                secretary handles appointment and administrative queries only.
              </p>
            </div>

            {/* Contact form */}
            <div className="md:col-span-3">
              <div className="mb-6">
                <p className="section-label">Send a Message</p>
                <h2 className="section-title text-2xl">Appointment Enquiry</h2>
                <div className="divider-gold" />
              </div>
              <form className="space-y-5" action="https://formspree.io/f/mkovpegz" method="POST">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="firstName" className="block text-xs font-semibold text-navy-600 uppercase tracking-widest mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full border border-navy-200 px-4 py-3 text-sm text-navy-800 focus:outline-none focus:border-gold-400 transition-colors"
                      placeholder="Jane"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-xs font-semibold text-navy-600 uppercase tracking-widest mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full border border-navy-200 px-4 py-3 text-sm text-navy-800 focus:outline-none focus:border-gold-400 transition-colors"
                      placeholder="Smith"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-navy-600 uppercase tracking-widest mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full border border-navy-200 px-4 py-3 text-sm text-navy-800 focus:outline-none focus:border-gold-400 transition-colors"
                    placeholder="jane@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs font-semibold text-navy-600 uppercase tracking-widest mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full border border-navy-200 px-4 py-3 text-sm text-navy-800 focus:outline-none focus:border-gold-400 transition-colors"
                    placeholder="+44 7700 000000"
                  />
                </div>

                <div>
                  <label htmlFor="referral" className="block text-xs font-semibold text-navy-600 uppercase tracking-widest mb-2">
                    Do you have a GP referral?
                  </label>
                  <select
                    id="referral"
                    name="referral"
                    className="w-full border border-navy-200 px-4 py-3 text-sm text-navy-800 focus:outline-none focus:border-gold-400 transition-colors bg-white"
                  >
                    <option value="">Please select</option>
                    <option value="yes">Yes, I have a referral letter</option>
                    <option value="no">No, self-referral</option>
                    <option value="pending">Referral requested but not yet received</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="insurance" className="block text-xs font-semibold text-navy-600 uppercase tracking-widest mb-2">
                    Health Insurance Provider
                  </label>
                  <input
                    type="text"
                    id="insurance"
                    name="insurance"
                    className="w-full border border-navy-200 px-4 py-3 text-sm text-navy-800 focus:outline-none focus:border-gold-400 transition-colors"
                    placeholder="e.g. Bupa, AXA, self-pay"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-navy-600 uppercase tracking-widest mb-2">
                    Reason for Appointment / Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full border border-navy-200 px-4 py-3 text-sm text-navy-800 focus:outline-none focus:border-gold-400 transition-colors resize-none"
                    placeholder="Please briefly describe your symptoms or the reason you would like to see Dr. Schreiber."
                  />
                </div>

                <div className="space-y-1 text-xs text-navy-400">
                  <p>* Required fields.</p>
                  <p>We respond to all enquiries within one working day.</p>
                  <p>All enquiries are confidential. Your information is handled securely and will only be used to respond to your enquiry.</p>
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full sm:w-auto"
                >
                  Send Enquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-navy-50">
        <div className="container-content">
          <div className="max-w-3xl mx-auto">
            <p className="section-label">Before You Visit</p>
            <h2 className="section-title mb-4">Frequently Asked Questions</h2>
            <div className="divider-gold" />
            <div className="space-y-6 mt-2">
              {faqs.map((faq) => (
                <div key={faq.q} className="bg-white p-6 border border-navy-100">
                  <h3 className="font-serif text-navy-900 font-semibold mb-2">{faq.q}</h3>
                  <p className="text-navy-500 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Notice | Dr. Benji Schreiber",
  description: "Privacy notice for Dr. Benji Schreiber's private rheumatology practice. How we collect, use and protect your personal information.",
};

const sections = [
  {
    title: "Who we are",
    content: `Dr. Benji Schreiber is a private Consultant Rheumatologist practising at Wellington Diagnostics, 296 Golders Green Road, London NW11 9PY and at the Hospital of St John & St Elizabeth, 60 Grove End Road, London NW8 9NH.

Dr. Schreiber is the data controller for personal information collected through this website and in connection with his private practice. If you have any questions about how your data is used, please contact us at info@benjischreiber.com or by calling 020 8458 6775.`,
  },
  {
    title: "What information we collect",
    content: `When you submit an enquiry or appointment request through this website, we collect:

• Your name, email address and telephone number
• The reason for your enquiry or symptoms you have described
• Your health insurance provider (if applicable)
• Whether you have a GP referral

We do not collect payment card details through this website. We do not use cookies for tracking or advertising purposes.`,
  },
  {
    title: "How we use your information",
    content: `We use the information you provide solely to:

• Respond to your enquiry
• Arrange and manage your appointments
• Communicate with you about your care

We do not use your information for marketing purposes, and we do not sell or share your personal information with third parties except as described below.`,
  },
  {
    title: "Legal basis for processing",
    content: `We process your personal information on the following legal bases under UK GDPR:

• Legitimate interests — to respond to your enquiry and manage appointment bookings
• Performance of a contract — to provide the medical services you have requested
• Legal obligation — where we are required to process information by law (for example, in connection with our obligations under the General Medical Council's guidance)

Where you provide information about your health, we process this as special category data. The legal basis for processing health data is the provision of health care and treatment under Article 9(2)(h) UK GDPR.`,
  },
  {
    title: "How your information is stored",
    content: `Enquiries submitted through the contact form on this website are processed by Formspree (formspree.io), a secure form processing service. Formspree is GDPR-compliant and data is stored on servers within the European Economic Area.

Clinical records are stored securely in accordance with the GMC's guidance on confidentiality and the NHS Records Management Code of Practice. Adult patient records are retained for a minimum of eight years from the date of last contact.`,
  },
  {
    title: "Your rights",
    content: `Under UK GDPR, you have the right to:

• Access the personal information we hold about you
• Correct inaccurate personal information
• Request deletion of your personal information (subject to our legal obligations to retain clinical records)
• Object to or restrict the processing of your personal information
• Receive your personal information in a portable format
• Withdraw consent where processing is based on consent

To exercise any of these rights, please contact us at info@benjischreiber.com.`,
  },
  {
    title: "Complaints",
    content: `If you have a concern about how we have handled your personal information, you have the right to lodge a complaint with the Information Commissioner's Office (ICO):

Information Commissioner's Office
Wycliffe House, Water Lane, Wilmslow, Cheshire SK9 5AF
Tel: 0303 123 1113
Website: ico.org.uk

We would, however, appreciate the opportunity to address your concern directly before you contact the ICO. Please contact us in the first instance at info@benjischreiber.com.`,
  },
  {
    title: "Changes to this notice",
    content: `This privacy notice was last updated in February 2026. We may update it from time to time to reflect changes in our practices or legal requirements. The current version will always be available on this page.`,
  },
];

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-navy-950 text-white py-20">
        <div className="container-content">
          <p className="section-label !text-gold-400">Legal</p>
          <h1 className="text-4xl md:text-5xl font-serif">Privacy Notice</h1>
          <div className="w-12 h-0.5 bg-gold-500 mt-5 mb-5" />
          <p className="text-navy-300 max-w-2xl leading-relaxed">
            This notice explains how Dr. Benji Schreiber collects, uses and protects your personal
            information in connection with this website and his private rheumatology practice.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-content">
          <div className="max-w-3xl space-y-10">
            {sections.map((s) => (
              <div key={s.title}>
                <h2 className="font-serif text-navy-900 text-xl font-semibold mb-3">{s.title}</h2>
                <div className="w-8 h-0.5 bg-gold-500 mb-4" />
                <div className="text-navy-600 text-sm leading-relaxed whitespace-pre-line">
                  {s.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

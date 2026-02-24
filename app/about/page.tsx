import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Dr. Benji Schreiber MBBS MA MD FRCP — Honorary Associate Professor at UCL, NHS Consultant at the Royal Free Hospital, and leading private Consultant Rheumatologist in London.",
};

const qualifications = [
  { abbr: "MBBS", full: "Bachelor of Medicine, Bachelor of Surgery", institution: "University College London" },
  { abbr: "MA", full: "Master of Arts in Clinical Education", institution: "University College London" },
  { abbr: "MD", full: "Research Doctorate — Pulmonary Hypertension & Connective Tissue Diseases", institution: "University College London" },
  { abbr: "FRCP", full: "Fellow of the Royal College of Physicians", institution: "Royal College of Physicians, London" },
];

const roles = [
  {
    title: "Private Consultant Rheumatologist",
    org: "Wellington Diagnostics & Hospital of St John and St Elizabeth",
    detail: "Golders Green & St John's Wood, London",
  },
  {
    title: "NHS Consultant Rheumatologist",
    org: "Royal Free Hospital",
    detail: "Hampstead, London",
  },
  {
    title: "Honorary Associate Professor",
    org: "University College London",
    detail: "Division of Medicine",
  },
];

const clinicalInterests = [
  "Inflammatory arthritis (RA, psoriatic arthritis, axial spondyloarthropathy)",
  "Connective tissue diseases (lupus, scleroderma, Sjögren's, myositis)",
  "Pulmonary hypertension",
  "Adolescent rheumatology",
  "Bone health and osteoporosis",
  "Hypermobility syndromes",
  "Gout and crystal arthropathies",
  "Soft tissue and chronic pain syndromes",
  "Medicolegal expert witness work",
];

export default function AboutPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-navy-950 text-white py-20">
        <div className="container-content">
          <p className="section-label !text-gold-400">Meet the Specialist</p>
          <h1 className="text-4xl md:text-5xl font-serif">About Dr. Benji Schreiber</h1>
          <div className="w-12 h-0.5 bg-gold-500 mt-5" />
        </div>
      </section>

      {/* Bio & photo */}
      <section className="section-padding bg-white">
        <div className="container-content">
          <div className="grid md:grid-cols-3 gap-12 items-start">
            {/* Photo */}
            <div className="md:col-span-1">
              <div className="relative w-full aspect-[3/4] rounded-sm overflow-hidden shadow-lg">
                <Image
                  src="/images/benji.jpg"
                  alt="Dr. Benji Schreiber — Consultant Rheumatologist"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
              <div className="mt-6 p-6 bg-navy-50 border border-navy-100">
                <p className="text-xs text-gold-500 uppercase tracking-widest font-semibold mb-3">Credentials</p>
                {qualifications.map((q) => (
                  <div key={q.abbr} className="mb-3 last:mb-0">
                    <p className="font-serif text-navy-900 font-semibold">{q.abbr}</p>
                    <p className="text-xs text-navy-500 leading-snug">{q.full}</p>
                    <p className="text-xs text-navy-400">{q.institution}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Bio text */}
            <div className="md:col-span-2">
              <p className="section-label">Biography</p>
              <h2 className="section-title mb-4">A distinguished career in rheumatology</h2>
              <div className="divider-gold" />

              <div className="space-y-5 text-navy-600 leading-relaxed">
                <p>
                  Dr. Benji Schreiber is one of London&apos;s leading consultant rheumatologists,
                  with a clinical practice spanning general rheumatology, inflammatory arthritis,
                  connective tissue diseases, and pulmonary hypertension. He was appointed as an
                  NHS Consultant Rheumatologist in 2010 and has since built an exceptional
                  reputation for the quality and thoroughness of his clinical care.
                </p>
                <p>
                  He trained at University College London and undertook his specialist registrar
                  training at some of London&apos;s most prestigious teaching hospitals, including
                  Hammersmith Hospital, Chelsea and Westminster Hospital, and the Royal Free
                  Hospital.
                </p>
                <p>
                  Dr. Schreiber holds a Masters degree in Clinical Education and a research
                  doctorate, the latter focused on pulmonary hypertension and connective tissue
                  diseases — areas where he has published and presented internationally. He is an
                  Honorary Associate Professor at University College London, reflecting his
                  commitment to research and postgraduate education.
                </p>
                <p>
                  In his private practice, Dr. Schreiber sees patients with the full range of
                  rheumatological conditions at two North London locations. He also undertakes
                  medicolegal expert witness work for both claimants and defendants in personal
                  injury and clinical negligence cases.
                </p>
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/conditions" className="btn-primary">
                  Conditions Treated
                </Link>
                <Link href="/contact" className="btn-outline">
                  Book a Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Roles */}
      <section className="section-padding bg-navy-50">
        <div className="container-content">
          <div className="text-center mb-12">
            <p className="section-label">Appointments</p>
            <h2 className="section-title">Current Roles</h2>
            <div className="divider-gold mx-auto" />
          </div>
          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {roles.map((r) => (
              <div key={r.title} className="bg-white p-6 border border-navy-100">
                <p className="font-serif text-navy-900 text-base font-semibold mb-1">{r.title}</p>
                <p className="text-gold-600 text-sm font-medium">{r.org}</p>
                <p className="text-navy-400 text-sm mt-1">{r.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

        {/* Clinical Interests */}
      <section className="section-padding bg-white">
        <div className="container-content">
          <div className="max-w-3xl mx-auto">
            <p className="section-label">Specialist Interests</p>
            <h2 className="section-title mb-4">Clinical Areas</h2>
            <div className="divider-gold" />
            <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3 mt-2">
              {clinicalInterests.map((item) => (
                <li key={item} className="flex items-start gap-3 text-navy-600 text-sm">
                  <span className="w-1.5 h-1.5 bg-gold-500 rounded-full mt-2 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Research & Publications */}
      <section className="section-padding bg-navy-50">
        <div className="container-content">
          <div className="max-w-3xl mx-auto">
            <p className="section-label">Academic Work</p>
            <h2 className="section-title mb-4">Research &amp; Publications</h2>
            <div className="divider-gold" />
            <div className="space-y-4 text-navy-600 leading-relaxed mt-2">
              <p>
                Dr. Schreiber has an active research profile with over 40 peer-reviewed publications
                and more than 100 academic outputs. His work has been published in leading
                international journals including <em>The Lancet</em>, <em>Circulation Research</em>,
                the <em>European Heart Journal</em>, <em>Arthritis &amp; Rheumatology</em>, and the
                <em> British Journal of Anaesthesia</em>.
              </p>
              <p>
                His research has accumulated over 3,000 citations, with an H-index of 21 — reflecting
                the sustained impact of his work, particularly in pulmonary hypertension and connective
                tissue disease. He has presented at major national and international conferences
                including the British Society for Rheumatology (BSR) and the American College of
                Rheumatology (ACR).
              </p>
            </div>
            <div className="grid sm:grid-cols-3 gap-5 my-8">
              {[
                { value: "40+", label: "Peer-reviewed publications" },
                { value: "3,000+", label: "Citations" },
                { value: "21", label: "H-index" },
              ].map((stat) => (
                <div key={stat.label} className="bg-white border border-navy-100 p-5 text-center">
                  <p className="font-serif text-2xl text-navy-900 font-semibold">{stat.value}</p>
                  <p className="text-navy-500 text-xs uppercase tracking-widest mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://scholar.google.com/citations?user=Sf-cXl4AAAAJ&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                View on Google Scholar
              </a>
              <a
                href="https://pubmed.ncbi.nlm.nih.gov/?term=Schreiber+B%5BAuthor%5D+rheumatology"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                View on PubMed
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="section-padding bg-white">
        <div className="container-content">
          <div className="max-w-3xl mx-auto">
            <p className="section-label">Recognition</p>
            <h2 className="section-title mb-4">Awards &amp; Prizes</h2>
            <div className="divider-gold" />
            <div className="space-y-4 mt-2">
              {[
                { year: "2012", award: "Hench Award", body: "American College of Rheumatology (ACR)" },
                { year: "2011", award: "Young Investigator Award", body: "British Society for Rheumatology (BSR)" },
                { year: "2000", award: "Prize in Surgery at graduation", body: "University College London" },
              ].map((a) => (
                <div key={a.award} className="flex gap-5 items-start border-b border-navy-100 pb-4 last:border-0 last:pb-0">
                  <span className="text-gold-500 font-serif font-semibold text-sm w-12 flex-shrink-0">{a.year}</span>
                  <div>
                    <p className="font-medium text-navy-800 text-sm">{a.award}</p>
                    <p className="text-navy-500 text-sm">{a.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

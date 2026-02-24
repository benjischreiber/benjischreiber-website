import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Medicolegal Expert Witness",
  description:
    "Dr. Benji Schreiber — expert witness rheumatologist with 315+ medicolegal reports, Cardiff University Bond Solon certified, CPR Part 35 compliant. Personal injury, clinical negligence, London.",
};

const areas = [
  {
    title: "General Rheumatology",
    description:
      "Expert opinion on conditions including rheumatoid arthritis, lupus, psoriatic arthritis, vasculitis, scleroderma and other inflammatory conditions in the context of personal injury or clinical negligence.",
  },
  {
    title: "Whiplash & Soft Tissue Injuries",
    description:
      "Assessment of the nature, severity and long-term prognosis of whiplash-associated disorders and other soft tissue injuries sustained in road traffic accidents or other trauma.",
  },
  {
    title: "Chronic Pain Syndromes",
    description:
      "Expert assessment of fibromyalgia, complex regional pain syndrome (CRPS), and other chronic pain conditions in personal injury and employment disputes.",
  },
  {
    title: "Connective Tissue Diseases",
    description:
      "Opinion on causation, management and prognosis in cases involving lupus, scleroderma, Sjögren's syndrome, myositis and mixed connective tissue disease.",
  },
  {
    title: "Pulmonary Hypertension",
    description:
      "Dr. Schreiber's research doctorate focused on pulmonary hypertension in connective tissue disease, making him uniquely qualified to provide expert opinion in this complex area.",
  },
  {
    title: "Osteoporosis & Fractures",
    description:
      "Assessment of bone density, fracture risk, causation of fragility fractures and the adequacy of bone protection in the context of steroid use and other risk factors.",
  },
];

const stats = [
  { value: "315+", label: "Reports Completed" },
  { value: "Both Parties", label: "Claimants & Defendants" },
  { value: "CPR Part 35", label: "Compliant" },
  { value: "4–6 weeks", label: "Typical Turnaround" },
];

const reportTypes = [
  { title: "Condition & Prognosis Reports", description: "Assessment of the nature, severity and long-term prognosis of rheumatological conditions following injury or as a result of clinical negligence." },
  { title: "Causation & Liability Reports", description: "Expert opinion on whether a condition was caused or materially contributed to by an index event or by substandard medical care." },
  { title: "Single Joint Expert (SJE)", description: "Experienced in acting as a single joint expert, providing an independent opinion agreed to by both parties to proceedings." },
  { title: "Life Expectancy Reports", description: "Assessment of life expectancy in cases involving serious rheumatological and connective tissue diseases." },
  { title: "Employment Capacity Reports", description: "Expert opinion on the impact of rheumatological conditions on an individual's capacity for work and employability." },
  { title: "Supplementary & Addendum Reports", description: "Responses to questions from instructing solicitors and supplementary reports following the exchange of expert evidence." },
];

const process = [
  {
    step: "01",
    title: "Initial Enquiry",
    description:
      "Contact us via email with brief details of the case. We will respond promptly to advise on whether Dr. Schreiber can assist and provide fee information.",
  },
  {
    step: "02",
    title: "Documentation",
    description:
      "Relevant medical records and instructions are sent to Dr. Schreiber's secretary. He will review these carefully before any examination.",
  },
  {
    step: "03",
    title: "Examination & Interview",
    description:
      "Where required, a face-to-face or video examination is arranged at one of Dr. Schreiber's consulting rooms or another convenient location.",
  },
  {
    step: "04",
    title: "Expert Report",
    description:
      "A thorough, CPR-compliant expert report is produced, setting out Dr. Schreiber's opinion on diagnosis, causation, prognosis and treatment.",
  },
];

export default function MedicolegalPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-navy-950 text-white py-20">
        <div className="container-content">
          <p className="section-label !text-gold-400">Expert Witness</p>
          <h1 className="text-4xl md:text-5xl font-serif">Medicolegal Services</h1>
          <div className="w-12 h-0.5 bg-gold-500 mt-5 mb-5" />
          <p className="text-navy-300 max-w-2xl leading-relaxed">
            Dr. Schreiber acts as an expert witness for both claimants and defendants in personal
            injury and clinical negligence litigation, producing CPR-compliant reports of the
            highest standard.
          </p>
        </div>
      </section>

      {/* Stats strip */}
      <section className="bg-gold-500">
        <div className="container-content py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-white text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-serif text-lg font-semibold">{s.value}</p>
                <p className="text-xs tracking-widest uppercase opacity-80 mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding bg-white">
        <div className="container-content">
          <div className="max-w-3xl">
            <p className="section-label">Overview</p>
            <h2 className="section-title">Expert rheumatological opinion for legal proceedings</h2>
            <div className="divider-gold" />
            <div className="space-y-5 text-navy-600 leading-relaxed">
              <p>
                Dr. Benji Schreiber has completed over 315 medicolegal reports and has considerable
                experience providing expert witness opinions in rheumatology, connective tissue
                diseases, chronic pain and pulmonary hypertension. He is instructed by solicitors
                representing both claimants and defendants, and approaches all instructions with
                the same independence and rigour.
              </p>
              <p>
                He holds the Cardiff University Law School Bond Solon Expert Witness Certificate
                (2016) and his reports comply fully with Part 35 of the Civil Procedure Rules.
                He is experienced in producing joint statements and is available for conference
                calls and meetings with counsel.
              </p>
              <p>
                Dr. Schreiber is willing to attend court or tribunal to give oral evidence where
                required, and has done so across a range of proceedings including the County Court,
                High Court, Employment Tribunal and Family Court.
              </p>
              <p>
                Typical report turnaround is <strong>4–6 weeks</strong> from receipt of all
                documentation. Urgent instructions can often be accommodated — please enquire.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Report types */}
      <section className="section-padding bg-navy-50">
        <div className="container-content">
          <div className="text-center mb-12">
            <p className="section-label">Services</p>
            <h2 className="section-title">Types of Report</h2>
            <div className="divider-gold mx-auto" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reportTypes.map((r) => (
              <div key={r.title} className="bg-white p-7 border border-navy-100 hover:border-gold-300 hover:shadow-sm transition-all duration-200">
                <h3 className="font-serif text-navy-900 text-base font-semibold mb-3">{r.title}</h3>
                <p className="text-navy-500 text-sm leading-relaxed">{r.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas of expertise */}
      <section className="section-padding bg-white">
        <div className="container-content">
          <div className="text-center mb-12">
            <p className="section-label">Specialist Areas</p>
            <h2 className="section-title">Medicolegal Expertise</h2>
            <div className="divider-gold mx-auto" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {areas.map((area) => (
              <div key={area.title} className="bg-white p-7 border border-navy-100 hover:border-gold-300 hover:shadow-sm transition-all duration-200">
                <h3 className="font-serif text-navy-900 text-base font-semibold mb-3">{area.title}</h3>
                <p className="text-navy-500 text-sm leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-white">
        <div className="container-content">
          <div className="text-center mb-12">
            <p className="section-label">How It Works</p>
            <h2 className="section-title">The Process</h2>
            <div className="divider-gold mx-auto" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((p) => (
              <div key={p.step} className="relative">
                <div className="text-4xl font-serif text-gold-200 font-bold mb-3">{p.step}</div>
                <h3 className="font-serif text-navy-900 font-semibold mb-2">{p.title}</h3>
                <p className="text-navy-500 text-sm leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-900 text-white py-16">
        <div className="container-content text-center">
          <h2 className="section-title !text-white mb-4">Instructing Dr. Schreiber</h2>
          <p className="text-navy-300 max-w-lg mx-auto mb-8">
            To discuss a medicolegal instruction, please contact Dr. Schreiber&apos;s secretary. Please
            include a brief summary of the case and the areas on which opinion is required.
          </p>
          <Link href="/contact" className="btn-primary">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}

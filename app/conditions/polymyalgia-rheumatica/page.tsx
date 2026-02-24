import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Polymyalgia Rheumatica Specialist London | Dr. Benji Schreiber",
  description:
    "Expert diagnosis and management of polymyalgia rheumatica in London. Dr. Benji Schreiber, private consultant rheumatologist, offers prompt assessment and personalised steroid management.",
};

export default function PolymyalgiaRheumaticaPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-navy-950 text-white py-20">
        <div className="container-content">
          <p className="section-label !text-gold-400">Conditions Treated</p>
          <h1 className="text-4xl md:text-5xl font-serif">Polymyalgia Rheumatica</h1>
          <div className="w-12 h-0.5 bg-gold-500 mt-5 mb-5" />
          <p className="text-navy-300 max-w-2xl leading-relaxed">
            Polymyalgia rheumatica causes rapid-onset shoulder and hip girdle pain and stiffness in older
            adults. It is highly responsive to corticosteroids but requires expert management to minimise
            treatment-related complications over time.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding bg-white">
        <div className="container-content">
          <div className="max-w-3xl">
            <p className="section-label">Overview</p>
            <h2 className="section-title">What is Polymyalgia Rheumatica?</h2>
            <div className="divider-gold" />
            <div className="space-y-4 text-navy-600 leading-relaxed">
              <p>
                Polymyalgia rheumatica (PMR) is a common inflammatory condition characterised by
                aching and stiffness in the shoulder girdle, neck, upper arms, hip girdle and thighs.
                It predominantly affects people over the age of 50, with peak onset between 70 and 80 years,
                and is approximately twice as common in women. It is one of the most common inflammatory
                rheumatic conditions in older adults, with a lifetime risk of approximately 2% in women
                and 1% in men.
              </p>
              <p>
                The underlying pathology involves inflammation of the bursae around the shoulder and hip
                joints, with large vessel vasculitis in some cases. PMR is closely related to giant cell
                arteritis (GCA) — a vasculitis affecting large and medium-sized vessels — and around
                15–20% of patients with PMR will have concurrent GCA. Any patient with PMR who develops
                headache, scalp tenderness, jaw claudication or visual symptoms requires urgent evaluation
                to exclude GCA.
              </p>
              <p>
                The condition typically responds dramatically to corticosteroids — often within days —
                and this response is itself a diagnostic feature. However, long-term corticosteroid therapy
                carries significant risks, including osteoporosis, diabetes, hypertension, weight gain
                and adrenal suppression. Careful steroid tapering under specialist supervision, combined
                with bone protection and cardiovascular risk management, is therefore essential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Symptoms + Diagnosis side by side */}
      <section className="section-padding bg-navy-50">
        <div className="container-content">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="section-label">Recognition</p>
              <h2 className="section-title text-2xl">Symptoms</h2>
              <div className="divider-gold" />
              <ul className="space-y-3 mt-2">
                {[
                  "Bilateral aching and stiffness in the shoulders, upper arms, hips and thighs — typically symmetrical",
                  "Profound morning stiffness lasting more than 45 minutes",
                  "Rapid onset, often over days to a few weeks",
                  "Difficulty with everyday tasks: raising arms, getting up from a chair, climbing stairs",
                  "General symptoms including fatigue, weight loss and low-grade fever",
                  "Symptoms typically improve during the day with movement",
                  "Associated symptoms of giant cell arteritis should prompt urgent review: new headache, scalp tenderness, jaw pain on chewing, visual disturbance",
                ].map((s) => (
                  <li key={s} className="flex gap-3 items-start text-navy-600 text-sm">
                    <span className="w-1.5 h-1.5 bg-gold-500 rounded-full mt-2 flex-shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="section-label">Assessment</p>
              <h2 className="section-title text-2xl">Diagnosis &amp; Investigations</h2>
              <div className="divider-gold" />
              <ul className="space-y-3 mt-2">
                {[
                  "Clinical assessment against validated diagnostic criteria — age over 50 with bilateral shoulder symptoms and elevated inflammatory markers",
                  "ESR and CRP — typically markedly elevated, though may occasionally be normal",
                  "Full blood count: normocytic anaemia is common",
                  "Liver function tests — an elevated alkaline phosphatase is frequently seen",
                  "Autoantibodies (RF, ANA) to exclude early inflammatory arthritis as a differential",
                  "Musculoskeletal ultrasound to demonstrate shoulder and hip bursitis",
                  "PET-CT or large vessel ultrasound where large vessel vasculitis is suspected",
                ].map((i) => (
                  <li key={i} className="flex gap-3 items-start text-navy-600 text-sm">
                    <span className="w-1.5 h-1.5 bg-gold-500 rounded-full mt-2 flex-shrink-0" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment */}
      <section className="section-padding bg-white">
        <div className="container-content">
          <div className="max-w-3xl">
            <p className="section-label">Management</p>
            <h2 className="section-title">Treatment Options</h2>
            <div className="divider-gold" />
            <div className="space-y-4 text-navy-600 leading-relaxed">
              <p>
                Corticosteroids are the mainstay of treatment for PMR and usually produce a dramatic and
                rapid response. Prednisolone is typically started at 15–25mg daily and gradually tapered
                over 12–24 months according to symptoms and inflammatory markers. The dramatic improvement
                in symptoms within 24–72 hours is both therapeutically important and diagnostically useful
                — a slow or poor response to corticosteroids should prompt reassessment of the diagnosis.
              </p>
              <p>
                Bone protection with calcium, vitamin D and a bisphosphonate should be initiated at the
                outset of corticosteroid therapy. Blood pressure and glucose monitoring are important,
                as steroids can elevate both. The aim of steroid tapering is to use the lowest effective
                dose for the shortest necessary period. Relapses are common during or after steroid
                reduction and may require temporary dose increases.
              </p>
              <p>
                For patients who relapse frequently or cannot tolerate adequate steroid tapering, tocilizumab
                — an IL-6 receptor inhibitor — is licensed as a steroid-sparing agent for PMR and has
                demonstrated the ability to reduce total corticosteroid exposure and relapse rates. Other
                immunosuppressive agents such as methotrexate may also be considered. Regular monitoring
                of disease activity, steroid side effects and bone health is an integral part of long-term
                management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why see a specialist */}
      <section className="section-padding bg-navy-50">
        <div className="container-content">
          <div className="max-w-3xl">
            <p className="section-label">Specialist Input</p>
            <h2 className="section-title">Why see a Consultant Rheumatologist?</h2>
            <div className="divider-gold" />
            <div className="space-y-4 text-navy-600 leading-relaxed">
              <p>
                PMR must be carefully distinguished from conditions that can mimic it — including early
                seronegative rheumatoid arthritis, myositis, occult malignancy and other systemic illnesses.
                An incorrect diagnosis of PMR leads to prolonged corticosteroid exposure with its attendant
                harms. A consultant rheumatologist will assess the clinical picture systematically, use
                musculoskeletal ultrasound where helpful, and make a confident and accurate diagnosis.
              </p>
              <p>
                Ongoing specialist involvement ensures that steroid tapering is managed appropriately,
                that relapses are identified and addressed promptly, and that the important differential
                of concurrent giant cell arteritis is never overlooked. For patients requiring
                prolonged corticosteroid courses or those with significant steroid-related complications,
                Dr. Schreiber can discuss steroid-sparing strategies including tocilizumab.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-content">
          <div className="max-w-3xl mx-auto">
            <p className="section-label">Common Questions</p>
            <h2 className="section-title">FAQ</h2>
            <div className="divider-gold" />
            <div className="space-y-5 mt-2">
              {[
                {
                  q: "How long will I need to take steroids for PMR?",
                  a: "Most patients require prednisolone for 1–2 years, and some for longer. The condition eventually burns itself out in the majority of cases, but this can take time and relapses during steroid reduction are common. Regular review allows the tapering schedule to be adjusted based on symptoms and inflammatory markers.",
                },
                {
                  q: "What is the relationship between PMR and giant cell arteritis?",
                  a: "PMR and giant cell arteritis (GCA) are closely related conditions and can coexist. Around 15–20% of PMR patients have concurrent GCA. GCA causes inflammation of large and medium blood vessels and can cause blindness if untreated. Any patient with PMR who develops new headache, jaw pain, scalp tenderness or visual symptoms should seek urgent medical attention.",
                },
                {
                  q: "Will PMR damage my joints?",
                  a: "PMR itself does not cause permanent joint damage — this is one of the distinguishing features from rheumatoid arthritis. The inflammation affects the bursae and soft tissues around the shoulder and hip joints rather than the joint surfaces themselves. However, prolonged untreated inflammation and the side effects of treatment can impact overall health and function.",
                },
                {
                  q: "Can PMR come back after treatment has finished?",
                  a: "Relapse after completing treatment is less common than relapse during steroid reduction, but it does occur in a proportion of patients. Late relapse after apparent remission should prompt reassessment to confirm the diagnosis and restart appropriate treatment.",
                },
              ].map((faq) => (
                <div key={faq.q} className="bg-navy-50 p-6 border border-navy-100">
                  <h3 className="font-serif text-navy-900 font-semibold mb-2">{faq.q}</h3>
                  <p className="text-navy-500 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-950 text-white py-16">
        <div className="container-content text-center">
          <h2 className="section-title !text-white mb-4">Concerned about polymyalgia rheumatica?</h2>
          <p className="text-navy-300 max-w-lg mx-auto mb-8">
            Dr. Schreiber offers expert assessment and the full range of treatment options.
            To book a consultation, please get in touch.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/contact" className="btn-primary">Book a Consultation</Link>
            <Link href="/conditions" className="btn-outline !border-navy-600 !text-navy-300 hover:!bg-navy-800 hover:!text-white">All Conditions</Link>
          </div>
        </div>
      </section>
    </>
  );
}

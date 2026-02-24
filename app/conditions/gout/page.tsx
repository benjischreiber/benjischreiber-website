import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gout Specialist London | Dr. Benji Schreiber",
  description:
    "Expert diagnosis and management of gout in London. Dr. Benji Schreiber, private consultant rheumatologist, offers comprehensive urate-lowering therapy and lifestyle guidance.",
};

export default function GoutPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-navy-950 text-white py-20">
        <div className="container-content">
          <p className="section-label !text-gold-400">Conditions Treated</p>
          <h1 className="text-4xl md:text-5xl font-serif">Gout</h1>
          <div className="w-12 h-0.5 bg-gold-500 mt-5 mb-5" />
          <p className="text-navy-300 max-w-2xl leading-relaxed">
            Gout is caused by the deposition of urate crystals in joints, producing intensely painful
            attacks of inflammation. It is highly treatable and, with appropriate management, attacks can be
            eliminated entirely.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding bg-white">
        <div className="container-content">
          <div className="max-w-3xl">
            <p className="section-label">Overview</p>
            <h2 className="section-title">What is Gout?</h2>
            <div className="divider-gold" />
            <div className="space-y-4 text-navy-600 leading-relaxed">
              <p>
                Gout is the most common inflammatory arthritis in the UK, affecting approximately 1–2%
                of adults. It results from hyperuricaemia — elevated uric acid levels in the blood —
                leading to the deposition of monosodium urate crystals within joints and surrounding
                tissues. When crystals are shed into the joint space, an acute inflammatory response
                is triggered, producing the characteristic gout attack: an exquisitely painful,
                hot, swollen joint that typically develops rapidly, often overnight.
              </p>
              <p>
                The first metatarsophalangeal joint (the base of the big toe) is the most commonly
                affected site — a pattern known as podagra — though gout can affect any joint, including
                the ankle, knee, wrist and elbow. Risk factors include male sex, increasing age, renal
                impairment, diuretic use, hypertension, metabolic syndrome, a diet high in purine-rich
                foods (particularly red meat and shellfish), alcohol (particularly beer), and
                fructose-containing drinks. There is also a significant genetic component.
              </p>
              <p>
                Untreated or inadequately treated gout can progress to chronic tophaceous gout, in which
                urate deposits (tophi) accumulate in soft tissues and can cause joint destruction,
                chronic pain, and significant disability. Gout is also associated with an elevated risk of
                cardiovascular and renal disease, which should be addressed as part of holistic management.
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
                  "Sudden onset of severe joint pain — often maximal within 12–24 hours",
                  "Joint swelling, redness and warmth — the affected area may be exquisitely tender to touch",
                  "Most commonly affects the big toe (podagra), ankle, knee or wrist",
                  "Attacks may be precipitated by alcohol, dietary excess, dehydration, illness or certain medications",
                  "Resolution of acute attack within days to weeks, even without treatment",
                  "Tophi: firm, chalky deposits under the skin around joints or in the ear helix in chronic disease",
                  "Recurrent attacks with increasing frequency if untreated",
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
                  "Clinical assessment — the diagnosis can often be made on clinical grounds alone in a typical presentation",
                  "Serum uric acid level — though this can be normal during an acute attack",
                  "Joint aspiration and synovial fluid analysis for urate crystals under polarised light microscopy (the definitive test)",
                  "Musculoskeletal ultrasound — can demonstrate the characteristic 'double contour' sign of urate deposition",
                  "Renal function, metabolic profile and cardiovascular risk assessment",
                  "X-rays in chronic gout may show characteristic punched-out erosions and tophaceous deposits",
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
                Acute gout attacks are treated with anti-inflammatory medications. NSAIDs (such as
                naproxen or indomethacin), colchicine and corticosteroids (oral or by joint injection)
                are all effective and the choice depends on comorbidities, renal function and patient
                preference. Early treatment — ideally at the first sign of an attack — produces the
                most rapid resolution. Rest and elevation of the affected limb, along with cold
                compresses, provide symptomatic relief.
              </p>
              <p>
                The most important aspect of long-term gout management is urate-lowering therapy (ULT)
                to reduce serum uric acid to a target level (typically below 360 µmol/L, or below
                300 µmol/L in those with tophi). The most widely used agent is allopurinol, a xanthine
                oxidase inhibitor, which is initiated at a low dose and titrated carefully. Febuxostat
                is an alternative for those who cannot tolerate allopurinol or in whom it is
                contraindicated. Both are highly effective when taken consistently.
              </p>
              <p>
                Anti-inflammatory prophylaxis — with low-dose colchicine or naproxen — is recommended
                for the first six months of ULT initiation to prevent mobilisation flares. Dietary
                advice includes reducing red meat, shellfish, fructose and alcohol (particularly beer),
                maintaining adequate hydration and achieving a healthy body weight. Review of
                medications that elevate urate — particularly thiazide diuretics — may be possible
                in collaboration with the patient's GP or cardiologist.
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
                Despite being the most common inflammatory arthritis and one of the most treatable, gout
                is frequently mismanaged. Urate-lowering therapy is underused and underdosed, and many
                patients continue to suffer recurrent attacks unnecessarily. A consultant rheumatologist
                will confirm the diagnosis — importantly, distinguishing gout from septic arthritis and
                other crystal arthropathies — initiate and optimise urate-lowering therapy to target,
                and address associated cardiovascular and metabolic risk factors.
              </p>
              <p>
                For patients with complex gout — including those with renal impairment, frequent attacks
                despite standard therapy, extensive tophaceous disease, or where allopurinol has caused
                adverse effects — specialist management can make a significant difference. Dr. Schreiber
                offers thorough assessment and a structured management plan to achieve urate targets and
                eliminate attacks in the long term.
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
                  q: "Should I start allopurinol during an acute attack?",
                  a: "Current guidelines recommend against starting allopurinol during an acute attack, as it can prolong or worsen the flare. Treatment of the acute attack should be completed first, and allopurinol initiated two to four weeks later once the attack has fully resolved — with anti-inflammatory prophylaxis co-prescribed for the first six months.",
                },
                {
                  q: "My uric acid level is high but I have no symptoms — do I need treatment?",
                  a: "Asymptomatic hyperuricaemia (raised urate without attacks) does not routinely require urate-lowering therapy, though cardiovascular and renal monitoring is appropriate. The threshold for treatment changes once a patient has had confirmed gout attacks, tophi, or associated renal urate stones, where the benefit-to-risk ratio of ULT is clearly favourable.",
                },
                {
                  q: "Is gout caused by a poor diet?",
                  a: "Diet is a contributing factor but is not the sole cause. The majority of uric acid in the body is produced endogenously (by the body itself), and most people with hyperuricaemia have a constitutional tendency to produce or under-excrete urate. Dietary modification alone rarely normalises uric acid levels. It is most effective as an adjunct to urate-lowering medication.",
                },
                {
                  q: "Can gout affect women?",
                  a: "Yes, though gout is substantially more common in men. Women are relatively protected before the menopause due to the uricosuric effect of oestrogen. After the menopause — particularly in women taking diuretics — the risk increases and can approach that of men. Gout in women may present atypically, affecting the small joints of the hands, and is sometimes misdiagnosed.",
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
          <h2 className="section-title !text-white mb-4">Concerned about gout?</h2>
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

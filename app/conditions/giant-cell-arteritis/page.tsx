import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Giant Cell Arteritis Specialist London | Dr. Benji Schreiber",
  description:
    "Expert assessment and treatment of giant cell arteritis in London. Dr. Benji Schreiber, private consultant rheumatologist, offers rapid diagnosis and modern biologic management.",
};

export default function GiantCellArteritisPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-navy-950 text-white py-20">
        <div className="container-content">
          <p className="section-label !text-gold-400">Conditions Treated</p>
          <h1 className="text-4xl md:text-5xl font-serif">Giant Cell Arteritis</h1>
          <div className="w-12 h-0.5 bg-gold-500 mt-5 mb-5" />
          <p className="text-navy-300 max-w-2xl leading-relaxed">
            Giant cell arteritis is a large vessel vasculitis affecting older adults that can cause
            sudden sight loss if not treated promptly. Rapid diagnosis and immediate corticosteroid
            therapy are essential to prevent irreversible complications.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding bg-white">
        <div className="container-content">
          <div className="max-w-3xl">
            <p className="section-label">Overview</p>
            <h2 className="section-title">What is Giant Cell Arteritis?</h2>
            <div className="divider-gold" />
            <div className="space-y-4 text-navy-600 leading-relaxed">
              <p>
                Giant cell arteritis (GCA), also known as temporal arteritis, is the most common form of
                systemic vasculitis in adults over the age of 50. It is a granulomatous inflammation
                affecting the walls of medium and large arteries, most commonly the branches of the
                external carotid artery — including the temporal, ophthalmic, and posterior ciliary arteries
                — as well as the aorta and its branches. Inflammation of the arterial wall leads to
                thickening, narrowing and occlusion of affected vessels.
              </p>
              <p>
                The most feared complication of GCA is acute visual loss — permanent blindness in one or
                both eyes — resulting from ischaemia of the optic nerve or retina. This can occur abruptly
                and without warning, or may be preceded by transient visual symptoms (amaurosis fugax).
                Other ischaemic complications include stroke, scalp necrosis and limb ischaemia. These
                risks underscore the urgency of diagnosis and prompt treatment.
              </p>
              <p>
                GCA almost exclusively affects people over 50 and its incidence increases with age. It
                is closely related to polymyalgia rheumatica — the two conditions can coexist, and PMR
                may precede, accompany, or follow a diagnosis of GCA. Untreated, GCA causes significant
                morbidity; treated promptly with corticosteroids, the risk of vision loss and other
                ischaemic events is substantially reduced.
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
                  "New headache — often temporal, severe and persistent — in a person over 50",
                  "Scalp tenderness, particularly over the temporal arteries",
                  "Jaw claudication — pain in the jaw muscles on chewing, relieved by rest",
                  "Visual disturbance: transient blurring, double vision or sudden monocular visual loss",
                  "Temporal artery tenderness, thickening or beading on examination",
                  "Symptoms of polymyalgia rheumatica: shoulder and hip girdle pain and stiffness",
                  "Constitutional symptoms: fever, weight loss, malaise, night sweats",
                  "Tongue claudication or dysphagia in severe cases",
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
                  "Clinical assessment — characteristic history and examination findings are central to diagnosis",
                  "ESR and CRP — typically markedly elevated; a normal ESR does not exclude GCA",
                  "Full blood count, renal and liver function, platelets",
                  "Temporal artery ultrasound — demonstrates the 'halo sign' of arterial wall oedema; non-invasive and can be performed rapidly",
                  "Temporal artery biopsy — remains the gold standard investigation; should be obtained but must not delay treatment",
                  "Large vessel imaging (PET-CT or MRI/MRA) where aortitis or large vessel involvement is suspected",
                  "Ophthalmological assessment where visual symptoms are present",
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
                High-dose corticosteroids must be started immediately in any patient with suspected GCA —
                before investigation results are available — to prevent visual loss. Where visual symptoms
                are present or vision has already been affected, intravenous methylprednisolone is given
                urgently. For uncomplicated GCA without visual involvement, oral prednisolone at 40–60mg
                daily is the standard starting dose. Treatment must not be delayed pending biopsy or
                imaging — investigations are undertaken in parallel.
              </p>
              <p>
                As with PMR, corticosteroids are then gradually tapered over an 18–24 month period
                according to symptoms and inflammatory markers. Bone protection should be initiated from
                the outset. Relapses requiring dose increase are common during tapering. Low-dose aspirin
                may be considered to reduce the risk of ischaemic complications, in discussion with the
                patient's other clinicians.
              </p>
              <p>
                Tocilizumab — an IL-6 receptor inhibitor given as a weekly subcutaneous injection — is
                now licensed for GCA and has robust evidence from clinical trials demonstrating that it
                reduces relapse rates and allows substantially lower cumulative steroid doses compared with
                prednisolone alone. It is an important option for patients at high risk of steroid-related
                complications, those who relapse during tapering, or where the condition is proving
                difficult to control. Large vessel disease (aortitis) warrants long-term follow-up with
                surveillance imaging.
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
                GCA is a medical emergency when visual symptoms are present, and urgent specialist input
                is critical. Even in the absence of visual involvement, rapid access to a consultant
                rheumatologist allows prompt confirmation of the diagnosis, appropriate investigation,
                and optimal steroid dosing from the outset — reducing the risk of both under-treatment
                (with associated risk of ischaemic complications) and over-treatment (with unnecessary
                steroid exposure).
              </p>
              <p>
                Ongoing specialist management ensures that steroid tapering is appropriately calibrated,
                that relapses are identified and managed promptly, and that decisions about tocilizumab
                therapy are made at the right time. Dr. Schreiber has considerable experience managing
                GCA and related vasculitic conditions, and coordinates with ophthalmology, vascular
                and other specialists as required for complex cases.
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
                  q: "Is giant cell arteritis a medical emergency?",
                  a: "Yes, when visual symptoms are present. Sudden visual loss in GCA can be permanent and occur within hours of warning symptoms. Any patient with suspected GCA and visual disturbance should be assessed as a matter of urgency. High-dose corticosteroids must be started immediately to protect the remaining vision and reduce the risk of involvement of the other eye.",
                },
                {
                  q: "Can I lose my sight from giant cell arteritis?",
                  a: "Permanent visual loss is the most feared complication of GCA, occurring in up to 20% of patients in historical series, though this risk is substantially reduced with prompt treatment. Once vision is lost due to GCA, it rarely recovers — which is why immediate treatment before the diagnosis is confirmed is essential when there is clinical suspicion.",
                },
                {
                  q: "What is the difference between giant cell arteritis and temporal arteritis?",
                  a: "The terms are largely interchangeable. 'Temporal arteritis' refers specifically to GCA involving the temporal arteries — which is the most common pattern — whereas 'giant cell arteritis' is the broader term that also encompasses large vessel disease affecting the aorta and its major branches. The latter may present with limb claudication, asymmetric blood pressure or aortic aneurysm.",
                },
                {
                  q: "How long does treatment last?",
                  a: "Most patients with GCA require prednisolone for at least 18–24 months, and some for longer. Relapses during tapering are common. For patients on tocilizumab, treatment duration depends on response and tolerance. Long-term follow-up is important both to monitor for disease relapse and to detect large vessel complications such as aortic aneurysm.",
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
          <h2 className="section-title !text-white mb-4">Concerned about giant cell arteritis?</h2>
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

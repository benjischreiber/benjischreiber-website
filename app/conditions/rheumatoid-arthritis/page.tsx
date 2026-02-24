import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rheumatoid Arthritis Specialist London | Dr. Benji Schreiber",
  description:
    "Expert assessment and treatment of rheumatoid arthritis in London. Dr. Benji Schreiber, private consultant rheumatologist, offers the full range of modern therapies including biologics.",
};

export default function RheumatoidArthritisPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-navy-950 text-white py-20">
        <div className="container-content">
          <p className="section-label !text-gold-400">Conditions Treated</p>
          <h1 className="text-4xl md:text-5xl font-serif">Rheumatoid Arthritis</h1>
          <div className="w-12 h-0.5 bg-gold-500 mt-5 mb-5" />
          <p className="text-navy-300 max-w-2xl leading-relaxed">
            Rheumatoid arthritis is a chronic autoimmune condition causing joint inflammation, pain and swelling.
            With early diagnosis and modern therapies, remission is an achievable goal for most patients.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding bg-white">
        <div className="container-content">
          <div className="max-w-3xl">
            <p className="section-label">Overview</p>
            <h2 className="section-title">What is Rheumatoid Arthritis?</h2>
            <div className="divider-gold" />
            <div className="space-y-4 text-navy-600 leading-relaxed">
              <p>
                Rheumatoid arthritis (RA) is a systemic autoimmune disease in which the immune system mistakenly
                attacks the synovial lining of joints, leading to chronic inflammation, pain, swelling and, if
                untreated, progressive joint damage. It affects approximately 1% of the UK population and is
                around three times more common in women than men, though it can occur at any age.
              </p>
              <p>
                Unlike osteoarthritis, which is primarily a wear-and-tear condition, RA is driven by immune
                dysregulation. Inflammation can affect multiple joints simultaneously — most commonly the small
                joints of the hands, wrists and feet — and may also involve other organs including the lungs,
                eyes and cardiovascular system. The systemic nature of the disease means that fatigue and
                general unwellness are common alongside joint symptoms.
              </p>
              <p>
                The outlook for RA has been transformed over the past two decades. A treat-to-target approach —
                aiming for clinical remission or low disease activity — combined with a rapidly expanding
                therapeutic arsenal means that most patients, when diagnosed and treated promptly, can live
                full and active lives with minimal joint damage.
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
                  "Symmetrical joint pain, swelling and warmth, particularly in the hands, wrists and feet",
                  "Morning stiffness lasting more than 30–60 minutes",
                  "Fatigue and a general sense of being unwell",
                  "Reduced grip strength and difficulty with fine motor tasks",
                  "Nodules under the skin (rheumatoid nodules), most often near the elbows",
                  "Joint deformity in longstanding or undertreated disease",
                  "Systemic symptoms including low-grade fever and unintentional weight loss",
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
                  "Clinical assessment of joint swelling, tenderness and range of movement",
                  "Blood tests including rheumatoid factor (RF) and anti-CCP antibodies",
                  "Inflammatory markers: CRP and ESR to assess disease activity",
                  "Full blood count, liver and renal function to guide safe prescribing",
                  "X-rays of hands, wrists and feet to identify erosive change",
                  "Musculoskeletal ultrasound to detect subclinical synovitis",
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
                Treatment is guided by a treat-to-target strategy, with the aim of achieving remission or
                low disease activity as assessed by validated scoring tools. The first-line disease-modifying
                antirheumatic drug (DMARD) is usually methotrexate, often combined with short courses of
                corticosteroids to bridge the gap while the medication takes effect. Hydroxychloroquine,
                sulfasalazine and leflunomide are also used, sometimes in combination.
              </p>
              <p>
                For patients who do not respond adequately to conventional DMARDs, biologic therapies offer
                highly effective alternatives. These include TNF inhibitors (such as adalimumab, etanercept
                and certolizumab), IL-6 inhibitors (tocilizumab, sarilumab), abatacept, and the B-cell
                depleting agent rituximab. Targeted synthetic DMARDs — JAK inhibitors including tofacitinib,
                baricitinib and upadacitinib — provide additional oral options, particularly for patients
                who prefer to avoid injections or have not responded to biologics.
              </p>
              <p>
                Lifestyle measures including regular, appropriate exercise, joint protection techniques and
                smoking cessation are important adjuncts. Physiotherapy and occupational therapy input
                can substantially improve function and quality of life. Cardiovascular risk management is
                an integral part of holistic RA care, given the increased cardiovascular risk associated
                with chronic inflammation.
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
                Early specialist assessment is central to achieving the best outcomes in RA. Prompt diagnosis,
                confirmation of the correct disease subtype, and rapid initiation of treatment all require
                consultant-level expertise. Many patients wait too long for a specialist appointment through
                NHS pathways, during which time joint damage may accrue. Private consultation with Dr. Schreiber
                allows rapid access to assessment, investigation and treatment initiation.
              </p>
              <p>
                A consultant rheumatologist will interpret the full clinical and serological picture, tailor
                treatment to the individual — taking into account comorbidities, lifestyle, preferences and
                pregnancy plans — and monitor response carefully to escalate therapy when needed. Dr. Schreiber
                has extensive experience managing the full spectrum of RA presentations, from newly diagnosed
                seronegative disease to complex longstanding cases requiring biologic therapy.
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
                  q: "Can rheumatoid arthritis be cured?",
                  a: "There is currently no cure for RA, but remission — where the disease is effectively suppressed and symptoms are minimal or absent — is achievable for many patients with modern treatments. Some patients are able to reduce or stop medications under careful supervision once sustained remission is established.",
                },
                {
                  q: "How quickly do treatments for RA work?",
                  a: "Conventional DMARDs such as methotrexate typically take 6–12 weeks to show meaningful benefit. Biologic therapies and JAK inhibitors often act more rapidly, sometimes within a few weeks. Short courses of corticosteroids are commonly used to provide relief while longer-term treatments take effect.",
                },
                {
                  q: "Is rheumatoid arthritis hereditary?",
                  a: "There is a genetic component to RA — first-degree relatives have a modestly higher risk. However, the condition is not directly inherited in a simple pattern. Environmental factors, particularly smoking, also play a significant role in triggering the disease in genetically susceptible individuals.",
                },
                {
                  q: "Can I exercise with rheumatoid arthritis?",
                  a: "Yes — regular, appropriate exercise is strongly encouraged. It helps maintain joint function, muscle strength, cardiovascular health and mental wellbeing. During flares, low-impact activity such as swimming or cycling may be preferable. A physiotherapist experienced in inflammatory arthritis can provide a tailored programme.",
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
          <h2 className="section-title !text-white mb-4">Concerned about rheumatoid arthritis?</h2>
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

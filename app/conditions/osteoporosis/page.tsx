import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Osteoporosis Specialist London | Dr. Benji Schreiber",
  description:
    "Expert assessment and treatment of osteoporosis in London. Dr. Benji Schreiber offers DEXA scanning at Wellington Diagnostics and the full range of bone-protective treatments.",
};

export default function OsteoporosisPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-navy-950 text-white py-20">
        <div className="container-content">
          <p className="section-label !text-gold-400">Conditions Treated</p>
          <h1 className="text-4xl md:text-5xl font-serif">Osteoporosis</h1>
          <div className="w-12 h-0.5 bg-gold-500 mt-5 mb-5" />
          <p className="text-navy-300 max-w-2xl leading-relaxed">
            Osteoporosis is a condition characterised by reduced bone density and increased fracture risk.
            It is largely preventable and treatable when identified early through specialist assessment.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding bg-white">
        <div className="container-content">
          <div className="max-w-3xl">
            <p className="section-label">Overview</p>
            <h2 className="section-title">What is Osteoporosis?</h2>
            <div className="divider-gold" />
            <div className="space-y-4 text-navy-600 leading-relaxed">
              <p>
                Osteoporosis is a skeletal disorder in which bone mineral density is reduced and bone
                microarchitecture is disrupted, resulting in increased bone fragility and susceptibility
                to fracture. It is often described as a "silent" condition because bone loss occurs without
                symptoms until a fracture occurs. Fragility fractures — those resulting from low-energy
                trauma such as a fall from standing height — most commonly affect the vertebrae, hip, wrist
                and shoulder.
              </p>
              <p>
                Osteoporosis affects an estimated 3.5 million people in the UK and is responsible for over
                500,000 fragility fractures annually. Although more common in postmenopausal women — due
                to the decline in oestrogen that accompanies the menopause — it also affects men and
                younger individuals in the context of secondary causes such as corticosteroid use,
                inflammatory disease, malabsorption or hypogonadism.
              </p>
              <p>
                Rheumatological conditions including rheumatoid arthritis, lupus and inflammatory bowel disease,
                as well as corticosteroid therapy used to treat them, substantially increase fracture risk. This
                means that osteoporosis assessment is an integral part of rheumatological practice and not
                merely a general medicine concern.
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
              <h2 className="section-title text-2xl">Risk Factors &amp; Presentation</h2>
              <div className="divider-gold" />
              <ul className="space-y-3 mt-2">
                {[
                  "Osteoporosis is usually silent — fracture may be the first indication of the condition",
                  "Back pain from vertebral compression fractures, which may occur with minimal trauma",
                  "Loss of height over time, or a stooped posture (kyphosis) from spinal fractures",
                  "Postmenopausal women — particularly those with early menopause",
                  "Long-term corticosteroid use (prednisolone 5mg or more for three months or longer)",
                  "Family history of hip fracture; low body weight",
                  "Secondary causes: inflammatory arthritis, coeliac disease, hyperparathyroidism, hypogonadism",
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
                  "FRAX fracture risk calculation incorporating clinical risk factors",
                  "DEXA (dual-energy X-ray absorptiometry) scan of hip and lumbar spine to measure bone mineral density — available at Wellington Diagnostics",
                  "Blood tests to exclude secondary causes: calcium, phosphate, vitamin D, PTH, thyroid and renal function, full blood count",
                  "Coeliac serology, sex hormones and bone turnover markers where indicated",
                  "Vertebral fracture assessment where height loss or back pain suggests spinal involvement",
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
                All patients with osteoporosis or significant fracture risk should optimise calcium and
                vitamin D intake — through diet and supplementation where dietary intake is insufficient.
                Weight-bearing and resistance exercise is strongly encouraged, as it helps to maintain
                bone density and reduce fall risk. Smoking cessation and reduction of alcohol intake are
                important modifiable risk factors. Falls prevention assessment is relevant for those at
                risk of fragility fractures.
              </p>
              <p>
                Bisphosphonates — alendronate and risedronate (oral) and zoledronic acid (annual intravenous
                infusion) — are the most widely used first-line treatments and have robust evidence for
                fracture prevention at the hip, spine and wrist. They are safe and effective for the
                majority of patients. Denosumab is a monoclonal antibody given as a six-monthly subcutaneous
                injection and is particularly useful where bisphosphonates are not tolerated or
                contraindicated.
              </p>
              <p>
                For patients at very high or imminent fracture risk — including those with recent vertebral
                fractures or on high-dose corticosteroids — anabolic therapies that stimulate new bone
                formation rather than simply reducing resorption may be appropriate. Teriparatide and
                romosozumab (an anti-sclerostin antibody) offer potent anabolic effects and substantial
                fracture risk reduction. These are administered by injection and are followed by
                antiresorptive treatment to maintain gains. Treatment choice is individualised based on
                fracture risk, tolerability, comorbidities and patient preference.
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
                Osteoporosis is under-investigated and undertreated, including in patients who have already
                sustained fragility fractures. Consultant rheumatologist assessment ensures that secondary
                causes are systematically excluded, fracture risk is accurately quantified, and the most
                appropriate treatment is selected. For patients with inflammatory conditions receiving
                corticosteroids — who face the highest risk — proactive bone protection is a critical
                part of their overall management.
              </p>
              <p>
                DEXA scanning is available at Wellington Diagnostics, allowing Dr. Schreiber to arrange
                assessment and review results in a coordinated way. For complex cases — including very high
                fracture risk, contraindications to standard therapies, or secondary osteoporosis —
                consultant-level expertise is particularly valuable in selecting the optimal treatment
                approach and monitoring response.
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
                  q: "What is osteopenia and is it the same as osteoporosis?",
                  a: "Osteopenia describes bone density that is below average but not low enough to meet the DEXA scan criteria for osteoporosis (a T-score between -1 and -2.5). It represents an intermediate category and may warrant preventive treatment depending on other clinical risk factors, as assessed by fracture risk calculation tools such as FRAX.",
                },
                {
                  q: "Do I need a DEXA scan?",
                  a: "DEXA scanning is recommended for those with recognised risk factors for osteoporosis, including all women over 65, postmenopausal women with additional risk factors, people taking or having taken corticosteroids for three months or more, and those who have sustained a fragility fracture. A rheumatologist will advise whether scanning is appropriate in your individual circumstances.",
                },
                {
                  q: "How long do I need to take osteoporosis medication?",
                  a: "The duration of treatment depends on the medication, your fracture risk and response to treatment. For oral bisphosphonates, a treatment holiday after five years is often considered in lower-risk patients, as the drugs persist in bone. For higher-risk patients, or those on intravenous zoledronic acid, continuation may be appropriate. Regular review with your rheumatologist will guide these decisions.",
                },
                {
                  q: "Can men get osteoporosis?",
                  a: "Yes. Approximately one in five men over the age of 50 will sustain an osteoporotic fracture. Men are less commonly investigated and treated than women. Secondary causes — particularly hypogonadism, corticosteroid use and alcohol excess — are more frequently implicated in male osteoporosis.",
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
          <h2 className="section-title !text-white mb-4">Concerned about osteoporosis?</h2>
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

import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ankylosing Spondylitis Specialist London | Dr. Benji Schreiber",
  description:
    "Expert assessment and treatment of ankylosing spondylitis and axial spondyloarthropathy in London. Dr. Benji Schreiber, private consultant rheumatologist.",
};

export default function AnkylosingSpondylitisPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-navy-950 text-white py-20">
        <div className="container-content">
          <p className="section-label !text-gold-400">Conditions Treated</p>
          <h1 className="text-4xl md:text-5xl font-serif">Ankylosing Spondylitis</h1>
          <div className="w-12 h-0.5 bg-gold-500 mt-5 mb-5" />
          <p className="text-navy-300 max-w-2xl leading-relaxed">
            Ankylosing spondylitis is an inflammatory condition primarily affecting the spine and sacroiliac joints.
            Biologic therapies have transformed outcomes, but early diagnosis and specialist input are essential.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding bg-white">
        <div className="container-content">
          <div className="max-w-3xl">
            <p className="section-label">Overview</p>
            <h2 className="section-title">What is Ankylosing Spondylitis?</h2>
            <div className="divider-gold" />
            <div className="space-y-4 text-navy-600 leading-relaxed">
              <p>
                Ankylosing spondylitis (AS) is a chronic inflammatory arthritis that primarily affects the
                axial skeleton — the spine and sacroiliac joints — causing progressive pain, stiffness and,
                in advanced cases, fusion of the vertebrae. It belongs to the broader family of
                spondyloarthropathies and is now understood within the wider category of axial
                spondyloarthropathy (axSpA), which also includes non-radiographic axial SpA where
                structural changes on X-ray are not yet evident.
              </p>
              <p>
                AS typically presents in early adulthood — usually before the age of 45 — and is more common
                in men, though women are frequently underdiagnosed due to milder or atypical presentations.
                There is a strong genetic association with the HLA-B27 antigen, which is present in over 90%
                of patients with AS in White European populations. The condition can also affect peripheral
                joints, entheses, eyes (uveitis), the bowel and skin, reflecting its systemic nature.
              </p>
              <p>
                Diagnosis is often delayed by several years from symptom onset, as inflammatory back pain
                can be mistaken for mechanical causes. Specialist assessment with appropriate imaging and
                serological testing is essential to reach the correct diagnosis and begin disease-modifying
                treatment promptly.
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
                  "Chronic low back pain and stiffness — typically worse in the morning and improving with exercise",
                  "Buttock pain, often alternating sides, reflecting sacroiliac joint inflammation",
                  "Pain that wakes the patient in the second half of the night",
                  "Gradual loss of spinal mobility and flexibility",
                  "Chest pain and restricted chest expansion due to costovertebral joint involvement",
                  "Peripheral joint inflammation, particularly hips, knees and shoulders",
                  "Enthesitis — heel pain, plantar fasciitis",
                  "Acute anterior uveitis (red, painful eye) — occurs in up to 40% of patients",
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
                  "Clinical assessment of spinal mobility, chest expansion and sacroiliac joint tenderness using validated measures",
                  "HLA-B27 genetic testing",
                  "Inflammatory markers: CRP and ESR (may be normal in a significant proportion of patients)",
                  "X-rays of sacroiliac joints and lumbar spine to assess for erosion, sclerosis and syndesmophytes",
                  "MRI of sacroiliac joints — the most sensitive tool for detecting early active inflammation",
                  "Assessment for extra-articular features including uveitis, psoriasis and inflammatory bowel disease",
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
                Exercise is central to the management of AS and is one of the most effective interventions
                for maintaining spinal mobility and reducing pain. Regular physiotherapy with a programme
                tailored to axial disease is strongly recommended. NSAIDs — taken regularly rather than as
                needed — provide effective anti-inflammatory relief and may even slow radiographic progression
                when used continuously in patients with high disease activity.
              </p>
              <p>
                For patients with persistently active disease despite NSAIDs, biologic therapies have
                revolutionised treatment outcomes. TNF inhibitors (adalimumab, etanercept, certolizumab,
                golimumab, infliximab) have a well-established evidence base and are highly effective in
                reducing pain, stiffness, and inflammation. IL-17 inhibitors (secukinumab, ixekizumab,
                bimekizumab) provide an alternative with particular benefit for patients with co-existing
                psoriasis or inflammatory bowel disease considerations. JAK inhibitors (tofacitinib,
                upadacitinib, filgotinib) offer effective oral options.
              </p>
              <p>
                Conventional DMARDs such as methotrexate have limited efficacy for axial disease but may
                be used for peripheral joint involvement. Local corticosteroid injections into sacroiliac
                joints can provide relief during flares. Surgical intervention is occasionally required
                for severe hip disease or spinal correction.
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
                The average delay from symptom onset to diagnosis of AS is historically around 8–10 years —
                a period during which irreversible spinal changes may accrue. Prompt specialist assessment
                using modern diagnostic criteria and MRI imaging can identify inflammatory axial disease at
                an earlier, non-radiographic stage, allowing treatment to begin before structural damage
                occurs.
              </p>
              <p>
                A consultant rheumatologist will also assess and monitor for extra-articular manifestations,
                coordinate care with ophthalmology or gastroenterology where needed, and select biologic
                therapy appropriately. Dr. Schreiber has considerable experience managing both radiographic
                and non-radiographic axial spondyloarthropathy and initiating the full range of biologic
                therapies available in the UK.
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
                  q: "What is the difference between ankylosing spondylitis and non-radiographic axial spondyloarthropathy?",
                  a: "Both are forms of axial spondyloarthropathy with similar symptoms. Ankylosing spondylitis refers specifically to cases where sacroiliac joint damage is visible on X-ray. Non-radiographic axSpA describes the same inflammatory condition at an earlier stage, where X-ray changes are absent but MRI shows active inflammation. Both are treated similarly.",
                },
                {
                  q: "Does being HLA-B27 positive mean I will develop ankylosing spondylitis?",
                  a: "Not necessarily. Around 8% of the general population carries the HLA-B27 gene, but only a small proportion develop AS. The gene significantly increases susceptibility, but environmental factors and other genetic influences are also involved. HLA-B27 testing is a useful diagnostic aid when considered alongside clinical features.",
                },
                {
                  q: "Can ankylosing spondylitis affect women?",
                  a: "Yes. AS was historically considered a condition predominantly affecting men, but it is now recognised that women are equally susceptible, though the presentation may differ — women are more likely to have cervical spine involvement and less likely to show classic X-ray changes, leading to underdiagnosis. A clinical index of suspicion and MRI are important in women with suspected axial SpA.",
                },
                {
                  q: "Will I end up with a fused spine?",
                  a: "Spinal fusion (ankylosis) is a feature of longstanding, undertreated disease in a proportion of patients. With modern biologic therapies and regular physiotherapy, progression can be substantially slowed. Early diagnosis and effective treatment give the best chance of preserving spinal mobility.",
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
          <h2 className="section-title !text-white mb-4">Concerned about ankylosing spondylitis?</h2>
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

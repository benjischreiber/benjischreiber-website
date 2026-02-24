import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Psoriatic Arthritis Specialist London | Dr. Benji Schreiber",
  description:
    "Expert diagnosis and treatment of psoriatic arthritis in London. Dr. Benji Schreiber, private consultant rheumatologist, offers personalised care including biologic therapies.",
};

export default function PsoriaticArthritisPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-navy-950 text-white py-20">
        <div className="container-content">
          <p className="section-label !text-gold-400">Conditions Treated</p>
          <h1 className="text-4xl md:text-5xl font-serif">Psoriatic Arthritis</h1>
          <div className="w-12 h-0.5 bg-gold-500 mt-5 mb-5" />
          <p className="text-navy-300 max-w-2xl leading-relaxed">
            Psoriatic arthritis is an inflammatory joint condition associated with the skin condition psoriasis.
            It is highly variable in its presentation and requires expert assessment to diagnose and manage effectively.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding bg-white">
        <div className="container-content">
          <div className="max-w-3xl">
            <p className="section-label">Overview</p>
            <h2 className="section-title">What is Psoriatic Arthritis?</h2>
            <div className="divider-gold" />
            <div className="space-y-4 text-navy-600 leading-relaxed">
              <p>
                Psoriatic arthritis (PsA) is a chronic inflammatory arthritis that occurs in association with
                psoriasis. It affects approximately 20–30% of people with psoriasis, though joint symptoms can
                occasionally precede skin disease. PsA belongs to the spondyloarthropathy family of conditions
                and has a wide spectrum of musculoskeletal involvement that can affect peripheral joints, the
                spine and sacroiliac joints, tendons, and the areas where tendons and ligaments insert into bone
                (entheses).
              </p>
              <p>
                Unlike rheumatoid arthritis, psoriatic arthritis can affect joints asymmetrically and has
                characteristic patterns such as involvement of the distal joints of the fingers and toes (DIP
                joints), and the distinctive "sausage digit" or dactylitis — diffuse swelling of an entire finger
                or toe. Nail changes including pitting, onycholysis and subungual hyperkeratosis are common and
                are closely associated with DIP joint disease.
              </p>
              <p>
                PsA can pursue a destructive course if untreated, with some patients developing significant joint
                damage. However, modern therapeutic options — including biologics and targeted synthetic DMARDs —
                have considerably improved outcomes. Effective management requires collaboration between
                rheumatologist and dermatologist to address both joint and skin disease.
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
                  "Joint pain, swelling and stiffness — often asymmetrical and involving large and small joints",
                  "Dactylitis: diffuse swelling of an entire finger or toe ('sausage digit')",
                  "Enthesitis: pain and tenderness at tendon and ligament insertion points, particularly the heel",
                  "Distal interphalangeal (DIP) joint involvement — the joints nearest the fingertips",
                  "Inflammatory back pain and stiffness, particularly in the morning",
                  "Nail changes: pitting, ridging, onycholysis or discolouration",
                  "Skin psoriasis — though this may be mild or in hidden areas such as the scalp or natal cleft",
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
                  "Detailed clinical examination of joints, entheses, skin and nails using validated scoring tools (e.g. CASPAR criteria)",
                  "Blood tests: inflammatory markers (CRP, ESR), full blood count and metabolic profile",
                  "Rheumatoid factor and anti-CCP antibodies (usually negative in PsA)",
                  "HLA-B27 testing where axial involvement is suspected",
                  "Imaging: X-rays to assess for erosive and new bone formation; MRI or ultrasound for enthesitis and early joint changes",
                  "Assessment of cardiovascular risk factors given the elevated cardiometabolic risk in PsA",
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
                Treatment is guided by the pattern and severity of disease. NSAIDs are useful for mild
                peripheral and axial symptoms. For peripheral joint disease, conventional DMARDs — most
                commonly methotrexate — are used, though they have limited efficacy for axial disease,
                enthesitis and skin disease. Local corticosteroid injections can provide targeted relief
                for individual inflamed joints or entheses.
              </p>
              <p>
                Biologic therapies have transformed management of moderate-to-severe PsA. TNF inhibitors
                (adalimumab, etanercept, certolizumab, golimumab) are widely used and effective across
                multiple disease domains. IL-17 inhibitors (secukinumab, ixekizumab, bimekizumab) are
                particularly effective for both skin and joint disease. IL-12/23 and IL-23 inhibitors
                (ustekinumab, guselkumab, risankizumab) offer further options, especially where skin
                disease is prominent. JAK inhibitors (tofacitinib, upadacitinib) provide additional
                oral targeted therapy.
              </p>
              <p>
                The choice of treatment takes into account disease domain, severity, comorbidities,
                concomitant skin disease, and patient preference. Close coordination with a dermatologist
                is valuable when skin disease is significant, and some patients benefit from a single agent
                that effectively treats both joints and skin simultaneously.
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
                Psoriatic arthritis is frequently under-recognised and misdiagnosed — many patients with
                psoriasis are not screened adequately for joint disease, and the variable presentation of
                PsA means it is sometimes confused with other forms of arthritis. An experienced consultant
                rheumatologist will assess all disease domains systematically and apply validated diagnostic
                criteria to reach the correct diagnosis and initiate appropriate treatment promptly.
              </p>
              <p>
                The management of PsA is increasingly personalised, with treatment decisions informed by
                the predominant disease manifestations, comorbidities and the growing range of therapeutic
                options. Dr. Schreiber offers comprehensive assessment, access to the full range of
                biologic and targeted therapies, and ongoing monitoring to achieve the best possible
                disease control.
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
                  q: "Does everyone with psoriasis develop psoriatic arthritis?",
                  a: "No. Approximately 20–30% of people with psoriasis develop psoriatic arthritis. The risk is higher in those with more extensive skin disease, nail involvement, or a family history of PsA. However, joint symptoms can occasionally occur in people with very mild or unrecognised psoriasis.",
                },
                {
                  q: "Can psoriatic arthritis affect the spine?",
                  a: "Yes. Axial involvement — affecting the sacroiliac joints and spine — occurs in a subset of patients. This can cause inflammatory back pain and stiffness, particularly in the morning, and is distinct from mechanical back pain. It requires specialist assessment and may influence treatment choice.",
                },
                {
                  q: "Will treating my skin psoriasis help my joints?",
                  a: "Some treatments for psoriasis, particularly biologics targeting IL-17 or IL-23, are highly effective for both skin and joint disease. However, other topical or phototherapy treatments that are effective for skin may have little impact on joint inflammation. The two aspects are best managed in close liaison between rheumatologist and dermatologist.",
                },
                {
                  q: "Is psoriatic arthritis a progressive condition?",
                  a: "The course is highly variable. Some patients have mild, episodic disease with minimal joint damage; others can develop significant erosive arthropathy. Early diagnosis and effective treatment substantially reduce the risk of progression and long-term joint damage.",
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
          <h2 className="section-title !text-white mb-4">Concerned about psoriatic arthritis?</h2>
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

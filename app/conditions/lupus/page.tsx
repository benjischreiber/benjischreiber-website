import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lupus (SLE) Specialist London | Dr. Benji Schreiber",
  description:
    "Expert assessment and management of lupus (SLE) in London. Dr. Benji Schreiber, private consultant rheumatologist, has specialist expertise in connective tissue disease.",
};

export default function LupusPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-navy-950 text-white py-20">
        <div className="container-content">
          <p className="section-label !text-gold-400">Conditions Treated</p>
          <h1 className="text-4xl md:text-5xl font-serif">Lupus (SLE)</h1>
          <div className="w-12 h-0.5 bg-gold-500 mt-5 mb-5" />
          <p className="text-navy-300 max-w-2xl leading-relaxed">
            Systemic lupus erythematosus is a complex autoimmune condition capable of affecting almost any organ.
            Specialist expertise is essential for accurate diagnosis, monitoring and modern targeted treatment.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding bg-white">
        <div className="container-content">
          <div className="max-w-3xl">
            <p className="section-label">Overview</p>
            <h2 className="section-title">What is Lupus (SLE)?</h2>
            <div className="divider-gold" />
            <div className="space-y-4 text-navy-600 leading-relaxed">
              <p>
                Systemic lupus erythematosus (SLE) is a chronic autoimmune condition in which the immune system
                produces antibodies against the body's own cells and tissues, causing inflammation and damage
                across multiple organ systems. The kidneys, skin, joints, brain, heart, lungs, and blood cells
                can all be affected. The condition is characterised by a relapsing and remitting course, with
                periods of disease activity (flares) interspersed with periods of relative quiescence.
              </p>
              <p>
                Lupus predominantly affects women of childbearing age and is more common in women of Black
                African, Afro-Caribbean, and South Asian heritage, in whom it also tends to follow a more
                severe course. Hormonal, genetic and environmental factors all contribute to disease susceptibility
                and activity. Pregnancy in lupus requires careful specialist management, as it carries specific
                risks including flare, pre-eclampsia and neonatal lupus.
              </p>
              <p>
                The antinuclear antibody (ANA) is positive in virtually all patients with SLE, and a range of
                more specific autoantibodies — including anti-dsDNA and anti-Sm — are associated with the
                condition. Complement levels (C3 and C4) are useful markers of disease activity. The clinical
                and serological complexity of lupus means that an experienced specialist is essential for both
                diagnosis and ongoing management.
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
                  "Butterfly (malar) rash across the cheeks and nose, often triggered or worsened by sun exposure",
                  "Photosensitivity — skin rashes or systemic flares provoked by ultraviolet light",
                  "Joint pain and swelling, typically symmetrical and non-erosive",
                  "Profound fatigue, often out of proportion to other symptoms",
                  "Hair thinning or loss (alopecia)",
                  "Oral or nasal ulcers",
                  "Raynaud's phenomenon — colour change in the fingers with cold",
                  "Pleuritis or pericarditis causing chest pain",
                  "Neuropsychiatric symptoms including headache, cognitive difficulties and seizures",
                  "Kidney involvement (lupus nephritis) — detected by urine protein and blood tests",
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
                  "Clinical assessment against validated classification criteria (EULAR/ACR 2019)",
                  "ANA screen — positive in virtually all SLE patients",
                  "Specific autoantibodies: anti-dsDNA, anti-Sm, anti-Ro, anti-La, antiphospholipid antibodies",
                  "Complement levels (C3, C4) — low in active disease",
                  "Full blood count to assess for haemolytic anaemia, leucopenia and thrombocytopenia",
                  "Urinalysis and urine protein:creatinine ratio to screen for nephritis",
                  "Renal function, liver function and inflammatory markers",
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
                Hydroxychloroquine is the cornerstone of SLE management and is recommended for virtually all
                patients with lupus. It reduces flare frequency, protects against organ damage, lowers
                cardiovascular risk and is safe in pregnancy. NSAIDs are used for joint and pleuritic pain.
                Corticosteroids remain important for managing acute flares and severe organ involvement, though
                the aim is always to minimise long-term steroid exposure given the cumulative side-effect burden.
              </p>
              <p>
                Immunosuppressive agents including azathioprine, mycophenolate mofetil and methotrexate are
                used for maintenance treatment of organ-threatening disease and as steroid-sparing agents.
                Belimumab — a biologic targeting the B-cell survival factor BAFF — is licensed for active
                serologically confirmed SLE and has been shown to reduce flares, allow steroid tapering,
                and protect against organ damage. Anifrolumab, an interferon-receptor inhibitor, is a more
                recent addition to the biologic armamentarium for moderate-to-severe SLE. For lupus nephritis,
                voclosporin in combination with mycophenolate offers improved renal outcomes.
              </p>
              <p>
                All patients with lupus require regular monitoring — of disease activity, organ function and
                treatment-related side effects. Cardiovascular risk management, sun protection, bone health
                and vaccination are integral components of holistic SLE care. Pregnancy planning requires
                specialist input to optimise maternal and fetal outcomes.
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
                Lupus is one of the most clinically complex conditions in medicine. Its protean manifestations,
                the need for careful serological and immunological interpretation, and the increasing number
                of targeted therapies all demand specialist expertise. Dr. Schreiber's research background is in
                connective tissue disease and pulmonary complications thereof — areas of particular relevance
                in lupus, where interstitial lung disease and pulmonary hypertension represent important
                and potentially life-limiting complications.
              </p>
              <p>
                A consultant rheumatologist with expertise in lupus will ensure the correct diagnosis is made
                — distinguishing SLE from undifferentiated connective tissue disease, other overlap syndromes
                and conditions that may mimic lupus — and will monitor systematically for evolving organ
                involvement. Timely initiation of biologic therapy in appropriate patients can substantially
                reduce the risk of flares and cumulative organ damage.
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
                  q: "My ANA is positive — do I have lupus?",
                  a: "A positive ANA is a common finding and does not in itself indicate lupus. Around 10–15% of healthy people have a low-titre positive ANA. Lupus is diagnosed based on a combination of clinical features and more specific autoantibody tests. A consultant rheumatologist will interpret the full clinical and serological picture.",
                },
                {
                  q: "Can I have children if I have lupus?",
                  a: "Many women with lupus have successful pregnancies. However, pregnancy in lupus requires careful planning and close monitoring by a rheumatologist — ideally with experience in lupus — and, where appropriate, a specialist obstetric team. Disease should ideally be in remission for at least six months before conception, and medications reviewed for pregnancy safety.",
                },
                {
                  q: "What triggers lupus flares?",
                  a: "Common triggers include sun exposure (ultraviolet light), infections, physical or emotional stress, hormonal changes and, in some cases, certain medications. Recognising individual triggers and taking appropriate preventive measures — such as consistent sun protection — is an important part of self-management.",
                },
                {
                  q: "Is lupus fatal?",
                  a: "With modern treatment, the large majority of people with lupus live a normal lifespan. Mortality from the condition itself has declined substantially over recent decades. However, lupus does carry elevated cardiovascular risk and certain organ manifestations — particularly renal and neuropsychiatric — require prompt and expert management to prevent long-term damage.",
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
          <h2 className="section-title !text-white mb-4">Concerned about lupus?</h2>
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

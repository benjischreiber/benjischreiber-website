import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pulmonary Hypertension Specialist London | Dr. Benji Schreiber",
  description:
    "Expert assessment and management of pulmonary hypertension in London. Dr. Benji Schreiber's research doctorate focused on PH in connective tissue disease — specialist expertise for a complex condition.",
};

export default function PulmonaryHypertensionPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-navy-950 text-white py-20">
        <div className="container-content">
          <p className="section-label !text-gold-400">Conditions Treated</p>
          <h1 className="text-4xl md:text-5xl font-serif">Pulmonary Hypertension</h1>
          <div className="w-12 h-0.5 bg-gold-500 mt-5 mb-5" />
          <p className="text-navy-300 max-w-2xl leading-relaxed">
            Pulmonary hypertension is a serious condition affecting the arteries of the lungs and the
            right side of the heart. Early specialist diagnosis and modern targeted therapies have
            significantly improved outcomes.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding bg-white">
        <div className="container-content">
          <div className="max-w-3xl">
            <p className="section-label">Overview</p>
            <h2 className="section-title">What is Pulmonary Hypertension?</h2>
            <div className="divider-gold" />
            <div className="space-y-4 text-navy-600 leading-relaxed">
              <p>
                Pulmonary hypertension (PH) is defined as an elevation in mean pulmonary arterial
                pressure, causing increased resistance in the pulmonary circulation and, over time,
                right heart failure. It is not a single disease but a haemodynamic state with many
                possible underlying causes, classified by the World Health Organisation into five
                groups based on aetiology and treatment approach.
              </p>
              <p>
                Group 1 — pulmonary arterial hypertension (PAH) — includes idiopathic PAH and PAH
                associated with connective tissue diseases such as systemic sclerosis (scleroderma),
                lupus, and mixed connective tissue disease. Connective tissue disease is the most
                common identifiable cause of PAH in the UK, and scleroderma-associated PAH carries
                a particularly significant prognosis, making early detection critical.
              </p>
              <p>
                Other groups include PH due to left heart disease (Group 2), lung disease or hypoxia
                (Group 3), chronic thromboembolic disease (CTEPH, Group 4), and a heterogeneous
                group with unclear or multifactorial mechanisms (Group 5). Accurate classification
                requires specialist investigation, as management differs substantially between groups.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Symptoms + Diagnosis */}
      <section className="section-padding bg-navy-50">
        <div className="container-content">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="section-label">Recognition</p>
              <h2 className="section-title text-2xl">Symptoms</h2>
              <div className="divider-gold" />
              <ul className="space-y-3 mt-2">
                {[
                  "Progressive breathlessness on exertion — often the first and most prominent symptom",
                  "Fatigue and reduced exercise tolerance",
                  "Chest pain or pressure, particularly on exertion",
                  "Palpitations or awareness of the heartbeat",
                  "Pre-syncope (near-fainting) or syncope, particularly on exertion",
                  "Ankle swelling and leg oedema — a sign of right heart strain",
                  "Dizziness and light-headedness",
                  "In CTD-associated PH: symptoms may overlap with the underlying condition",
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
                  "Echocardiogram — the key screening investigation, estimating pulmonary pressures and right heart function",
                  "Right heart catheterisation — the gold standard for definitive diagnosis and haemodynamic characterisation",
                  "CT pulmonary angiography — to exclude chronic thromboembolic disease (CTEPH)",
                  "Ventilation-perfusion (V/Q) scan — sensitive screening for CTEPH",
                  "Lung function tests including DLCO (transfer factor) — often reduced, particularly in CTD",
                  "NT-proBNP or BNP — cardiac biomarker reflecting right heart stress",
                  "Six-minute walk test — functional assessment and monitoring",
                  "Autoantibody screen — to identify or characterise underlying connective tissue disease",
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
                Treatment depends on the WHO group and underlying cause. For pulmonary arterial
                hypertension (Group 1), a range of targeted therapies are now available that act on
                pathways involved in pulmonary vascular remodelling. These include endothelin receptor
                antagonists (such as ambrisentan and macitentan), phosphodiesterase-5 inhibitors
                (sildenafil and tadalafil), and prostacyclin pathway agents (including oral selexipag
                and inhaled or intravenous prostacyclin analogues). Current guidelines recommend
                combination therapy as the standard of care for most patients with PAH.
              </p>
              <p>
                For chronic thromboembolic PH (CTEPH), pulmonary endarterectomy — surgical removal
                of obstructing material from the pulmonary arteries — can be curative in operable cases.
                For inoperable CTEPH, balloon pulmonary angioplasty and the soluble guanylate cyclase
                stimulator riociguat are options. General supportive measures include supplemental
                oxygen where indicated, diuretics for fluid overload, and anticoagulation in selected
                patients.
              </p>
              <p>
                In CTD-associated PH, management of the underlying connective tissue disease runs in
                parallel. Immunosuppression may be beneficial particularly in inflammatory-predominant
                PAH, such as that associated with lupus or MCTD. Close collaboration between
                rheumatology and respiratory/pulmonary hypertension specialists is essential.
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
            <h2 className="section-title">Dr. Schreiber&apos;s expertise in pulmonary hypertension</h2>
            <div className="divider-gold" />
            <div className="space-y-4 text-navy-600 leading-relaxed">
              <p>
                Pulmonary hypertension — particularly when it occurs in the context of connective tissue
                disease — is one of Dr. Schreiber&apos;s core research and clinical interests. His research
                doctorate (MD, UCL) focused specifically on pulmonary hypertension in connective tissue
                disease, and he has published in this area in journals including <em>Circulation Research</em> and
                the <em>European Heart Journal</em>. He was awarded the American College of Rheumatology
                Hench Award in 2012 for this work.
              </p>
              <p>
                CTD-associated PH requires dual expertise in rheumatology and pulmonary vascular disease.
                An early and accurate diagnosis — distinguishing PAH from PH due to interstitial lung
                disease, left heart disease, or other causes — is critical, as the treatment implications
                differ substantially. Systematic screening for PH in patients with scleroderma, lupus and
                other CTDs is part of Dr. Schreiber&apos;s routine clinical practice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Videos */}
      <section className="section-padding bg-white">
        <div className="container-content">
          <div className="max-w-3xl">
            <p className="section-label">Patient Education</p>
            <h2 className="section-title">Watch: Pulmonary Hypertension Explained</h2>
            <div className="divider-gold" />
            <p className="text-navy-600 leading-relaxed mb-8">
              Dr. Schreiber has produced two short patient education videos on pulmonary hypertension,
              explaining what the condition is and how it is managed.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl">
            <div className="aspect-video">
              <iframe
                src="https://www.youtube-nocookie.com/embed/IDlizNdfETQ"
                title="What is pulmonary hypertension? — Dr. Benji Schreiber"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border border-navy-100"
              />
            </div>
            <div className="aspect-video">
              <iframe
                src="https://www.youtube-nocookie.com/embed/eQGElYtEJh0"
                title="Pulmonary hypertension — Dr. Benji Schreiber"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border border-navy-100"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-navy-50">
        <div className="container-content">
          <div className="max-w-3xl mx-auto">
            <p className="section-label">Common Questions</p>
            <h2 className="section-title">FAQ</h2>
            <div className="divider-gold" />
            <div className="space-y-5 mt-2">
              {[
                {
                  q: "Is pulmonary hypertension the same as high blood pressure?",
                  a: "No. Pulmonary hypertension refers specifically to elevated pressure in the arteries supplying the lungs — not the systemic blood pressure measured in the arm. The two conditions have different causes, mechanisms and treatments. Someone can have normal systemic blood pressure and still have pulmonary hypertension.",
                },
                {
                  q: "I have scleroderma — should I be screened for pulmonary hypertension?",
                  a: "Yes. Systematic annual screening for pulmonary hypertension is recommended for all patients with systemic sclerosis, as CTD-associated PAH is more common in scleroderma than in any other connective tissue disease. Screening typically involves echocardiography and lung function testing (including DLCO). Early detection significantly improves treatment outcomes.",
                },
                {
                  q: "Can pulmonary hypertension be cured?",
                  a: "In most forms, PH is not curable but is manageable with modern targeted therapies. The exception is chronic thromboembolic PH (CTEPH), where pulmonary endarterectomy surgery can be curative in selected patients. For other forms, the goal of treatment is to improve symptoms, exercise capacity and quality of life, and to slow disease progression.",
                },
                {
                  q: "What is the prognosis for pulmonary hypertension?",
                  a: "Prognosis varies considerably depending on the underlying cause, how early it is diagnosed, and the response to treatment. Outcomes have improved substantially with modern combination PAH therapy. Scleroderma-associated PAH tends to carry a more guarded prognosis than idiopathic PAH, highlighting the importance of early diagnosis and expert management in this group.",
                },
              ].map((faq) => (
                <div key={faq.q} className="bg-white p-6 border border-navy-100">
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
          <h2 className="section-title !text-white mb-4">Concerned about pulmonary hypertension?</h2>
          <p className="text-navy-300 max-w-lg mx-auto mb-8">
            Dr. Schreiber offers expert assessment of suspected or confirmed pulmonary hypertension,
            with particular expertise in CTD-associated disease.
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

import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fibromyalgia Specialist London | Dr. Benji Schreiber",
  description:
    "Expert assessment and management of fibromyalgia in London. Dr. Benji Schreiber, private consultant rheumatologist, provides thorough diagnosis and a holistic treatment approach.",
};

export default function FibromyalgiaPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-navy-950 text-white py-20">
        <div className="container-content">
          <p className="section-label !text-gold-400">Conditions Treated</p>
          <h1 className="text-4xl md:text-5xl font-serif">Fibromyalgia</h1>
          <div className="w-12 h-0.5 bg-gold-500 mt-5 mb-5" />
          <p className="text-navy-300 max-w-2xl leading-relaxed">
            Fibromyalgia is a chronic condition characterised by widespread pain, fatigue and sleep
            disturbance. Expert assessment is essential to establish the correct diagnosis and develop
            an effective, personalised management plan.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding bg-white">
        <div className="container-content">
          <div className="max-w-3xl">
            <p className="section-label">Overview</p>
            <h2 className="section-title">What is Fibromyalgia?</h2>
            <div className="divider-gold" />
            <div className="space-y-4 text-navy-600 leading-relaxed">
              <p>
                Fibromyalgia is a chronic pain disorder characterised by widespread musculoskeletal pain,
                profound fatigue, sleep disturbance, and often cognitive difficulties. It is now understood
                as a disorder of central pain processing — sometimes termed "central sensitisation" — in
                which the nervous system amplifies pain signals, making ordinarily non-painful stimuli
                feel painful. It is not an inflammatory or autoimmune condition, and does not cause joint
                or tissue damage.
              </p>
              <p>
                Fibromyalgia affects approximately 2–4% of the population and is more common in women.
                It can develop at any age, including in adolescents. It frequently coexists with other
                conditions — including inflammatory arthritis, lupus, hypermobility spectrum disorders,
                irritable bowel syndrome and anxiety or depression — which can complicate both diagnosis
                and management. The condition often develops in the context of physical or psychological
                stressors.
              </p>
              <p>
                Fibromyalgia is a genuinely debilitating condition that significantly affects quality of
                life, work capacity and daily functioning. It deserves the same thorough and compassionate
                assessment as any other medical condition. A clear diagnosis, with an explanation of the
                underlying mechanisms, is itself a therapeutic step — allowing patients to understand their
                condition and engage fully with evidence-based management.
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
                  "Widespread pain affecting multiple body regions, present for at least three months",
                  "Profound fatigue, often disproportionate to activity levels",
                  "Non-restorative sleep — waking unrefreshed despite adequate sleep duration",
                  "Cognitive difficulties: poor memory, difficulty concentrating ('fibro fog')",
                  "Heightened sensitivity to pressure, temperature, noise and light",
                  "Headaches, including tension headaches and migraine",
                  "Irritable bowel symptoms and bladder irritability",
                  "Low mood and anxiety, which may be both cause and consequence of the condition",
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
                  "Detailed clinical history and examination — fibromyalgia is a clinical diagnosis based on the pattern of symptoms",
                  "Application of validated diagnostic criteria (2016 ACR criteria incorporating widespread pain index and symptom severity scale)",
                  "Blood tests to exclude inflammatory arthritis, thyroid disease, and other mimics",
                  "ANA and other autoantibody testing where connective tissue disease is a differential consideration",
                  "Assessment for comorbid conditions: hypermobility, inflammatory conditions, mood disorders",
                  "Sleep assessment where obstructive sleep apnoea is suspected as a contributing factor",
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
                Fibromyalgia is best managed through a multimodal approach combining education, physical
                activity, psychological support and, where appropriate, pharmacological therapy. Patient
                education — understanding the neuroscience of central sensitisation — has been shown to
                improve outcomes and is an integral part of management. Validating the reality and impact
                of the condition is an important starting point.
              </p>
              <p>
                Graduated aerobic exercise is the single most evidence-based intervention for fibromyalgia
                and is recommended in all guidelines. Activities such as walking, swimming and cycling are
                well tolerated and consistently demonstrate improvements in pain, fatigue and overall
                wellbeing. Cognitive behavioural therapy (CBT) and other pain psychology approaches address
                the cognitive and emotional dimensions of chronic pain and are effective adjuncts.
                Physiotherapy incorporating pain neuroscience education and graded activity can be valuable.
              </p>
              <p>
                Pharmacological treatments are used as adjuncts rather than primary therapy. Low-dose
                amitriptyline or nortriptyline taken at night can improve sleep quality and reduce pain.
                Duloxetine (an SNRI antidepressant) and pregabalin or gabapentin (neuromodulators) are
                licensed or commonly used for fibromyalgia. Simple analgesics may provide modest benefit
                and opioids are generally not recommended. Sleep hygiene measures, pacing strategies and
                addressing mood disorders all contribute to a comprehensive management approach.
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
                A key reason to seek rheumatological assessment in suspected fibromyalgia is to ensure that
                an inflammatory condition — which may present similarly — has not been missed. Early
                inflammatory arthritis, undifferentiated connective tissue disease, and other autoimmune
                conditions can all cause widespread pain and fatigue. A consultant rheumatologist will
                interpret the clinical picture and investigation results with the expertise needed to make
                this distinction accurately.
              </p>
              <p>
                When fibromyalgia coexists with an inflammatory condition such as rheumatoid arthritis or
                lupus, it adds a layer of complexity to assessment and management — in particular, pain and
                fatigue in such patients cannot always be attributed to active inflammation, and treatment
                escalation may be inappropriate. Dr. Schreiber will provide a thorough and unhurried
                assessment, a clear diagnostic formulation, and a practical and realistic management plan.
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
                  q: "Is fibromyalgia a real condition?",
                  a: "Yes. Fibromyalgia is a well-recognised medical diagnosis with validated diagnostic criteria and a substantial evidence base regarding its mechanisms and treatment. It is characterised by abnormal central pain processing — the nervous system is amplifying pain signals — which explains why routine blood tests and scans are normal. The absence of inflammation does not mean the condition is not real or genuinely debilitating.",
                },
                {
                  q: "Will my fibromyalgia get better?",
                  a: "The course varies between individuals. With appropriate management — particularly exercise, sleep improvement and psychological support — many people experience significant improvement in symptoms and quality of life over time. A minority achieve full resolution. Setting realistic expectations and focusing on functional improvement and quality of life is an important part of the therapeutic approach.",
                },
                {
                  q: "Can fibromyalgia coexist with inflammatory arthritis?",
                  a: "Yes, and this is relatively common. Fibromyalgia can develop alongside rheumatoid arthritis, lupus or other inflammatory conditions. When this occurs, it is important to distinguish pain driven by fibromyalgia from pain caused by active joint inflammation, as this affects treatment decisions. Escalating immunosuppressive therapy for fibromyalgia symptoms is unlikely to help and may cause unnecessary side effects.",
                },
                {
                  q: "Are there any tests that confirm fibromyalgia?",
                  a: "There is no blood test, scan or biopsy that confirms fibromyalgia. The diagnosis is clinical, based on the characteristic pattern of widespread pain with associated features and the exclusion of other conditions. This is why expert clinical assessment is important — the diagnosis should be made positively, not simply by excluding everything else.",
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
          <h2 className="section-title !text-white mb-4">Concerned about fibromyalgia?</h2>
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

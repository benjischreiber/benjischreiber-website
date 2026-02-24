import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conditions Treated",
  description:
    "Dr. Benji Schreiber treats the full spectrum of rheumatological conditions, including rheumatoid arthritis, lupus, scleroderma, gout, osteoporosis, fibromyalgia and more.",
};

const conditions = [
  {
    category: "Inflammatory Arthritis",
    items: [
      {
        name: "Rheumatoid Arthritis",
        href: "/conditions/rheumatoid-arthritis",
        description:
          "A chronic autoimmune condition causing joint inflammation, pain and swelling. Early diagnosis and modern therapies — including biologic and targeted synthetic DMARDs — can achieve remission and prevent joint damage.",
      },
      {
        name: "Psoriatic Arthritis",
        href: "/conditions/psoriatic-arthritis",
        description:
          "Inflammatory arthritis associated with the skin condition psoriasis. It can affect any joint, the spine, and tendons. Dr. Schreiber offers assessment and a full range of treatment options.",
      },
      {
        name: "Axial Spondyloarthropathy (Ankylosing Spondylitis)",
        href: "/conditions/ankylosing-spondylitis",
        description:
          "Inflammatory arthritis primarily affecting the spine and sacroiliac joints, causing stiffness and pain. Biologic therapies have transformed outcomes for patients with this condition.",
      },
      {
        name: "Reactive Arthritis",
        href: null,
        description:
          "Arthritis triggered by an infection elsewhere in the body. Dr. Schreiber offers expert assessment to confirm the diagnosis and guide management.",
      },
    ],
  },
  {
    category: "Connective Tissue Diseases",
    items: [
      {
        name: "Lupus (SLE)",
        href: "/conditions/lupus",
        description:
          "Systemic lupus erythematosus is a complex autoimmune condition that can affect multiple organs. Dr. Schreiber has specialist expertise in lupus management, including monitoring for complications.",
      },
      {
        name: "Scleroderma (Systemic Sclerosis)",
        href: null,
        description:
          "A condition causing hardening of skin and internal organs. Dr. Schreiber's research background in connective tissue diseases means he has particular expertise in managing this complex condition.",
      },
      {
        name: "Sjögren's Syndrome",
        href: null,
        description:
          "An autoimmune condition causing dry eyes and dry mouth, and potentially affecting other organs. Dr. Schreiber can distinguish primary from secondary Sjögren's and guide treatment.",
      },
      {
        name: "Inflammatory Myositis",
        href: null,
        description:
          "Includes polymyositis, dermatomyositis and inclusion body myositis. Dr. Schreiber assesses muscle weakness, rash, and associated features to guide immunosuppressive therapy.",
      },
      {
        name: "Mixed Connective Tissue Disease & Overlap Syndromes",
        href: null,
        description:
          "Conditions sharing features of multiple connective tissue diseases require specialist assessment to optimise management.",
      },
      {
        name: "Antiphospholipid Syndrome",
        href: null,
        description:
          "An autoimmune condition associated with blood clots and pregnancy complications, often occurring alongside lupus.",
      },
    ],
  },
  {
    category: "Crystal & Metabolic Arthritis",
    items: [
      {
        name: "Gout",
        href: "/conditions/gout",
        description:
          "Caused by urate crystal deposition in joints, gout is painful and preventable. Dr. Schreiber provides comprehensive management including lifestyle advice and long-term urate-lowering therapy.",
      },
      {
        name: "Pseudogout (CPPD Disease)",
        href: null,
        description:
          "Calcium pyrophosphate deposition disease can cause acute joint inflammation and chronic arthritis. Expert assessment is needed to distinguish it from other forms of arthritis.",
      },
    ],
  },
  {
    category: "Bone Health",
    items: [
      {
        name: "Osteoporosis",
        href: "/conditions/osteoporosis",
        description:
          "Thinning of bone that increases fracture risk. Dr. Schreiber offers DEXA scan assessment and the full range of preventive and bone-protective treatments.",
      },
      {
        name: "Metabolic Bone Disease",
        href: null,
        description:
          "Including Paget's disease, osteomalacia and other disorders of bone metabolism requiring specialist evaluation and management.",
      },
    ],
  },
  {
    category: "Soft Tissue & Pain",
    items: [
      {
        name: "Fibromyalgia",
        href: "/conditions/fibromyalgia",
        description:
          "A chronic condition causing widespread pain, fatigue and sleep disturbance. Dr. Schreiber offers thorough assessment, diagnosis and a holistic treatment approach.",
      },
      {
        name: "Hypermobility & hEDS",
        href: null,
        description:
          "Hypermobile Ehlers-Danlos syndrome and related conditions cause joint hypermobility, pain and instability. Expert assessment and a coordinated management plan make a significant difference.",
      },
      {
        name: "Bursitis, Tendinopathy & Soft Tissue Conditions",
        href: null,
        description:
          "Including shoulder, hip and knee bursitis, tendinopathies and other localised soft tissue pain conditions, managed with injection therapy where appropriate.",
      },
      {
        name: "Raynaud's Phenomenon",
        href: null,
        description:
          "Colour change of the fingers in response to cold or stress. Dr. Schreiber assesses for underlying connective tissue disease and offers treatment to reduce frequency and severity of attacks.",
      },
    ],
  },
  {
    category: "Other Conditions",
    items: [
      {
        name: "Polymyalgia Rheumatica",
        href: "/conditions/polymyalgia-rheumatica",
        description:
          "A common inflammatory condition in older adults causing rapid-onset shoulder and hip girdle pain and stiffness. Dr. Schreiber offers prompt diagnosis and expert steroid management.",
      },
      {
        name: "Giant Cell Arteritis",
        href: "/conditions/giant-cell-arteritis",
        description:
          "A large vessel vasculitis that can cause sudden sight loss and requires urgent specialist assessment and treatment. Closely related to polymyalgia rheumatica and managed with high-dose corticosteroids and, where appropriate, tocilizumab.",
      },
      {
        name: "Vasculitis",
        href: null,
        description:
          "Inflammation of the blood vessels, including ANCA-associated vasculitis and others. These conditions require prompt specialist assessment.",
      },
      {
        name: "Pulmonary Hypertension",
        href: "/conditions/pulmonary-hypertension",
        description:
          "Dr. Schreiber's research doctorate focused on pulmonary hypertension, and he has specialist expertise in its assessment and management — including in the context of connective tissue disease and as an isolated condition.",
      },
      {
        name: "Adolescent Rheumatology",
        href: null,
        description:
          "Rheumatological conditions in teenagers, including juvenile idiopathic arthritis and transition to adult care.",
      },
    ],
  },
];

export default function ConditionsPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-navy-950 text-white py-20">
        <div className="container-content">
          <p className="section-label !text-gold-400">Clinical Expertise</p>
          <h1 className="text-4xl md:text-5xl font-serif">Conditions Treated</h1>
          <div className="w-12 h-0.5 bg-gold-500 mt-5 mb-5" />
          <p className="text-navy-300 max-w-2xl leading-relaxed">
            Dr. Schreiber has the expertise and experience to diagnose and manage the full range of
            rheumatological conditions — from common to rare — in adults and adolescents.
          </p>
        </div>
      </section>

      {/* Conditions list */}
      <section className="section-padding bg-white">
        <div className="container-content space-y-16">
          {conditions.map((group) => (
            <div key={group.category}>
              <div className="flex items-center gap-4 mb-8">
                <div>
                  <p className="section-label">{group.category}</p>
                  <div className="w-8 h-0.5 bg-gold-500" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                {group.items.map((item) => (
                  <div
                    key={item.name}
                    className="p-6 border border-navy-100 hover:border-gold-300 hover:shadow-sm transition-all duration-200"
                  >
                    <h3 className="font-serif text-navy-900 text-base font-semibold mb-2">
                      {item.name}
                    </h3>
                    <p className="text-navy-500 text-sm leading-relaxed">{item.description}</p>
                    {item.href && (
                      <Link
                        href={item.href}
                        className="inline-block mt-3 text-sm text-gold-600 hover:text-gold-700 font-medium"
                      >
                        Learn more →
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-50 py-16">
        <div className="container-content text-center">
          <h2 className="section-title mb-4">Not sure if Dr. Schreiber can help?</h2>
          <p className="text-navy-500 max-w-lg mx-auto mb-8">
            If you have a rheumatological concern not listed here, please get in touch. Dr. Schreiber
            sees patients with the full spectrum of rheumatological presentations.
          </p>
          <Link href="/contact" className="btn-primary">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}

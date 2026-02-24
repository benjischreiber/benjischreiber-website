import Link from "next/link";
import type { Metadata } from "next";

const DOCTIFY_URL = "https://www.doctify.com/uk/specialist/dr-benji-schreiber";
const DOCTIFY_REVIEW_URL = "https://doctify.com/uk/review/lm68ii";
const GOOGLE_URL = "https://g.page/dr-benji-schreiber-consultant-r/review?nr";
const GOOGLE_READ_URL = "https://g.page/dr-benji-schreiber-consultant-r";

export const metadata: Metadata = {
  title: "Patient Reviews",
  description:
    "Read patient reviews and testimonials for Dr. Benji Schreiber, private consultant rheumatologist in North London.",
};

const reviews = [
  {
    text: "Dr Schreiber is a star. He has helped me immeasurably, taking the time to explain everything to me from the outset in a friendly and professional manner. I'm on a journey and have always felt that he has been on the journey with me.",
    author: "Darren P.",
    source: "Google",
  },
  {
    text: "He is attentive, asks questions, and carefully listens to replies in order to understand and correctly diagnose the cause of discomfort. He is committed to improving patients' health. His expertise and compassion made me feel reassured and confident that I am in good hands.",
    author: "Sylvia",
    source: "Google",
  },
  {
    text: "After almost one year of treatment Dr Schreiber has transformed my life. His calm, sympathetic approach to my health issues transcend all boundaries.",
    author: "David L.",
    source: "Google",
  },
  {
    text: "Dr Schreiber is an exceptionally thoughtful and caring doctor who inspires trust and confidence. He is a good communicator which to me, matters just as much as his clinical expertise.",
    author: "Sarah B.",
    source: "Google",
  },
  {
    text: "I had an excellent experience with Dr Schreiber. He was very understanding and took the time to really listen to my concerns. What stood out most was how clearly he explained things — breaking down complex medical terms into plain English.",
    author: "Jessica H.",
    source: "Google",
  },
  {
    text: "Dr. Schreiber is a rare find in the rheumatology field. He was the first doctor to take a thorough, holistic approach — and it made all the difference.",
    author: "Samujjal P.",
    source: "Google",
  },
];

function StarRating() {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className="w-4 h-4 text-gold-500"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function GoogleLogo() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}

export default function ReviewsPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-navy-950 text-white py-20">
        <div className="container-content">
          <p className="section-label !text-gold-400">What Patients Say</p>
          <h1 className="text-4xl md:text-5xl font-serif">Patient Reviews</h1>
          <div className="w-12 h-0.5 bg-gold-500 mt-5 mb-5" />
          <p className="text-navy-300 max-w-2xl leading-relaxed">
            Dr. Schreiber is rated 5.0 on Google across over 110 reviews. Below is a
            selection — read the full collection on Google or Doctify.
          </p>
        </div>
      </section>

      {/* Platform badges */}
      <section className="bg-white border-b border-navy-100 py-8">
        <div className="container-content">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            {/* Google badge */}
            <a
              href={GOOGLE_READ_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 px-6 py-4 border border-navy-200 hover:border-gold-400 hover:shadow-sm transition-all duration-200 bg-white"
            >
              <GoogleLogo />
              <div className="text-left">
                <p className="text-xs text-navy-400 uppercase tracking-widest font-semibold">Google Reviews</p>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="font-serif text-navy-900 text-lg font-semibold">5.0</span>
                  <div className="flex gap-0.5">
                    {[1,2,3,4,5].map(s => (
                      <svg key={s} className="w-3.5 h-3.5 text-gold-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-navy-400 text-xs">110+ reviews</span>
                </div>
              </div>
            </a>

            {/* Doctify badge */}
            <a
              href={DOCTIFY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 px-6 py-4 border border-navy-200 hover:border-gold-400 hover:shadow-sm transition-all duration-200 bg-white"
            >
              <svg className="w-4 h-4 text-gold-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <div className="text-left">
                <p className="text-xs text-navy-400 uppercase tracking-widest font-semibold">Doctify</p>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <div className="flex gap-0.5">
                    {[1,2,3,4,5].map(s => (
                      <svg key={s} className="w-3.5 h-3.5 text-gold-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-navy-400 text-xs">Verified reviews</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Reviews grid */}
      <section className="section-padding bg-white">
        <div className="container-content">
          <div className="text-center mb-12">
            <p className="section-label">Selected Reviews</p>
            <h2 className="section-title">From Google Reviews</h2>
            <div className="divider-gold mx-auto" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, i) => (
              <div
                key={i}
                className="flex flex-col bg-navy-50 border border-navy-100 p-7 hover:border-gold-300 hover:shadow-sm transition-all duration-200"
              >
                <div className="flex items-center justify-between mb-4">
                  <StarRating />
                  <GoogleLogo />
                </div>
                <blockquote className="flex-1 text-navy-600 text-sm leading-relaxed italic">
                  &ldquo;{review.text}&rdquo;
                </blockquote>
                <div className="mt-6 pt-4 border-t border-navy-200">
                  <p className="text-navy-800 text-sm font-medium">{review.author}</p>
                  <p className="text-navy-400 text-xs mt-0.5">Google Review</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a
              href={GOOGLE_READ_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Read all 110+ reviews on Google
            </a>
          </div>
        </div>
      </section>

      {/* Leave a review CTA */}
      <section className="bg-navy-50 py-12">
        <div className="container-content text-center max-w-2xl">
          <p className="section-label">Share Your Experience</p>
          <h2 className="font-serif text-navy-900 text-2xl mb-3">Been a patient of Dr. Schreiber?</h2>
          <p className="text-navy-500 text-sm mb-7">
            Your feedback helps others find the right care. We&apos;d be grateful if you left a review
            on Doctify or Google.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href={DOCTIFY_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Review on Doctify
            </a>
            <a
              href={GOOGLE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Review on Google
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-900 text-white py-16">
        <div className="container-content text-center">
          <h2 className="section-title !text-white mb-4">Experience the difference</h2>
          <p className="text-navy-300 max-w-lg mx-auto mb-8">
            Book a consultation with Dr. Schreiber and receive the expert, unhurried care that his
            patients consistently recommend.
          </p>
          <Link href="/contact" className="btn-primary">
            Book an Appointment
          </Link>
        </div>
      </section>
    </>
  );
}

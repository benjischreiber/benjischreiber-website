"use client";

import { useState, useEffect } from "react";

const reviews = [
  { text: "Dr Schreiber has transformed my life. His calm, sympathetic approach to my health issues transcend all boundaries.", author: "David L." },
  { text: "He is attentive, asks questions, and carefully listens. His expertise and compassion made me feel reassured and confident that I am in good hands.", author: "Sylvia" },
  { text: "Dr Schreiber is an exceptionally thoughtful and caring doctor who inspires trust and confidence. He is a good communicator which to me, matters just as much as his clinical expertise.", author: "Sarah B." },
  { text: "Dr Schreiber is a star. He has helped me immeasurably, taking the time to explain everything from the outset in a friendly and professional manner. I've always felt that he has been on the journey with me.", author: "Darren P." },
  { text: "I had an excellent experience. He was very understanding and took the time to really listen to my concerns. What stood out most was how clearly he explained things — breaking down complex medical terms into plain English.", author: "Jessica H." },
  { text: "Dr. Schreiber is a rare find in the rheumatology field. He was the first doctor to take a thorough, holistic approach — and it made all the difference.", author: "Samujjal P." },
  { text: "My appointment was a wonderful, validating experience. Dr Schreiber couldn't have been kinder. I left feeling that I had been listened to and considered.", author: "Hannah D." },
  { text: "Dr Schreiber is one of the most kind and caring doctors out there. He honours his duty to find the best quality of life for his patient by getting to the root of the issue.", author: "Milly Z." },
  { text: "Dr. Schreiber's erudition, clinical insight and reassuring manner has been invaluable to me. As a result of his knowledge and unfailing care I am now almost fully recovered.", author: "David W." },
  { text: "He treated my symptoms seriously and diagnosed the issue at the first consultation. He has been incredibly helpful and I would wholeheartedly recommend him.", author: "Brian G." },
  { text: "An extremely good and caring doctor. Sets a high standard. Exceptional administration staff, very very efficient and responsive.", author: "Charles T." },
  { text: "After suffering with swelling for months his treatment worked within a few days. I can wholeheartedly recommend him.", author: "Kastur V." },
  { text: "Dr Schreiber is an outstanding Physician, who listens carefully, carries out thorough examination. He answered all my concerns and questions very patiently. I am very satisfied with the treatment and advice I received.", author: "Ketan S." },
  { text: "Dr Schreiber provides excellent treatment for a range of autoimmune disorders. Testing was comprehensive, appointments well run. We saw significant improvement within the indicated timeframe.", author: "Jonathan B." },
  { text: "Dr. Schreiber is an amazing specialist, dedicated, thoughtful and compassionate. I was in such pain when I came to see him and he literally saved my life.", author: "Dorota B." },
  { text: "I have been a patient of Dr Benji Schreiber for over 3 years now and have always found him to have great understanding and patience. He gives a great amount of care and attention to each appointment.", author: "Simone H." },
  { text: "Dr Schreiber was great — attentive and communicative and made the effort to make me feel informed and involved in my condition and treatment.", author: "Imogen" },
  { text: "Dr Schreiber is fantastic! Patient and informative. Very knowledgeable and shows kindness and compassion. I would highly recommend him.", author: "Daisy P." },
  { text: "It was a pleasure to consult Dr Schreiber. He was charming and extremely thorough. I came away feeling very confident in his expertise.", author: "Valerie S." },
  { text: "Dr Schreiber was professional throughout, balancing well giving his expert opinion whilst taking consideration of my thoughts and experiences. I wouldn't hesitate to return.", author: "David G." },
  { text: "I found Dr Schreiber extremely thorough in investigating my arthritis and breathing difficulties. He was very engaging and approachable. His advice was practical and wise.", author: "Myra L." },
  { text: "Dr Schreiber is warm, attentive and very clear in his communications. He was always on time for my appointments — which is a big deal in a hospital!", author: "Adele C." },
  { text: "Dr Schreiber has been my rheumatologist for 8 years. He is a remarkable man: always prepared to take time and explore all the various aspects of my condition.", author: "Hilary C." },
  { text: "I found Dr Schreiber to be extremely professional, competent and attentive. I was always made very aware of all my options. A fantastic and knowledgeable specialist.", author: "Bianca W." },
];

export default function ReviewCarousel() {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % reviews.length);
        setFading(false);
      }, 400);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goTo = (index: number) => {
    if (index === current) return;
    setFading(true);
    setTimeout(() => {
      setCurrent(index);
      setFading(false);
    }, 400);
  };

  const review = reviews[current];

  return (
    <div className="max-w-2xl mx-auto text-center">
      {/* Quote */}
      <div
        className="transition-opacity duration-400"
        style={{ opacity: fading ? 0 : 1 }}
      >
        <blockquote className="text-navy-100 text-lg leading-relaxed italic mb-5">
          {"\u201C"}{review.text}{"\u201D"}
        </blockquote>
        <p className="text-gold-400 text-sm font-semibold tracking-wide">
          {review.author} &mdash; Google Review
        </p>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-8">
        {reviews.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Review ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              i === current
                ? "bg-gold-400 w-5 h-2"
                : "bg-navy-700 hover:bg-navy-500 w-2 h-2"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

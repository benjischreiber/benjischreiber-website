"use client";

import { useState } from "react";

type InquiryFormProps = {
  compact?: boolean;
  submitLabel?: string;
  successMessage?: string;
};

const FORM_ENDPOINT = "https://formspree.io/f/mkovpegz";

export default function InquiryForm({
  compact = false,
  submitLabel = "Send Enquiry",
  successMessage = "Thank you. Your enquiry has been sent and Olivia Skeet will respond within one working day.",
}: InquiryFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className={compact ? "space-y-4" : "space-y-5"} onSubmit={handleSubmit}>
      <div className={compact ? "grid grid-cols-1 gap-4 sm:grid-cols-2" : "grid gap-5 sm:grid-cols-2"}>
        <div>
          <label htmlFor={compact ? "home-firstName" : "firstName"} className="mb-2 block text-xs font-semibold uppercase tracking-widest text-navy-600">
            First Name *
          </label>
          <input
            type="text"
            id={compact ? "home-firstName" : "firstName"}
            name="firstName"
            required
            autoComplete="given-name"
            className="w-full rounded-sm border border-navy-200 bg-white px-4 py-3 text-sm text-navy-800 transition-colors focus:border-gold-400 focus:outline-none focus:ring-2 focus:ring-gold-100"
            placeholder="Jane"
          />
        </div>
        <div>
          <label htmlFor={compact ? "home-lastName" : "lastName"} className="mb-2 block text-xs font-semibold uppercase tracking-widest text-navy-600">
            Last Name *
          </label>
          <input
            type="text"
            id={compact ? "home-lastName" : "lastName"}
            name="lastName"
            required
            autoComplete="family-name"
            className="w-full rounded-sm border border-navy-200 bg-white px-4 py-3 text-sm text-navy-800 transition-colors focus:border-gold-400 focus:outline-none focus:ring-2 focus:ring-gold-100"
            placeholder="Smith"
          />
        </div>
      </div>

      <div>
        <label htmlFor={compact ? "home-email" : "email"} className="mb-2 block text-xs font-semibold uppercase tracking-widest text-navy-600">
          Email Address *
        </label>
        <input
          type="email"
          id={compact ? "home-email" : "email"}
          name="email"
          required
          autoComplete="email"
          className="w-full rounded-sm border border-navy-200 bg-white px-4 py-3 text-sm text-navy-800 transition-colors focus:border-gold-400 focus:outline-none focus:ring-2 focus:ring-gold-100"
          placeholder="jane@example.com"
        />
      </div>

      <div>
        <label htmlFor={compact ? "home-phone" : "phone"} className="mb-2 block text-xs font-semibold uppercase tracking-widest text-navy-600">
          Phone Number
        </label>
        <input
          type="tel"
          id={compact ? "home-phone" : "phone"}
          name="phone"
          autoComplete="tel"
          className="w-full rounded-sm border border-navy-200 bg-white px-4 py-3 text-sm text-navy-800 transition-colors focus:border-gold-400 focus:outline-none focus:ring-2 focus:ring-gold-100"
          placeholder={compact ? "07700 000000" : "+44 7700 000000"}
        />
      </div>

      <div>
        <label htmlFor={compact ? "home-message" : "message"} className="mb-2 block text-xs font-semibold uppercase tracking-widest text-navy-600">
          {compact ? "Reason / Symptoms *" : "Reason for Appointment / Message *"}
        </label>
        <textarea
          id={compact ? "home-message" : "message"}
          name="message"
          required
          rows={compact ? 3 : 5}
          className="w-full resize-none rounded-sm border border-navy-200 bg-white px-4 py-3 text-sm text-navy-800 transition-colors focus:border-gold-400 focus:outline-none focus:ring-2 focus:ring-gold-100"
          placeholder={
            compact
              ? "Please briefly describe your symptoms or reason for appointment."
              : "Please briefly describe your symptoms or the reason you would like to see Dr. Schreiber."
          }
        />
      </div>

      <input type="hidden" name="source" value={compact ? "homepage" : "contact-page"} />

      <div className={compact ? "space-y-2 text-center text-xs leading-relaxed text-navy-400" : "space-y-1 text-xs leading-relaxed text-navy-400"}>
        <p>* Required fields.</p>
        <p>We respond to all enquiries within one working day.</p>
        <p>All enquiries are confidential and handled securely.</p>
      </div>

      <div className={compact ? "space-y-3" : "space-y-4"}>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`btn-primary ${compact ? "w-full text-center" : "w-full sm:w-auto"} ${isSubmitting ? "cursor-wait opacity-70" : ""}`}
        >
          {isSubmitting ? "Sending..." : submitLabel}
        </button>

        <div aria-live="polite">
          {status === "success" ? (
            <p className="border border-gold-200 bg-gold-50 px-4 py-3 text-sm text-navy-700">
              {successMessage}
            </p>
          ) : null}
          {status === "error" ? (
            <p className="border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              There was a problem sending your enquiry. Please try again, or call 020 8458 6775.
            </p>
          ) : null}
        </div>
      </div>
    </form>
  );
}

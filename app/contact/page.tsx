"use client";

import ScrollFadeIn from "@/components/ScrollFadeIn";
import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const body = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      subject: (form.elements.namedItem("subject") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    setLoading(false);
    setSubmitted(true);
  }

  return (
    <main className="flex w-full flex-col pb-24 pt-16 md:pt-24">

      {/* ── Header ── */}
      <ScrollFadeIn className="mb-20 border-b border-[#001F3F] pb-16 md:mb-28 md:pb-20">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-[#001F3F]">
          Contact
        </p>
        <h1 className="max-w-3xl font-sans text-2xl font-semibold leading-tight tracking-[0.1em] uppercase text-[#001F3F] md:text-3xl">
          Get in Touch
        </h1>
      </ScrollFadeIn>

      <ScrollFadeIn className="grid grid-cols-1 gap-20 md:grid-cols-2 md:gap-24" delay={100}>

        {/* ── Info ── */}
        <div className="space-y-12">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#001F3F]">
              General Enquiries
            </p>
            <a
              href="mailto:valentepariscontact@gmail.com"
              className="block text-sm text-[#001F3F] underline underline-offset-4 hover:opacity-60 transition-opacity"
            >
              valentepariscontact@gmail.com
            </a>
          </div>

          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#001F3F]">
              Instagram
            </p>
            <a
              href="https://instagram.com/valentemodels"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm text-[#001F3F] underline underline-offset-4 hover:opacity-60 transition-opacity"
            >
              @valentemodels
            </a>
          </div>

          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#001F3F]">
              Applications
            </p>
            <p className="text-sm leading-7 text-[#001F3F]">
              If you would like to be considered for representation, please use our{" "}
              <a href="/#get-scouted" className="underline underline-offset-4 hover:opacity-60 transition-opacity">
                application form
              </a>
              . We do not accept applications by email.
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#001F3F]">
              Location
            </p>
            <p className="text-sm leading-7 text-[#001F3F]">
              Paris, France
            </p>
          </div>
        </div>

        {/* ── Form ── */}
        {submitted ? (
          <div className="flex items-start pt-2">
            <p className="text-sm leading-8 text-[#001F3F]">
              Your message has been sent. We will get back to you as soon as possible.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-[#001F3F]">
                  Name
                </label>
                <input
                  name="name"
                  type="text"
                  required
                  className="w-full border-b border-[#001F3F] bg-transparent py-3 text-sm text-[#001F3F] outline-none placeholder-[#001F3F]/30 focus:border-[#001F3F] transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-[#001F3F]">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full border-b border-[#001F3F] bg-transparent py-3 text-sm text-[#001F3F] outline-none placeholder-[#001F3F]/30 focus:border-[#001F3F] transition-colors"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-[#001F3F]">
                Subject
              </label>
              <input
                name="subject"
                type="text"
                required
                className="w-full border-b border-[#001F3F] bg-transparent py-3 text-sm text-[#001F3F] outline-none placeholder-[#001F3F]/30 focus:border-[#001F3F] transition-colors"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-[#001F3F]">
                Message
              </label>
              <textarea
                name="message"
                rows={6}
                required
                className="w-full border-b border-[#001F3F] bg-transparent py-3 text-sm text-[#001F3F] outline-none placeholder-[#001F3F]/30 focus:border-[#001F3F] transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="border border-[#001F3F] px-10 py-4 text-[10px] uppercase tracking-[0.3em] text-[#001F3F] transition-all duration-500 hover:bg-[#001F3F] hover:text-white disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}
      </ScrollFadeIn>
    </main>
  );
}

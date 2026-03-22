import ScrollFadeIn from "@/components/ScrollFadeIn";

export default function EthicsPage() {
  return (
    <main className="flex w-full flex-col pb-24 pt-16 md:pt-24">

      {/* ── Header ── */}
      <ScrollFadeIn className="mb-20 border-b border-[#001F3F] pb-16 md:mb-28 md:pb-20">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-[#001F3F]">
          Ethics
        </p>
        <h1 className="max-w-3xl font-sans text-2xl font-semibold leading-tight tracking-[0.1em] uppercase text-[#001F3F] md:text-3xl">
          Our Code of Ethics
        </h1>
        <p className="mt-6 max-w-xl text-sm leading-8 text-[#001F3F]">
          At Valenté, our commitments are not contractual obligations — they are the
          principles we hold ourselves to every day, without exception.
        </p>
      </ScrollFadeIn>

      <div className="mx-auto w-full max-w-3xl space-y-20">

        <ScrollFadeIn className="space-y-6" delay={100}>
          <h2 className="text-xs font-semibold uppercase tracking-[0.3em] text-[#001F3F]">
            Respect & Dignity
          </h2>
          <p className="text-sm leading-8 text-[#001F3F]">
            Every person we represent is treated with full respect and dignity at all times.
            We do not tolerate any form of discrimination, harassment, or abuse — whether
            from clients, partners, or within our own team. Any such conduct results in the
            immediate termination of our working relationship.
          </p>
        </ScrollFadeIn>

        <div className="border-t border-[#001F3F]/10" />

        <ScrollFadeIn className="space-y-6" delay={110}>
          <h2 className="text-xs font-semibold uppercase tracking-[0.3em] text-[#001F3F]">
            Physical & Mental Wellbeing
          </h2>
          <p className="text-sm leading-8 text-[#001F3F]">
            We will never ask our talent to alter their appearance, weight, or body in ways
            that are harmful or that they are not comfortable with. We actively oppose the
            normalization of unhealthy standards in the fashion industry and work only with
            clients who share this commitment.
          </p>
        </ScrollFadeIn>

        <div className="border-t border-[#001F3F]/10" />

        <ScrollFadeIn className="space-y-6" delay={120}>
          <h2 className="text-xs font-semibold uppercase tracking-[0.3em] text-[#001F3F]">
            Transparency in All Matters
          </h2>
          <p className="text-sm leading-8 text-[#001F3F]">
            Our talent will always know exactly what they are being booked for, what they
            will be paid, and what the terms of any agreement are — before they accept. We
            do not hide fees, commissions, or conditions in fine print. Everything is
            communicated clearly and in advance.
          </p>
        </ScrollFadeIn>

        <div className="border-t border-[#001F3F]/10" />

        <ScrollFadeIn className="space-y-6" delay={130}>
          <h2 className="text-xs font-semibold uppercase tracking-[0.3em] text-[#001F3F]">
            The Right to Decline
          </h2>
          <p className="text-sm leading-8 text-[#001F3F]">
            Our talent always has the right to decline a booking, a job, or any situation
            in which they feel uncomfortable — without fear of consequence or pressure from
            us. We will never penalize a model or talent for exercising this right.
          </p>
        </ScrollFadeIn>

        <div className="border-t border-[#001F3F]/10" />

        <ScrollFadeIn className="space-y-6" delay={140}>
          <h2 className="text-xs font-semibold uppercase tracking-[0.3em] text-[#001F3F]">
            Protection of Minors
          </h2>
          <p className="text-sm leading-8 text-[#001F3F]">
            Valenté Models accepts applications from individuals aged 16 and above. All
            models and talent under the age of 18 are represented exclusively under the
            authority and written consent of a parent or legal guardian, who is involved
            in and informed of every professional engagement. We apply strict protocols
            to ensure the safety, comfort, and wellbeing of all minors we work with, at
            every stage of their career.
          </p>
        </ScrollFadeIn>

        <div className="border-t border-[#001F3F]/10" />

        <ScrollFadeIn className="space-y-6" delay={150}>
          <h2 className="text-xs font-semibold uppercase tracking-[0.3em] text-[#001F3F]">
            Client Standards
          </h2>
          <p className="text-sm leading-8 text-[#001F3F]">
            We are selective about the clients and projects we accept. We do not work with
            clients whose practices, values, or working conditions conflict with the
            wellbeing of our talent. A booking is only worth taking if it is taken in the
            right conditions.
          </p>
        </ScrollFadeIn>

        <div className="border-t border-[#001F3F]/10" />

        <ScrollFadeIn className="space-y-6" delay={160}>
          <h2 className="text-xs font-semibold uppercase tracking-[0.3em] text-[#001F3F]">
            Reporting & Accountability
          </h2>
          <p className="text-sm leading-8 text-[#001F3F]">
            Any person represented by Valenté who experiences a situation that contradicts
            these principles is encouraged to report it to us directly and confidentially.
            We take every report seriously and act on it. We also hold ourselves accountable
            to the same standards we set for our partners.
          </p>
          <p className="text-sm leading-8 text-[#001F3F]">
            Contact:{" "}
            <a href="mailto:contact@valentemodels.com" className="underline underline-offset-4">
              contact@valentemodels.com
            </a>
          </p>
        </ScrollFadeIn>

      </div>
    </main>
  );
}

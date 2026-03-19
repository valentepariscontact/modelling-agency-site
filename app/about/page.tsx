import ScrollFadeIn from "@/components/ScrollFadeIn";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="flex w-full flex-col pb-24 pt-16 md:pt-24">

      {/* ── Header ── */}
      <ScrollFadeIn className="mb-20 border-b border-[#001F3F]/10 pb-16 md:mb-28 md:pb-20">
        <p className="mb-5 text-[0.58rem] uppercase tracking-[0.5em] text-[#001F3F]/40">
          About
        </p>
        <h1 className="max-w-3xl font-brand text-5xl font-light leading-tight text-[#001F3F] md:text-7xl">
          A different kind of agency.
        </h1>
      </ScrollFadeIn>

      {/* ── Story ── */}
      <ScrollFadeIn className="mb-24 grid grid-cols-1 gap-16 md:mb-32 md:grid-cols-2 md:gap-24" delay={100}>
        <div>
          <p className="mb-8 text-[0.58rem] uppercase tracking-[0.4em] text-[#001F3F]/40">
            Who We Are
          </p>
          <p className="text-sm leading-8 text-[#001F3F]/70">
            Valenté was founded in Paris in 2025. We represent a carefully selected
            roster of models and talent across runway, editorial, and campaign work.
          </p>
        </div>
        <div>
          <p className="mb-8 text-[0.58rem] uppercase tracking-[0.4em] text-[#001F3F]/40">
            Why We Exist
          </p>
          <p className="text-sm leading-8 text-[#001F3F]/70">
            The fashion industry asks a great deal from the people who power it,
            while offering little in return. We built Valenté to change that — with
            honest representation, fair practices, and genuine long-term investment
            in every person we work with.
          </p>
        </div>
      </ScrollFadeIn>

      {/* ── Values ── */}
      <ScrollFadeIn className="mb-24 md:mb-32" delay={140}>
        <p className="mb-12 text-[0.58rem] uppercase tracking-[0.4em] text-[#001F3F]/40">
          Our Commitments
        </p>
        <div className="grid grid-cols-1 divide-y divide-[#001F3F]/10 border-y border-[#001F3F]/10 md:grid-cols-3 md:divide-x md:divide-y-0">
          {[
            {
              title: "Wellbeing First",
              body: "The mental and physical health of our talent is not secondary to business. It is the foundation of everything we do.",
            },
            {
              title: "Long-Term Careers",
              body: "We are not interested in short-term volume. We build carefully, with every decision made in the interest of sustainable careers.",
            },
            {
              title: "Full Transparency",
              body: "Every contract, every fee, every opportunity is discussed openly. Our talent understands exactly what they are agreeing to.",
            },
          ].map((v) => (
            <div key={v.title} className="py-10 md:px-10 md:first:pl-0 md:last:pr-0">
              <h3 className="mb-5 text-[0.65rem] uppercase tracking-[0.3em] text-[#001F3F]">
                {v.title}
              </h3>
              <p className="text-sm leading-7 text-[#001F3F]/55">{v.body}</p>
            </div>
          ))}
        </div>
      </ScrollFadeIn>

      {/* ── Statement ── */}
      <ScrollFadeIn className="mb-24 border-l-2 border-[#001F3F] pl-8 md:mb-32 md:pl-12" delay={160}>
        <p className="max-w-2xl text-lg font-light leading-9 text-[#001F3F] md:text-2xl md:leading-10">
          We believe the industry works better when agencies take responsibility
          for the people they represent — not just the bookings they generate.
        </p>
      </ScrollFadeIn>

      {/* ── CTA ── */}
      <ScrollFadeIn className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8" delay={180}>
        <Link
          href="/#get-scouted"
          className="inline-block border border-[#001F3F] px-10 py-4 text-[10px] uppercase tracking-[0.3em] text-[#001F3F] transition-all duration-500 hover:bg-[#001F3F] hover:text-white"
        >
          Join Us
        </Link>
        <Link
          href="/contact"
          className="text-[10px] uppercase tracking-[0.3em] text-[#001F3F]/40 underline underline-offset-4 hover:text-[#001F3F] transition-colors"
        >
          Contact
        </Link>
      </ScrollFadeIn>

    </main>
  );
}

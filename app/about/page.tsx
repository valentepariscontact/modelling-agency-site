import ScrollFadeIn from "@/components/ScrollFadeIn";

export default function AboutPage() {
  return (
    <main className="flex w-full flex-col gap-0 pb-16 pt-0">

      {/* ── Hero ── */}
      <ScrollFadeIn className="relative left-1/2 right-1/2 -mx-[50vw] w-screen">
        <div
          className="h-[70vh] min-h-[480px] w-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=2400&q=80')",
          }}
          aria-label="Valenté Paris"
          role="img"
        >
          <div className="flex h-full w-full flex-col items-center justify-end bg-gradient-to-t from-black/60 via-black/10 to-transparent pb-16 text-center">
            <p className="mb-3 text-[0.6rem] uppercase tracking-[0.5em] text-white/70">
              Paris, 2025
            </p>
            <h1 className="font-brand text-5xl italic text-white md:text-8xl">
              Valenté
            </h1>
          </div>
        </div>
      </ScrollFadeIn>

      {/* ── Intro ── */}
      <ScrollFadeIn className="mx-auto max-w-3xl px-4 py-20 text-center" delay={100}>
        <p className="mb-6 text-[0.62rem] uppercase tracking-[0.4em] text-[#001F3F]/50">
          About
        </p>
        <p className="font-brand text-3xl font-light leading-relaxed text-[#001F3F] md:text-4xl">
          "An agency built on care, in an industry that often forgets to."
        </p>
      </ScrollFadeIn>

      {/* ── Story + Image ── */}
      <ScrollFadeIn className="relative left-1/2 right-1/2 -mx-[50vw] w-screen bg-[#F9F9F9]" delay={120}>
        <div className="mx-auto grid max-w-[1560px] grid-cols-1 gap-0 md:grid-cols-2">
          <div className="flex flex-col justify-center px-8 py-16 md:px-16 md:py-24">
            <p className="mb-6 text-[0.62rem] uppercase tracking-[0.4em] text-[#001F3F]/40">
              Our Story
            </p>
            <h2 className="mb-8 font-brand text-4xl font-light leading-tight text-[#001F3F] md:text-5xl">
              Founded in Paris.<br />Built differently.
            </h2>
            <div className="space-y-5 text-sm leading-8 text-[#001F3F]/70">
              <p>
                Valenté was born in 2025 from a simple conviction — that the fashion
                industry, for all its beauty, has long failed the people who make it
                possible. We set out to change that, one model at a time.
              </p>
              <p>
                Based in Paris, we represent a carefully selected roster of models
                and talent. We believe in long-term development over short-term gain,
                in honest relationships over transactional ones, and in protecting
                the people we work with at every stage of their career.
              </p>
              <p>
                In an industry that moves fast and asks a lot, we slow down enough
                to do it right.
              </p>
            </div>
          </div>
          <div
            className="min-h-[480px] bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=1600&q=80')",
            }}
          />
        </div>
      </ScrollFadeIn>

      {/* ── Values ── */}
      <ScrollFadeIn className="mx-auto w-full max-w-[1560px] px-4 py-20 md:px-8 lg:px-10" delay={140}>
        <p className="mb-12 text-center text-[0.62rem] uppercase tracking-[0.4em] text-[#001F3F]/40">
          What We Stand For
        </p>
        <div className="grid grid-cols-1 gap-px border border-[#001F3F]/10 md:grid-cols-3">
          {[
            {
              title: "Care First",
              body: "We prioritize the wellbeing of our talent above all else. Mental health, fair conditions, and honest communication are non-negotiable.",
            },
            {
              title: "Long-Term Vision",
              body: "We build careers, not moments. Every decision we make is guided by what's best for our talent over the long run.",
            },
            {
              title: "Radical Transparency",
              body: "No hidden fees, no fine print, no surprises. We believe our talent deserves to understand exactly how this industry works.",
            },
          ].map((v) => (
            <div key={v.title} className="flex flex-col gap-4 p-8 md:p-10">
              <h3 className="text-[0.7rem] uppercase tracking-[0.3em] text-[#001F3F]">
                {v.title}
              </h3>
              <p className="text-sm leading-7 text-[#001F3F]/60">{v.body}</p>
            </div>
          ))}
        </div>
      </ScrollFadeIn>

      {/* ── Image grid ── */}
      <ScrollFadeIn className="relative left-1/2 right-1/2 -mx-[50vw] w-screen" delay={160}>
        <div className="grid grid-cols-2 md:grid-cols-4">
          {[
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=80",
          ].map((url, i) => (
            <div
              key={i}
              className="aspect-[3/4] bg-cover bg-center grayscale transition-all duration-700 hover:grayscale-0"
              style={{ backgroundImage: `url('${url}')` }}
            />
          ))}
        </div>
      </ScrollFadeIn>

      {/* ── Closing statement ── */}
      <ScrollFadeIn className="mx-auto max-w-2xl px-4 py-24 text-center" delay={180}>
        <p className="text-sm leading-8 text-[#001F3F]/60 md:text-base md:leading-9">
          If you are a model or talent looking for representation that actually
          looks out for you — or a client looking for an agency that takes quality
          and ethics seriously — we would love to hear from you.
        </p>
        <div className="mt-10 flex flex-col items-center gap-3">
          <a
            href="/apply"
            className="border border-[#001F3F] px-10 py-4 text-[10px] uppercase tracking-[0.3em] text-[#001F3F] transition-all duration-500 hover:bg-[#001F3F] hover:text-white"
          >
            Apply to Join
          </a>
          <a
            href="/contact"
            className="text-[10px] uppercase tracking-[0.3em] text-[#001F3F]/40 underline underline-offset-4 hover:text-[#001F3F]"
          >
            Contact Us
          </a>
        </div>
      </ScrollFadeIn>

    </main>
  );
}

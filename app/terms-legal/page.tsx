import ScrollFadeIn from "@/components/ScrollFadeIn";

const blocks = [
  {
    title: "Bookings & Representation",
    text: "All booking requests are subject to written confirmation, talent availability, and agreed scope of services.",
  },
  {
    title: "Usage Rights",
    text: "Image and motion usage rights must be defined in writing before publication, distribution, or paid media use.",
  },
  {
    title: "Privacy",
    text: "Personal information submitted through Valente Paris channels is processed in accordance with applicable data protection law.",
  },
  {
    title: "Jurisdiction",
    text: "Unless otherwise agreed, contractual matters are administered from Paris under applicable French law.",
  },
];

export default function TermsLegalPage() {
  return (
    <main className="flex w-full flex-col gap-10 pb-16 pt-8 md:gap-12 md:pb-20 md:pt-12">
      <ScrollFadeIn className="space-y-4 border-b border-black pb-8 md:pb-10">
        <p className="text-xs uppercase tracking-[0.28em]">Policy</p>
        <h1 className="text-4xl md:text-7xl">Terms & Legal</h1>
      </ScrollFadeIn>

      <ScrollFadeIn className="grid grid-cols-1 gap-4 md:grid-cols-2" delay={120}>
        {blocks.map((block) => (
          <article key={block.title} className="space-y-3 border border-black p-6">
            <h2 className="text-2xl md:text-3xl">{block.title}</h2>
            <p className="text-sm leading-7 uppercase tracking-[0.08em]">{block.text}</p>
          </article>
        ))}
      </ScrollFadeIn>
    </main>
  );
}

import ScrollFadeIn from "@/components/ScrollFadeIn";

const principles = [
  "Talent welfare and safe working conditions",
  "Zero tolerance for harassment, discrimination, or coercion",
  "Transparent contracts and responsible scheduling",
  "Inclusive representation and respectful communication",
  "Clear escalation process for concerns raised by talent or clients",
  "Collaborative standards that protect physical and mental wellbeing",
];

export default function EthicsCodePage() {
  return (
    <main className="flex w-full flex-col gap-10 pb-16 pt-8 md:gap-12 md:pb-20 md:pt-12">
      <ScrollFadeIn className="space-y-4 border-b border-black pb-8 md:pb-10">
        <p className="text-xs uppercase tracking-[0.28em]">Policy</p>
        <h1 className="text-4xl md:text-7xl">Ethics Code</h1>
      </ScrollFadeIn>

      <ScrollFadeIn className="max-w-5xl space-y-5" delay={120}>
        {principles.map((item) => (
          <p
            key={item}
            className="border-b border-black/20 pb-4 text-sm uppercase tracking-[0.1em] md:text-base"
          >
            {item}
          </p>
        ))}
      </ScrollFadeIn>
    </main>
  );
}

import ModelCard from "@/components/ModelCard";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import { models } from "@/lib/models";

type Division = "women" | "men" | "non-binary";

type DivisionRosterProps = {
  division: Division;
  title: string;
  intro: string;
  heroImage: string;
};

export default function DivisionRoster({
  division,
  title,
  intro,
  heroImage,
}: DivisionRosterProps) {
  const divisionModels = models.filter((model) => model.division === division);

  return (
    <main className="flex w-full flex-col gap-10 pb-16 pt-8 md:gap-12 md:pb-20 md:pt-12">
      <ScrollFadeIn className="relative left-1/2 right-1/2 -mx-[50vw] w-screen">
        <div
          className="h-[58vh] min-h-[360px] w-full border-y border-black bg-cover bg-center grayscale"
          style={{ backgroundImage: `url('${heroImage}')` }}
          role="img"
          aria-label={`${title} division editorial hero`}
        />
      </ScrollFadeIn>

      <ScrollFadeIn className="space-y-4 border-b border-black pb-8 md:pb-10" delay={100}>
        <p className="text-xs uppercase tracking-[0.28em]">Paris Division</p>
        <h1 className="text-4xl md:text-7xl">{title}</h1>
        <p className="max-w-3xl text-base leading-8 md:text-lg">{intro}</p>
      </ScrollFadeIn>

      <ScrollFadeIn
        className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-3"
        delay={160}
      >
        {divisionModels.map((model) => (
          <ModelCard key={model.slug} model={model} />
        ))}
      </ScrollFadeIn>
    </main>
  );
}

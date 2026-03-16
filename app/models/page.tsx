import ModelCard from "@/components/ModelCard";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import { models } from "@/lib/models";

type ModelsPageProps = {
  searchParams: Promise<{ q?: string }>;
};

export default async function ModelsPage({ searchParams }: ModelsPageProps) {
  const { q } = await searchParams;
  const query = q?.trim().toLowerCase() ?? "";
  const filteredModels = query
    ? models.filter((model) => model.name.toLowerCase().includes(query))
    : models;

  return (
    <main className="flex w-full flex-col gap-8 pb-16 pt-8 md:gap-10 md:pb-20 md:pt-12">
      <ScrollFadeIn className="space-y-4 border-b border-black pb-7 md:pb-8">
        <p className="text-xs uppercase tracking-[0.28em]">Roster</p>
        <h1 className="text-4xl md:text-7xl">Models</h1>
        {query && (
          <p className="text-[0.62rem] uppercase tracking-[0.2em] text-black/60">
            Search: {query}
          </p>
        )}
      </ScrollFadeIn>

      <ScrollFadeIn
        className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-3"
        delay={120}
      >
        {filteredModels.map((model) => (
          <ModelCard key={model.slug} model={model} />
        ))}
      </ScrollFadeIn>
      {filteredModels.length === 0 && (
        <ScrollFadeIn className="border border-black p-6 text-xs uppercase tracking-[0.18em]" delay={180}>
          No matching profiles in Paris roster.
        </ScrollFadeIn>
      )}
    </main>
  );
}

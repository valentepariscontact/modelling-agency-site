import Link from "next/link";
import ScrollFadeIn from "@/components/ScrollFadeIn";

const talentAreas = [
  {
    title: "Creative Direction",
    description:
      "Image-makers and visual directors shaping campaign narratives from casting to final delivery.",
  },
  {
    title: "Content & Film",
    description:
      "On-camera and cross-platform performers represented for branded and editorial film production.",
  },
  {
    title: "Styling & Beauty",
    description:
      "Fashion and beauty specialists available for publication, commerce, and global press work.",
  },
];

export default function TalentPage() {
  return (
    <main className="flex w-full flex-col gap-10 pb-16 pt-8 md:gap-12 md:pb-20 md:pt-12">
      <ScrollFadeIn className="space-y-4 border-b border-black pb-8">
        <p className="text-xs uppercase tracking-[0.28em]">Department</p>
        <h1 className="text-4xl md:text-7xl">Talent</h1>
        <p className="max-w-3xl text-base leading-8 md:text-lg">
          Valente Paris represents multidisciplinary talent working across fashion,
          luxury, publishing, and moving image.
        </p>
      </ScrollFadeIn>

      <ScrollFadeIn className="grid grid-cols-1 gap-5 md:grid-cols-3" delay={120}>
        {talentAreas.map((area) => (
          <article key={area.title} className="space-y-4 border border-black p-6">
            <h2 className="text-2xl md:text-3xl">{area.title}</h2>
            <p className="text-sm leading-7 uppercase tracking-[0.08em]">
              {area.description}
            </p>
          </article>
        ))}
      </ScrollFadeIn>

      <ScrollFadeIn className="border-t border-black pt-8" delay={200}>
        <Link
          href="/contact"
          className="inline-flex border border-black bg-black px-5 py-3 text-xs uppercase tracking-[0.16em] text-white transition-opacity hover:opacity-85"
        >
          Request Portfolio
        </Link>
      </ScrollFadeIn>
    </main>
  );
}

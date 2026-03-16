import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import { models } from "@/lib/models";

type ModelPageProps = {
  params: Promise<{ slug: string }>;
};

const statOrder: Array<keyof (typeof models)[number]["stats"]> = [
  "height",
  "bust",
  "waist",
  "hips",
  "shoes",
];

export async function generateStaticParams() {
  return models.map((model) => ({ slug: model.slug }));
}

export default async function ModelProfilePage({ params }: ModelPageProps) {
  const { slug } = await params;
  const model = models.find((entry) => entry.slug === slug);

  if (!model) {
    notFound();
  }

  return (
    <main className="flex w-full flex-col gap-12 pb-12 pt-8 md:gap-14 md:pb-16 md:pt-12">
      <ScrollFadeIn className="relative left-1/2 right-1/2 -mx-[50vw] w-screen">
        <div className="relative h-[62vh] min-h-[420px] w-full overflow-hidden border-y border-black">
          <Image
            src={model.hero}
            alt={`${model.name} hero portrait`}
            fill
            priority
            sizes="100vw"
            className="object-cover grayscale"
          />
        </div>
      </ScrollFadeIn>

      <ScrollFadeIn
        className="grid gap-8 border-b border-black pb-10 md:grid-cols-12 md:gap-10 md:pb-12"
        delay={120}
      >
        <div className="md:col-span-7">
          <p className="mb-4 text-xs uppercase tracking-[0.24em]">Model Profile</p>
          <h1 className="font-serif text-4xl md:text-7xl">{model.name}</h1>
        </div>

        <div className="md:col-span-5">
          <h2 className="mb-4 text-xs uppercase tracking-[0.24em]">Stats</h2>
          <dl className="grid grid-cols-2 gap-y-3 text-sm uppercase tracking-[0.1em]">
            {statOrder.map((stat) => (
              <div key={stat} className="contents">
                <dt className="text-black/60">{stat}</dt>
                <dd>{model.stats[stat]}</dd>
              </div>
            ))}
          </dl>
        </div>
      </ScrollFadeIn>

      <ScrollFadeIn className="space-y-5 md:space-y-6" delay={180}>
        <h2 className="font-serif text-3xl leading-none md:text-4xl">Gallery</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
          {model.gallery.map((image, index) => (
            <div
              key={image}
              className={
                index === 0
                  ? "relative h-[28rem] overflow-hidden border border-black md:col-span-8"
                  : "relative h-[28rem] overflow-hidden border border-black md:col-span-4"
              }
            >
              <Image
                src={image}
                alt={`${model.name} gallery image ${index + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover grayscale"
              />
            </div>
          ))}
        </div>
      </ScrollFadeIn>

      <ScrollFadeIn className="space-y-3 border-t border-black pt-7 md:pt-8" delay={240}>
        <h2 className="text-xs uppercase tracking-[0.24em]">Social</h2>
        <div className="flex flex-wrap items-center gap-5 text-sm uppercase tracking-[0.14em]">
          <Link
            href={model.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="border-b border-black pb-1 leading-none transition-opacity hover:opacity-60"
          >
            Instagram
          </Link>
          <Link
            href={model.social.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            className="border-b border-black pb-1 leading-none transition-opacity hover:opacity-60"
          >
            TikTok
          </Link>
        </div>
        <Link
          href="/apply"
          className="inline-flex items-center border border-black bg-black px-5 py-3 text-xs uppercase tracking-[0.18em] text-white transition-opacity hover:opacity-85"
        >
          Booking Request
        </Link>
      </ScrollFadeIn>
    </main>
  );
}

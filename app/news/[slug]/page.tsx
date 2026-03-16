import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import { newsStories } from "@/lib/news";

type NewsPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return newsStories.map((story) => ({ slug: story.slug }));
}

export default async function NewsDetailPage({ params }: NewsPageProps) {
  const { slug } = await params;
  const story = newsStories.find((item) => item.slug === slug);

  if (!story) notFound();

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-10 pb-16 pt-8 md:gap-12 md:pb-20 md:pt-12">
      <ScrollFadeIn className="space-y-4 border-b border-black pb-8 md:pb-10">
        <p className="text-[0.62rem] uppercase tracking-[0.2em] text-black/60">
          {story.category} · {story.date}
        </p>
        <h1 className="text-4xl md:text-7xl">{story.title}</h1>
      </ScrollFadeIn>

      <ScrollFadeIn className="relative h-[28rem] overflow-hidden border border-black" delay={100}>
        <Image
          src={story.image}
          alt={story.title}
          fill
          sizes="(max-width: 1200px) 100vw, 1200px"
          className="object-cover"
        />
      </ScrollFadeIn>

      <ScrollFadeIn className="space-y-6 text-base leading-8 md:text-lg md:leading-9" delay={160}>
        {story.content.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </ScrollFadeIn>

      <ScrollFadeIn className="border-t border-black pt-8" delay={220}>
        <Link
          href="/news"
          className="inline-flex border-b border-black pb-1 text-xs uppercase tracking-[0.18em]"
        >
          Back To Journal
        </Link>
      </ScrollFadeIn>
    </main>
  );
}

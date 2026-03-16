import Image from "next/image";
import Link from "next/link";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import { newsStories } from "@/lib/news";

export default function NewsPage() {
  const [featured, ...stories] = newsStories;

  return (
    <main className="flex w-full flex-col gap-10 pb-16 pt-8 md:gap-12 md:pb-20 md:pt-12">
      <ScrollFadeIn className="space-y-4 border-b border-black pb-8 md:pb-10">
        <p className="text-xs uppercase tracking-[0.28em]">Journal</p>
        <h1 className="text-4xl md:text-7xl">News</h1>
        <p className="max-w-3xl text-base leading-8 md:text-lg">
          A Paris journal covering agency updates, editorial highlights, and runway
          casting notes.
        </p>
      </ScrollFadeIn>

      <ScrollFadeIn className="grid gap-6 border-b border-black pb-10 md:grid-cols-12 md:pb-12" delay={100}>
        <Link href={`/news/${featured.slug}`} className="group md:col-span-8">
          <div className="relative h-[26rem] overflow-hidden border border-black">
            <Image
              src={featured.image}
              alt={featured.title}
              fill
              sizes="(max-width: 768px) 100vw, 66vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </Link>
        <div className="space-y-4 md:col-span-4">
          <p className="text-[0.62rem] uppercase tracking-[0.2em] text-black/60">
            {featured.category} · {featured.date}
          </p>
          <h2 className="text-3xl md:text-4xl">{featured.title}</h2>
          <p className="text-sm leading-7 uppercase tracking-[0.08em]">
            {featured.excerpt}
          </p>
          <Link
            href={`/news/${featured.slug}`}
            className="inline-flex border border-black px-5 py-3 text-xs uppercase tracking-[0.18em] transition-colors hover:bg-black hover:text-white"
          >
            Read Story
          </Link>
        </div>
      </ScrollFadeIn>

      <ScrollFadeIn className="grid grid-cols-1 gap-6 md:grid-cols-2" delay={160}>
        {stories.map((story) => (
          <article key={story.slug} className="space-y-4 border border-black p-6">
            <p className="text-[0.62rem] uppercase tracking-[0.2em] text-black/60">
              {story.category} · {story.date}
            </p>
            <h3 className="text-2xl md:text-3xl">{story.title}</h3>
            <p className="text-sm leading-7 uppercase tracking-[0.08em]">
              {story.excerpt}
            </p>
            <Link
              href={`/news/${story.slug}`}
              className="inline-flex border-b border-black pb-1 text-xs uppercase tracking-[0.18em]"
            >
              Continue
            </Link>
          </article>
        ))}
      </ScrollFadeIn>
    </main>
  );
}

type HeroVideoProps = {
  title: string;
  subtitle?: string;
  videoUrl?: string;
};

export default function HeroVideo({ title, subtitle }: HeroVideoProps) {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-black">
      <div className="relative z-10 flex min-h-[100svh] flex-col items-center justify-center px-6 text-center">
        <h1 className="brand-font text-5xl tracking-tight text-white md:text-8xl lg:text-9xl">
          {title}
        </h1>
        <p className="mt-5 text-[0.62rem] uppercase tracking-[0.34em] text-white/60 md:text-[0.68rem]">
          {subtitle}
        </p>
        <div className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-white/60">
          <span className="text-[0.58rem] uppercase tracking-[0.24em]">Scroll</span>
          <span className="text-lg leading-none">↓</span>
        </div>
      </div>
    </section>
  );
}

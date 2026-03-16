type HeroVideoProps = {
  title: string;
  subtitle?: string;
  videoUrl: string;
};

export default function HeroVideo({ title, subtitle, videoUrl }: HeroVideoProps) {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src={videoUrl} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/55" />

      <div className="relative z-10 flex min-h-[100svh] flex-col items-center justify-center px-6 text-center text-white">
        <h1 className="brand-font text-5xl tracking-tight text-white md:text-8xl lg:text-9xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 text-[0.62rem] uppercase tracking-[0.34em] text-white/80 md:text-[0.68rem]">
            {subtitle}
          </p>
        )}

        <div className="scroll-cue absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-white/85">
          <span className="text-[0.58rem] uppercase tracking-[0.24em]">Scroll</span>
          <span className="text-lg leading-none">↓</span>
        </div>
      </div>
    </section>
  );
}

import ScrollFadeIn from "@/components/ScrollFadeIn";

const departments = [
  { name: "Bookings", email: "bookings@valenteparis.com" },
  { name: "Development", email: "development@valenteparis.com" },
  { name: "Press", email: "press@valenteparis.com" },
];

export default function ContactPage() {
  return (
    <main className="flex w-full flex-col gap-10 pb-16 pt-8 md:gap-12 md:pb-20 md:pt-12">
      <ScrollFadeIn className="space-y-4 border-b border-black pb-8 md:pb-10">
        <p className="text-xs uppercase tracking-[0.28em]">Contact</p>
        <h1 className="text-4xl md:text-7xl">Valente Paris</h1>
      </ScrollFadeIn>

      <ScrollFadeIn className="grid grid-cols-1 gap-8 md:grid-cols-12" delay={100}>
        <div className="space-y-4 md:col-span-5">
          <p className="text-[0.62rem] uppercase tracking-[0.2em] text-black/60">Office</p>
          <p className="text-sm uppercase tracking-[0.12em]">182 Rue de Rivoli, Paris, 75001 France</p>
          <p className="text-sm uppercase tracking-[0.12em]">+33 (0)1 4020 1515</p>
          <p className="text-sm uppercase tracking-[0.12em]">contact@valenteparis.com</p>

          <div className="space-y-3 border-t border-black pt-5">
            {departments.map((dept) => (
              <p key={dept.name} className="text-xs uppercase tracking-[0.16em]">
                <span className="mr-2 text-black/60">{dept.name}:</span>
                {dept.email}
              </p>
            ))}
          </div>
        </div>

        <form className="space-y-4 md:col-span-7">
          <div className="grid gap-4 md:grid-cols-2">
            <input
              type="text"
              placeholder="Name"
              className="w-full border border-black px-4 py-3 text-xs uppercase tracking-[0.14em] outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-black px-4 py-3 text-xs uppercase tracking-[0.14em] outline-none"
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="w-full border border-black px-4 py-3 text-xs uppercase tracking-[0.14em] outline-none"
          />
          <textarea
            placeholder="Message"
            rows={6}
            className="w-full border border-black px-4 py-3 text-xs uppercase tracking-[0.14em] outline-none"
          />
          <button
            type="button"
            className="inline-flex border border-black bg-black px-5 py-3 text-xs uppercase tracking-[0.16em] text-white transition-opacity hover:opacity-85"
          >
            Send Message
          </button>
        </form>
      </ScrollFadeIn>
    </main>
  );
}

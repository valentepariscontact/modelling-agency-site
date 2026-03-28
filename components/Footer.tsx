import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-white">
      <div className="mx-auto grid w-full max-w-[1800px] gap-10 px-4 py-14 md:grid-cols-3 md:gap-12 md:px-8 md:py-16 lg:px-10">
        <nav aria-label="Contact" className="space-y-6">
          <p className="text-[0.58rem] uppercase tracking-[0.24em] text-black/55">Contact</p>
          <ul className="space-y-4 text-[0.64rem] uppercase tracking-[0.19em] text-black">
            <li>
              <Link href="https://instagram.com/valentemodels" target="_blank" rel="noopener noreferrer" className="inline-block leading-none transition-opacity hover:opacity-65">@valentemodels</Link>
            </li>
            <li>
              <Link href="mailto:valentepariscontact@gmail.com" className="inline-block leading-none transition-opacity hover:opacity-65">valentepariscontact@gmail.com</Link>
            </li>
          </ul>
        </nav>
        <nav aria-label="Legal" className="space-y-6">
          <p className="text-[0.58rem] uppercase tracking-[0.24em] text-black/55">Legal</p>
          <ul className="space-y-4 text-[0.64rem] uppercase tracking-[0.19em] text-black">
            <li>
              <Link href="/ethics-code" className="inline-block leading-none transition-opacity hover:opacity-65">Ethics Code</Link>
            </li>
            <li>
              <Link href="/terms-legal" className="inline-block leading-none transition-opacity hover:opacity-65">Terms &amp; Legal</Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-start md:justify-end lg:items-center">
          <Link href="/" className="transition-opacity hover:opacity-80">
            <Image src="/logo.svg" alt="Valenté Models" width={300} height={225} className="h-auto w-[160px] md:w-[180px] lg:w-[200px]" priority />
          </Link>
        </div>
      </div>
      <div className="mx-auto w-full max-w-[1800px] border-t border-black/10 px-4 py-6 md:px-8 lg:px-10">
        <p className="text-[0.58rem] uppercase tracking-[0.18em] text-black/40">© {new Date().getFullYear()} Valenté. All rights reserved.</p>
      </div>
    </footer>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/about", label: "ABOUT US" },
  { href: "/#get-scouted", label: "JOIN US" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-[60] border-b border-[#001F3F]/10 bg-white text-[#001F3F]">
      <div className="mx-auto flex w-full max-w-[1800px] items-center justify-between px-6 py-4 md:px-10">
        
        {/* 1. Navigation (Left) */}
        <nav aria-label="Primary" className="flex-1">
          <ul className="flex items-center gap-x-8 font-sans text-[0.7rem] uppercase tracking-[0.2em]">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative inline-block py-1 transition-opacity hover:opacity-60 ${
                    pathname === link.href ? "border-b border-[#001F3F]" : ""
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* 2. Simplified Search (Center) */}
        <div className="hidden flex-1 justify-center lg:flex">
          <div className="relative w-full max-w-[300px]">
            <input 
              type="text" 
              placeholder="SEARCH"
              className="w-full border-b border-[#001F3F]/20 bg-transparent py-1 text-center font-sans text-[0.7rem] uppercase tracking-widest outline-none focus:border-[#001F3F]"
            />
          </div>
        </div>

        {/* 3. Logo (Right) */}
        <div className="flex flex-1 justify-end">
          <Link href="/" aria-label="Go to homepage">
            <Image
              src="/logo2.svg" // Using the clean monogram version from your screenshot
              alt="Valenté Models"
              width={120} 
              height={120}
              className="h-auto w-[80px] md:w-[100px] lg:w-[120px]"
              priority
            />
          </Link>
        </div>

      </div>
    </header>
  );
}
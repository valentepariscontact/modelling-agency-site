"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import SearchDropdown from "@/components/SearchDropdown";

const navLinks = [
  { href: "/about", label: "ABOUT US" },
  { href: "/#get-scouted", label: "JOIN US" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-[60] border-b border-[#001F3F]/10 bg-white text-[#001F3F] transition-colors duration-500">
      {/* Increased py-8 to py-10 for a much more substantial header height */}
      <div className="mx-auto grid w-full max-w-[1800px] grid-cols-1 items-center gap-8 px-6 py-8 md:grid-cols-[1.2fr_auto_1fr] md:px-10 lg:px-12">

        {/* Nav links - Left */}
        <nav aria-label="Primary" className="order-2 lg:order-1">
          <ul className="flex min-w-max items-center gap-x-10 font-sans text-[0.75rem] uppercase tracking-[0.3em] md:text-[0.8rem]">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative inline-block py-2 leading-none after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-[#001F3F] after:transition-all after:duration-300 hover:after:w-full ${
                    pathname === link.href ? "after:w-full" : ""
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Search - Center */}
        <div className="order-3 lg:order-2 lg:justify-self-center">
          <SearchDropdown dark={false} />
        </div>

        {/* Logo - Right (Full Logo version) */}
        <Link
          href="/"
          aria-label="Go to homepage"
          className="order-1 flex justify-end lg:order-3"
        >
          <div className="relative">
            <Image
              src="/logo.svg" 
              alt="Valenté Models"
              // Substantially increased size for legibility
              width={240} 
              height={160}
              className="h-auto w-[180px] object-contain md:w-[220px] lg:w-[240px]"
              priority
            />
          </div>
        </Link>

      </div>
    </header>
  );
}
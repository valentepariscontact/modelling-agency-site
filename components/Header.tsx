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
    // Increased vertical padding (py-6) for a more "prestigious" feel
    <header className="sticky top-0 z-[60] border-b border-[#001F3F]/10 bg-white text-[#001F3F] transition-colors duration-500">
      <div className="mx-auto grid w-full max-w-[1800px] grid-cols-1 items-center gap-6 px-6 py-6 md:grid-cols-[1fr_auto] md:px-10 md:py-8 lg:grid-cols-[1fr_auto_1fr] lg:px-12">

        {/* Nav links - Left side */}
        <nav aria-label="Primary" className="order-2 lg:order-1">
          <ul className="flex min-w-max items-center gap-x-8 font-sans text-[0.7rem] uppercase tracking-[0.24em] md:text-[0.75rem]">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative inline-block py-1 leading-none after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-[#001F3F] after:transition-all after:duration-300 hover:after:w-full ${
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

        {/* Logo - Right side */}
        <Link
          href="/"
          aria-label="Go to homepage"
          className="order-1 flex justify-end lg:order-3"
        >
          {/* Removed flex-col and the span below to clear space */}
          <div className="relative">
            <Image
              src="/logo.svg"
              alt="Valenté Models"
              // Increased size from 62 to 100
              width={100} 
              height={100}
              className="object-contain"
              priority
            />
          </div>
        </Link>

      </div>
    </header>
  );
}
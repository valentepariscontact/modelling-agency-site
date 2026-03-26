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
      <div className="mx-auto grid w-full max-w-[1560px] grid-cols-1 gap-4 px-4 py-4 md:grid-cols-[1fr_auto] md:items-center md:px-8 md:py-5 lg:grid-cols-[1.4fr_auto_1fr] lg:px-10">

        {/* Nav links */}
        <nav aria-label="Primary" className="order-2 overflow-x-auto lg:order-1">
          <ul className="flex min-w-max items-center gap-x-5 gap-y-2 font-sans text-[0.6rem] uppercase tracking-[0.24em] md:text-[0.64rem]">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative inline-block py-1 leading-none after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-[#001F3F] after:transition-all after:duration-300 hover:after:w-full ${
                    pathname === link.href ? "after:w-full" : ""
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Search */}
        <div className="order-3 lg:order-2 lg:justify-self-center">
          <SearchDropdown dark={false} />
        </div>

        {/* Logo */}
        <Link
          href="/"
          aria-label="Go to homepage"
          className="order-1 justify-self-end lg:order-3"
        >
          <div className="flex flex-col items-center leading-none">
            <Image
              src="/logo.svg"
              alt="Valenté Models"
              width={52}
              height={52}
              className="object-contain"
              priority
            />
            <span className="mt-1 font-sans text-[0.5rem] uppercase tracking-[0.3em] text-[#001F3F]/60">
              Paris
            </span>
          </div>
        </Link>

      </div>
    </header>
  );
}

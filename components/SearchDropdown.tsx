"use client";

import { FormEvent, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

const categories = [
  { label: "ABOUT US", value: "about", href: "/about" },
  { label: "JOIN US", value: "join", href: "/#get-scouted" },
  { label: "CONTACT", value: "contact", href: "/contact" },
  { label: "TERMS & LEGAL", value: "terms", href: "/terms-legal" },
  { label: "ETHICS CODE", value: "ethics", href: "/ethics-code" },
];

type SearchDropdownProps = {
  dark?: boolean;
};

export default function SearchDropdown({ dark = false }: SearchDropdownProps) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(categories[0]);

  const panelTone = useMemo(
    () =>
      dark
        ? "border-white/40 bg-black/35 text-white"
        : "border-[#001F3F]/25 bg-white text-[#001F3F]",
    [dark]
  );

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextQuery = query.trim();
    const target =
      selected.value === "all"
        ? `/models${nextQuery ? `?q=${encodeURIComponent(nextQuery)}` : ""}`
        : `${selected.href}${nextQuery ? `?q=${encodeURIComponent(nextQuery)}` : ""}`;
    router.push(target);
    setIsOpen(false);
  }

  return (
    <form
      onSubmit={onSubmit}
      className={`relative flex h-12 min-w-56 items-center border text-[0.62rem] uppercase tracking-[0.18em] md:min-w-[28rem] ${panelTone}`}
      role="search"
    >
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className={`flex h-full items-center gap-2 border-r px-4 leading-none outline-none ${
          dark ? "border-white/40" : "border-[#001F3F]/20"
        }`}
      >
        <span>{selected.label}</span>
        <span className={`text-[0.55rem] transition-transform ${isOpen ? "rotate-180" : ""}`}>
          ▼
        </span>
      </button>

      {isOpen && (
        <ul
          className={`absolute left-0 top-[calc(100%+0.45rem)] z-50 min-w-52 border ${panelTone}`}
          aria-label="Search categories"
        >
          {categories.map((category) => (
            <li key={category.value}>
              <button
                type="button"
                onClick={() => {
                  setSelected(category);
                  setIsOpen(false);
                }}
                className={`w-full px-4 py-3 text-left text-[0.62rem] leading-none transition-opacity hover:opacity-65 ${
                  selected.value === category.value ? "font-semibold" : ""
                }`}
              >
                {category.label}
              </button>
            </li>
          ))}
        </ul>
      )}

      <input
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search"
        className={`h-full w-full bg-transparent px-4 text-xs uppercase tracking-[0.12em] outline-none ${
          dark ? "placeholder:text-white/65" : "placeholder:text-[#001F3F]/45"
        }`}
      />
    </form>
  );
}

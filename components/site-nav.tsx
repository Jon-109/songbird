"use client";

import { useEffect, useState } from "react";
import { BirdBadge } from "./bird-badge";

const links = [
  ["About", "#about"],
  ["Guidelines", "#guidelines"],
  ["Committee", "#committee"],
  ["Photos", "#photos"],
  ["Resources", "#resources"],
  ["Contact", "#contact"],
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const update = () => {
      const y = window.scrollY;
      setScrolled(y > 8);
      if (y < 180) {
        setActive("");
        return;
      }
      let current = "";
      for (const [, href] of links) {
        const el = document.getElementById(href.slice(1));
        if (el && el.getBoundingClientRect().top <= 140) {
          current = href;
        }
      }
      setActive(current);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  const linkClass = (href: string) =>
    `rounded-full px-3 py-1.5 text-sm font-semibold transition ${
      active === href
        ? "bg-blue-950 text-white shadow-sm"
        : "text-slate-600 hover:bg-slate-100 hover:text-slate-950"
    }`;

  return (
    <nav
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-slate-200/90 bg-white/95 shadow-sm shadow-slate-950/5 backdrop-blur-xl"
          : "border-slate-200/70 bg-white/95 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:h-[4.25rem] sm:px-6 lg:px-8">
        <a
          href="#top"
          className="flex min-w-0 items-center gap-2.5 sm:gap-3.5"
          onClick={() => setOpen(false)}
        >
          <BirdBadge id="nav-logo" className="h-11 w-11 sm:h-[3.25rem] sm:w-[3.25rem]" />
          <span className="text-[0.88rem] font-extrabold leading-tight tracking-tight text-slate-950 sm:text-lg lg:text-[1.2rem]">
            Mockingbird Hill Neighborhood Association
          </span>
        </a>
        <div className="hidden shrink-0 items-center gap-0.5 lg:flex">
          {links.map(([label, href]) => (
            <a key={href} href={href} className={linkClass(href)}>
              {label}
            </a>
          ))}
        </div>
        <button
          type="button"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-slate-700 transition hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>
      {open && (
        <div className="border-t border-slate-200/80 bg-white/98 px-4 pb-3 pt-2 backdrop-blur-xl lg:hidden">
          <div className="grid gap-1">
            {links.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={`rounded-xl px-3.5 py-2 text-sm font-semibold transition ${
                  active === href
                    ? "bg-blue-950 text-white"
                    : "text-slate-700 hover:bg-slate-100"
                }`}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

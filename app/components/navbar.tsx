"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { label: "Home", href: "#", active: true },
  { label: "Company", href: "#" },
  { label: "Features", href: "#" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const renderLinks = (orientation: "row" | "col") => (
    <div
      className={
        orientation === "row"
          ? "flex items-center gap-8"
          : "flex flex-col gap-6 border-t border-white/10 pt-6"
      }
    >
      <div
        className={
          orientation === "row"
            ? "flex items-center gap-8 text-sm font-medium"
            : "flex flex-col gap-6 text-base font-medium"
        }
      >
        {links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className={`relative text-slate-200 transition-colors duration-300 hover:text-pink-400 ${
              link.active ? "text-pink-400" : ""
            }`}
            onClick={() => setIsOpen(false)}
          >
            {link.label}
            {link.active && (
              <span className="absolute left-1/2 top-[calc(100%+6px)] h-0.5 w-6 -translate-x-1/2 rounded-full bg-pink-400" />
            )}
          </Link>
        ))}
      </div>

      <Link
        href="#"
        className="rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 px-5 py-2 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(225,29,72,0.35)] transition-transform duration-300 hover:scale-[1.03]"
        onClick={() => setIsOpen(false)}
      >
        Sign Up
      </Link>
    </div>
  );

  return (
    <header className="relative z-20">
      <div className="w-full px-4 py-5 sm:px-8 lg:px-40">
        <nav className="flex items-center justify-between px-0 py-3 sm:px-2 lg:px-4">
          <div className="flex items-center justify-between w-full gap-4 lg:w-auto">
            <div className="font-heading text-2xl font-semibold tracking-[0.35em] text-white">
              Light
            </div>

            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 text-slate-200 transition hover:border-pink-400 hover:text-pink-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 lg:hidden"
              aria-expanded={isOpen}
              aria-controls="mobile-nav"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              <span className="sr-only">Toggle navigation</span>
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {isOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </>
                )}
              </svg>
            </button>
          </div>

          <div className="hidden lg:flex lg:items-center lg:gap-8">{renderLinks("row")}</div>
        </nav>

        {isOpen && (
          <div
            id="mobile-nav"
            className="mt-4 rounded-2xl border border-white/10 bg-slate-900/80 p-6 backdrop-blur"
          >
            {renderLinks("col")}
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;

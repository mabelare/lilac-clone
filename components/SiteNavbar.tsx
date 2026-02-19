"use client";

import Link from "next/link";
import { useState } from "react";

export default function SiteNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-4 bg-white shadow-sm">
        <button
          onClick={() => setOpen(!open)}
          className="flex flex-col gap-1.25 w-10 lg:hidden transition-colors duration-150 ease-out hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          aria-label="Open menu"
        >
          <span className="block w-8 h-0.5 bg-primary transition-colors duration-150 ease-out"></span>
          <span className="block w-8 h-0.5 bg-primary transition-colors duration-150 ease-out"></span>
        </button>

        <h1 className="text-xl lg:text-3xl font-semibold whitespace-nowrap">
          Dr. Maya Reynolds
        </h1>

        <nav className="hidden lg:flex gap-8 text-primary lg:text-xl">
          <Link
            className="transition-colors duration-200 ease-out hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            href="/blog"
          >
            Blog
          </Link>
          <Link
            className="transition-colors duration-200 ease-out hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            href="/contact"
          >
            Contact
          </Link>
        </nav>
      </header>

      <div className="h-16 lg:h-20" aria-hidden="true"></div>

      {open && (
        <div className="fixed inset-0 z-50 bg-white overflow-y-auto">
          <button
            onClick={() => setOpen(false)}
            className="absolute left-6 top-6 text-3xl font-semibold transition-colors duration-150 ease-out hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            aria-label="Close menu"
          >
            x
          </button>
          <nav className="h-full flex flex-col items-center justify-center gap-6 text-2xl">
            <Link
              className="text-primary transition-colors duration-200 ease-out hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              href="/blog"
              onClick={() => setOpen(false)}
            >
              Blog
            </Link>
            <Link
              className="text-primary transition-colors duration-200 ease-out hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              href="/contact"
              onClick={() => setOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}

"use client";

import { useState } from "react";
import Speciality from "../components/Speciality";
import Connect from "../components/Connect";

import Faq from "@/components/Faq";

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-secondary text-primary">
      <header className="sticky top-0 z-40 flex items-center justify-between px-6 py-4 bg-white shadow-sm">
        <button
          onClick={() => setOpen(!open)}
          className="flex flex-col gap-1.25 w-10 lg:hidden"
        >
          <span className="block w-8 h-0.5 bg-primary"></span>
          <span className="block w-8 h-0.5 bg-primary"></span>
        </button>

        <h1 className="text-xl lg:text-3xl font-semibold">Dr. Maya Reynolds</h1>

        <nav className="hidden lg:flex gap-8 text-primary lg:text-xl">
          <a className="hover:text-accent transition" href="/blog">
            Blog
          </a>
          <a className="hover:text-accent transition" href="/contact">
            Contact
          </a>
        </nav>
      </header>

      {open && (
        <div className="fixed inset-0 z-50 bg-white">
          <button
            onClick={() => setOpen(false)}
            className="absolute left-6 top-6 text-3xl font-semibold"
            aria-label="Close menu"
          >
            x
          </button>
          <nav className="h-full flex flex-col items-center justify-center gap-6 text-2xl">
            <a
              className="text-primary hover:text-accent transition"
              href="/blog"
            >
              Blog
            </a>
            <a
              className="text-primary hover:text-accent transition"
              href="/contact"
            >
              Contact
            </a>
          </nav>
        </div>
      )}

      <Connect />
      <div className="mt-12">
        <Speciality />
      </div>
      <div>
        <Faq />
      </div>
    </div>
  );
}

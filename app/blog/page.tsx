"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { BLOG_POSTS } from "./posts";
import RevealSection from "@/components/RevealSection";

export default function BlogPage() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!open) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <div className="min-h-screen bg-secondary text-primary">
      <header className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-4 bg-white shadow-sm">
        <button
          onClick={() => setOpen(!open)}
          className="flex flex-col gap-1.25 w-10 lg:hidden"
        >
          <span className="block w-8 h-0.5 bg-primary"></span>
          <span className="block w-8 h-0.5 bg-primary"></span>
        </button>

        <h1 className="text-xl lg:text-3xl font-semibold whitespace-nowrap">
          Dr. Maya Reynolds
        </h1>

        <nav className="hidden lg:flex gap-8 text-primary lg:text-xl">
          <a className="hover:text-accent transition" href="/blog">
            Blog
          </a>
          <a className="hover:text-accent transition" href="/contact">
            Contact
          </a>
        </nav>
      </header>

      <div className="h-16 lg:h-20" aria-hidden="true"></div>

      {open && (
        <div className="fixed inset-0 z-50 bg-white overflow-y-auto">
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

      <RevealSection delayMs={100}>
        <div className="px-6 py-16 bg-secondary text-primary">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-2 lg:gap-0">
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
              <div className="w-44 sm:w-52 lg:w-100">
                <div className="rounded-t-[999px] overflow-hidden bg-white">
                  <img
                    src="/blog.jpg"
                    alt="Blog"
                    className="w-full h-auto block"
                  />
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-semibold leading-tight">
                The Blog
              </h2>
              <p className="mt-6 text-lg sm:text-xl lg:text-3xl leading-relaxed">
                Reflections on anxiety, trauma, burnout, and the inner
                experiences that shape how we live and relate. This space is for
                thoughtful insights grounded in clinical experience and everyday
                life.
              </p>
            </div>
          </div>
        </div>
      </RevealSection>

      <RevealSection
        delayMs={150}
        className="px-6 pb-0 bg-secondary text-primary"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-16">
          {BLOG_POSTS.map((post) => (
            <article key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="block">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full aspect-4/3 block object-cover"
                />
                <p className="mt-6 text-base">{post.date}</p>
                <h3 className="mt-2 text-4xl sm:text-xl font-semibold">
                  {post.title}
                </h3>
                <p className="mt-3 text-base sm:text-lg leading-relaxed">
                  {post.subtitle}
                </p>
                <span className="mt-8 inline-block text-xs underline">
                  Read More
                </span>
              </Link>
            </article>
          ))}
        </div>
        <div className="mt-16 -mx-6">
          <div className="bg-primary text-secondary px-6 py-10 sm:py-14 border-y border-primary/80">
            <div className="max-w-4xl mx-auto border border-secondary/60 px-6 py-10 sm:px-10 sm:py-14 text-center">
              <h3 className="text-3xl sm:text-5xl font-semibold">Subscribe</h3>
              <p className="mt-6 text-base sm:text-xl leading-relaxed max-w-2xl mx-auto">
                Sign up with your email address to receive news and updates.
              </p>

              <input
                type="email"
                placeholder="Email Address"
                className="mt-10 w-full max-w-3xl mx-auto block rounded-lg px-5 py-4 sm:py-5 bg-secondary text-primary text-base sm:text-xl placeholder:text-primary/35"
              />

              <button
                type="button"
                className="mt-8 border border-secondary/70 px-10 py-4 sm:px-14 sm:py-5 text-lg sm:text-xl tracking-wide hover:bg-accent hover:text-primary transition"
              >
                SIGN UP
              </button>

              <p className="mt-10 text-base sm:text-xl">
                We respect your privacy.
              </p>
            </div>
          </div>
        </div>
        <footer className="m-0 p-0 bg-secondary text-primary">
          <div className="lg:hidden px-6 py-16 text-center">
            <h2 className="text-3xl sm:text-4xl font-semibold whitespace-nowrap">
              Dr. Maya Reynolds
            </h2>

            <p className="mt-6 text-base sm:text-lg leading-relaxed">
              Santa Monica, California
            </p>
            <a className="mt-3 block underline" href="#">
              hello@drmayareynolds.com
            </a>
            <a className="mt-2 block underline" href="#">
              (310) 555-XXXX
            </a>

            <h2 className="mt-12 text-3xl sm:text-4xl font-semibold">Hours</h2>
            <p className="mt-6 text-base sm:text-lg leading-relaxed">
              Monday – Friday
              <br />
              10am – 6pm
            </p>

            <h2 className="mt-12 text-3xl sm:text-4xl font-semibold">Find</h2>
            <div className="mt-6 space-y-2">
              <button
                type="button"
                onClick={() => router.push("/")}
                className="block underline mx-auto"
              >
                Home
              </button>
              <button
                type="button"
                onClick={() => router.push("/contact")}
                className="block underline mx-auto"
              >
                Contact
              </button>
              <a className="block underline" href="/blog">
                Blog
              </a>
            </div>
          </div>

          <div className="hidden lg:block max-w-7xl mx-auto px-6 py-16">
            <div className="grid grid-cols-[1.6fr_1fr_1fr] gap-12 items-start text-left">
              <div>
                <h2 className="text-3xl sm:text-4xl font-semibold whitespace-nowrap">
                  Dr. Maya Reynolds
                </h2>

                <p className="mt-6 text-base sm:text-lg leading-relaxed">
                  Santa Monica, California
                </p>
                <a className="mt-3 block underline" href="#">
                  hello@drmayareynolds.com
                </a>
                <a className="mt-2 block underline" href="#">
                  (310) 555-XXXX
                </a>
              </div>

              <div>
                <h2 className="text-3xl sm:text-4xl font-semibold">Hours</h2>
                <p className="mt-6 text-base sm:text-lg leading-relaxed">
                  Monday – Friday
                  <br />
                  10am – 6pm
                </p>
              </div>

              <div>
                <h2 className="text-3xl sm:text-4xl font-semibold">Find</h2>
                <div className="mt-6 space-y-2">
                  <button
                    type="button"
                    onClick={() => router.push("/")}
                    className="block underline"
                  >
                    Home
                  </button>
                  <button
                    type="button"
                    onClick={() => router.push("/contact")}
                    className="block underline"
                  >
                    Contact
                  </button>
                  <button
                    type="button"
                    onClick={() => router.push("/blog")}
                    className="block underline"
                  >
                    Blog
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-primary text-secondary w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
            <div className="max-w-7xl mx-auto border-t border-primary px-6 pt-8 pb-0 text-center text-sm sm:text-base">
              <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
                <a className="underline" href="#">
                  Privacy & Cookies Policy
                </a>
                <a className="underline" href="#">
                  Good Faith Estimate
                </a>
                <a className="underline" href="#">
                  Website Terms & Conditions
                </a>
                <a className="underline" href="#">
                  Disclaimer
                </a>
              </div>
              <p className="mt-4">
                Credits{" "}
                <a className="underline" href="#">
                  Are Mabel
                </a>
              </p>
              <p className="mt-2">
                © 2026 Dr. Maya Reynolds, PsyD. All Rights Reserved.
              </p>
            </div>
          </div>
        </footer>
      </RevealSection>
    </div>
  );
}

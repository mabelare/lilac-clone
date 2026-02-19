"use client";

import Link from "next/link";
import { useState } from "react";
import RevealSection from "@/components/RevealSection";

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-secondary text-primary">
      <header className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-4 bg-white">
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

        {/* Desktop Navigation (hidden on mobile) */}
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
        <main className="min-h-screen bg-secondary text-primary px-6 py-12 sm:py-16 lg:py-20">
          <div className="max-w-xl mx-auto text-center lg:max-w-6xl lg:grid lg:grid-cols-[1.2fr_0.9fr] lg:items-start lg:gap-16 lg:text-left">
            <div>
              <h2 className="text-3xl sm:text-3xl font-semibold leading-tight lg:text-6xl lg:font-heading">
                Let's Connect
              </h2>
              <p className="mt-8 text-base sm:text-lg leading-relaxed lg:mt-8 lg:text-2xl lg:leading-relaxed lg:font-body lg:max-w-2xl">
                Reaching out for therapy can feel like a big step.
                <br />
                If you have questions or would like to schedule an initial
                consultation, you’re welcome to get in touch.
              </p>

              <div className="mx-auto w-52 sm:w-64 mt-10 relative lg:mx-0 lg:mt-14 lg:w-72">
                <div className="rounded-t-[999px] overflow-hidden bg-white">
                  <img
                    src="/Connect.jpg"
                    alt="florals"
                    className="w-full h-auto block"
                  />
                </div>
                <div className="absolute -bottom-8 -right-10 w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden bg-white lg:-bottom-10 lg:-right-12 lg:w-40 lg:h-40">
                  <img
                    src="/daisy.jpg"
                    alt="Floral"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <section className="max-w-xs mx-auto mt-20 sm:mt-24 bg-primary text-secondary p-6 sm:p-8 text-center lg:max-w-none lg:w-full lg:mt-32 lg:p-10 lg:text-left">
              <h3 className="text-lg sm:text-base leading-relaxed lg:text-2xl lg:leading-relaxed lg:font-body">
                <em className="font-bold">PLEASE NOTE:</em> standard website
                contact forms are not always HIPAA-compliant. To protect your
                privacy, you may reach out directly via email or use a secure
                scheduling platform when booking an appointment.
              </h3>
            </section>
          </div>

          <div className="max-w-xl mx-auto mt-12 lg:max-w-6xl lg:mt-20">
            <h2 className="text-3xl text-center sm:text-3xl font-semibold leading-tight lg:text-5xl lg:leading-tight">
              Book an
              <br />
              Appointment
            </h2>

            <div className="mt-12 max-w-xs mx-auto lg:mt-10 lg:max-w-4xl">
              <iframe
                src="https://calendly.com/your-calendly-link"
                width="100%"
                height="350"
                frameBorder="0"
                title="Schedule appointment"
                className="rounded-lg lg:rounded-2xl lg:h-144"
              ></iframe>
            </div>
          </div>
        </main>
      </RevealSection>

      <RevealSection
        delayMs={150}
        className="mt-12 bg-primary text-secondary w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]"
      >
        <div className="max-w-4xl mx-auto border border-primary p-8 sm:p-12 lg:max-w-6xl lg:border-0 lg:px-14 lg:py-16 lg:grid lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-20">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-secondary mb-8 lg:text-6xl lg:mb-8">
              Our Office
            </h2>
            <p className="mt-6 text-base sm:text-lg leading-relaxed lg:mt-0 lg:text-2xl">
              Santa Monica, California
            </p>

            <h2 className="mt-12 text-3xl sm:text-4xl font-semibold lg:mt-10 lg:text-5xl">
              Hours
            </h2>
            <p className="mt-6 text-base sm:text-lg leading-relaxed lg:mt-5 lg:text-2xl">
              Monday – Friday
              <br />
              10am – 6pm
            </p>
          </div>

          <div className="mt-6 rounded-lg overflow-hidden lg:mt-0 lg:w-full lg:max-w-2xl lg:justify-self-end lg:rounded-none">
            <iframe
              src="https://maps.google.com/maps?q=Santa%20Monica%2C%20CA&z=13&output=embed"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location"
              className="lg:h-80"
            ></iframe>
          </div>

          <a className="mt-3 block underline lg:hidden" href="#">
            hello@drmayareynolds.com
          </a>
          <a className="mt-2 block underline lg:hidden" href="#">
            (310) 555-XXXX
          </a>
        </div>
      </RevealSection>
      <RevealSection className="bg-secondary text-primary py-12 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-3xl sm:text-4xl font-semibold mb-8">
            Find me on social
          </h3>
          <div className="flex justify-center gap-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 flex items-center justify-center rounded-full bg-primary text-white hover:bg-accent transition"
              aria-label="Instagram"
              title="Instagram"
            >
              <img src="/icons/instagram.png" alt="Instagram" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 flex items-center justify-center rounded-full bg-primary text-white hover:bg-accent transition"
              aria-label="Facebook"
              title="Facebook"
            >
              <img src="/icons/facebook.png" alt="Facebook" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 flex items-center justify-center rounded-full bg-primary text-white hover:bg-accent transition"
              aria-label="Twitter"
              title="Twitter"
            >
              <img src="/icons/twitter.png" alt="Twitter" />
            </a>
          </div>
          <div className="border-t mt-8 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]"></div>
        </div>
      </RevealSection>
      <RevealSection>
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
              <Link className="block underline" href="/">
                Home
              </Link>
              <Link className="block underline" href="/contact">
                Contact
              </Link>
              <Link className="block underline" href="/blog">
                Blog
              </Link>
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
                  <Link className="block underline" href="/">
                    Home
                  </Link>
                  <Link className="block underline" href="/contact">
                    Contact
                  </Link>
                  <Link className="block underline" href="/blog">
                    Blog
                  </Link>
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

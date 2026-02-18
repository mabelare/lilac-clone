"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type BackgroundItem = {
  title: string;
  content: React.ReactNode;
};

export default function ProfessionalBackground() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const router = useRouter();

  const items: BackgroundItem[] = [
    {
      title: "Education",
      content: "Doctor of Psychology (PsyD) in Clinical Psychology",
    },
    {
      title: "Licensure",
      content: (
        <>
          <p>Licensed Clinical Psychologist</p>
          <p>State of California</p>
        </>
      ),
    },
    {
      title: "Training and Clinical Approaches",
      content: (
        <ul className="list-disc pl-6 space-y-2">
          <li>Cognitive Behavioral Therapy (CBT)</li>
          <li>EMDR Therapy</li>
          <li>Mindfulness-Based Practices</li>
          <li>Body-Oriented / Somatic Techniques</li>
        </ul>
      ),
    },
  ];

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="px-6 pt-16 pb-0 bg-secondary text-primary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-8">
            My Professional Background
          </h2>
        </div>
      </div>

      <div>
        <div className="max-w-7xl mx-auto border-t border-primary">
          {items.map((item, index) => (
            <div key={item.title} className="border-b border-primary">
              <button
                onClick={() => toggleItem(index)}
                className="w-full py-5 flex items-center gap-4 text-left px-6"
              >
                <span className="text-lg font-semibold">{item.title}</span>
                <span className="text-2xl ml-auto shrink-0">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <div className="pb-5 pl-10 pr-6 text-base sm:text-lg leading-relaxed">
                  {item.content}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 bg-primary text-white w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
        <div className="px-6 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-semibold leading-tight">
              Get Started
            </h2>
            <p className="mt-6 text-base sm:text-lg leading-relaxed">
              If you’re considering therapy and would like to learn more, you’re
              welcome to reach out to schedule an initial consultation. This can
              be a space to ask questions, discuss what you’re looking for, and
              see if working together feels like a good fit.
            </p>

            <button
              type="button"
              onClick={() => router.push("/contact")}
              className="mt-10 px-10 py-4 border border-white uppercase tracking-wide text-sm hover:bg-white hover:text-primary transition"
            >
              GET IN TOUCH <span aria-hidden="true">&rarr;</span>
            </button>
          </div>
        </div>
      </div>
      <footer className="m-0 p-0 bg-secondary text-primary">
        <div className="lg:hidden px-6 py-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold">
            Contact Information
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
              <h2 className="text-3xl sm:text-4xl font-semibold">
                Contact Information
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
              Website Template Credits:{" "}
              <a className="underline" href="#">
                Go Bloom Creative
              </a>
            </p>
            <p className="mt-2">
              © 2024 Dr. Maya Reynolds, PsyD. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
}

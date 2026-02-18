"use client";
import { useRouter } from "next/navigation";

export default function Connect() {
  const router = useRouter();

  return (
    <>
      <section className="px-6 py-16 bg-secondary text-primary">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-20">
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            <div className="w-44 sm:w-52 lg:w-lg">
              <div className="rounded-t-[999px] overflow-hidden bg-white">
                <img
                  src="/Connect.jpg"
                  alt="Connect"
                  className="w-full h-auto block"
                />
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-semibold leading-tight">
              A Thoughtful Space to Slow Down and Heal
            </h2>
            <p className="mt-6 text-lg sm:text-xl lg:text-3xl leading-relaxed">
              Therapy for adults in Santa Monica navigating anxiety, trauma, and
              chronic stress.
            </p>

            <button
              type="button"
              onClick={() => window.location.reload()}
              className="mt-10 px-10 py-4 lg:px-14 lg:py-6 border border-primary uppercase tracking-wide text-sm lg:text-lg transition-colors hover:bg-accent active:bg-accent"
            >
              Connect with me <span aria-hidden="true">&rarr;</span>
            </button>
          </div>
        </div>
      </section>

      <section className="bg-secondary text-primary px-6 py-12">
        <div className="bg-primary text-white w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
          <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-16">
            <div className="w-full lg:w-1/2 px-6 py-4 lg:px-0 lg:py-16">
              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-semibold text-white">
                WHO I HELP
              </h2>
              <h3 className="mt-6 text-xl sm:text-2xl lg:text-4xl font-semibold leading-snug">
                Therapy for Thoughtful, High Achieving Adults who feel
                Overwhelmed
              </h3>
              <p className="mt-6 text-base sm:text-lg leading-relaxed">
                Many of the people I work with are capable, self-aware, and
                driven yet internally struggle with constant worry, tension in
                their body, overthinking, or a feeling of always being &quot;on
                edge.&quot;
              </p>
              <p className="mt-6 text-base sm:text-lg leading-relaxed">
                Therapy can be a space to slow down, feel grounded again, and
                understand both the emotional and physical patterns that keep
                stress and anxiety stuck.
              </p>
              <div className="border-t border-white mt-12 lg:hidden w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]"></div>
              <button
                type="button"
                onClick={() => router.push("/contact")}
                className="w-full py-0 lg:py-4 px-0 lg:px-10 text-sm lg:text-lg uppercase tracking-wide text-white lg:border-t lg:border-white lg:mt-12 lg:hover:bg-white lg:hover:text-primary hover:bg-white hover:text-primary transition"
              >
                Get in touch <span aria-hidden="true">&rarr;</span>
              </button>
            </div>

            {/* Image on right (md+), top (mobile) */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
              <div className="overflow-hidden w-full lg:w-screen lg:h-screen">
                <img
                  src="/therapygroup.jpg"
                  alt="Therapy group"
                  className="w-full h-full object-contain block"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

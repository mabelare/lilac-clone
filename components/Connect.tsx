"use client";

export default function Connect() {
  return (
    <>
      <section className="px-6 py-16 bg-secondary text-primary">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mx-auto w-44 sm:w-52">
            <div className="rounded-t-[999px] overflow-hidden bg-white">
              <img
                src="/Connect.jpg"
                alt="Connect"
                className="w-full h-auto block"
              />
            </div>
          </div>

          <h2 className="mt-6 text-4xl sm:text-3xl font-semibold leading-tight">
            A Thoughtful Space to Slow Down and Heal
          </h2>
          <p className="mt-6 text-lg sm:text-xl">
            Therapy for adults in Santa Monica navigating anxiety, trauma, and
            chronic stress.
          </p>

          <button className="mt-10 px-10 py-4 hover:amber-500 border border-primary uppercase tracking-wide text-sm">
            Connect with me <span aria-hidden="true">&rarr;</span>
          </button>
        </div>
      </section>

      <section className="bg-secondary text-primary px-6 py-12">
        <div className="bg-primary text-white w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
          <div className="max-w-2xl mx-auto">
            <div className="overflow-hidden">
              <img
                src="/therapygroup.jpg"
                alt="Therapy group"
                className="w-full h-auto block"
              />
            </div>

            <div className="px-6 py-10">
              <h2 className="text-3xl sm:text-4xl font-semibold text-white">
                WHO I HELP
              </h2>
              <h3 className="mt-6 text-xl sm:text-2xl font-semibold">
                Therapy for Thoughtful, High Achieving Adults who feel
                Overwhelmed
              </h3>
              <p className="mt-6 text-base sm:text-lg leading-relaxed">
                Many of the people I work with are capable, self-aware, and
                driven yet internally struggle with constant worry, tension in
                their body, overthinking, or a feeling of always being "on
                edge."
              </p>
              <p className="mt-6 text-base sm:text-lg leading-relaxed">
                Therapy can be a space to slow down, feel grounded again, and
                understand both the emotional and physical patterns that keep
                stress and anxiety stuck.
              </p>
            </div>

            <div className="border-t border-white">
              <button className="w-full py-4 text-sm uppercase tracking-wide text-white hover:bg-white hover:text-primary transition">
                Get in touch <span aria-hidden="true">&rarr;</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

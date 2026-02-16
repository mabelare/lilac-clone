"use client";

export default function Speciality() {
  return (
    <section className="px-6 py-16 bg-secondary text-primary">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-semibold text-center mb-12">
          My Specialties
        </h2>

        <div className="border border-primary p-8 sm:p-12 bg-primary text-white mb-8">
          <h3 className="text-2xl sm:text-3xl font-semibold mb-6 text-white">
            Anxiety & Panic Therapy
          </h3>
          <p className="text-base sm:text-lg leading-relaxed mb-8">
            Anxiety can show up as constant worry, racing thoughts, or a sense
            of always being on edge, even when life looks fine on the outside.
            In therapy, well focus on understanding how anxiety lives in both
            your mind and body, and develop practical ways to feel calmer, more
            present, and less overwhelmed in daily life.
          </p>

          <div className="flex justify-center mt-8">
            <div className="w-52 sm:w-88 lg:w-80 h-52 sm:h-88 lg:h-80 rounded-full overflow-hidden">
              <img
                src="/anxiety.jpg"
                alt="Anxiety therapy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="border border-primary p-8 sm:p-12 bg-primary text-white mb-8">
          <h3 className="text-2xl sm:text-3xl font-semibold mb-6 text-white">
            Trauma & PTSD Therapy
          </h3>
          <p className="text-base sm:text-lg leading-relaxed mb-8">
            Past experiences whether recent or long-standing can continue to
            shape how safe, connected, or at ease you feel. I work with adults
            who are impacted by both single incident trauma and more complex
            patterns rooted in earlier relationships or chronic stress. Therapy
            is paced carefully, with an emphasis on safety, stabilization, and
            helping you feel more regulated over time.
          </p>

          <div className="flex justify-center mt-8">
            <div className="w-52 sm:w-88 lg:w-80 h-52 sm:h-88 lg:h-80 rounded-full overflow-hidden">
              <img
                src="/trauma.jpg"
                alt="Trauma therapy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="border border-primary p-8 sm:p-12 bg-primary text-white">
          <h3 className="text-2xl sm:text-3xl font-semibold mb-6 text-white">
            Burnout & Chronic Stress
          </h3>
          <p className="text-base sm:text-lg leading-relaxed mb-8">
            Burnout often develops after long periods of pushing through
            pressure, high expectations, or constant responsibility. If you feel
            emotionally drained, disconnected, or exhausted despite still
            functioning day to day, therapy can help you slow down, reconnect
            with yourself, and build more sustainable ways of working and
            living.
          </p>

          <div className="flex justify-center mt-8">
            <div className="w-52 sm:w-88 lg:w-80 h-52 sm:h-88 lg:h-80 rounded-full overflow-hidden">
              <img
                src="/burnout.jpg"
                alt="Burnout therapy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 bg-primary text-white w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
          <div className="max-w-2xl mx-auto">
            <div className="px-6 pt-6 overflow-hidden">
              <img
                src="/Help.jpg"
                alt="Help"
                className="w-full aspect-[4/3] sm:aspect-square object-cover object-top block"
              />
            </div>
            <div className="px-6 py-10">
              <h2 className="text-3xl sm:text-4xl font-semibold text-white">
                You Don't Have to Carry Everything by Yourself
              </h2>

              <p className="mt-6 text-base sm:text-lg leading-relaxed">
                If you're managing a lot on the outside but feel tense, mentally
                exhausted, or stuck in cycles of overthinking on the inside,
                therapy can offer a place to slow down and reset.
              </p>
              <p className="mt-6 text-base sm:text-lg leading-relaxed">
                I work with adults who feel constantly "on," who hold stress in
                their body, or who find it hard to fully relax even when things
                appear fine. Together, we'll focus on understanding what's
                driving these patterns and developing practical, supportive ways
                to feel more grounded and regulated in daily life.
              </p>
            </div>
            <div className="border-t border-white px-6">
              <button className="w-full py-4 text-sm uppercase tracking-wide text-white hover:bg-white hover:text-primary transition">
                Work with me <span aria-hidden="true">&rarr;</span>
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 px-6 py-16 bg-secondary text-primary">
          <div className="max-w-md mx-auto text-center">
            <div className="mx-auto w-44 sm:w-52">
              <div className="rounded-t-[999px] overflow-hidden bg-white">
                <img
                  src="/Dr.JPG"
                  alt="Dr. Maya Reynolds"
                  className="w-full h-auto block"
                />
              </div>
            </div>

            <h2 className="mt-12 text-4xl sm:text-5xl font-semibold leading-tight">
              Hi, I'm Dr. Maya Reynolds.
            </h2>
            <p className="mt-6 text-base sm:text-lg leading-relaxed">
              I'm a licensed clinical psychologist based in Santa Monica,
              California.
              <br />
              I work with adults who feel overwhelmed by anxiety, chronic
              stress, or the lingering impact of past experiences, my approach
              is warm, collaborative, and grounded.
              <br />
              Therapy is a space to slow down, feel more regulated, and develop
              a stronger relationship with yourself over time.
            </p>

            <button className="mt-10 px-10 py-4 border border-primary uppercase tracking-wide text-sm hover:bg-primary hover:text-white transition">
              Let's Chat <span aria-hidden="true">&rarr;</span>
            </button>
          </div>
        </div>

        <div className="mt-12 bg-primary text-white w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
          <div className="max-w-4xl mx-auto border border-primary p-8 sm:p-12">
            <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-8">
              Our Office
            </h2>

            <div className="grid grid-cols-1 gap-6 mb-8">
              <div className="overflow-hidden rounded-lg">
                <img
                  src="/office.jpg"
                  alt="Santa Monica office entrance"
                  className="w-full h-80 sm:h-96 object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-lg">
                <img
                  src="/office2.jpg"
                  alt="Santa Monica office interior"
                  className="w-full h-80 sm:h-96 object-cover"
                />
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-base sm:text-lg leading-relaxed">
                My Santa Monica office is a quiet, private space designed to
                feel calm and grounding.
                <br />
                Natural light, soft textures, and an uncluttered environment
                help create a sense of ease from the moment you arrive.
              </p>

              <p className="text-base sm:text-lg leading-relaxed">
                I offer in person sessions from my Santa Monica office, as well
                as secure telehealth sessions for clients across California.
                <br />
                Whether we meet in person or online, my goal is to provide a
                setting that supports comfort, safety, and focused therapeutic
                work.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

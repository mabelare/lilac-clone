"use client";
import { useRouter } from "next/navigation";

export default function Speciality() {
  const router = useRouter();

  return (
    <section className="bg-secondary text-primary">
      <div className="px-6 py-8 sm:py-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-semibold text-center mb-6 sm:mb-8">
            My Specialties
          </h2>
        </div>
      </div>

      <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] px-6 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 lg:px-6">
          <div className="border border-primary p-8 sm:p-10 bg-primary text-white">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-white">
              Anxiety & Panic Therapy
            </h3>
            <p className="text-sm sm:text-base leading-relaxed mb-6">
              Anxiety can show up as constant worry, racing thoughts, or a sense
              of always being on edge, even when life looks fine on the outside.
              In therapy, well focus on understanding how anxiety lives in both
              your mind and body, and develop practical ways to feel calmer,
              more present, and less overwhelmed in daily life.
            </p>
            <div className="flex justify-center">
              <div className="w-40 sm:w-48 lg:w-56 h-40 sm:h-48 lg:h-56 rounded-full overflow-hidden">
                <img
                  src="/anxiety.jpg"
                  alt="Anxiety therapy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="border border-primary p-8 sm:p-10 bg-primary text-white">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-white">
              Trauma & PTSD Therapy
            </h3>
            <p className="text-sm sm:text-base leading-relaxed mb-6">
              Past experiences whether recent or long-standing can continue to
              shape how safe, connected, or at ease you feel. I work with adults
              who are impacted by both single incident trauma and more complex
              patterns rooted in earlier relationships or chronic stress.
              Therapy is paced carefully, with an emphasis on safety,
              stabilization, and helping you feel more regulated over time.
            </p>
            <div className="flex justify-center">
              <div className="w-40 sm:w-48 lg:w-56 h-40 sm:h-48 lg:h-56 rounded-full overflow-hidden">
                <img
                  src="/trauma.jpg"
                  alt="Trauma therapy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="border border-primary p-8 sm:p-10 bg-primary text-white">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-white">
              Burnout & Chronic Stress
            </h3>
            <p className="text-sm sm:text-base leading-relaxed mb-6">
              Burnout often develops after long periods of pushing through
              pressure, high expectations, or constant responsibility. If you
              feel emotionally drained, disconnected, or exhausted despite still
              functioning day to day, therapy can help you slow down, reconnect
              with yourself, and build more sustainable ways of working and
              living.
            </p>
            <div className="flex justify-center">
              <div className="w-40 sm:w-48 lg:w-56 h-40 sm:h-48 lg:h-56 rounded-full overflow-hidden">
                <img
                  src="/burnout.jpg"
                  alt="Burnout therapy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-primary text-white w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
          <div className="lg:grid lg:grid-cols-2 lg:items-stretch">
            <div className="px-6 pt-6 overflow-hidden lg:px-0 lg:pt-0">
              <img
                src="/Help.jpg"
                alt="Help"
                className="w-full aspect-4/3 sm:aspect-square object-cover object-top block lg:h-full lg:min-h-120 lg:aspect-auto"
              />
            </div>
            <div className="px-6 py-10 lg:px-0 lg:py-16 flex flex-col">
              <div className="lg:mt-50 lg:pl-14 lg:pr-12">
                <h2 className="text-3xl sm:text-4xl font-semibold text-white">
                  You Don&apos;t Have to Carry Everything by Yourself
                </h2>

                <p className="mt-6 text-base sm:text-lg leading-relaxed">
                  If you&apos;re managing a lot on the outside but feel tense,
                  mentally exhausted, or stuck in cycles of overthinking on the
                  inside, therapy can offer a place to slow down and reset.
                </p>
                <p className="mt-6 text-base sm:text-lg leading-relaxed">
                  I work with adults who feel constantly &quot;on,&quot; who
                  hold stress in their body, or who find it hard to fully relax
                  even when things appear fine. Together, we&apos;ll focus on
                  understanding what&apos;s driving these patterns and
                  developing practical, supportive ways to feel more grounded
                  and regulated in daily life.
                </p>
              </div>
              <div className="border-t border-white mt-8 lg:mt-auto">
                <div className="pt-0">
                  <button
                    type="button"
                    onClick={() => router.push("/contact")}
                    className="w-full py-4 text-sm uppercase tracking-wide text-white hover:bg-white hover:text-primary transition"
                  >
                    Work with me <span aria-hidden="true">&rarr;</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 px-6 py-16 bg-secondary text-primary">
          <div className="max-w-md mx-auto text-center lg:max-w-6xl lg:grid lg:grid-cols-2 lg:gap-14 lg:items-center lg:text-left">
            <div className="relative mx-auto w-44 sm:w-52 lg:order-2 lg:w-full lg:max-w-lg xl:max-w-xl">
              <div className="rounded-t-[999px] overflow-hidden bg-white">
                <img
                  src="/Dr.JPG"
                  alt="Dr. Maya Reynolds"
                  className="w-full h-auto block lg:aspect-4/5 lg:object-cover lg:object-top"
                />
              </div>
            </div>

            <div className="mt-12 lg:mt-0 lg:order-1 lg:max-w-xl">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
                Hi, I&apos;m Dr. Maya Reynolds.
              </h2>
              <p className="mt-6 text-base sm:text-lg leading-relaxed">
                I&apos;m a licensed clinical psychologist based in Santa Monica,
                California.
                <br />
                I work with adults who feel overwhelmed by anxiety, chronic
                stress, or the lingering impact of past experiences, my approach
                is warm, collaborative, and grounded.
                <br />
                Therapy is a space to slow down, feel more regulated, and
                develop a stronger relationship with yourself over time.
              </p>

              <button
                type="button"
                onClick={() => router.push("/contact")}
                className="mt-10 px-10 py-4 border border-primary uppercase tracking-wide text-sm hover:bg-primary hover:text-white transition"
              >
                Let&apos;s Chat <span aria-hidden="true">&rarr;</span>
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-primary text-white w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
          <div className="max-w-4xl mx-auto border border-primary p-8 sm:p-12">
            <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-8">
              Our Office
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
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

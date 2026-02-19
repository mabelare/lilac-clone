"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Speciality() {
  const router = useRouter();
  const [openOfficeIndex, setOpenOfficeIndex] = useState<number | null>(0);

  const toggleOfficeSection = (index: number) => {
    setOpenOfficeIndex(openOfficeIndex === index ? null : index);
  };

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
          <div className="border border-primary p-8 sm:p-10 bg-secondary text-primary">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-primary">
              Anxiety & Panic Therapy
            </h3>
            <p className="text-sm sm:text-base leading-relaxed mb-6">
              Anxiety can feel constant, exhausting, and hard to quiet, to
              relax. I help adults with anxiety and panic feel steadier and more
              in control.
            </p>
            <div className="flex justify-center">
              <div className="w-52 sm:w-60 lg:w-64 h-52 sm:h-60 lg:h-64 rounded-full overflow-hidden">
                <img
                  src="/anxiety.jpg"
                  alt="Anxiety therapy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="border border-primary p-8 sm:p-10 bg-secondary text-primary">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-primary">
              Trauma & PTSD Therapy
            </h3>
            <p className="text-sm sm:text-base leading-relaxed mb-6">
              Past experiences can still affect how safe and connected you feel.
              We move at your pace, focusing on safety, stability, and healing.
            </p>
            <div className="flex justify-center">
              <div className="w-52 sm:w-60 lg:w-64 h-52 sm:h-60 lg:h-64 rounded-full overflow-hidden">
                <img
                  src="/trauma.jpg"
                  alt="Trauma therapy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="border border-primary p-8 sm:p-10 bg-secondary text-primary">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-primary">
              Burnout & Chronic Stress
            </h3>
            <p className="text-sm sm:text-base leading-relaxed mb-6">
              If you feel drained, tense, or emotionally tired, you are not
              alone. Therapy can help you reset, reconnect, and build a more
              sustainable pace.
            </p>
            <div className="flex justify-center">
              <div className="w-52 sm:w-60 lg:w-64 h-52 sm:h-60 lg:h-64 rounded-full overflow-hidden">
                <img
                  src="/burnout.jpg"
                  alt="Burnout therapy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-primary text-secondary w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
          <div className="lg:grid lg:grid-cols-2 lg:items-stretch">
            <div className="px-0 pt-0 overflow-hidden lg:px-0 lg:pt-0">
              <img
                src="/Help.jpg"
                alt="Help"
                className="w-full h-72 sm:h-96 object-cover object-center block lg:h-full lg:min-h-120 lg:aspect-auto"
              />
            </div>
            <div className="px-6 py-10 lg:px-0 lg:py-16 flex flex-col">
              <div className="lg:mt-50 lg:pl-14 lg:pr-12">
                <h2 className="text-3xl sm:text-4xl font-semibold text-secondary">
                  You Don't Have to Carry Everything by Yourself
                </h2>

                <p className="mt-6 text-base sm:text-lg leading-relaxed">
                  If you're managing a lot on the outside but feel tense,
                  mentally exhausted, or stuck in cycles of overthinking on the
                  inside, therapy can offer a place to slow down and reset.
                </p>
                <p className="mt-6 text-base sm:text-lg leading-relaxed">
                  I work with adults who feel constantly "on," who hold stress
                  in their body, or who find it hard to fully relax even when
                  things appear fine. Together, we'll focus on understanding
                  what's driving these patterns and developing practical,
                  supportive ways to feel more grounded and regulated in daily
                  life.
                </p>
              </div>

              <div className="border-t border-secondary mt-12 lg:hidden w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]"></div>
              <button
                type="button"
                onClick={() => router.push("/contact")}
                className="w-full py-0 lg:py-4 px-0 lg:px-10 text-sm lg:text-lg uppercase tracking-wide text-secondary lg:border-t lg:border-secondary lg:mt-12 lg:hover:bg-accent lg:hover:text-primary hover:bg-accent hover:text-primary transition"
              >
                Work with me<span aria-hidden="true">&rarr;</span>
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 px-6 py-16 bg-secondary text-primary">
          <div className="max-w-md mx-auto text-left lg:max-w-6xl lg:grid lg:grid-cols-2 lg:gap-14 lg:items-center">
            <div className="relative mx-auto w-64 sm:w-72 lg:order-2 lg:w-full lg:max-w-lg xl:max-w-xl">
              <div className="rounded-t-[999px] overflow-hidden bg-white">
                <img
                  src="/Dr.JPG"
                  alt="Dr. Maya Reynolds"
                  className="w-full h-auto block lg:aspect-4/5 lg:object-cover lg:object-top"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 w-28 h-28 rounded-full overflow-hidden bg-white lg:hidden">
                <img
                  src="/daisy.jpg"
                  alt="Flower detail"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="mt-12 lg:mt-0 lg:order-1 lg:max-w-xl">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
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
                Therapy is a space to slow down, feel more regulated, and
                develop a stronger relationship with yourself over time.
              </p>

              <button
                type="button"
                onClick={() => router.push("/contact")}
                className="mt-10 px-10 py-4 border border-primary uppercase tracking-wide text-sm hover:bg-accent hover:text-primary transition block mx-auto lg:mx-0"
              >
                Let's Chat <span aria-hidden="true">&rarr;</span>
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-primary/8 text-primary w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] border-y border-primary/20">
          <div className="max-w-4xl mx-auto px-6 py-12 sm:py-16">
            <h2 className="text-3xl sm:text-4xl font-semibold mb-8">Office</h2>

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

            <button
              type="button"
              onClick={() => router.push("/contact")}
              className="mt-10 px-8 py-4 border border-primary text-sm sm:text-base uppercase tracking-wide hover:bg-accent hover:text-primary transition"
            >
              Schedule a Visit <span aria-hidden="true">&rarr;</span>
            </button>
          </div>

          <div className="px-6 pb-10 sm:pb-12">
            <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              <div className="overflow-hidden lg:rounded-lg">
                <img
                  src="/office.jpg"
                  alt="Santa Monica office entrance"
                  className="w-full h-80 sm:h-96 object-cover"
                />
              </div>
              <div className="overflow-hidden lg:rounded-lg">
                <img
                  src="/office2.jpg"
                  alt="Santa Monica office interior"
                  className="w-full h-80 sm:h-96 object-cover"
                />
              </div>
            </div>

            <div className="py-10 sm:py-12 lg:py-0">
              <div className="max-w-5xl mx-auto border-t border-primary">
                <div className="border-b border-primary px-6">
                  <button
                    type="button"
                    onClick={() => toggleOfficeSection(0)}
                    className="w-full py-5 flex items-center gap-4 text-left"
                  >
                    <span className="text-lg sm:text-2xl font-semibold">
                      Address
                    </span>
                    <span className="text-2xl ml-auto shrink-0">
                      {openOfficeIndex === 0 ? "−" : "+"}
                    </span>
                  </button>
                  {openOfficeIndex === 0 && (
                    <div className="pb-5 pl-10 pr-2">
                      <p className="text-base sm:text-lg leading-relaxed">
                        123th Street 45 W, Santa Monica, CA
                        <br />
                        90401
                      </p>
                    </div>
                  )}
                </div>

                <div className="border-b border-primary px-6">
                  <button
                    type="button"
                    onClick={() => toggleOfficeSection(1)}
                    className="w-full py-5 flex items-center gap-4 text-left"
                  >
                    <span className="text-lg sm:text-2xl font-semibold">
                      Availability
                    </span>
                    <span className="text-2xl ml-auto shrink-0">
                      {openOfficeIndex === 1 ? "−" : "+"}
                    </span>
                  </button>
                  {openOfficeIndex === 1 && (
                    <div className="pb-5 pl-10 pr-2">
                      <p className="text-base sm:text-lg leading-relaxed">
                        Monday – Friday
                        <br />
                        10am – 6pm
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

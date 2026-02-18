import Link from "next/link";
import { notFound } from "next/navigation";
import SiteNavbar from "@/components/SiteNavbar";
import { BLOG_POSTS } from "../posts";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const currentIndex = BLOG_POSTS.findIndex((entry) => entry.slug === slug);
  const post = BLOG_POSTS[currentIndex];

  if (!post || currentIndex === -1) {
    notFound();
  }

  const nextPost = BLOG_POSTS[(currentIndex + 1) % BLOG_POSTS.length];

  return (
    <main className="min-h-screen bg-secondary text-primary">
      <SiteNavbar />

      <div className="bg-primary text-secondary lg:min-h-screen">
        <article className="max-w-4xl mx-auto px-6 py-12 sm:py-16">
          <h1 className="text-4xl sm:text-5xl font-semibold leading-tight">
            {post.title}
          </h1>
          <h2 className="mt-4 text-2xl sm:text-3xl font-semibold leading-tight">
            {post.subtitle}
          </h2>
          <p className="mt-4 text-base sm:text-lg">{post.date}</p>

          <div className="mt-10 space-y-6 text-base sm:text-lg leading-relaxed">
            {post.content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </article>

        <section className="max-w-4xl mx-auto px-6 pb-12 sm:pb-16">
          <Link
            href={`/blog/${nextPost.slug}`}
            className="inline-flex items-center gap-4 transition-colors duration-200 ease-out hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
            aria-label={`Next blog post: ${nextPost.title}`}
          >
            <span className="text-xl leading-none" aria-hidden="true">
              →
            </span>
            <div>
              <p className="text-xl sm:text-xl font-semibold leading-none">
                {nextPost.title}
              </p>
            </div>
          </Link>
        </section>
      </div>

      <footer className="m-0 p-0 bg-secondary text-primary">
        <div className="lg:hidden px-6 py-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold">
            Contact Information
          </h2>

          <p className="mt-6 text-base sm:text-lg leading-relaxed">
            Santa Monica, California
          </p>
          <a
            className="mt-3 block underline transition-colors duration-200 ease-out hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-secondary"
            href="#"
          >
            hello@drmayareynolds.com
          </a>
          <a
            className="mt-2 block underline transition-colors duration-200 ease-out hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-secondary"
            href="#"
          >
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
            <Link
              href="/"
              className="block underline mx-auto transition-colors duration-200 ease-out hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-secondary"
            >
              Home
            </Link>
            <Link
              href="/contact"
              className="block underline mx-auto transition-colors duration-200 ease-out hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-secondary"
            >
              Contact
            </Link>
            <Link
              href="/blog"
              className="block underline transition-colors duration-200 ease-out hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-secondary"
            >
              Blog
            </Link>
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
              <a
                className="mt-3 block underline transition-colors duration-200 ease-out hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-secondary"
                href="#"
              >
                hello@drmayareynolds.com
              </a>
              <a
                className="mt-2 block underline transition-colors duration-200 ease-out hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-secondary"
                href="#"
              >
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
                <Link
                  href="/"
                  className="block underline transition-colors duration-200 ease-out hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-secondary"
                >
                  Home
                </Link>
                <Link
                  href="/contact"
                  className="block underline transition-colors duration-200 ease-out hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-secondary"
                >
                  Contact
                </Link>
                <Link
                  href="/blog"
                  className="block underline transition-colors duration-200 ease-out hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-secondary"
                >
                  Blog
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-primary text-secondary w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
          <div className="max-w-7xl mx-auto border-t border-primary px-6 pt-8 pb-0 text-center text-sm sm:text-base">
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
              <a
                className="underline transition-colors duration-200 ease-out hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                href="#"
              >
                Privacy & Cookies Policy
              </a>
              <a
                className="underline transition-colors duration-200 ease-out hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                href="#"
              >
                Good Faith Estimate
              </a>
              <a
                className="underline transition-colors duration-200 ease-out hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                href="#"
              >
                Website Terms & Conditions
              </a>
              <a
                className="underline transition-colors duration-200 ease-out hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                href="#"
              >
                Disclaimer
              </a>
            </div>
            <p className="mt-4">
              Website Template Credits:{" "}
              <a
                className="underline transition-colors duration-200 ease-out hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                href="#"
              >
                Go Bloom Creative
              </a>
            </p>
            <p className="mt-2">
              © 2024 Dr. Maya Reynolds, PsyD. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}

"use client";

import Speciality from "../components/Speciality";
import Connect from "../components/Connect";
import SiteNavbar from "@/components/SiteNavbar";
import RevealSection from "@/components/RevealSection";

import Faq from "@/components/Faq";

export default function Home() {
  return (
    <div className="min-h-screen bg-secondary text-primary">
      <SiteNavbar />

      <RevealSection delayMs={100}>
        <Connect />
      </RevealSection>

      <RevealSection className="mt-12">
        <Speciality />
      </RevealSection>

      <RevealSection>
        <Faq />
      </RevealSection>
    </div>
  );
}

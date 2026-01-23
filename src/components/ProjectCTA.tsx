"use client";

import Link from "next/link";

export default function ProjectCTA() {
  return (
    <section className="bg-[#eeebe8] py-28">
      <div className="mx-auto max-w-4xl px-6 text-center">
        {/* HEADING */}
        <h2 className="text-4xl md:text-5xl font-sans font-medium tracking-wide text-[#3b2a1f]">
          HAVE A PROJECT IN MIND?
        </h2>

        {/* SUBTEXT */}
        <p className="mx-auto mt-6 max-w-2xl text-base md:text-lg font-serif leading-relaxed text-[#7a6a5c]">
          Let&apos;s discuss your fire suppression, HVAC, or commercial mechanical
          needs. Contact us for a free consultation.
        </p>

        {/* CTA BUTTON */}
        <div className="mt-14 flex justify-center">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 rounded-xl bg-[#8b5428] px-10 py-5 font-serif text-base font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[#6f3f1f]"
          >
            Start Your Project
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

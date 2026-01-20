"use client";

import Image from "next/image";

import { useInView } from "@/hooks/useInView";

export default function OurStory() {
  const { ref, isVisible } = useInView(0.3);

  return (
    <section className="bg-[#faf8f5] py-14 md:py-16">
      {/* 🔥 Scroll trigger */}
      <div ref={ref} className="h-1 w-full" />

      <div className="mx-auto max-w-7xl px-3 grid gap-20 lg:grid-cols-2 items-center">
        {/* LEFT IMAGE */}
        <div
          className={`relative transition-all duration-700 ease-out
            ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }
          `}
        >
          <div className="overflow-hidden rounded-2xl shadow-xl h-92.5">
            <Image
              src="/about.jpg"
              alt="Commercial mechanical facility"
              width={900}
              height={700}
              className="w-full h-full object-cover"
            />
          </div>

          {/* YEARS BADGE */}
          <div
            className={`absolute -bottom-10 right-0 rounded-xl bg-[#86522d] px-3 py-5 md:px-4 md:py-8 text-center text-white shadow-2xl
              transition-all duration-700 ease-out delay-200
              ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }
            `}
          >
            <div className="text-3xl md:text-4xl font-normal leading-none">
              27+
            </div>
            <div className="mt-2 text-xs md:text-sm font-serif tracking-wide">
              Years of Excellence
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div
          className={`transition-all duration-700 ease-out
            ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }
          `}
        >
          <h2 className="mt-4 text-5xl leading-[1.01] text-[#432719] font-sans">
            OUR STORY
          </h2>

          <p className="mt-6 text-sm max-w-xl text-[#6b5a4d] font-serif leading-relaxed">
            Desert In Alaska Corp was founded in 1997 as a residential and
            commercial HVAC service provider. Over the years, we recognized a
            growing need for reliable fire safety solutions in Metro
            Detroit&apos;s commercial sector.
          </p>

          <p className="mt-6 text-sm max-w-xl text-[#6b5a4d] font-serif leading-relaxed">
            Today, we have evolved into a comprehensive commercial mechanical
            services company, with fire suppression and life safety systems as
            our primary focus. We specialize in commercial kitchen fire
            suppression, fire sprinkler modifications, exhaust hood
            installation, and industrial dry chemical systems.
          </p>
          <p className="mt-6 text-sm max-w-xl text-[#6b5a4d] font-serif leading-relaxed">
            Our team of licensed and certified professionals brings decades of
            combined experience to every project, ensuring the highest standards
            of safety and code compliance.
          </p>
        </div>
      </div>
    </section>
  );
}

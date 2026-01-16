"use client";

import Image from "next/image";
import Link from "next/link";
import { IoShieldOutline, IoTimeOutline } from "react-icons/io5";
import { PiMedalThin } from "react-icons/pi";
import { useInView } from "@/hooks/useInView";

export default function Hero() {
  const { ref, isVisible } = useInView();

  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden sm:max-h-screen">

      {/* Background image */}
      <Image
        src="/hero.jpg"
        alt="Fire suppression and mechanical systems"
        fill
        priority
        className="object-cover"
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-[hsl(20_45%_12%)]/95 via-[hsl(20_35%_22%)]/90 to-[hsl(210_25%_30%)]/70" />


      {/* Content */}
      <div className="relative z-10 w-full flex justify-content-around">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
          <div className="max-w-3xl text-white">
            {/* Top label */}
            <div className="mb-6 flex flex-wrap items-center gap-3 text-[10px] sm:text-xs uppercase tracking-wider sm:tracking-widest text-[#c88a4a] font-serif">

              <span className="h-px w-12 bg-[#c88a4a]" />
              Metro Detroit’s Trusted Experts
            </div>

            {/* Headline */}
            <h1 className="text-4xl font-medium font-sans-400 leading-[1.05] sm:text-3xl md:text-5xl lg:text-6xl">
              FIRE SUPPRESSION & <br />
              <span className="text-[#c88a4a]">COMMERCIAL MECHANICAL</span>
              <br />
              SPECIALISTS
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-base text-white/85 sm:text-lg font-serif">
              Licensed, certified, and trusted since 1997. We provide
              comprehensive fire safety solutions, commercial HVAC, and
              mechanical services for businesses throughout Metro Detroit.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-md font-serif bg-[#8b5428] px-8 py-4 text-sm font-semibold text-white hover:bg-[#73431f] transition"
              >
                Request Service
              </Link>

              <Link
                href="/quote"
                className="rounded-md font-serif border border-white/60 px-8 py-4 text-sm font-semibold text-white hover:bg-white hover:text-black transition"
              >
                Request Quote
              </Link>
            </div>

            {/* Trust indicators (animated on scroll) */}
            <div
              ref={ref}
              className={`mt-14 flex flex-wrap gap-8 border-t border-white/20 pt-8 text-sm text-white/80 font-serif
                transition-all duration-700 ease-out
                ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }
              `}
            >
              <div className="flex items-center gap-2">
                <IoShieldOutline className="text-lg" />
                <span>Licensed & Insured</span>
              </div>

              <div className="flex items-center gap-2">
                <PiMedalThin className="text-lg" />
                <span>Certified Technicians</span>
              </div>

              <div className="flex items-center gap-2">
                <IoTimeOutline className="text-lg" />
                <span>Since 1997</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
